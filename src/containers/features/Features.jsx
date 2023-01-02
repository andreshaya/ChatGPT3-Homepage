import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: 'Feedback Summary',
    text: 'Phasellus nulla nunc, vestibulum id accumsan non, ornare eu leo. Morbi et urna massa. Curabitur commodo nulla vitae nibh eleifend tempor.',
  },
  {
    title: 'Conversationalist',
    text: 'Praesent semper cursus eros, sed porta metus interdum at. Duis eu imperdiet tortor. Fusce iaculis, elit ut varius malesuada, turpis libero finibus ante, quis fermentum mauris nisl et nulla.',
  },
  {
    title: 'Sentiment',
    text: 'In sollicitudin nulla in purus venenatis, et sagittis risus dapibus. Vivamus convallis ornare ligula. Nulla semper ullamcorper venenatis.',
  },
  {
    title: 'NPS',
    text: 'Praesent mattis egestas quam at tristique. Duis enim massa, auctor quis efficitur ut, porta sit amet erat. Etiam augue odio, congue vel odio id, mattis vehicula dolor.',
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need to Realize It. Step into Future
          Today. & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + item.text} />
        ))}
      </div>
    </div>
  );
};

export default Features;
