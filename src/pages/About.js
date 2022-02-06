import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <>
        <h1>About Me</h1>
        <p>
          Hello! I'm a web developer looking for work. I have a background in
          physics and engineering, though recently I've found my passion lies
          with web development. I have experience with both frontend and backend
          technologies, as well as experience with integrating both into
          fullstack applications. Feel free to reach out to me if you have any
          questions or would like to discuss any potential projects. Thanks for
          visiting!
        </p>
        <br />
        <img
          src="https://res.cloudinary.com/dlj9ptwcf/image/upload/v1643728652/img_4_1638293416080_p1l8gb.jpg"
          alt="profile pic"
          id="profile"
        />
        <br />
        <div id="languages">
          <p>Known languages:</p>
          <img
            src="https://img.icons8.com/ios-filled/50/000000/ruby-programming-language.png"
            alt="ruby"
            class="Icons"
          />
          {/* <a href="https://icons8.com/icon/22183/ruby-programming-language">
          Ruby Programming Language icon by Icons8
        </a> */}
          <img
            src="https://img.icons8.com/windows/512/000000/ruby-on-rails.png"
            alt="ruby on rails"
            class="Icons"
          />
          {/* <a href="https://icons8.com/icon/ZMFmFsekpKfY/ruby-on-rails">
          Ruby On Rails icon by Icons8
        </a> */}
          <img
            src="https://img.icons8.com/ios-filled/50/000000/javascript.png"
            alt="javascript"
            class="Icons"
          />
          {/* <a href="https://icons8.com/icon/39854/javascript">
          JavaScript icon by Icons8
        </a> */}
          <img
            src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/000000/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-bold-tal-revivo.png"
            alt="html-5"
            class="Icons"
          />
          {/* <a href="https://icons8.com/icon/S1YU5GGgIQXW/html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page">
          HTML 5 is a software solution stack that defines the properties and
          behaviors of web page icon by Icons8
        </a> */}
          <img
            src="https://img.icons8.com/ios-filled/50/000000/css3.png"
            alt="css"
            class="Icons"
          />
          {/* <a href="https://icons8.com/icon/38272/css3">CSS3 icon by Icons8</a> */}
          <img
            src="https://img.icons8.com/ios-filled/50/000000/postgreesql.png"
            alt="postgresql"
            class="Icons"
          />
          {/* <a href="https://icons8.com/icon/36440/postgresql">
          PostgreSQL icon by Icons8
        </a> */}
        </div>
      </>
    );
  }
}

export default About;
