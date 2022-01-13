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
      <div class = "col-md-7 wow" data-wow-delay="0.3s">
        <video id="myVideo" width="100%" controls autoplay loop="true">
          <source src="empowher-assets/files/MetroHacks Promo.mp4">
          Your browser does not support video</video>
          <script src="empowher-assets/js/video.js"> </script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/vissense/0.9.0/vissense.js"></script>
        </div>

        <div class = "col-md-5 col-sm-12 col-xs-12">
          <h3 id = "blue">Who are we?</h3>
          <p>MetroHacks is a technology education NGO providing practical STEM education opportunities to high schoolers across the United States! Since 2016, we've hosted some of the largest high-school hackathon across the East Coast! Our mission is to provide resources that enable the high schoolers of today to become the innovators of tomorrow.</p>
        </div>
      </div>
    </div>
  </div>

  <div class = "container">
    <div class = "row center">
      <div class = "col-md-12 col-sm-12 col-xs-12">
        <h3 class = "center" id = "aqua">Meet the Directors!</h3>
      </div>
      <div class = "col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div class = "team__card-margin">
          <div class="team__card">
            <img class="team__card-image" src="empowher-assets/img/team/sruthi.png" width="140" height="143" alt="Sruthi Kurada"><p class="team__card-name-text">Sruthi Kurada</p>
            <p class="team__card-title-text">Executive Director</p>
            <a class="fab fa-linkedin social-links" href="https://www.linkedin.com/in/sruthi-kurada/" target="_blank"></a>
          </div>
        </div>
      </div>
      <div class = "col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div class = "team__card-margin">
          <div class="team__card">
            <img class="team__card-image" src="empowher-assets/img/team/anna.png" width="140" height="143" alt="Anna Grankin"><p class="team__card-name-text">Anna Grankin</p>
            <p class="team__card-title-text">Curriculum Director</p>
            <a class="fab fa-linkedin social-links" href="https://www.linkedin.com/in/anna-grankin-514826198/" target="_blank"></a>
          </div>
        </div>
      </div>

      <div class = "col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div class = "team__card-margin">
          <div class="team__card">
            <img class="team__card-image" src="empowher-assets/img/team/adhrija.png" width="140" height="143" alt="Adhrija Anbu"><p class="team__card-name-text">Adhrija Anbu</p>
            <p class="team__card-title-text">Lead Marketing Director</p>
            <a class="fab fa-linkedin social-links" href="https://www.linkedin.com/in/adhrija-anbuchelian-7ba8721b8/" target="_blank"></a>
          </div>
        </div>
      </div>

      <div class = "col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div class = "team__card-margin">
          <div class="team__card">
            <img class="team__card-image" src="empowher-assets/img/team/varsha.jpg" width="140" height="143" alt="Varsha Jacob"><p class="team__card-name-text">Varsha Jacob</p>
            <p class="team__card-title-text">Technology Director</p>
            <a class="fab fa-linkedin social-links" href="https://www.linkedin.com/in/varsha-jacob-028102203" target="_blank"></a>
          </div>
        </div>
      </div>

      <div class = "col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div class = "team__card-margin">
          <div class="team__card">
            <img class="team__card-image" src="empowher-assets/img/team/sonum.jpeg" width="140" height="143" alt="Sonum Agarwal"><p class="team__card-name-text">Sonum Agarwal</p>
            <p class="team__card-title-text">Marketing Director</p>
            <a class="fab fa-linkedin social-links" href="https://www.linkedin.com/in/sonum-agarwal-8181851ba/" target="_blank"></a>
          </div>
        </div>
      </div>

      <div class = "col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div class = "team__card-margin">
          <div class="team__card">
            <img class="team__card-image" src="empowher-assets/img/team/anoushka.png" width="140" height="143" alt="Anoushka Das"><p class="team__card-name-text">Anoushka Das</p>
            <p class="team__card-title-text">Marketing Director</p>
            <a class="fab fa-linkedin social-links" href="https://www.linkedin.com/in/anoushka-das-a3746722a/" target="_blank"></a>
          </div>
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
                  <img src="empowher-assets/img/participants.svg">
                </div>
                <h3 class="info">Participate</h3>
                <div class="center content">
                  <p class="description">We are hosting a year-long competition for women, featuring workshop courses, empowering mentors, awards, and much more!</p>
                  <a class = "about-button" href="https://metrohacks-empowher-participant-portal.github.io" target="_blank">SIGN UP!</a>
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
                  <img src="empowher-assets/img/mentors.svg">
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
