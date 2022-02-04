import React, { useState } from "react";
import Fade from 'react-bootstrap/Fade'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function Home (){

    const [open, setOpen] = useState(false);
    const [txt, setTxt] = useState("");

    function mouseEnter(type){
        if (type === "website"){
            setTxt(
                <>
                    <h6 class="card-subtitle mb-2 text-muted">Personal Project</h6>
                    <p class="card-text">A website with all of my personal information.</p>
                </>
            );
        }
        if (type === "app"){
            setTxt(
                <>
                    <h6 class="card-subtitle mb-2 text-muted">ChefUp!</h6>
                    <p class="card-text">A website with all of my personal information.</p>
                </>
            );
        }
        setOpen(true);
    }

    function mouseExit(){
        setTxt('');
        setOpen(false);
    }

    return (
        <div class = "name" >
            <h1>Elizabeth Frey</h1>
            <div className = "section">
                <h2>Courses</h2>
                <p id="courses">
                    Problem Solving via. Object Oriented Programming • Software Design and Implementation • Foundations of Applied Machine Learning
                </p>
                <p id = "courses"> Computer Networks • Discrete Math for Computer Science </p>
                <p id = "courses"> Introduction to Neuroscience • Experimental Design and Methodology </p>
                    
            </div>
            <div className = "section">
                <h2>Projects</h2>
                <Button onMouseEnter={() => mouseEnter("website")}//setOpen1(true)} 
                        onMouseLeave={() => mouseExit()}//</div></div>setOpen1(false)} 
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://github.com/lizfrey/personal-website';
                        }}
                        aria-controls="example-collapse-text" aria-expanded={open}>
                    Personal Website Project
                </Button> 

                <Button onMouseEnter={() => mouseEnter("app")}//setOpen1(true)} 
                        onMouseLeave={() => mouseExit()}//</div></div>setOpen1(false)} 
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://github.com/lizfrey/personal-website';
                        }}
                        aria-controls="example-collapse-text" aria-expanded={open}>
                    ChefUp!
                </Button>
                <div id="collapse-text">
                    <div>
                        <Fade in={open} dimension="width">
                            <Card body style={{width: '20%'}}>
                                {txt}
                            </Card>
                        </Fade>

                    </div>
                </div>
            </div>
            <div className = "section">
                <h2>Experience</h2>
            </div>
        </ div>
    );
}
 
export default Home;