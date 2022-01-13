import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

export default function Index() {
  return (
    <>
      


<div class="container-fluid">
	<div class = "row">
		<div class = "col-md-8 col-sm-12 col-xs-12 competition-header">
			<h1 class = "header">Competition Details</h1>
		</div>
	</div>
</div>

<div class = "container">
	<div class = "row">
		<div class = "col-md-5 col-sm-12 col-xs-12">
			<h3 id = "blue">What is EmpowHer?</h3>
			<p>EmpowHer is a year-long competition for high school girls to create a STEM project that benefits their community! Teams can submit their projects for consideration for our national awards in May 2021!</p>
		</div>

		<div class = "col-md-7">
			<img class = "girls-tech" src = "empowher-assets/img/girls-tech.png"/>
		</div>
	</div>
</div>

<div class = "container">
	<div class = "row center">
		<div class = "col-md-12 col-sm-12 col-xs-12">
			<h3 class = "center participate-title" id = "aqua">OPENING CEREMONY</h3>
		</div>
		<div class = "col-md-12 col-sm-12 video-container videos">
			<iframe class = "recordings center" src="https://www.youtube.com/embed/R8MoDdYNxLA" allowfullscreen></iframe>
		</div>
	</div>

</div>

<div class = "container">
	<div class = "row">


		<div class = "col-md-7">
			<img class = "girls-tech" src = "empowher-assets/img/girls-tech-2.png"/>
		</div>

		<div class = "col-md-5 col-sm-12 col-xs-12">
			<h3 id = "dark-pink" class = "participate-title">How to Participate?</h3>
			<div class = "step-1">
				<img class = "step-img" src = "empowher-assets/img/step-1.png"/>
				<p class = "right-padding">Register for EmpowHer</p>
			</div>
			<div class = "step-1">
				<img class = "step-img" src = "empowher-assets/img/step-2.png"/>
				<p class = "right-padding">Create an innovative solution to a problem in your community</p>
			</div>
			<div class = "step-1">
				<img class = "step-img" src = "empowher-assets/img/step-3.png"/>
				<p class = "right-padding">Submit your team’s project for consideration to our national competition</p>
			</div>
		</div>
	</div>
</div>

<div class = "container">
	<div class = "row">
		<div class = "col-md-5 col-sm-12 col-xs-12">
			<h3 id = "aqua">Creating a Project</h3>
		</div>
		<div class = "step-1">
			<img class = "stage-img" src = "empowher-assets/img/stage-1.png"/>
			<div class = "right-padding">
				<p id = "aqua" class = "stage-header">Select Problem Domain</p>
				<p>Choose a problem to tackle that impacts regional communities or societies across the globe.</p>
			</div>
		</div>

		<div class = "step-1">
			<img class = "stage-img" src = "empowher-assets/img/stage-2.png"/>
			<div class = "right-padding">
				<p id = "blue" class = "stage-header">Background Research and Ideation</p>
				<p>Understand gaps in current solutions that attempt to address the problem and utilize this information to guide your idea development process.</p>
			</div>
		</div>
		<div class = "step-1">
			<img class = "stage-img" src = "empowher-assets/img/stage-3.png"/>
			<div class = "right-padding">
				<p id = "dark-pink" class = "stage-header">Develop Prototype</p>
				<p>Create a hardware or software solution to a problem that impacts your community. Work as a team to iterate on your initial blueprint to build a viable prototype.</p>
			</div>
		</div>
		<div class = "step-1">
			<img class = "stage-img" src = "empowher-assets/img/stage-4.png"/>
			<div class = "right-padding">
				<p id = "green" class = "stage-header">Share Project with Community</p>
				<p>Share your prototypes with target users to obtain feedback and improve your solution throughout the year. User traction in the community will be taken into consideration during judging.</p>
			</div>
		</div>
		<div class = "step-1">
			<img class = "stage-img" src = "empowher-assets/img/stage-5.png"/>
			<div class = "right-padding">
				<p id = "purple" class = "stage-header">Submit Project</p>
				<p>Submit a profile of your innovation to the EmpowHer national judging panel. Our submission guidelines are below.</p>
			</div>
		</div>
	</div>
</div>

<div class = "container">
	<div class = "row">
		<div class = "mission center col-md-12 col-sm-12 col-xs-12">
			<h3 id = "white">Our Submission Details</h3>
			<div class="content spacing-submission">
				<a class = "submission-button" href="submission.html">Submission Details</a>
			</div>
		</div>
	</div>
</div>

<div class = "container">
	<div class = "row">
		<div class = "col-md-5 col-sm-12 col-xs-12">
			<h3 id = "blue">Timeline</h3>
		</div>
		<div class = "row">
			<div class = "col-md-5 col-sm-12 col-xs-12">
				<img class = "calendar" src = "empowher-assets/img/timeline.png"/>
			</div>

			<div class = "col-md-1"></div>

			<div class = "col-md-6">
				<div class = "step-1">
					<img class = "timeline-img" src = "empowher-assets/img/clock.svg"/>
					<div class = "right-padding">
						<p>Submission Deadline • May 31, 2021</p>
					</div>
				</div>
				<div class = "step-1">
					<img  class = "timeline-img" src = "empowher-assets/img/clock.svg"/>
					<div class = "right-padding">
						<p>Finalists Announced • June 30, 2021</p>
					</div>
				</div>
				<div class = "step-1">
					<img  class = "timeline-img" src = "empowher-assets/img/clock.svg"/>
					<div class = "right-padding">
						<p>Virtual Award Ceremony • July 15, 2021</p>
					</div>
				</div>

			</div>

		</div>
	</div>
</div>

<div class = "container">
	<div class = "row">
		<div class = "col-md-5 col-sm-12 col-xs-12">
			<h3 id = "pink">Awards</h3>
		</div>
		<div class = "row">
			<div class = "col-md-5 col-sm-12 col-xs-12">
				<img class = "calendar" src = "empowher-assets/img/award.png"/>
			</div>

			<div class = "col-md-1"></div>

			<div class = "col-md-6">
				<h3 class = "award-margin" id = "pink">National Grand Prize Winners</h3>
				<div class = "step-1">
					<img class = "timeline-img" src = "empowher-assets/img/step-1.png"/>
					<div class = "right-padding">
						<p>$5000 • Sponsored by Jane Street</p>
					</div>
				</div>
				<div class = "step-1">
					<img  class = "timeline-img" src = "empowher-assets/img/step-2.png"/>
					<div class = "right-padding">
						<p>$3000 • Sponsored by Target</p>
					</div>
				</div>
				<div class = "step-1">
					<img class = "timeline-img" src = "empowher-assets/img/step-3.png"/>
					<div class = "right-padding">
						<p>$1000 • Sponsored by NCWIT</p>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>
    </>
  );
}
