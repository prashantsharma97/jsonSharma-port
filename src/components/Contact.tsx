import { FC, useState } from 'react';
import { Send } from 'lucide-react';

export const Contact: FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://nodemailer-form-qcs9.onrender.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.status === 200) {
        setSubmissionStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setSubmissionStatus('Error sending message!');
      }
    } catch (error) {
      setSubmissionStatus('Error sending message!');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold">Let's Create Something Amazing</h2>
          <p className="text-secondary/80">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="contact-input"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="contact-input"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows={6}
              className="contact-input"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-primary text-secondary px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span> Sending...
              </>
            ) : (
              'Send Message'
            )}
            <Send size={20} />
          </button>
          {submissionStatus && (
            <p className={`text-center ${submissionStatus.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
              {submissionStatus}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};