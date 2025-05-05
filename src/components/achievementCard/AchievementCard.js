import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }
  
  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      {cardInfo.image && (
        <div className="certificate-image-div">
          <img
            src={cardInfo.image}
            alt={cardInfo.imageAlt || "Card Thumbnail"}
            className="card-image"
          ></img>
        </div>
      )}
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        {cardInfo.description && (
          <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
            {cardInfo.description}
          </p>
        )}
        
        {/* Added bullet points rendering with left alignment */}
        {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
          <div className="achievement-bullets-container">
            <ul className={isDark ? "dark-mode achievement-bullets" : "achievement-bullets"}>
              {cardInfo.descBullets.map((bullet, i) => (
                <li key={i} className="bullet-item">{bullet}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      {cardInfo.footer && cardInfo.footer.length > 0 && (
        <div className="certificate-card-footer">
          {cardInfo.footer.map((v, i) => {
            return (
              <span
                key={i}
                className={
                  isDark ? "dark-mode certificate-tag" : "certificate-tag"
                }
                onClick={() => openUrlInNewTab(v.url, v.name)}
              >
                {v.name}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}