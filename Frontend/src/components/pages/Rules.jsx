import React from 'react';
import '../css/Rules.css';
import { useNavigate } from 'react-router-dom';

const Rules = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <section className="rules-section">
        <h2 className="rules-heading">Rules for Students</h2>
        <ul className="rules-list">
  <li>1. <strong>Maintain discipline while boarding and alighting the van:</strong> Do not rush or push others while getting in or out of the van.</li>
  <li>2. <strong>Wear seat belts:</strong> It is mandatory for every student to wear a seat belt. Please keep it fastened throughout the journey.</li>
  <li>3. <strong>Avoid behavior that disturbs others:</strong> Do not create noise, shout, or trouble other students in the van.</li>
  <li>4. <strong>Be polite and respectful to fellow students:</strong> Stay calm, speak respectfully, and show courtesy to other students and the driver.</li>
  <li>5. <strong>Do not touch the van panels or windows:</strong> It can be dangerous to touch windows or internal panels. Please avoid doing so.</li>
  <li>6. <strong>Only bring essential items into the van:</strong> Avoid bringing large or hazardous items inside the van.</li>
  <li>7. <strong>Avoid carrying food or drinks in the van:</strong> Especially avoid messy or spill-prone items inside the van.</li>
  <li>8. <strong>Minimize noise near the school premises:</strong> Keep the van speed and noise under control, especially around the school area.</li>
  <li>9. <strong>Do not use mobile or electronic devices in the van:</strong> Use mobile phones or gadgets only according to school guidelines.</li>
  <li>10. <strong>Follow instructions from the driver or staff:</strong> Always listen to the van driver or school assistant for your safety.</li>
  <li>11. <strong>Get off the van calmly at the stop:</strong> When the van stops, do not rush. Exit one student at a time.</li>
  <li>12. <strong>Do not misuse emergency equipment:</strong> Use fire extinguishers or emergency tools only in real emergencies.</li>
  <li>13. <strong>Cooperate with others for a safe and comfortable journey:</strong> Help each other and take care of fellow passengers in the van.</li>
</ul>


        <button className="back-button" onClick={handleBack}>
          Go back
        </button>
      </section>
    </div>
  );
};

export default Rules;

