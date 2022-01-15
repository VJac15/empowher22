import React from 'react';

import Content from '../components/Content';

export default function Index() {
  return (
    <>
      <div class="container-fluid">
  <div class = "row">
    <div class = "col-md-8 col-sm-12 col-xs-12 competition-header">
      <h1 class = "header">2021 Winners</h1>
    </div>
  </div>
</div>

<div class = "container">
  <div class = "row">
    <div class = "col-md-12">
      <p>We had a wonderful final ceremony to cap off our inaugural year of the EmpowHer competition, where we announced the grand prize winners and had engaging speaker presentations! Thank you to all the sponsors, mentors, participants, workshop hosts, outreach partners, and speakers that made EmpowHer possible!</p>

      <p>Our speakers also shared valuable career advice for all of our students. A huge shout out to Sudha Jamthe, Tracy Bolot, Alice Rao, Tarah Beyers, Mercedes Killingsworth, Srikanth Kapali for their wonderful presentations!

        Watch our Final Ceremony <a href = "https://lnkd.in/eR254ud">Here</a>.</p>

        <p>Congratulations to our top 3 grand prize winners!</p>
      </div>
    </div>

    <div class = "row">
      <div class = "col-md-12">
        <h3 class = "award-margin" id = "pink">National Grand Prize Winners</h3>
        <div class = "step-1">
          <img class = "timeline-img" src = "empowher-assets/img/step-1.png"/>
          <div class = "right-padding">
            <p>1st Place: Mashal Nihal, Saharra Dhamrait, Tahiya Mostafa, and Yathusha Ramanarajah for their project CareOnClick</p>
            <br />
            <p>$5000 • Sponsored by Jane Street</p>
          </div>
        </div>
        <div class = "step-1">
          <img  class = "timeline-img" src = "empowher-assets/img/step-2.png"/>
          <div class = "right-padding">
            <p>2nd Place: Asritha Bodepudi and Vidushi Meel for their project Melatect: A Machine Learning Approach for Identifying Malignant Melanoma in Skin Growths</p>
            <br />
            <p>$3000 • Sponsored by Target</p>
          </div>
        </div>
        <div class = "step-1">
          <img class = "timeline-img" src = "empowher-assets/img/step-3.png"/>
          <div class = "right-padding">
            <p>3rd Place: Khushi Parikh for her project De Novo Design of Ubiquitin-Signaling Enzyme for Alzheimer's Disease</p>
            <br />
            <p>$1000 • Sponsored by NCWIT</p>
          </div>
        </div>
      </div>
    </div>
    <div class = "row">
      <div class = "col-md-12">
        <h3 class = "award-margin" id = "pink">Honorable Mentions</h3>
        <ul class = "honorable-mentions">
          <li>Anika Kagalavadi, Niharika Chawla, Prajna Sajjan, Spoorti Tadakamalla</li>
          <li>Arya Oak, Joshika Selvaraj</li>
          <li>Bethany Siegel, Marlene McKinney, Shreya Kannan</li>
          <li>Clara Jeon, Uditi Sharma</li>
          <li>Jyothikaa Ramann</li>
          <li>Lipika Varma Kammela, Sai Sharanya Reddy Pathakota, Sruthi Vempuluru</li>
          <li>Sruti Peddi</li>
        </ul>
      </div>
    </div>
  </div>
    </>
  );
}
