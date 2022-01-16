import React from 'react';
import useScript from '../hooks/useScript';

const Search = () => {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)
  return (
    <>
      <div class="ml-form-embedSubmit">
        <button type="submit" class="primary submit-btn" onClick={onClick}>Subscribe</button>
        <button disabled="disabled" type="button" class="loading clear"> <div class="ml-form-embedSubmitLoad"></div> <span class="sr-only">Loading...</span></button>
      </div>
      { showResults ? 
        <div class="ml-form-successBody row-success">
          <div class="ml-form-successContent">
              <p>Thank you! Please confirm your subscription by verifying your email.</p>
          </div>
        </div> : null }
    </>
  )
}

const Footer = props => {
  useScript('https://static.mailerlite.com/js/w/webforms.min.js?v0c75f831c56857441820dcec3163967c');

  return (
    <>
    <footer data-testid="footer">
    <div class = "footer-top">
      <div class = "container">
        <div class = "row">
          <div class = "col-lg-3 col-md-3 col-sm-6 col-xs-12 segment-one md-mb-30 sm-mb-30">
            <img src = {"../empowher-assets/img/logo.png"}/>
            <h3>MetroHacks EmpowHer</h3>
            <p>A year-long competition for high school girls to create a STEM project that benefits their community!</p>
          </div>
          <div class = "col-lg-3 col-md-3 col-sm-6 col-xs-12 segment-two md-mb-30 sm-mb-30">
            <h3>Important Links</h3>
            <ul>
              <li><a href = "/">HOME</a></li>
              <li><a href = "/about">ABOUT</a></li>
              <li><a href = "/comp">COMPETITION</a></li>
              <li><a href="/workshops" >WORKSHOPS</a></li>
              <li><a href = "/winners">WINNERS</a></li>
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

            <div id="mlb2-5301776" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-5301776">
              <div class="ml-form-align-center">
                <div class="ml-form-embedWrapper embedForm">
                  <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
                    <div class="ml-form-embedContent"></div>
                    <form class="ml-block-form" action="https://static.mailerlite.com/webforms/submit/x6h1p9" data-code="x6h1p9" method="post" target="_blank">
                      <div class="ml-form-formContent">
                        <div class="ml-form-fieldRow ml-last-item">
                          <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                            <input aria-label="email" aria-required="true" type="email" class="email-txtbox" data-inputmask="" name="fields[email]" placeholder="Email" autocomplete="email"/>
                          </div>
                        </div>
                      </div>
                      <input type="hidden" name="ml-submit" value="1"/>
                      <Search />
                      <input type="hidden" name="anticsrf" value="true"/>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class = "footer-bottom-text">&copy; MetroHacks 2022 • Made with ♥ in Boston</p>
  </footer>
    </>

    )

  
};

export default Footer;
