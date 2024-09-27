import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState({ success: '', error: '' });
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [hasCaptchaToken, setHasCaptchaToken] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const captchaRef = useRef(null);

  const SECRET_KEY = import.meta.env.VITE_RECAPTCHA_KEY;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormStatus({ success: '', error: '' });
  };

  const validateFormData = () => {
    const fullNameRegX =
      /([A-Z]+([']|[.])?([A-Z,a-z,.]*))\s(([A-Z]|['])+[A-Z,a-z]*)([-\s](([A-Z]|['])+[A-Z,a-z]*)*)?/g;
    const emailVal = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!fullNameRegX.test(formData.fullName)) {
      setFormStatus({ error: 'Please enter a valid full name.' });
      return false;
    }
    if (!emailVal.test(formData.email)) {
      setFormStatus({ error: 'Please enter a valid email address.' });
      return false;
    }
    if (formData.message.length <= 3) {
      setFormStatus({ error: 'Please enter a valid message.' });
      return false;
    }
    if (!hasCaptchaToken) {
      setFormStatus({ error: 'Please check the reCAPTCHA box.' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFormData()) return;
    setIsSubmitting(true);

    const token = captchaRef.current.getValue();
    captchaRef.current.reset();

    const raw = JSON.stringify({ ...formData, 'g-recaptcha-response': token });

    try {
      const response = await fetch(import.meta.env.VITE_CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: raw,
      });

      if (response.ok) {
        setFormStatus({ success: 'Your message was sent!' });
        setFormData({ fullName: '', email: '', message: '' });
        setHasCaptchaToken(false);
      } else {
        throw new Error('Failed to send the message');
      }
    } catch (error) {
      setFormStatus({
        error: 'Sorry, something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCaptchaChange = () => {
    setHasCaptchaToken(true);
    setFormStatus({ success: '', error: '' });
  };

  return (
    <div className="text-center">
      <form
        className="grid gap-6 rounded-lg bg-white/90 p-6 shadow-lg"
        id="contact-us-form"
        onSubmit={handleSubmit}
        aria-label="Contact form"
      >
        <label htmlFor="fullName" className="block text-gray-800">
          <span className="mb-2 block">Your Full Name</span>
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 p-2 text-gray-800 focus:border-green-400 focus:ring-green-400"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            autoComplete="name"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="email" className="block text-gray-800">
          <span className="mb-2 block">Your Email</span>
          <input
            type="email"
            className="w-full rounded-md border border-gray-300 p-2 text-gray-800 focus:border-green-400 focus:ring-green-400"
            name="email"
            id="email"
            placeholder="Enter your email"
            autoComplete="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <p id="emailHelp" className="mt-1 text-xs italic text-gray-600">
            I&apos;ll never share your email with anyone else.
          </p>
        </label>

        <label htmlFor="message" className="block text-gray-800">
          <span className="mb-2 block">Your Message</span>
          <textarea
            className="w-full rounded-md border border-gray-300 p-2 text-gray-800 focus:border-green-400 focus:ring-green-400"
            id="message"
            name="message"
            rows="4"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </label>

        <div className="mx-auto my-3">
          <ReCAPTCHA
            sitekey={SECRET_KEY}
            ref={captchaRef}
            onChange={handleCaptchaChange}
            size="compact"
          />
        </div>

        <button
          type="submit"
          aria-label="Send Message"
          className={`w-full rounded-full bg-green-300 px-4 py-2 font-semibold text-gray-800 shadow-md transition duration-300 hover:bg-green-400 ${
            !hasCaptchaToken ? 'cursor-not-allowed opacity-50' : ''
          }`}
          disabled={!hasCaptchaToken}
        >
          {isSubmitting ? (
            <span className="font-extralight italic">Sending...</span>
          ) : (
            'Send Message!'
          )}
        </button>
        {formStatus.success && (
          <p className="text-lg font-bold text-green-700">
            {formStatus.success}
          </p>
        )}
        {formStatus.error && (
          <p className="animate-pulse text-lg font-bold text-red-600">
            {formStatus.error}
          </p>
        )}
      </form>
    </div>
  );
}
