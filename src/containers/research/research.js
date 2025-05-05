import React from "react";
import "./research.scss"; // reuse styles
import TACard from "../../components/educationCard/research";
import {research} from "../../portfolio";

export default function Teaching() {
  if (!research.display) return null;

  return (
    <div className="education-section" id="teaching">
      <h1 className="education-heading">Research</h1>
      <div className="education-card-container">
        {research.experiences.map((ta, index) => (
          <TACard key={index} ta={ta} />
        ))}
      </div>
    </div>
  );
}
