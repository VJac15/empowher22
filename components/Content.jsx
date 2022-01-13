import React from 'react';


const Content = () => (
  <div className="next-steps my-5" data-testid="content">
    

    <div class="container">
      <h2 class="head-title">Why Participate?</h2>
      <div class="row">
        <div class="col-sm center">
          <img class = "p-img" src = "https://raw.githubusercontent.com/MetroHacks/EmpowHer/master/empowher-assets/img/mentor.png" height = "20vh"/>
          <p class = "center" id = "green">1 on 1 Mentorship</p>
          <p>We’ve gathered experienced engineers from industry and academia to guide you along the process of creating your project</p>
        </div>
        <div class="col-sm center">
          <img class = "p-img" src = "https://raw.githubusercontent.com/MetroHacks/EmpowHer/master/empowher-assets/img/workshops.png" height ="20vh" />
          <p class = "center" id = "pink">Workshops</p>
          <p>We’re hosting 8-12 week courses to help you learn the technical skills that you can use in your projects</p>
        </div>
        <div class="col-sm center">
          <img class = "p-img" src = "https://raw.githubusercontent.com/MetroHacks/EmpowHer/master/empowher-assets/img/community.png" height = "20vh"/>
          <p class = "center" id = "purple">Community</p>
          <p>Join a cohort of highly motivated high school girls interested in STEM!</p>
        </div>
      </div>
    </div>


      
    <div class="container text-center">
      <div class = "sponsors"> 
      <h1>Our Sponsors</h1>
    <p class="caption">Interested in increasing diversity in STEM and reaching out to the young hacker community?</p>
    <p>Email us at <a href="mailto:sponsor@metrohacks.org">info@metrohacks.org</a>.</p>
    <br></br>
    <div class="accordion">
          <h3>Diamond</h3>
        </div>
        <div class="panel">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-6">
              <div class="sponsor sponsor-img">
                <a target="_blank" href="https://www.janestreet.com"><img class="sponsors-img gray" src="https://raw.githubusercontent.com/MetroHacks/EmpowHer/master/empowher-assets/img/sponsor-logos/janestreet.png" title="Jane Street"></img></a>

              </div>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <div class="accordion">
          <h3>Gold</h3>
        </div>
        <div class="panel">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-4">
              <div class="sponsor sponsor-img">
                <a target="_blank" href="https://www.ncwit.org"><img class="sponsors-img" src="https://raw.githubusercontent.com/MetroHacks/EmpowHer/master/empowher-assets/img/sponsor-logos/ncwit.png" title="NCWIT AspireIT"></img></a>
              </div>
            </div>
            <div class="col-md-2">
              <div class="sponsor sponsor-img">
                <a target="_blank" href="https://www.target.com"><img class="sponsors-img" src="https://raw.githubusercontent.com/MetroHacks/EmpowHer/master/empowher-assets/img/sponsor-logos/target.png" title="Target"></img></a>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion">
          <h3>Silver</h3>
        </div>
        <br></br>
        <div class="panel">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-5">
              <div class="sponsor sponsor-img">
                <a target="_blank" href="https://www.willistowerswatson.com"><img class="sponsors-img" src="https://raw.githubusercontent.com/MetroHacks/EmpowHer/master/empowher-assets/img/sponsor-logos/WTW.png" title="Willis Towers Watson"></img></a>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div class="accordion">
          <h3>Bronze</h3> 
        </div>
        <div class="panel">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-3">
              <div class="sponsor sponsor-img">
                <a target="_blank" href="http://wolframalpha.com"><img class="sponsors-img" src="https://raw.githubusercontent.com/MetroHacks/EmpowHer/master/empowher-assets/img/sponsor-logos/wolfram.svg" title="Wolfram Alpha"></img></a>
              </div>
            </div>
          </div>
        </div>
</div>
    

      </div>
  </div>
);

export default Content;
