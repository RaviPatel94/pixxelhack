import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

// Simple scroll animation hook
const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

function ContactUs() {
  useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1500);
  };

  return (
    <div 
      className="flex items-center justify-center py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6"
      style={{ 
        backgroundColor: '#FDF6E3', 
        minHeight: '50vh'
      }}
      id='contact'
    >
      <div className="w-full max-w-6xl">
        
        {/* Header */}
        <div 
          data-animate="fade-up"
          className="text-center mb-8 sm:mb-10 md:mb-12"
          style={{
            opacity: '0',
            transform: 'translateY(20px)',
            transition: 'all 0.8s ease'
          }}
        >
          <h1 className="text-4xl font-semibold font-mono mb-3 sm:mb-4" style={{ color: '#5D4037' }}>
            Contact Us
          </h1>
          <p className="text-base sm:text-lg" style={{ color: '#5D4037' }}>
            Visit our cat cafe in the heart of Mumbai
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Contact Info */}
          <div
            data-animate="fade-up"
            className="space-y-6 sm:space-y-8"
            style={{
              opacity: '0',
              transform: 'translateY(20px)',
              transition: 'all 0.8s ease 0.2s'
            }}
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: '#5D4037' }} />
                <div>
                  <p className="font-medium mb-1 text-sm sm:text-base" style={{ color: '#5D4037' }}>Location</p>
                  <p className="text-sm sm:text-base" style={{ color: '#5D4037' }}>123 Cat Street, Bandra West</p>
                  <p className="text-sm sm:text-base" style={{ color: '#5D4037' }}>Mumbai, Maharashtra 400050</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: '#5D4037' }} />
                <div>
                  <p className="font-medium mb-1 text-sm sm:text-base" style={{ color: '#5D4037' }}>Phone</p>
                  <p className="text-sm sm:text-base" style={{ color: '#5D4037' }}>+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: '#5D4037' }} />
                <div>
                  <p className="font-medium mb-1 text-sm sm:text-base" style={{ color: '#5D4037' }}>Email</p>
                  <p className="text-sm sm:text-base" style={{ color: '#5D4037' }}>hello@mumbaicat.cafe</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t" style={{ borderColor: '#5D4037' }}>
              <p className="font-medium mb-2 text-sm sm:text-base" style={{ color: '#5D4037' }}>Opening Hours</p>
              <p className="text-sm sm:text-base" style={{ color: '#5D4037' }}>Monday - Friday: 9:00 AM - 10:00 PM</p>
              <p className="text-sm sm:text-base" style={{ color: '#5D4037' }}>Saturday - Sunday: 8:00 AM - 11:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            data-animate="fade-up"
            style={{
              opacity: '0',
              transform: 'translateY(20px)',
              transition: 'all 0.8s ease 0.3s'
            }}
          >
            <h2 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6" style={{ color: '#5D4037' }}>
              Send us a message
            </h2>

            {submitStatus === 'success' && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 border-l-4" style={{ borderColor: '#5D4037', backgroundColor: '#FDF6E3' }}>
                <p className="text-sm sm:text-base" style={{ color: '#5D4037' }}>Thank you! Your message has been sent.</p>
              </div>
            )}

            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2" style={{ color: '#5D4037' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full py-2 sm:py-3 px-0 border-0 border-b-2 bg-transparent focus:outline-none focus:border-opacity-80 text-sm sm:text-base"
                  style={{ 
                    color: '#5D4037', 
                    borderColor: '#5D4037',
                    borderOpacity: 0.3
                  }}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2" style={{ color: '#5D4037' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full py-2 sm:py-3 px-0 border-0 border-b-2 bg-transparent focus:outline-none focus:border-opacity-80 text-sm sm:text-base"
                  style={{ 
                    color: '#5D4037', 
                    borderColor: '#5D4037',
                    borderOpacity: 0.3
                  }}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2" style={{ color: '#5D4037' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full py-2 sm:py-3 px-0 border-0 border-b-2 bg-transparent focus:outline-none resize-none focus:border-opacity-80 text-sm sm:text-base"
                  style={{ 
                    color: '#5D4037', 
                    borderColor: '#5D4037',
                    borderOpacity: 0.3
                  }}
                  placeholder="Tell us about your visit or ask any questions..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`inline-flex items-center space-x-2 py-2 sm:py-3 px-6 sm:px-8 border-2 font-medium transition-all duration-200 text-sm sm:text-base
                    border-[#5D4037]
                    ${isSubmitting 
                    ? 'bg-[#5D4037] text-[#FDF6E3] cursor-not-allowed opacity-80' 
                    : 'text-[#5D4037] cursor-pointer hover:bg-[#5D4037] hover:text-[#FDF6E3]'}`}
              >
                <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;