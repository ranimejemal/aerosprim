import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  specialization: string;
  message: string;
  yearOfStudy: string;
}

export const JoinSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    specialization: '',
    message: '',
    yearOfStudy: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.send(
  'service_b8a40b2',
  'template_9xc2pmz',
  formData as any,   // ✅ cast here
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

  return (
    <section id="contact" ref={ref} className="py-32 relative">
      <div className="aerospace-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-section font-tech font-bold mb-6 glitch-text" data-text="GET IN TOUCH">
              GET IN TOUCH
            </h2>
            <p className="text-lg font-mono text-cosmic-white/80 max-w-2xl mx-auto">
              Ready to push the boundaries of aerospace engineering? 
              Join our crew and help shape the future of space exploration.
            </p>
          </motion.div>

          <motion.div
            className="tech-border p-8 md:p-12 bg-space-black/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }} transition={{ delay: 0.5, duration: 0.6 }}>
                  <label className="block text-sm font-mono mb-2">FULL NAME *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-field" placeholder="Enter your full name" required />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }} transition={{ delay: 0.7, duration: 0.6 }}>
                  <label className="block text-sm font-mono mb-2">EMAIL ADDRESS *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-field" placeholder="your.email@domain.com" required />
                </motion.div>
              </div>

              {/* Year of Study */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ delay: 0.9, duration: 0.6 }}>
                <label className="block text-sm font-mono mb-2">YEAR OF STUDY</label>
                <input type="text" name="yearOfStudy" value={formData.yearOfStudy} onChange={handleInputChange} placeholder="Enter your current year" className="form-field bg-space-black text-white rounded px-3 py-2 w-full" />
              </motion.div>

              {/* Message */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ delay: 1.1, duration: 0.6 }}>
                <label className="block text-sm font-mono mb-2">MESSAGE</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={5} className="form-field resize-none" placeholder="Tell us about your background and why you want to join AEROSPRIM..." />
              </motion.div>

              {/* Submit Button */}
              <motion.div className="text-center mt-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ delay: 1, duration: 0.6 }}>
                <button type="submit" className="glow-button">GET IN TOUCH</button>
              </motion.div>
            </form>

            {/* Additional Info */}
            <motion.div className="mt-12 pt-8 border-t border-cosmic-white/20 text-center" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 1.5, duration: 0.6 }}>
              <p className="text-sm font-mono text-cosmic-white/60">
                Applications are reviewed monthly. Selected candidates will be contacted for technical interviews and practical assessments.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
