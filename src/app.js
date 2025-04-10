import React from 'react';
import ProfileForm from './components/ProfileForm';
import Year1Simulator from './components/Year1Simulator';

export default function App() {
  return (
    <div className="app">
      <h1>AdmitQuest Year 1</h1>
      <ProfileForm />
      <Year1Simulator />
    </div>
  );
}
