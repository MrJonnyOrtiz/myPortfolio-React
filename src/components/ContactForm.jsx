/* eslint-disable react/prop-types */

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm() {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [hasCaptchaToken, setHasCaptchaToken] = useState(false);

  // const SECRET_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; // testing
  const SECRET_KEY = '6LcaoNkjAAAAAOFAEh-K5p62Rh3T1V_zzb9lJ1wK'; // prod

  const captchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = Object.fromEntries(new FormData(e.target).entries());

    // data validation
    const fullNameRegX =
      /([A-Z]+([']|[.])?([A-Z,a-z,.]*))\s(([A-Z]|['])+[A-Z,a-z]*)([-\s](([A-Z]|['])+[A-Z,a-z]*)*)?/g;
    // /([A-Z]+([']|[\.])?([A-Z,a-z,\.]*))\s(([A-Z]|['])+[A-Z,a-z]*)([-\s](([A-Z]|['])+[A-Z,a-z]*)*)?/g;

    const emailVal = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (fullNameRegX.test(formDataObj.name)) {
      if (formDataObj.email !== '' && emailVal.test(formDataObj.email)) {
        if (formDataObj.message.length > 3) {
          if (hasCaptchaToken) {
            const token = captchaRef.current.getValue(); // returns token from ReCaptcha component

            captchaRef.current.reset();

            const raw = JSON.stringify({
              ...formDataObj,
              'g-recaptcha-response': token,
            });

            const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: raw,
            };

            try {
              const response = await fetch(
                'https://ydvvjbdup4.execute-api.us-east-1.amazonaws.com/Prod',
                options,
              );

              if (response.ok) {
                // show success message
                setSuccess('Your message was sent!');
                setError('');

                // reset form
                setFullName('');
                setEmail('');
                setMessage('');
                setHasCaptchaToken(false);

                // const data = await response.json(); // the data is a message Id string, good for nothing
              } else {
                // show error message
                setError(
                  'Sorry, something went wrong trying to send your message. The administrator has been informed. Please try again at a later time.',
                );
                console.log(response);
              }
            } catch (error) {
              setError(
                'Sorry, something went wrong trying to send your message. The administrator has been informed. Please try again at a later time.',
              );
            }
          } else {
            // the recaptcha was not checked
            setError('Please check the recaptcha box.');
          }
        } else {
          setError('Please enter a valid message.');
        }
      } else {
        setError('Please enter a valid email address.');
      }
    } else {
      setError('Please enter a valid full name.');
    }
  };

  function handleOnChange() {
    setHasCaptchaToken(true);
    setError('');
  }

  return (
    <div className="text-center">
      {/* <!-- Contact form --> */}
      <form
        className="grid gap-8 rounded-xl border px-6 py-3 shadow-xl"
        id="contact-us-form"
        onSubmit={handleSubmit}
      >
        {/* feedback for user after submission */}
        {success.length > 0 && (
          <p className="text-lg font-bold text-black">{success}</p>
        )}
        {error.length > 0 && (
          <p className="animate-pulse text-lg font-bold text-black">{error}</p>
        )}

        <label htmlFor="name">
          <span className="block">Your Full Name</span>
          <input
            type="text"
            className=" text-black"
            id="name"
            name="name"
            placeholder=" Enter your full name"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>

        <label htmlFor="email">
          <span className="block">Your Email</span>
          <input
            type="email"
            className="peer px-6 text-black"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p id="emailHelp" className="text-xs italic">
            We&apos;ll never share your email with anyone else.
          </p>
          <p className="invisible animate-pulse text-sm text-black peer-invalid:visible">
            Please provide a valid email address.
          </p>
        </label>

        <label htmlFor="message">
          <span className="block">Your message</span>
          <textarea
            className="px-6 text-black"
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>

        <div className="mx-auto my-3">
          <ReCAPTCHA
            sitekey={SECRET_KEY}
            ref={captchaRef}
            onChange={handleOnChange}
            size="compact"
          />
        </div>

        <div className="">
          <button
            type="submit"
            aria-label="Send Message"
            id="submitBtn"
            className="my-3 animate-pulse rounded-xl bg-[#ff914d] px-6 py-3 font-semibold text-[#0030ff] hover:bg-black hover:text-white"
            hidden={!hasCaptchaToken ? 'hidden' : ''}
          >
            Send Message!
          </button>
        </div>
      </form>
    </div>
  );
}
