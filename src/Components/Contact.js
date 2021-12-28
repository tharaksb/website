import React, {Component} from "react";
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mdobkapk");
  if (state.succeeded) {
      return <p>Thank you for contacting!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <input 
        id="email"
        type="email" 
        name="email"
        placeholder="Enter Email" 
      />

      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Enter Message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className = "mail" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="contact">
        <h4 style={{paddingLeft: "41.5%"}}> Please leave a message here! </h4>
        <div className = "contactForm">
          <ContactForm />
        </div>
      </section>
    );
  }
}

export default Contact;
