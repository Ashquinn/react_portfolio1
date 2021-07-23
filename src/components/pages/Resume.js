import React from 'react';
import GordonResume from '../../assets/resume/GordonResume.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume Below</h1>
      <a href={GordonResume} target="_blank" rel="noreferrer" download >Resume</a>
    </div>
  );
}
