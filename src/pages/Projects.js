import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <>
        <h1>My Projects</h1>
        <div id="projectAll">
          <div class="ProjectSubOne">
            <a href="https://github.com/Jbudd512/Jbudd512.github.io/tree/main/pigLatinTranslator">
              Link for source files:
            </a>
            <img
              src="https://res.cloudinary.com/dlj9ptwcf/image/upload/v1643819566/Screen_Shot_2022-02-02_at_10.21.38_AM_doycn6.png"
              alt="Pig Latin Translator Preview"
              class="ProjectImage"
            />
          </div>
          <div class="ProjectSubOne">
            <a href="https://github.com/Jbudd512/Jbudd512.github.io/tree/main/ticTacToe">
              Link for source files:
            </a>
            <img
              src="https://res.cloudinary.com/dlj9ptwcf/image/upload/v1643819558/Screen_Shot_2022-02-02_at_10.02.56_AM_hy5t9v.png"
              alt="Tic Tac Toe Preview"
              class="ProjectImage"
            />
          </div>
          <div class="ProjectSubOne">
            <a href="https://github.com/Jbudd512/Jbudd512.github.io/tree/main/lightBulbCreator">
              Link for source files:
            </a>
            <img
              src="https://res.cloudinary.com/dlj9ptwcf/image/upload/v1643819562/Screen_Shot_2022-02-02_at_10.27.31_AM_pbinin.png"
              alt="Lightbulb Creator Preview"
              class="ProjectImage"
            />
          </div>
          <div class="ProjectSubOne">
            <a href="https://github.com/Jbudd512/Jbudd512.github.io/tree/main/treasureHunt">
              Link for source files:
            </a>
            <img
              src="https://res.cloudinary.com/dlj9ptwcf/image/upload/v1643819554/Screen_Shot_2022-02-02_at_8.47.43_AM_jzbwiv.png"
              alt="Treasure Hunt Preview"
              class="ProjectImage"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
