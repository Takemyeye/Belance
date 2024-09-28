import React from 'react';

export function Notifications({ title, notifications, isChecked, onToggle }) {
  return (
    <div className="data-user">
      <h2>{title}</h2>
      <div className="notification">
        <h3>{notifications}</h3>
        <label className="switch" data-state={isChecked ? "checked" : "unchecked"}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => onToggle(title)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}
