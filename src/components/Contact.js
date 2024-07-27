import React from 'react';
import '../style/Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <h1>Contact</h1>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
