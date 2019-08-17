import React from "react";

function Card({ icon, title, children }) {
  return (
    <div className="card mt-4 border-secondary">
      <div className="card-header">
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body border-secondary">{children}</div>
    </div>
  );
}

export default Card;
