import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

export default function Index() {
  return (
    <>
      <div class="container-fluid">
  <div class = "row">
    <div class = "col-md-8 col-sm-12 col-xs-12 competition-header">
      <h1 class = "header">About Us</h1>
    </div>
  </div>

  <div class = "container">
    <div class = "row">
      <div class = "col-md-5 col-sm-12 col-xs-12">
        <h3 id = "blue">Who are we?</h3>
        <p>MetroHacks is a technology education NGO empowering high schoolers across the United States, hosting the largest high-school hackathon in the New England area! Our mission is to provide resources that enable the high schoolers of today to become the innovators of tomorrow.</p>
        <div class="content spacing">
          <a class = "about-button" href="https://metrohacks.org/team.html" target="_blank">Meet the Directors!</a>
        </div>
      </div>

      <div class = "col-md-7">
        <img class = "girls-tech team_pic" src = "empowher-assets/img/team.svg"/>
      </div>
    </div>
  </div>
</div>


<div class = "container">
  <div class = "row">
    <div class = "mission center col-md-12 col-sm-12 col-xs-12">
      <h1>🎯</h1>
      <h3 id = "dark-pink">Our Mission</h3>
      <p>Despite a growing number of computer science jobs, women only earn 18% of computer science bachelor's degrees in the United States. This disparity can be attributed to a lack of female mentors/role models and an intimidation factor that comes from the belief that prior experience is necessary for participation. We aim to give young women the opportunity to hone their technical skills in an inclusive environment!</p>
    </div>
  </div>
</div>

<div class = "container">
  <div class = "row">
    <div class = "col-md-12 col-sm-12 col-xs-12">
      <h3 class = "center" id = "aqua">Join Us!</h3>
    </div>
    <div class = "col-md-1"></div>
    <div class = "col-md-4">
      <div id="testimonials">
        <div class="item center">
          <div class="testimonial-item">
            <div class="img-thumb">
              <img src="empowher-assets/img/participants.svg" />
            </div>
            <h3 class="info">Participate</h3>
            <div class="center content">
              <p class="description">We are hosting a year-long competition for women, featuring workshop courses, empowering mentors, awards, and much more!</p>
              <a class = "about-button" href="" target="_blank">SIGN UP!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class = "col-md-2"></div>
    <div class = "col-md-4">
      <div id="testimonials">
        <div class="item center">
          <div class="testimonial-item">
            <div class="img-thumb">
              <img src="empowher-assets/img/mentors.svg" />
            </div>
            <h3 class="info">Mentor</h3>
            <div class="center content">
              <p class="description">We would love for your help to guide our next-generation female leaders and aid them in helping their community. You can find our mentor requirements <a href = "empowher-assets/files/mentor-req.pdf">here</a>.</p>
              <a class = "about-button" href="https://forms.gle/rBY6bvWYA7D3hZ3R9" target="_blank">Register to Mentor!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class = "col-md-1"></div>
  </div>
</div>
    </>
  );
}
