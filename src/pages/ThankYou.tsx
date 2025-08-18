import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let animationFrameId: number;

    const stars: { x: number; y: number; size: number; speed: number; brightness: number }[] = [];
    const starCount = 500;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Initialize stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        speed: 0.1 + Math.random() * 0.2,
        brightness: 0.3 + Math.random() * 0.7,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.fill();

        // Move star slowly to the left
        star.x -= star.speed;
        if (star.x < 0) star.x = canvas.width;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>

      <div className="text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-tech font-bold mb-6 uppercase tracking-wider glitch-text">
          THANK YOU!
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-10 font-mono">
          Your message has been successfully sent. We will get back to you shortly.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-white text-black font-tech font-bold uppercase tracking-wider rounded-lg shadow-lg hover:bg-white/90 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
