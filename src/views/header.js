import React from "react";

import { Helmet } from "react-helmet";

import Component4 from "../components/component4";
import Navbar from "../components/navbar";
import "./header.css";

const Header = (props) => {
  return (
    <div className="header-container">
      <Helmet>
        <title>Shri Ram Lalla</title>
        <meta property="og:title" content="Header - Bumpy Nutty Meerkat" />
      </Helmet>
      <div className="header-container01">
        <div className="header-container02">
          <Navbar />
          <div className="header-container08">
            <img
              alt="image"
              src="/external/%C3%A0%C2%A4%C2%B0%C3%A0%C2%A4%C2%BE%C3%A0%C2%A4%C2%AE%20%C3%A0%C2%A4%C2%95%C3%A0%C2%A5%C2%80%20%C3%A0%C2%A4%C2%B2%C3%A0%C2%A5%C2%80%C3%A0%C2%A4%C2%B2%C3%A0%C2%A4%C2%BE%2C%20%C3%A0%C2%A4%C2%86%C3%A0%C2%A4%C2%A7%C3%A0%C2%A5%C2%81%C3%A0%C2%A4%C2%A8%C3%A0%C2%A4%C2%BF%C3%A0%C2%A4%C2%95%20%C3%A0%C2%A4%C2%95%C3%A0%C2%A4%C2%B2%C3%A0%C2%A4%C2%BE%20%C3%A0%C2%A4%C2%AD%C3%A0%C2%A4%C2%95%C3%A0%C2%A5%C2%8D%C3%A0%C2%A4%C2%A4%C3%A0%C2%A4%C2%BF%20%C3%A0%C2%A4%C2%94%C3%A0%C2%A4%C2%B0%20%C3%A0%C2%A4%C2%A4%C3%A0%C2%A4%C2%95%C3%A0%C2%A4%C2%A8%C3%A0%C2%A5%C2%80%C3%A0%C2%A4%C2%95%20%C3%A0%C2%A4%C2%95%C3%A0%C2%A4%C2%BE%20%C3%A0%C2%A4%C2%B8%C3%A0%C2%A4%C2%82%C3%A0%C2%A4%C2%97%C3%A0%C2%A4%C2%AE1-1500h.png"
              className="header-image"
            />
          </div>
          <div className="header-container09">
            <img
              alt="image"
              src="/external/pngtree-3d-lord-ram-png-image_9053124%201-400w.png"
              className="header-image1"
            />
          </div>
        </div>
        <div className="header-container10">
          <div className="header-container11">
            <div className="header-container12">
              <div className="header-container13">
                <span className="header-text10">
                  About the Ram Lala NFT Collection
                </span>
              </div>
              <div className="header-container14">
                <p className="header-text11">
                  <span className="header-text12">
                    Welcome to the divine realm of Audhaya and Ram Lala NFTs,
                    where we merge the timeless tradition of Sanatan Dharma with
                    modern technology. We believe in spreading the essence of
                    our ancient culture to the world, and to celebrate this, we
                    are offering free NFTs that encapsulate the spirit of Shri
                    Ram and the legendary Ramayana.
                  </span>
                  <br></br>
                  <br></br>
                  <span className="header-text12">
                    Concept of Creating: In our quest to bridge the ancient and
                    the contemporary, we embark on a journey to create a unique
                    space where digital art meets spirituality. We not only
                    provide free NFTs as tokens of devotion but also have
                    exciting plans for the future to enhance this digital
                    pilgrimage.
                  </span>
                  <br></br>
                </p>
              </div>
              <div className="header-container15">
              <button type="button" className="header-button button">
                READ MORE..
              </button>
              </div>
              
            </div>
            <div className="header-container16">
              <img
                alt="image"
                src="/shree%20ram%20(ayodhya)%20temple%20design%2011-500w.png"
                className="header-image2"
              />
              <img
                alt="image"
                src="/nft-pana%201-700w.png"
                className="header-image3"
              />
            </div>
          </div>
        </div>
        <div className="header-container17">
          <div className="header-container18">
            <span className="header-text17">Featured NFT Section</span>
          </div>
          <div className="header-container19">
            <p className="header-text18">
              Mint your nft - Uncover the simple steps to mint your exclusive
              NFTs and become a part of this digital renaissance. Our
              user-friendly minting process allows everyone to participate in
              this unique celebration of art and spirituality.
            </p>
          </div>
        </div>
        <div className="header-container20">
          <Component4></Component4>
          <Component4
            text="Nitivadi and Satyavadi"
            text1="Nitivadi and Satyavadi show how Lord Rama always did what was right and never strayed from the truth"
          ></Component4>
          <Component4
            text="Sarvaniyanta"
            text1="Sarvaniyanta showcases Lord Rama's mastery, revealing his ability to wisely govern and harmonize all aspects of life."
          ></Component4>
        </div>
        <div className="header-container21">
          <button type="button" className="header-button1 button">
            EXPLORE MORE..
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
