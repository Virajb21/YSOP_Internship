// SubscriptionPlans.js
import React, { useState } from "react";
import SubscriptionPlan from "./SubscriptionPlan";
import "./SubscriptionPlans.css";

const subscriptionPlansData = [
  {
    id: 1,
    name: "Basic",
    price: 10,
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    id: 2,
    name: "Standard",
    price: 20,
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    id: 3,
    name: "Premium",
    price: 30,
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
];

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);

  const handlePlanSelect = (id) => {
    setSelectedPlan(id);
  };

  return (
    <div className="subscription-plans-container">
      <h1 className="subscription-plans-header">Subscription Plans</h1>
      <div className="subscription-plans">
        {subscriptionPlansData.map((plan) => (
          <SubscriptionPlan
            key={plan.id}
            plan={plan}
            isSelected={selectedPlan === plan.id}
            onSelect={handlePlanSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
