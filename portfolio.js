<!-- contact section start -->
                    <div id="contact">
                        <div class="container">
                            <div class="row">
                            <div class="contact-left">
                                <h1 class="title">Contact Me</h1>
                                <div class="media">
                                   <li><a href="https://twitter.com/fasnamfd">
                                   <i class="fa-brands fa-twitter"></i></a></li>
                                   <li><a href="https://www.instagram.com/fasnamfd/"></a>
                                    <i class="fa-brands fa-instagram" aria-hidden="true"></i></a></li>
                                   <li><a href="https://www.linkedin.com/in/fasnamfd">
                                    <i class="fa-brands fa-linkedin"></i></a></li>
                                </div>

                                
<script src="https://kit.fontawesome.com/281ef77036.js" crossorigin="anonymous"></script>                        
</body>
</html>



.row {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 10vh;
  }
  
  .social-media-icons {
    margin-top: auto;
  }
  
.media li{
    list-style: none;
    margin: 20px;
    display: inline-block;
    font-size: 30px;
    padding: 10px 10px;
    color: #0c0c0c;
    border: 3px solid #0b0606;
    border-radius: 50%;
    transition: .5s;
    margin-right: 20px;


}
.media li:hover {
    color: #292929;
    border: 1px solid #292929;
    transition: .5s;
}
.contact .title::after{
    content: "how to conect me";
}
.contact .contact-content{
    image-orientation: from-image;
 }
.contact p{
    text-align: center;
    margin-top: 40px;
}
.contact p i{
    color:#ff004f;
    margin-right: 35px;
    font-size: 25px;
}


.social-icon {
    color: #040404;
    transition: color 0.2s;
    text-decoration: none;
    margin: 0 10px;
    margin-right: 20cm;
 }
 .social-icon:hover{
    color:#090a0a;
    margin-right: 20cm;
 }
.btn.btn2{
        background-color: red;
        color: rgb(239, 231, 231);
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
      
}
.contact-left form{
    width: 50%;
}
form input,form textarea{
    width: 50%;
    border:0;
    outline: none;
    background: #f2eded;
    padding: 15px;
    margin: 15px 0;
    color: #0b0b0b;
    font-size: 18px;
    border-radius: 6px;
}
<div class="experiences-container experiences-card">
          <img
            src="mulearn.png"
            alt="Zonal student leader"
            loading="lazy"
            class="experiences-pic"
          />
          <h3 class="experiences-title">Zonal student leader</h3>
          <a href="#" target="_blank" class="experiences-link">Check it Out</a>
        </div>

        /* skills section styling */
.skills-section {
    padding: 100px 300px;
    background-color: #f9f9f9;
    margin: 0 auto;
    max-width: 800px; 
    place-content:50px;
  }
  
  .skills-section h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .skill {
    margin-bottom: 50px;
  }
  
  .skill h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .skill ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .skill li {
    margin-bottom: 10px;
    padding-left: 50px;
    position: relative;
  }
  
  .skill li:before {
    content: "\2022";
    position: absolute;
    left: 0;
    top: 2px;
    color: #e00a2a;
  }
  
  .skill li span {
    display: block;
    font-weight: bold;
    margin-bottom: 50px;
  }
  
  .skill li em {
    font-style: italic;
    color: #999;
  }

/* skills section styling */
.skills-section {
    padding: 100px 300px;
    background-color: #f9f9f9;
    margin: 0 auto;
    max-width: 800px; 
    place-content:50px;
  }
  
  .skills-section h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .skill {
    margin-bottom: 50px;
  }
  
  .skill h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .skill ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .skill li {
    margin-bottom: 10px;
    padding-left: 50px;
    position: relative;
  }
  
  .skill li:before {
    content: "\2022";
    position: absolute;
    left: 0;
    top: 2px;
    color: #e00a2a;
  }
  
  .skill li span {
    display: block;
    font-weight: bold;
    margin-bottom: 50px;
  }
  
  .skill li em {
    font-style: italic;
    color: #999;
  }
  /* skills */
  .skills .title::after{
    content: "what i know";
}
.skills .skills-content .left{
    width: 95%;
}

.skill-section{
    position: relative;
    margin: 100px 0;
}

.heading{
    text-align: center;
    font-size: 60px;
    color: #fff;
    text-transform: capitalize;
    font-weight: 300;
    margin-bottom: 100px;
}

.skills-container{
    width: 95%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 100px;
    color: #101010;
}

.skill-card{
    position: relative;
}

.skill-img{
    display: block;
    margin: auto;
    height: 200px;
}

.skill-name{
    font-size: 30px;
    font-weight: 300;
    text-align: center;
    text-transform: capitalize;
    margin: 30px 0 20px;
}

.skill-info{
    text-align: center;
    opacity: 0.5;
    font-size: 18px;
    line-height: 30px;
}

.skill-level{
    position: absolute;
    top: 80px;
    right: 0;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    border-radius: 50%;
    border: 20px solid;
}

.skill-card:nth-child(1) .skill-level{
    background: white;
    border-color: #6cc925;
    color: #d33d3d;
}

.skill-card:nth-child(2) .skill-level{
    background:white;
    border-color: #09090a;
    color: #ba4343;
}

.skill-card:nth-child(3) .skill-level{
    background: white;
    border-color: #10100f;
    color: #da4141;
}

.skill-card:nth-child(4) .skill-level{
    background: white;
    border-color: #101010;
    color: #d21919;
}

.skill-card:nth-child(5) .skill-level{
    background: white;
    border-color: #0f0f0f;
    color: #d52626;
}

<!-- skills section start -->
                    <div class="skill-section">
                      <h1 class="heading">skills</h1>
                      <div class="skills-container">
                      <div class="skill">
                        <h3>Soft Skills</h3>
                        <ul>
                          <li>Teamwork</li>
                          <li>Communication</li>
                          <li>Time Management</li>
                          <li>Problem Solving</li>
                        </ul>
                      </div>
                      <div class="skill">
                          <h3>other</h3>
                          <ul>
                            <li>cooking</li>
                            <li>circuit design</li>
                    </div>
              </div>
          </div>
      </div>
  </section>


<section class="skills" id="skills">
      <div class="max-width">
          <h2 class="title">My skills</h2>
          <div class="skills-content"></div>


          .skills-content .title::after{
    content: "what i know";
}
.skills .skills-content .left{
    width: 95%;
}