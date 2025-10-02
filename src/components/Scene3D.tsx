import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei'
import { Mesh, MeshStandardMaterial } from 'three';


// --- FloatingPlane (Minimal Change: Already uses relative units) ---
const FloatingPlane = ({ position = [0, 0, 0], speed = 1 }: { position?: [number, number, number], speed?: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    timeRef.current += delta * speed;
    
    if (groupRef.current) {
      // Random floating movement
      groupRef.current.position.x = position[0] + Math.sin(timeRef.current * 0.5) * 2;
      groupRef.current.position.y = position[1] + Math.cos(timeRef.current * 0.7) * 1.5;
      groupRef.current.position.z = position[2] + Math.sin(timeRef.current * 0.3) * 1;
      
      // Random rotation
      groupRef.current.rotation.x = Math.sin(timeRef.current * 0.4) * 0.2;
      groupRef.current.rotation.y += delta * 0.5;
      groupRef.current.rotation.z = Math.cos(timeRef.current * 0.6) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main fuselage */}
      <mesh>
        <cylinderGeometry args={[0.05, 0.1, 0.8, 8]} />
        <meshStandardMaterial color="#ffffff" wireframe />
      </mesh>
      {/* Wings */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.02, 0.6, 0.1]} />
        <meshStandardMaterial color="#ffffff" wireframe />
      </mesh>
      {/* Tail */}
      <mesh position={[0, 0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.15, 0.02, 0.1]} />
        <meshStandardMaterial color="#ffffff" wireframe />
      </mesh>
    </group>
  );
};


// --- StarshipModel (No change needed) ---
const StarshipModel = () => {
  const { scene } = useGLTF('/models/black bird sr71_obj.glb');
  const ref = useRef<any>(null);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        const material = mesh.material as MeshStandardMaterial;
        material.color.set('#888888'); // Gray
        material.metalness = 0.6;
        material.roughness = 0.3;
        material.needsUpdate = true;
      }
    });
  }, [scene]);

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1}
      position={[4.5, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    />
  );
};


// --- Texture (No change needed) ---
const createCircleTexture = () => {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  
  // Draw radial gradient circle
  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
  gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.4)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
};

const starTexture = createCircleTexture();

// --- MovingStars (Key Change: Reduced star count for better performance) ---
const MovingStars = () => {
  const starsRef = useRef<THREE.Points>(null);
  const positionsRef = useRef<Float32Array>();
  const colorsRef = useRef<Float32Array>();

  // Reduced star count from 2000 to 1000 for better performance on mobile/low-end devices
  const starCount = 1000; 

  // Initialize star positions and colors once
  useEffect(() => {
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      // Position x, y, z
      positions[i * 3] = (Math.random() - 0.5) * 100;    // x [-50, 50]
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100; // z

      // Random brightness between 0.3 and 1 for twinkle effect
      const brightness = 0.3 + Math.random() * 0.7;
      colors[i * 3] = brightness;
      colors[i * 3 + 1] = brightness;
      colors[i * 3 + 2] = brightness;
    }

    positionsRef.current = positions;
    colorsRef.current = colors;

    if (starsRef.current) {
      starsRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      starsRef.current.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    }
  }, [starCount]);

  // Animate star positions (move left to right) and wrap around
  useFrame(() => {
    if (starsRef.current && positionsRef.current) {
      const positions = positionsRef.current;
      for (let i = 0; i < starCount; i++) {
        positions[i * 3] += 0.01; // Move star right

        if (positions[i * 3] > 50) {
          positions[i * 3] = -50; // wrap around left
          // Optional: slightly randomize y and z to reduce pattern
          positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
        }
      }
      starsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const geometry = new THREE.BufferGeometry();

  const material = new THREE.PointsMaterial({
    size: 0.2,
    map: starTexture,
    alphaTest: 0.01,
    transparent: true,
    vertexColors: true,
    depthWrite: false,
  });

  return <points ref={starsRef} geometry={geometry} material={material} />;
};


// --- Scene3D (No change needed) ---
export const Scene3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        shadows
        // Optional: reduce pixel ratio on mobile for huge performance gain
        // dpr={[1, 1.5]} 
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-5, 3, -5]} intensity={0.5} />

        {/* Background stars (now using fewer points) */}
        <MovingStars />

        {/* Spaceship */}
        <StarshipModel />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};