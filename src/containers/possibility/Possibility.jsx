import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are
          <br />
          beyond your imagination
        </h1>
        <p>
          Etiam scelerisque malesuada dui, non auctor lorem malesuada et. Proin
          at nibh at mauris luctus volutpat eu nec turpis. Morbi at laoreet
          enim. Aliquam ultrices mauris dui, et pharetra nisi faucibus in.
          Pellentesque condimentum ligula non lectus faucibus, non mattis leo
          vulputate. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Vestibulum at diam imperdiet, dapibus nibh at, posuere nulla. 
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
