import React from 'react';
import GordonResume from '../../assets/resume/Ashquinn-Gordon_Web_Development_Resume.pdf'

export default function Resume() {
  return (
    <div className="container">
      <h1 class="assignmentsTitle" id="assignments">Skills <i class="fas fa-angle-double-left"></i></h1>
      <hr></hr>

<div class="row mt-5 mx-5 mb-5">
  <div class="col-sm-4">
    <div class="card h-100">
      <div class="card-header skills-header">
        <h4>Front End</h4>
      </div>
      <div class="card-body">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>React.js</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="col-sm-4">
    <div class="card h-100">
      <div class="card-header skills-header">
        <h4>Back End</h4>
      </div>
      <div class="card-body">
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>REST API</li>
          <li>GraphQL</li>
          <li>SQL</li>
          <li>noSQL</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="col-sm-4">
    <div class="card h-100">
      <div class="card-header skills-header">
        <h4>Dev Tools</h4>
      </div>
      <div class="card-body">
        <ul>
          <li>Visual Studio</li>
          <li>Git</li>
          <li>Github</li>
          <li>Heroku</li>
          <li>NPM</li>
        </ul>
      </div>
    </div>
  </div>

</div>

      <div>
        <h3 class="headers"><a href={GordonResume} target="_blank" rel="noreferrer" download class="resume">Resume</a></h3>
      </div>
    </div>
  );
}
