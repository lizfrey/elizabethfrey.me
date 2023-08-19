import React from 'react';

function AboutMe() {
  return (
    <div className="about-me">
      <div>
        <div>
          <h1>About Me</h1>
          <p>
            I am a software engineer with a passion for building and designing
            software. I have experience in building web applications, mobile
            applications, and desktop applications. I am currently working as a
            software engineer at a startup called
            {' '}
            <a
              href="https://www.heyhi.sg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              HeyHi
            </a>
            . I am also a part-time student at
            {' '}
            <a
              href="https://www.sutd.edu.sg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SUTD
            </a>
            {' '}
            pursuing a Bachelor of Engineering in Information Systems Technology
            and Design.
          </p>
        </div>

      </div>

      <div className="about-me-image">
        <img src="src/assets/picture.JPG" alt="about me" />
      </div>
    </div>
  );
}
export default AboutMe;
