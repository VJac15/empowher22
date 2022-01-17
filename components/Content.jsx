import React from 'react';

import { useUser } from '@auth0/nextjs-auth0';
import AnchorLink from './AnchorLink';


const Content = () => {
  const { user, isLoading } = useUser();
  return (
  <>
  <div class="top-frame">
  <div class = "container jumbotron-top">
    <div class = "head-text">
      <h2 class="head-title"><span>EmpowHer</span></h2>
      <br/>
      <p class="center head-subtitle"><span>A project-based CS competition for high school girls</span></p>

      <div class = "row center">
        <div class = "col-md-3 col-sm-12 col-xs-12"></div>
        {!user && (<><div class = "col-md-3 col-sm-12 col-xs-12 center spacing-home"> 
          <div class="content">
            <a class = "home-button" href="/api/auth/login" tabIndex={0} testId="navbar-login-desktop">REGISTER</a>
          </div>
        </div>
        <div class = "col-md-3 col-sm-12 col-xs-12 center spacing-home">

          <div class="content">
            <a class = "home-button" href="https://forms.gle/rBY6bvWYA7D3hZ3R9" target="_blank">MENTOR</a>
          </div>
        </div></>)}
        {user && (<><div class = "col-md-12 col-sm-12 col-xs-12 center spacing-home">
          <div class="content">
            <a class = "home-button" href="/members" tabIndex={0} testId="navbar-login-desktop">PARTICIPANTS ᐅ</a>
          </div>
        </div></>)}
        
        <div class = "col-md-3 col-sm-12 col-xs-12"></div>
      </div>
    </div>
  </div>
</div>
  <div class="container">
  <h2 class="head-title">Why Participate?</h2>
  <div class="row">
    <div class="col-sm center">
      <img class = "p-img" src = "empowher-assets/img/mentor.png"/>
      <p class = "center" id = "green">1 on 1 Mentorship</p>
      <p>We’ve gathered experienced engineers from industry and academia to guide you along the process of creating your project</p>
    </div>
    <div class="col-sm center">
      <img class = "p-img" src = "empowher-assets/img/workshops.png"/>
      <p class = "center" id = "pink">Workshops</p>
      <p>We’re hosting 8-12 week courses to help you learn the technical skills that you can use in your projects</p>
    </div>
    <div class="col-sm center">
      <img class = "p-img" src = "empowher-assets/img/community.png"/>
      <p class = "center" id = "purple">Community</p>
      <p>Join a cohort of highly motivated high school girls interested in STEM!</p>
    </div>
  </div>
</div>

<section id = "sponsors" class="sponsors">
  <div class="container text-center">
    <h1>Our Sponsors</h1>
    <p class="caption">Interested in increasing diversity in STEM and reaching out to the young hacker community?</p>
    <p>Email us at <a href="mailto:sponsor@metrohacks.org">info@metrohacks.org</a>.</p>
    <br/>
        <div class="accordion">
          <h3>Diamond</h3>
        </div>
        <div class="panel">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-6">
              <div class="sponsor sponsor-img">
                <a target="_blank" href="https://www.janestreet.com"><img class="sponsors-img gray" src="empowher-assets/img/sponsor-logos/janestreet.png" title="Jane Street"/></a>
              </div>
            </div>
          </div>
        </div>

        <br/>

        <div class="accordion">
          <h3>Gold</h3>
        </div>
        <div class="panel">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-4">
              <div class="sponsor sponsor-img">
                <a target="_blank" href="https://www.ncwit.org"><img class="sponsors-img" src="empowher-assets/img/sponsor-logos/ncwit.png" title="NCWIT AspireIT"/></a>
              </div>
            </div>
            <div class="col-md-2">
              <div class="sponsor sponsor-img">
                <a target="_blank" href="https://www.target.com"><img class="sponsors-img" src="empowher-assets/img/sponsor-logos/target.png" title="Target"/></a>
              </div>
            </div>
          </div>
        </div>


        <br/>
        <div class="accordion">
          <h3>Silver</h3>
        </div>
        <br/>
        <div class="panel">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-5">
              <div class="sponsor sponsor-img">
                <a target="_blank" href="https://www.willistowerswatson.com"><img class="sponsors-img" src="empowher-assets/img/sponsor-logos/WTW.png" title="Willis Towers Watson"/></a>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <div class="accordion">
          <h3>Bronze</h3>
        </div>
        <div class="panel">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-3">
              <div class="sponsor sponsor-img">
                <a target="_blank" href="http://wolframalpha.com"><img class="sponsors-img" src="empowher-assets/img/sponsor-logos/wolfram.svg" title="Wolfram Alpha"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      </>
); 
          }

export default Content;
