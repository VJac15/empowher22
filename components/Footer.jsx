import React from 'react';

const Footer = () => (
  <footer data-testid="footer">
    <div class = "footer-top">
      <div class = "container">
        <div class = "row">
          <div class = "col-lg-3 col-md-3 col-sm-6 col-xs-12 segment-one md-mb-30 sm-mb-30">
            <img src = "empowher-assets/img/logo.png"/>
            <h3>MetroHacks EmpowHer</h3>
            <p>A year-long competition for high school girls to create a STEM project that benefits their community!</p>
          </div>
          <div class = "col-lg-3 col-md-3 col-sm-6 col-xs-12 segment-two md-mb-30 sm-mb-30">
            <h3>Important Links</h3>
            <ul>
              <li><a href = "index.html">HOME</a></li>
              <li><a href = "about.html">ABOUT</a></li>
              <li><a href = "competition.html">COMPETITION</a></li>
              <li><a href="workshops.html" >WORKSHOPS</a></li>
              <li><a href = "#">WINNERS</a></li>
              <li><a href = "empowher-assets/files/submission-guidelines.pdf">SUBMISSION GUIDELINES</a></li>
            </ul>
          </div>
          <div class = "col-lg-3 col-md-3 col-sm-6 col-xs-12 segment-three md-mb-30 sm-mb-30">
            <h3>Follow Us</h3>
            <p>Please follow us on our socials to keep updated!</p>
            <a href="https://www.facebook.com/MetroHacks/" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/teammetrohacks/" target="_blank">
              <i class = "fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/MetroHacks" target="_blank">
              <i class = "fab fa-twitter"></i>
            </a>
            <a href="https://medium.com/@MetroHacks" target="_blank">
              <i class="fab fa-medium"></i>
            </a>
            <a href="https://www.linkedin.com/company/7603099" target="_blank">
              <i class = "fab fa-linkedin"></i>
            </a>
            <a href="mailto:info@metrohacks.org">
              <i class="fas fa-at"></i>
            </a>

          </div>
          <div class = "col-lg-3 col-md-3 col-sm-6 col-xs-12 segment-four md-mb-30 sm-mb-30">
            <h3>Our Newsletter</h3>
            <p>Please sign up on our newsletter to get info for our latest competitions!</p>
            <div class="input-group">
              <div id="mc_embed_signup">
                <form action="https://metrohacks.us12.list-manage.com/subscribe/post?u=70868a220aae369c6d345246a&amp;id=38fe2c6f18" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll">

                    <div class="mc-field-group">
                      <input class = "email-txtbox" placeholder="Email" type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"/>
                    </div>
                    <div id="mce-responses" class="clear">
                      <div class="response" id="mce-error-response"></div>
                      <div class="response" id="mce-success-response"></div>
                    </div>
                    <div aria-hidden="true"><input type="text" name="b_70868a220aae369c6d345246a_38fe2c6f18" tabindex="-1" value=""/></div>
                    <div class="clear"><input class = "submit-btn" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class = "footer-bottom-text">&copy; MetroHacks 2022 • Made with ♥ in Boston</p>
  </footer>
);

export default Footer;
