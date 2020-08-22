import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <h2>Made By Srujan With Reactjs</h2>
      <p>all the posts are directly pulled from official website</p>
      <div className="footer__about">
        <h4>About</h4>
        <p>
          This tiny project is done because its a bit confusing to get the
          latest news form official website, because the Wordpress theme they
          use is a bit confusing. Hence i made this webpage which directly pulls
          the rss feed from the official website and display it in cleaner way
          with React. if you want to contribute code to this project or just
          intrested in the code, I made this project opensource.
        </p>
        <div className="footer__githubLink">
          <a href="https://github.com/Royal-lobster/jntuvnews-reactjs">
            See the Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
