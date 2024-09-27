// // import { useEffect } from 'react';

// // import ContactForm from '../components/ContactForm';

// // function Contact() {
// //   useEffect(() => {
// //     // Check if the user has given consent for analytics in localStorage
// //     const isConsentGiven = localStorage.getItem('cookieConsent') === 'true';

// //     if (isConsentGiven && window.gtag) {
// //       window.gtag('event', 'contactPage');
// //     }
// //   }, []);

// //   return (
// //     <div className="grid gap-8 text-center">
// //       <h2 className="text-3xl md:text-5xl lg:text-7xl">Contact me</h2>
// //       <p className="mx-auto max-w-prose text-xl md:text-2xl lg:text-4xl">
// //         Feel free to contact me to inquire about any of my projects, or to
// //         partner on a new project!
// //       </p>
// //       <ContactForm />
// //     </div>
// //   );
// // }

// // export default Contact;

// import { useEffect } from 'react';
// import ContactForm from '../components/ContactForm';

// function Contact() {
//   useEffect(() => {
//     try {
//       // Check if the user has given consent for analytics in localStorage
//       const isConsentGiven = localStorage.getItem('cookieConsent') === 'true';

//       if (isConsentGiven && window.gtag) {
//         window.gtag('event', 'contactPage');
//       }
//     } catch (error) {
//       console.error('Analytics tracking error:', error);
//     }
//   }, []);

//   return (
//     <div className="grid gap-8 p-4 text-center">
//       <h2 className="text-3xl font-bold text-gray-800 md:text-5xl lg:text-7xl">
//         Contact Me
//       </h2>
//       <p className="mx-auto max-w-prose text-lg text-gray-700 md:text-xl lg:text-2xl">
//         Feel free to reach out if you have any questions about my projects or if
//         you’re interested in partnering on a new venture!
//       </p>
//       <div className="mx-auto w-full max-w-lg rounded-lg bg-white/90 p-6 shadow-lg">
//         <ContactForm />
//       </div>
//     </div>
//   );
// }

// export default Contact;

import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  useEffect(() => {
    try {
      // Check if the user has given consent for analytics in localStorage
      const isConsentGiven = localStorage.getItem('cookieConsent') === 'true';

      if (isConsentGiven) {
        // Load Google Analytics script if consent is given
        if (!window.gtag) {
          const script = document.createElement('script');
          script.src =
            'https://www.googletagmanager.com/gtag/js?id=G-CHEZE0LXQD&cookie_flags=samesite=None;secure';
          script.async = true;
          document.head.appendChild(script);

          script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              window.dataLayer.push(arguments);
            }
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-4WYSFWXR1N');
            gtag('event', 'contactPage'); // Track the contact page event
          };
        } else {
          // If gtag is already loaded, just send the event
          window.gtag('event', 'contactPage');
        }
      }
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }, []);

  return (
    <div className="grid gap-8 p-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 md:text-5xl lg:text-7xl">
        Contact Me
      </h2>
      <p className="mx-auto max-w-prose text-lg text-gray-700 md:text-xl lg:text-2xl">
        Feel free to reach out if you have any questions about my projects or if
        you’re interested in partnering on a new venture!
      </p>
      <div className="mx-auto w-full max-w-lg rounded-lg bg-white/90 p-6 shadow-lg">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
