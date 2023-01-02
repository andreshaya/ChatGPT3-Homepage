import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Vestibulum vel pulvinar eros. Aliquam egestas pulvinar nulla et molestie. In auctor risus nulla, in tincidunt nisl condimentum at. 
          Vestibulum hendrerit, lacus quis vestibulum hendrerit, diam velit facilisis nulla, eu pretium eros diam in felis. Vestibulum condimentum quam 
          sit amet purus consectetur, in dapibus erat feugiat. Donec eu justo nec quam porta tristique."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Maecenas dictum neque ut porta semper. Pellentesque tincidunt nisl eget mauris dictum, eu vulputate nisi ultrices."
        />
        <Feature
          title="Knowledgebase"
          text="Pellentesque vehicula tincidunt viverra. Fusce blandit turpis a purus ultricies, in congue nisi tempus. "
        />
        <Feature
          title="Education"
          text="Mauris ornare, magna quis lobortis imperdiet, ante erat mattis magna, eu malesuada est nisl id purus."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
