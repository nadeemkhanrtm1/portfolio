import React, {useState} from 'react';
import {IoMdCall, IoMdMail} from 'react-icons/io';
import {GoLocation} from "react-icons/go";
import emailjs from "emailjs-com";

const API_KEY = process.env.REACT_APP_API_KEY;
const SERVICE_KEY = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const Contact = () => {
  const [email,
    setEmail] = useState();
  const [subject,
    setSubject] = useState();
  const [name,
    setName] = useState();
  const [message,
    setMessage] = useState();
  const [mailsend,
    setMailsend] = useState(false);
  const [failed,
    setFailed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_KEY, TEMPLATE_ID, e.target, API_KEY)
      .then((result) => {
        setEmail('');
        setSubject('');
        setName('');
        setMessage('');
        setMailsend(true);
      }, (error) => {
        setEmail('');
        setSubject('');
        setName('');
        setMessage('');
        setFailed(true);
      });
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangeName = (e) => {
    setName(e.target.value)
  }

  const onChangeSubject = (e) => {
    setSubject(e.target.value)
  }

  const onChangeMessage = (e) => {
    setMessage(e.target.value)
  }
  return (
    <div className="contact-container">
      <h6>
        <span className="a">C</span>
        <span className="a">O</span>
        <span className="a">N</span>
        <span className="a">T</span>
        <span className="a">A</span>
        <span className="a">C</span>
        <span className="a">T</span>
      </h6>
      <h3>
        <span className="a">G</span>
        <span className="a">E</span>
        <span className="a">T</span>
        <span> </span>
        <span className="a">I</span>
        <span className="a">N</span>
        <span> </span>
        <span className="a">T</span>
        <span className="a">O</span>
        <span className="a">U</span>
        <span className="a">C</span>
        <span className="a">H</span>
      </h3>
      <div className="ct-row-1">
        <div className="ct-card-1">
          <a href="tel:+91-8827254360"><IoMdCall className="mobile-icon"/></a>
          <h2>Phone</h2>
          <a href="tel:+91-8827254360" className="mobile-number">+91-8827254360</a>
        </div>
        <div className="ct-card-1">
          <a href="mailto:nadeemkhanrtm@gmail.com"><IoMdMail className="mobile-icon"/></a>
          <h2>Email</h2>
          <a href="mailto:nadeemkhanrtm@gmail.com" className="mobile-number">nadeemkhanrtm@gmail.com</a>
        </div>
        <div className="ct-card-1">
          <a href="https://goo.gl/maps/zxx2YmKo5SJBTUuJ8" target="_nadeem"><GoLocation className="mobile-icon"/></a>
          <h2>Phone</h2>
          <a
            href="https://goo.gl/maps/zxx2YmKo5SJBTUuJ8"
            target="_nadeem"
            className="mobile-number">Ratlam- Madhya Pradesh</a>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="ct-row-2">
          <div className="ct-card-2">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input"
              value={name}
              onChange={onChangeName}
              required/>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input"
              value={email}
              onChange={onChangeEmail}
              required/>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="input"
              value={subject}
              onChange={onChangeSubject}
              required/>
          </div>
          <div className="ct-card-3">
            <textarea
              placeholder="message"
              name="message"
              rows="10"
              value={message}
              onChange={onChangeMessage}
              required></textarea>
          </div>
        </div>
        <div className="btn-submit">
          <button type="submit">Send Email</button>
          {mailsend
            ? <i
                className="mailsend"
                style={{
                color: '#1fc586',
                display: 'block',
                marginBottom: '20px',
                transition: '0.5s'
              }}>Mail Sended</i>
            : null
}
          {failed
            ? <i
                className="mailsend"
                style={{
                color: '#cc3a3b',
                display: 'block',
                marginBottom: '20px',
                transition: '0.5s'
              }}>Failed to send mail.</i>
            : null
}
        </div>
      </form>
    </div>
  )
}

export default Contact
