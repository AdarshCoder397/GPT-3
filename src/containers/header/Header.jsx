import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt3__header section_padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient_text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          maxime ab, doloribus porro mollitia recusandae tempore laborum unde
          rerum quaerat asperiores totam quod quae tempora in nisi fuga enim
          illum maiores repellat dolorem odit distinctio architecto. Eum libero
          vitae voluptas expedita eos adipisci dolores aut. Quae.
        </p>
        <div className="gpt3__header-content__input">
          <input type={"email"} placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
