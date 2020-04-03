import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        This is simple movie rank application.
        This app only works on pc browser.
      </span>
      <ul>
        made by
        <li>
          react - react(component fun,class & state)
        </li>
        <li>
          react-router-dom(router, route, navigation)
        </li>
      </ul>
      <span>− Ha-Young, 2020</span>
    </div>
  );
}

export default About;