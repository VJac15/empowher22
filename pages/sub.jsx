import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

export default function Index() {
  return (
    <>
      <div class = "container">
	<div class = "row center">
		<div class = "col-md-12 col-sm-12 col-xs-12">
			<h3 class = "center participate-title" id = "aqua">SUBMISSION GUIDELINES</h3>
		</div>
		<div class = "col-md-12 col-sm-12 video-container videos">
			<iframe class = "recordings center" src="https://www.youtube.com/embed/fj00xLxdh0Q" allowfullscreen></iframe>
		</div>
	</div>
</div>

<div class = "container">
	<div class = "row">
		<div class = "mission center col-md-12 col-sm-12 col-xs-12">
			<h3 id = "white">Our Submission Prompts</h3>
			<div class="content spacing-submission">
				<a class = "submission-button" href="empowher-assets/files/submission-guidelines.pdf" target="_blank">Submission Prompts</a>
			</div>
		</div>
	</div>
</div>

<div class = "container">
	<div class = "row">
		<div class = "col-md-12 col-sm-12 col-xs-12">
			<h3 class = "center participate-title" id = "aqua">SELECTION CRITERIA</h3>
		</div>
		<div class = "col-md-12 col-sm-12 col-xs-12">
			<h3 class = "criteria" id = "black">Problem Identification: Relevance and clarity of problem solved (8 points total):</h3>
			<p>Judges are looking for projects where the team has done extensive research on the problem. Students should identify key groups affected by the problem and what they are looking for in a solution. Additionally, the projects should address defined problems that can feasibly be solved with the greatest societal impact.</p>

			<h3 class = "criteria" id = "black">Solution (16 points total):</h3>
			<p>Judges are looking for innovative solutions with significant advancements compared to existing products. Teams should research the current market landscape and list out the pros and cons of these solutions and their own. We are looking for teams that have built a solution that effectively solves their selected problem and has added value to their community with a plan for real-world implementation.</p>

			<h3 class = "criteria" id = "black">Technical Implementation (24 points total):</h3>
			<p>Judges are interested in the technical concepts you utilized to design your solution. Upload your code to GitHub and provide documentation for each file with visual aids as necessary to describe their functionality. Make sure to provide necessary references to open source software or other material you have used while developing your project. In addition to the technical implementation, projects must be designed for a target audience: design functional UI and UX that enables your solution to be effectively utilized. For example, include accessibility features that would enable people with disabilities to use your solution. Lastly, detail your project progression from a simple prototype to an intricate solution that effectively solves the issue you have identified.</p>

			<h3 class = "criteria" id = "black">Writing Quality (4 points total):</h3>
			<p>Judges are looking for clear, concise, and engaging writing. Students should convey their passion for their project and the problem they are trying to solve.</p>

			<h3 class = "criteria" id = "black">Video Quality (8 points total):</h3>
			<p>The video should act as a summary of your project that includes a demonstration of the key features of your team’s prototype. Judges are looking for a creative presentation that focuses on the project’s capabilities and its effectiveness as a solution. The more engaging and imaginative, the better!</p>

			<h3 class = "criteria" id = "black">Competition Engagement (2 points total):</h3>
			<p>The MetroHacks directing team will be evaluating students’ engagement in the competition. Students should do their best to attend EmpowHer events and take advantage of the opportunities we provide. We want to hear how you engaged with your mentor and worked as a team.</p>
		</div>
	</div>
</div>
    </>
  );
}
