import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <>
        <h1 id="headerContact">Contact Me Here</h1>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name"
        ></input>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
        ></input>
        <br />
        <textarea
          id="subject"
          name="subject"
          placeholder="Under construction, contact me at Jbudd0512@gmail.com"
        ></textarea>
        <br />
        {/* <input id="submit-fix" type="submit" value="Submit"></input> */}
      </>
    );
  }
}

export default Contact;
