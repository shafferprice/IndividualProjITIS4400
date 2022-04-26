<script>
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'
</script>


<template>
  <div>
<h1>About Me:</h1>

<div id="rust">
    <div id="rustTextContainer">
        <h2>Short Bio:</h2>
        <p id="rustPara">
        Welcome to my page!
        My name is Shaffer Price and I am currently a student at the University
        of North Carolina at Charlotte. I created this website to show off my skills
        and to make it easier for potential employers to get to know me. While you're
        here, you'll learn about my hobbies, my social media accounts, and my work history.
        Before we get into all of that, I'd like to talk a little bit about myself. I graduated
        from a small private school called Metrolina Christian Academy. Upon coming
        to UNC Charlotte, I've been involved in sports, playing for the Gold team on the Women's
        Club Volleyball team my sophomore year. We were set to go to Nationals before COVID hit, then
        everything came crashing down. Now that COVID is letting up, I joined Alpha Chi 
        Omega in the Fall of 2021 and am currently serving as their Vice President Finance.
        Overall, I look forward to obtaining an internship and I'm excited for whatever the future holds. Have
        fun exploring!
        </p>
    </div>
    </div>

    <div class="accord">
         <h2>Previous and Current Employment:</h2>
  <!--accordion from: https://vuejsexamples.com/a-customizable-collapsible-panel-accordion-library-built-using-vue3/-->  

  <vue-collapsible-panel-group>
    <vue-collapsible-panel :expanded="false">
        <template #title>
            Sealing Agents
        </template>
        <template #content>
            I currently work at Sealing Agents. I started working for them as a paid intern doing data scrubbing on their
            locations database. I finished sorting through their database pretty quickly so they began to send me to work for 
            a few other employees that had loads of work to catch up on. After I helped everyone get caught up with their work
            they decided to keep me as an employee because of how fast and effective I was. However, I only work part time since I am still a studnet. 
            I now work in the collections department working with credit references, invoices, new customers, and more.  
        </template>
    </vue-collapsible-panel>
     <vue-collapsible-panel :expanded="false">
        <template #title>
            Alpha Chi Omega VP Finance
        </template>
        <template #content>
            I don't get paid for this position but I consider it a job. I work daily with my executive board to complete various tasks.
            Some of my jobs include: Finalizing a budget for the soroity, approving checks and card loads, monitoring budgets of other executive members, sending out fines and dues,
            manage the soroitiy's money, communicate with advisors about decisions, and communicate to the chapter our financial duties. I also manage my two assistants who help me 
            keep up with receipts and fines.
        </template>
    </vue-collapsible-panel>
    <vue-collapsible-panel :expanded="false">
        <template #title>
            Teacher's Assistant - Data Structures and Algorithms
        </template>
        <template #content>
            I work for Professor Bruce Long, aiding in the teaching of Data Structures and Algoritms students. I help grade
            assignments, labs, and book work. I also help create the canvas quizzes and tests and aid the students throughout the semester
            with any troubleshooting. I work this job during the school year (Fall and Spring semesters) and I plan to continue until I graduate.
        </template>
    </vue-collapsible-panel>
    <vue-collapsible-panel :expanded="false">
        <template #title>
            Pressly Animal Hospital/Playcation Station
        </template>
        <template #content>
            I started working for Doctor Pressly at Pressly Animal Hospital while I was in High School. I worked in the daycare
                    and boarding department of the veterinary office, however I would get to see and aid the vets and vet techs in simple
                    things like vaccines every now and then. Since then, Doctor Pressly has bought a new facility for the daycare and
                    boarding department and we have moved buildings. Now, I clean up after the dogs, watch them during playtime, and handle
                    large transactions with customers. I stopped working here to take the position at Sealing Agents which was more focused towards my goals.
        </template>
    </vue-collapsible-panel>
    <vue-collapsible-panel :expanded="false">
        <template #title>
            Precaclulus and Calculus Tutor
        </template>
        <template #content>
            I worked as a precalculus and calculus tutor for the University of North Carolina at Charlotte
                    in the fall of 2020. This job was a challenge considering the limitations due to COVID-19 and both me and the students I
                    tutored had to adapt to some changes. However, it was a fun job and I learned a lot about teaching and how to be effective in
                    helping students. I had to learn each individual's learning style and adapt how I presented the information to their style.
                    I became CRLA certified during this opportunity and learned many communication skills throughout that training. I decided to
                    discontinue my participation in this job because I took the Teacher's Assistant opportunity instead.
        </template>
    </vue-collapsible-panel>
</vue-collapsible-panel-group>
</div>
</div>
</template>

<style>
@import '../assets/base.css';
body{
    background-color: #e8ded1;
}
a:visited{
    color: #FFFFFF;
}
h1{
    text-align: center;
    position: absolute;
    font-family: "American Typewriter";
    left: 600px;
    font-size: 65px;
    top: 10px;
    color: #142D0A;
}
#rust{
    height: 600px;
    width: 400px;
    background-color: #933A16;
    position: absolute;
    top: 200px;
    left: 15px;
}
#rustTextContainer{
    height: 510px;
    width: 300px;
    background-color: #CE897B;
    position: absolute;
    left: 50px;
    top: 50px;
}
#rustPara{
    color: #142D0A;
    font-size: 13px;
    text-align: center;
    position: absolute;
    top: 50px;
    font-family: "American Typewriter";
}
h2{
    text-align: center;
    color: #142D0A;
    font-family: "American Typewriter";
}
.accord{
    height: 500px;
    width: 500px;
    background-color: #B2AC88;
    position: absolute;
    top: 200px;
    left: 460px;
}
</style>