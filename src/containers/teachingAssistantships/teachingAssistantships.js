import React from "react";
import "./teachingAssistantships.scss"; // reuse styles
import TACard from "../../components/educationCard/tacard";
import {teachingAssistantships} from "../../portfolio";

export default function Teaching() {
  if (!teachingAssistantships.display) return null;

  return (
    <div className="education-section" id="teaching">
      <h1 className="education-heading">Teaching Assistantships</h1>
      <div className="education-card-container">
        {teachingAssistantships.experiences.map((ta, index) => (
          <TACard key={index} ta={ta} />
        ))}
      </div>
    </div>
  );
}
