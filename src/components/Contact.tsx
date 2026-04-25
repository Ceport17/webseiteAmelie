import { useForm, ValidationError } from "@formspree/react";
import {useState} from "react";
import { Turnstile } from "@marsidev/react-turnstile";

function Contact() {
  const [state, handleSubmit] = useForm("xjgjlezd");
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);


  if (state.succeeded) {
    return <p className="text-center text-xl">Danke für deine Nachricht!</p>;
  }

  return (
    <div className="container px-4 py-8 mx-auto lg:w-2/3">
      <h2 className="mb-8 text-3xl font-bold text-center">Kontakt</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            E-Mail-Adresse
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            rows={5}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        
        <input type="hidden" name="cf-turnstile-response" value={turnstileToken || ''} />


        {/* Honeypot */}
        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="flex justify-center">
            <Turnstile onSuccess={setTurnstileToken} siteKey="0x4AAAAAAATe-a615T8LTMs-" />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={state.submitting || !turnstileToken}
            className="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
          >
            {state.submitting ? "Wird gesendet..." : "Nachricht senden"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
