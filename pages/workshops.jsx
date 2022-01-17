import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Index() {
	return (
		<>
		 <div class="container-fluid">
  <div class = "row">
    <div class = "col-md-8 col-sm-12 col-xs-12 competition-header">
      <h1 class = "header">Workshops</h1>
    </div>
  </div>
</div>
		
		<div>
			
              <Carousel showThumbs ={false}>
			  <div>
				  <iframe width="560" height="650" src="https://www.youtube.com/embed/videoseries?list=PLBIRH14k-h4W6xuNoLpZ9pna2HlEPXRIV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <p className="legend">Keynotes</p>
  
                  </div>
			  <div>
				  <iframe width="560" height="650" src="https://www.youtube.com/embed/7u2lHzf89xg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <p className="legend">10-Step Design Process</p>
  
                  </div>
                  
				  <div class = "carousel-component">
				  <iframe width="560" height="650" src="https://www.youtube.com/embed/videoseries?list=PLBIRH14k-h4UYjgleMe9kLmgEYxGcnJqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				  <p className="legend">Web Development Series</p>
  
                  </div>
                  <div>
				  <iframe width="560" height="650" src="https://www.youtube.com/embed/videoseries?list=PLBIRH14k-h4Vqkad0rY_j-s3D_Ybf_Ls2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <p className="legend">Data Science Series</p>
  
                  </div>
                  <div>
				  <iframe width="560" height="650" src="https://www.youtube.com/embed/videoseries?list=PLBIRH14k-h4XiaLDMGLzH1YGBTAD1NNtj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <p className="legend">Android App Development Series</p>
  
                  </div>
                  
              </Carousel>
            </div>

		</>
		);
}
