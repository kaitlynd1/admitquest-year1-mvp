import React, { useState } from 'react';

export default function Year1Simulator() {
  const [studyHours, setStudyHours] = useState(10);
  const [sleepHours, setSleepHours] = useState(7);

  const gpa = (2.0 + studyHours * 0.05).toFixed(2);
  const stress = 100 - sleepHours * 10;

  return (
    <div>
      <h2>Simulate Semester</h2>
      <label>
        Study Hours:
        <input
          type="range"
          min="0"
          max="30"
          value={studyHours}
          onChange={(e) => setStudyHours(+e.target.value)}
        />
        {studyHours}
      </label>
      <label>
        Sleep Hours:
        <input
          type="range"
          min="4"
          max="10"
          value={sleepHours}
          onChange={(e) => setSleepHours(+e.target.value)}
        />
        {sleepHours}
      </label>

      <p><strong>Predicted GPA:</strong> {gpa}</p>
      <p><strong>Stress Level:</strong> {stress}/100</p>
    </div>
  );
}

