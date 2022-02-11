import React from 'react';
import {Carousel} from 'react-bootstrap'
import chefup from '../extras/chefup.png'
import spacelab from '../extras/spacelab.png'
import dartup from '../extras/dartup.png'
import personal from "../extras/picture.JPG"
 

function About () {
    return <div className = "about">
        <div>
            <h1>Hello!</h1>
            <img src={personal} id = "professional-image"/>
            <p>My name is Elizabeth Frey, and I am a sophomore at Dartmouth College studying Computer Science and Neuroscience.
            </p>
            <p>I am a Singapore PR and a United States citizen. I am passionate about mental health, and I enjoy traveling and trying new foods.</p>
            <p>I was born in Berekely, CA, USA, but grew up in Singapore, an incredibly diverse place. I love working with people from all over the world.</p>
        </div>
        <br></br>
        <h2>My Projects in the News</h2>

        <div id="involve">
            <Carousel>
                <Carousel.Item>
                    <a href="https://www.sas.edu.sg/about-us/publications-and-media/perspectives/post-details/~board/perspectives-blog/post/chef-up?utm_source=Social&utm_medium=Facebook">
                        <img
                        className="d-block w-100"
                        src={chefup}
                        alt="First slide"
                        />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://www.sas.edu.sg/about-us/publications-and-media/perspectives/post-details/~board/perspectives-blog/post/sas-space-exploration-the-journey-continues">
                        <img
                        className="d-block w-100"
                        src={spacelab}
                        alt="Second slide"
                        />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://magnuson.dartmouth.edu/blog/2022/01/04/dartup-combines-social-entrepreneurship-competition-and-collaboration/">
                        <img
                        className="d-block w-100"
                        src={dartup}
                        alt="Third slide"
                    />
                    </a>
                    
                </Carousel.Item>
            </Carousel>
        </div>

    </div>
}
export default About;