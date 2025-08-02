import React, { useState } from 'react';
import { Mail, Phone, MapPin, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const now = new Date();
      const submissionTime = now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      });

      const detailedMessage = `
🤖 NEW CONTACT FORM SUBMISSION - ROBOFLUX

📅 Submission Time: ${submissionTime}
🌐 Website: RoboFlux Design Studio

👤 CONTACT DETAILS:
• Name: ${formData.name}
• Email: ${formData.email}
• Company: ${formData.company || 'Not provided'}

💬 MESSAGE:
${formData.message}

---
This message was sent from the RoboFlux contact form.
Reply directly to this email to respond to ${formData.name}.
      `.trim();

      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('detailed_message', detailedMessage);
      formDataToSend.append('_replyto', formData.email);
      formDataToSend.append('_subject', `🤖 New Contact Form Submission from ${formData.name} - RoboFlux`);
      formDataToSend.append('submission_time', submissionTime);

      const response = await fetch('https://formspree.io/f/manbokbo', {
        method: 'POST',
        body: formDataToSend,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Submission failed');
      }

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-white mb-6">
            Initialize New <br /><span className="text-orange-500">Project</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to build the future? Let's engineer your robotic vision and bring intelligent design to reality.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold text-white mb-8">Connect to System</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 text-black p-3 rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium text-white">Email Protocol</p>
                  <p className="text-gray-300">pixelpulse2905@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 text-black p-3 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-medium text-white">Voice Channel</p>
                  <p className="text-gray-300">+1 (555) ROBO-FLUX</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 text-black p-3 rounded-full">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-medium text-white">Physical Location</p>
                  <p className="text-gray-300">456 Tech Valley, Silicon District, CA 94025</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h4 className="text-xl font-bold text-white mb-4">System Availability</h4>
              <p className="text-gray-300 text-sm">Monday - Friday: 24/7 Online</p>
              <p className="text-gray-300 text-sm">Weekend: Automated Response</p>
              <p className="text-gray-300 text-sm">Emergency: Always Active</p>
            </div>
          </div>

          <div className="bg-gray-900 p-8 border border-gray-800 rounded-xl shadow-md" data-aos="fade-left">
                         <form 
               action="https://formspree.io/f/manbokbo" 
               method="POST" 
               onSubmit={handleSubmit} 
               className="space-y-6"
             >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-white block mb-2 text-sm font-medium">User ID *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Your name"
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-md focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="you@example.com"
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-md focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="text-white block mb-2 text-sm font-medium">Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Company (optional)"
                  className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-md focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">System Requirements *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Describe your robotic design requirements..."
                  className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-md focus:border-orange-500 focus:outline-none resize-none"
                />
              </div>

              {/* Hidden fields */}
              <input type="hidden" name="_replyto" value={formData.email} />
              <input type="hidden" name="_subject" value={`🤖 New Contact Form Submission from ${formData.name} - RoboFlux`} />
              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              {/* Status messages */}
              {submitStatus === 'success' && (
                <div className="text-green-400 bg-green-500/20 border border-green-500/50 px-4 py-3 rounded-lg text-sm">
                  ✅ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-400 bg-red-500/20 border border-red-500/50 px-4 py-3 rounded-lg text-sm">
                  ❌ Something went wrong. Please try again later.
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-black font-bold py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-orange-400 transition disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin h-4 w-4 border-b-2 border-black rounded-full" />
                    Sending Email...
                  </>
                ) : (
                  <>
                    Send Message
                    <Zap size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
