import { useEffect } from 'react';

import ContactForm from '../components/ContactForm';

function Contact() {
  useEffect(() => {
    window.gtag('event', 'contactPage');
  }, []);

  return (
    <div className="grid gap-8 text-center">
      <h2 className="text-3xl">Contact me</h2>
      <p className="mx-auto max-w-prose">
        Feel free to contact me to inquire about any of my projects, or to
        partner on a new project!
      </p>
      <ContactForm />
    </div>
  );
}

export default Contact;
