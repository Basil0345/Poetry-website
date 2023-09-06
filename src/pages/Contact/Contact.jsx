import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="app__contact">
      <h1>Contact</h1>
      <div className="app__contact-form">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Subject"
        ></textarea>
        <button className="btn">Submit</button>
      </div>
    </section>
  );
};

export default Contact;
