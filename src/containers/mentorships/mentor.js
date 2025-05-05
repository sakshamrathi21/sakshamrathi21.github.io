import React from "react";
import "./mentor.scss"; // reuse styles
import TACard from "../../components/educationCard/mentor";
import {mentorships} from "../../portfolio";

export default function Teaching() {
  if (!mentorships.display) return null;

  return (
    <div className="education-section" id="teaching">
      <h1 className="education-heading">Mentorships</h1>
      <div className="education-card-container">
        {mentorships.experiences.map((ta, index) => (
          <TACard key={index} ta={ta} />
        ))}
      </div>
    </div>
  );
}
