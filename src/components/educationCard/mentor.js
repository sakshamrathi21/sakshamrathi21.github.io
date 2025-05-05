import React, {useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./mentor.scss";
import StyleContext from "../../contexts/StyleContext";

export default function TACard({ta}) {
  const {isDark} = useContext(StyleContext);

  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          <div className="education-card-right">
            <h5 className="education-text-school">{ta.title}</h5>
            <div className="education-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {ta.organization}
              </h5>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } education-text-duration`}
              >
                {ta.duration}
              </p>
              <p className="education-text-desc">{ta.description}</p>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
