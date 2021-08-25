import React from 'react';
// import '../../styles/Projects.css';

// images and gifs imports

import movieNight from '../../assets/images/movie_night_img.png';
import teamManage from '../../assets/images/team_manage_sys.png';
import readMe from '../../assets/images/README_Generator1.png';
import weatherApp from '../../assets/images/weather_app3.png';
import passGen from '../../assets/images/password2.png';
import dayPlanner from '../../assets/images/scheduler2.png';

export default function Projects() {
  return (
    <div class="container work-body" id="work">
    
    <h1 class="assignmentsTitle" id="assignments">Projects <i class="fas fa-angle-double-left"></i></h1>
    <hr class="hrAssignments"></hr>
    <div class="row row-cols-1 row-cols-md-3 g-4">

    <div class="col paddingTop">
        <div class="card h-100 customCard">
          <img src={movieNight} class="card-img-top group-img-height" alt="movie_night"/>
          <div class="card-body group-card-body d-flex flex-column">
            <h3 class="card-title"><ins>Movie Night Done Right</ins></h3>
            <p class="card-text">This is a movie searching application that allows you to view movie details and find restuarants within your zipcode</p>
          </div>
          <div class="card-footer">
            <div class="text-center mt-auto">
              <a class="deploy" rel="noreferrer" href="https://austinjoo97.github.io/MovieNightDoneRight/" target="_blank">
                <i class="fas fa-external-link-alt"></i></a>
              <a class="source" rel="noreferrer" href="https://github.com/AustinJoo97/MovieNightDoneRight" target="_blank">
                <i class="fab fa-github-square"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="col paddingTop">
        <div class="card h-100 customCard">
          <img src={readMe} class="card-img-top group-img-height" alt="readme_generator"/>
          <div class="card-body group-card-body d-flex flex-column">
            <h3 class="card-title"><ins>README Generator</ins></h3>
            <p class="card-text h">This is a README generator running on <b>Node.js</b> that will produce a high quality readme.md file. Below are the links for the GitHub repository and webpage</p>
          </div>
          <div class="card-footer">
            <div class="text-center mt-auto">
              <a class="deploy" rel="noreferrer" href="https://www.youtube.com/watch?v=mPq9EpREpBE" target="_blank"> 
                <i class="fas fa-external-link-alt"></i></a>
              <a class="source" rel="noreferrer" href="https://github.com/Ashquinn/README_Generator" target="_blank">
                <i class="fab fa-github-square"></i></a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col paddingTop">
        <div class="card h-100 customCard">
          <img src={teamManage} class="card-img-top group-img-height" alt="team_manage"/>
          <div class="card-body group-card-body d-flex flex-column">
            <h3 class="card-title"><ins>Team Management System</ins></h3>
            <p class="card-text">This is a Team Management System that runs on <b>Node.js.</b> Below are the links for the GitHub repository and webpage</p>
          </div>
          <div class="card-footer">
            <div class="text-center mt-auto">
              <a class="deploy" rel="noreferrer" href="https://www.youtube.com/watch?v=ljr-IS-p2EI" target="_blank">
                <i class="fas fa-external-link-alt"></i></a>
              <a class="source" rel="noreferrer" href="https://github.com/Ashquinn/team_management_system" target="_blank">
                <i class="fab fa-github-square"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="col paddingTop">
        <div class="card h-100 customCard">
          <img src={weatherApp} class="card-img-top group-img-height" alt="weather_app"/>
          <div class="card-body group-card-body d-flex flex-column">
            <h3 class="card-title"><ins>Weather One</ins></h3>
            <p class="card-text">This is a weather dashboard made with <b class="moment">OpenWeather Api</b>! Below are the links for the GitHub repository and webpage</p>
          </div>
          <div class="card-footer">
            <div class="text-center mt-auto">
              <a class="deploy" rel="noreferrer" href="https://ashquinn.github.io/weather_app1/" target="_blank">
                <i class="fas fa-external-link-alt"></i></a>
              <a class="source" rel="noreferrer" href="https://github.com/Ashquinn/weather_app1" target="_blank">
                <i class="fab fa-github-square"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="col paddingTop">
        <div class="card h-100 customCard">
          <img src={passGen} class="card-img-top group-img-height" alt="password_generator"/>
          <div class="card-body group-card-body d-flex flex-column">
            <h3 class="card-title"><ins>Password Generator</ins></h3>
            <p class="card-text h">This is a password generator made with <b class="javascript">javascript</b>! Below are the links for the GitHub repository and webpage</p>
          </div>
          <div class="card-footer">
            <div class="text-center mt-auto">
              <a class="deploy" rel="noreferrer" href="https://ashquinn.github.io/password_generator/" target="_blank">
                <i class="fas fa-external-link-alt"></i></a>
              <a class="source" rel="noreferrer" href="https://github.com/Ashquinn/password_generator" target="_blank">
                <i class="fab fa-github-square"></i></a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col paddingTop">
        <div class="card h-100 customCard">
          <img src={dayPlanner} class="card-img-top group-img-height" alt="day_planner"/>
          <div class="card-body group-card-body d-flex flex-column">
            <h3 class="card-title"><ins>Day Planner</ins></h3>
            <p class="card-text">This is a day planner using <b class="javascript">Javascript</b> and <b class="moment">moment.js</b>! Below are the links for the GitHub repository and webpage</p>
          </div>
          <div class="card-footer">
            <div class="text-center mt-auto">
              <a class="deploy" rel="noreferrer" href="https://ashquinn.github.io/work_day_scheduler/" target="_blank">
                <i class="fas fa-external-link-alt"></i></a>
              <a class="source" rel="noreferrer" href="https://github.com/Ashquinn/work_day_scheduler" target="_blank">
                <i class="fab fa-github-square"></i></a>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
    <hr></hr>
  </div>
  );
}
