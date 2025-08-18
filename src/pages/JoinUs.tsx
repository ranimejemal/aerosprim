import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

export const JoinUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    specialization: '',
    yearOfStudy: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const messageRef = useRef<HTMLTextAreaElement>(null);
   const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<string | null>(null);
    const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Auto-expand textarea
    if (e.target.name === 'message' && messageRef.current) {
      messageRef.current.style.height = 'auto';
      messageRef.current.style.height = messageRef.current.scrollHeight + 'px';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        'service_b8a40b2',
        'template_9xc2pmz',
        formData as any,
        'Gjc83cBO5IVx9gnwS'
      )
       .then(() => {
        formRef.current?.reset();
        navigate('/thank-you');
      })
      .catch((error) => {
  console.error('EmailJS error:', error);
  setStatus('Something went wrong. Please try again later.');
});
  };


  // Canvas stars effect
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
        ctx.fillStyle = `rgba(255,255,255,${star.brightness})`;
        ctx.fill();

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
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      {/* Canvas stars */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>

      {/* Form Section */}
      <section
        ref={ref}
        className="flex justify-center items-start min-h-screen px-6 z-10 relative pt-32 md:pt-40"
      >
        <motion.div
          className="bg-black/70 backdrop-blur-md p-12 rounded-2xl shadow-lg w-full max-w-lg text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Centered Heading */}
          <h1 className="text-5xl md:text-6xl font-tech font-bold mb-6 uppercase tracking-wider glitch-text">
            JOIN US
          </h1>
          <p className="text-white/80 mb-10 font-mono">
            Become part of our aerospace team and push the limits of innovation!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-field bg-space-black text-white rounded px-3 py-2 w-full"
                placeholder="FULL NAME *"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-field bg-space-black text-white rounded px-3 py-2 w-full"
                placeholder="EMAIL ADDRESS *"
                required
              />
            </div>

            <input
              type="text"
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              className="form-field bg-space-black text-white rounded px-3 py-2 w-full"
              placeholder="YEAR OF STUDY"
            />

            <textarea
              ref={messageRef}
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="form-field bg-space-black text-white rounded px-3 py-2 w-full overflow-hidden"
              placeholder="Tell us about your background and why you want to join AEROSPRIM..."
            />

            {/* Centered Apply Button */}
            <div className="text-center">
              <button className="inline-block bg-white text-black font-tech font-bold uppercase tracking-wider px-8 py-3 rounded-lg shadow-lg hover:bg-white/90 transition-all duration-300">
                APPLY NOW
              </button>
            </div>
          </form>

          {statusMessage && (
            <p className="mt-4 text-white/80 font-mono text-center">{statusMessage}</p>
          )}
        </motion.div>
      </section>
    </div>
  );
};
