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
                    <h6 className="card-subtitle mb-2 text-muted">Personal Project</h6>
                    <p className="card-text">A website with all of my personal information.</p>
                </>
            );
        }
        if (type === "app"){
            setTxt(
                <>
                    <h6 className="card-subtitle mb-2 text-muted">ChefUp!</h6>
                    <p className="card-text">An app I made in highschool that peaked at #32 on the Singapore App Store.</p>
                </>
            );
        }
        if (type === "recycle"){
            setTxt(
                <>
                    <h6 className="card-subtitle mb-2 text-muted">Recyle App</h6>
                    <p className="card-text">An app created by my team for a Cisco Hack-a-thon in January of 2021.</p>
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
                <p className="courses">
                    Problem Solving via. Object Oriented Programming • Software Design and Implementation • Foundations of Applied Machine Learning
                </p>
                <p className = "courses"> Computer Networks • Discrete Math for Computer Science </p>
                <p className = "courses"> Introduction to Neuroscience • Experimental Design and Methodology </p>
                    
            </div>
            <div className = "section">
                <h2>Projects</h2>
                <div className="row">
                    <div className="col-4">
                        <Button variant="outline-secondary" onMouseEnter={() => mouseEnter("website")}//setOpen1(true)} 
                                onMouseLeave={() => mouseExit()}//</div></div>setOpen1(false)} 
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://github.com/lizfrey/personal-website';
                                }}
                                aria-controls="example-collapse-text" aria-expanded={open}>
                            Personal Website Project
                        </Button> 
                    </div>
                    <div class = "col-4">
                        <Button variant="outline-secondary" onMouseEnter={() => mouseEnter("app")}//setOpen1(true)} 
                            onMouseLeave={() => mouseExit()}//</div></div>setOpen1(false)} 
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href='https://github.com/lizfrey/chef-up';
                            }}
                            aria-controls="example-collapse-text" aria-expanded={open}>
                            ChefUp!
                        </Button>
                    </div>
                    <div className="col-4">
                        <Button variant="outline-secondary" onMouseEnter={() => mouseEnter("recycle")}//setOpen1(true)} 
                                onMouseLeave={() => mouseExit()}//</div></div>setOpen1(false)} 
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://github.com/recycle-app/recycle-app';
                                }}
                                aria-controls="example-collapse-text" aria-expanded={open}>
                            Recycle App
                        </Button> 
                    </div>

                    <br></br>
                </div>

                <div id="collapse-text">
                    <div>
                        <Fade in={open} dimension="width">
                            <Card body style={{width: '100%'}}>
                                {txt}
                            </Card>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className = "section">
                <h2>Experience</h2>
                <p>
                    Undergraduate researcher under Alireza Soltani for the Computational and Cognitive Neuroscience Lab.
                </p>
                <p> 
                    Teaching assistant for Problem Solving via. Object Oriented Programming
                </p>
                <p> 
                    Intern for the N.1 Institute for Health
                </p>
            </div>
        </ div>
    );
}
 
export default Home;