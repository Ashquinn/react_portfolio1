import React from 'react';
import GordonResume from '../../assets/resume/GordonResume.pdf'

export default function Resume() {
  return (
    <div>
      <h1 class="headers"><a href={GordonResume} target="_blank" rel="noreferrer" download class="resume">See Resume</a></h1>
    </div>
  );
}
