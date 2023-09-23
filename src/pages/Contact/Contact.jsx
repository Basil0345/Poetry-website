import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

import "./Contact.css";

const Contact = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    try {
      let response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      let data = await response.json();

      if (!response.ok) {
        setIsSubmit(false);
        return alert(data.error);
      }
      toast.success(data.success, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setForm({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmit(false);
    } catch (error) {
      setIsSubmit(false);
    }
  };

  return (
    <section className="app__contact">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1>Contact</h1>
      <div className="app__contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={form.name}
            name="name"
            placeholder="Name"
            onChange={handleOnChange}
            required
          />
          <input
            type="email"
            value={form.email}
            name="email"
            placeholder="Email"
            onChange={handleOnChange}
            required
          />
          <textarea
            name="message"
            value={form.message}
            cols="30"
            rows="10"
            placeholder="Message"
            onChange={handleOnChange}
            required
          ></textarea>
          <button className="btn" disabled={isSubmit}>
            {isSubmit ? "Sending" : "Submit"}{" "}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
