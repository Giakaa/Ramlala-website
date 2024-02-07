import React from "react";

import PropTypes from "prop-types";

import "./component4.css";

const Component4 = (props) => {
  return (
    <div className="component4-container">
      <div className="component4-container1">
        <img alt={props.imageAlt0} src={props.imageSrc0} />
      </div>
      <div className="component4-container2">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="component4-image"
        />
        <span className="component4-text">{props.text}</span>
      </div>
      <div className="component4-container3">
        <span className="component4-text1">{props.text1}</span>
      </div>
      <div className="component4-container4">
        <span className="component4-text2">{props.text2}</span>
        <button type="button" className="component4-button button">
          {props.button}
        </button>
      </div>
    </div>
  );
};

Component4.defaultProps = {
  imageSrc: "/new ram/ellipse%2013-1500w.png",
  text1:
    "Sangit and Nrutya Kala show how Lord Rama loved to make beautiful music and dance gracefully. It's like he was painting pictures with sound and movement, making everything feel magical and happy!",
  text: "Sangit and Nrutya Kala",
  text2: "0.00 MATIC",
  button: "Minted !!!",
  imageAlt: "image",
  imageAlt0: "image",
};

Component4.propTypes = {
  imageSrc: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  button: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default Component4;
