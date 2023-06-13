// SubscriptionPlan.js
import React from "react";


const SubscriptionPlan = ({ plan, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect(plan.id);
  };

  return (
    <div
      className={`subscription-plan${isSelected ? " selected" : ""}`}
      onClick={handleClick}
    >
      <h2>{plan.name}</h2>
      <p>${plan.price}/month</p>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionPlan;
