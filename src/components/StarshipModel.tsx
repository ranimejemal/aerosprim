import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Mesh, Group, Material, MeshStandardMaterial } from 'three';

const StarshipModel = () => {
  const { scene } = useGLTF('/models/black bird sr71_obj.glb');
  const modelRef = useRef<Group>(null);
  const { camera } = useThree();

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        const material = mesh.material;

        const setMaterialColor = (mat: Material) => {
          if ('color' in mat && 'emissive' in mat) {
            const m = mat as MeshStandardMaterial;
            m.map = null;
            m.metalnessMap = null;
            m.roughnessMap = null;
            m.normalMap = null;
            m.emissiveMap = null;

            m.color.set('#aaaaaa');
            m.emissive.set('#404040');
            m.emissiveIntensity = 0.1;
            m.roughness = 0.5;
            m.metalness = 0.3;
            m.needsUpdate = true;
          }
        };

        if (Array.isArray(material)) {
          material.forEach(setMaterialColor);
        } else if (material) {
          setMaterialColor(material);
        }
      }
    });
  }, [scene]);

  // Attach the model to the camera (so it doesn't move with scene)
  useEffect(() => {
    if (modelRef.current) {
      camera.add(modelRef.current);
    }

    return () => {
      if (modelRef.current) {
        camera.remove(modelRef.current);
      }
    };
  }, [camera]);

  // Auto-rotate the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={modelRef} position={[0, 0, -5]}>
      <primitive object={scene} scale={1.5} />
    </group>
  );
};

export default StarshipModel;
