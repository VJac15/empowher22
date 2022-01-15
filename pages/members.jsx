import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function SSRPage() {

  //const { user, isLoading } = useUser();
  return (
    <>

      <div class="container-fluid">
  <div class = "row">
    <div class = "col-md-8 col-sm-12 col-xs-12 competition-header">
      <h1 class = "header">Welcome, Participant!</h1>
    </div>
    </div>
    </div>

    <div class="container">

    <div class = "row">
      <div class = "col-md-12 col-sm-12 col-xs-12">
          <p>Hello, welcome to MetroHacks EmpowHer! 🎉 We can't wait to see your team's groundbreaking project idea come to life!</p>
          <h3 id = "black">⭐ Getting Started!</h3>
          <p>Watch out Student Opening Ceremony Video! This video has all the information about how EmpowHer will be structured this year.</p>
          <h3 id = "black">➡️ Join our Slack channel!</h3>
          <p>Once you're in <a href = "">Slack</a>, make sure to do the following:</p>
          <ul class = "honorable-mentions">
          <li>Catch up on the #announcements channel</li>
          <li>Check out the Pinned messages for every channel</li>
          <li>Make sure your @channel and @mention notifications are on.</li>
        </ul>
        <h3 id = "black">🙌 Finding a Team</h3>
        <ul class = "honorable-mentions">
          <li>You can have work in teams of 2 - 4 students or work individually!</li>
          <li>Invite friends from school / community or find team mates through the #team-building channel on Slack</li>
          <li>Look to these <a href = "https://metrohacks.notion.site/Team-Building-Guiding-Q-s-93746bb295d04b32b8437ba7aa323b72" target = "_">guiding questions</a> to find team mates</li>
        </ul>
        <h3 id = "black">🤝 Mentor Matching</h3>
<p>Click ➡️ <a href = "https://docs.google.com/forms/d/1zk150bzfmG7xhUa5r_HlZEUWQjhbsFr5NGmiEyCg8FM/edit" target = "_">here</a> to fill out the Mentor-Matching request form.</p>

<p>Getting matched with a mentor is a crucial step in the EmpowHer process and allows you to take full advantage of our resources to create an amazing project. To request a mentor, you do not have to be set on an idea or project type yet! Our industry professionals will be happy to help you narrow it down and develop your idea.</p> 

<p>Please meet with your team to answer the questions, and submit a single response. The request form includes questions about your team, and technology you plan to use. Once you fill out this form, we will match you with a mentor that best suits your project within the next week!</p>
        </div>
    </div>
  </div>
    </>
  );
});
