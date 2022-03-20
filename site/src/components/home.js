import React, { useState } from "react";
import Fade from 'react-bootstrap/Fade'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import chefup from '../extras/chefupimage.png'

function Home (){

    const [open, setOpen] = useState(false);
    const [txt, setTxt] = useState("");

    function mouseEnter(type){
        if (type === "website"){
            setTxt(
                <>
                    <h6 className="card-subtitle mb-2 text-muted">Personal Project</h6>
                    <p className="card-text">A website with all of my personal information. I used React, HTML/CSS, JS, and SCSS to make this website.
                    Much of the design is from React-Bootstrap. I made this website without formal React web-development experience.</p>
                </>
            );
        }
        if (type === "app"){
            setTxt(
                <>
                    <h6 className="card-subtitle mb-2 text-muted">ChefUp!</h6>
                    <p className="card-text">An app I made in highschool that peaked at #32 on the Singapore App Store. I used Swift to make this app,
                    and my friend Christina made all of the recipes. Unfortunately, I could not afford to keep this app up on the App Store.</p>
                    <img src={chefup} alt="email" id ="chefup-image"/> 
                </>
            );
        }
        if (type === "recycle"){
            setTxt(
                <>
                    <h6 className="card-subtitle mb-2 text-muted">Recyle App</h6>
                    <p className="card-text">The Recycle app is an app created by my team for a Cisco Hack-a-thon in January of 2021. 
                    I helped out with aspects of using TensorFlow and machine learning to complete the app, 
                    but was mainly focused on the design and ideation side. This app was my first experience using Dart and Flutter.</p>
                </>
            );
        }
        if (type === "dropbox"){
            setTxt(
                <>
                    <h6 className="card-subtitle mb-2 text-muted">P2P File Sharing</h6>
                    <p className="card-text">The P2P File Sharing program was my final group project for my Computer Networks class.
                    I coded the mini-reliable transport layer using UDP sockets in addition to the multi-threading reqiured for the
                    simultaneous upload and download.</p>
                </>
            );
        }

        if (type === "nuggets"){
            setTxt(
                <>
                    <h6 className="card-subtitle mb-2 text-muted">Gold-Collecting Game</h6>
                    <p className="card-text">The Gold-Collecting "Nuggets" game was my final group project for my Software Design and Implementation course.
                    I was involved largely in the Player and Gameboard modules. Through this project, I learned about agile methods (scrum),
                    document specifications, and various forms of testing (fuzz, unit).</p>
                </>
            );
        }

        if (type === "sudi"){
            setTxt(
                <>
                    <h6 className="card-subtitle mb-2 text-muted">POS Tagging</h6>
                    <p className="card-text">The parts of speech machine learning was my final partner project for my OOP course in Java.
                    I personally coded the training aspect of the program while my partner focused on the Viterbi code. This project uses
                    Markov chains and ML to learn from a tagged-document and accurately (86% on longest test file) tag each word with its
                    part of speech in the testing file.</p>
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
                    Problem Solving via. Object Oriented Programming • Software Design and Implementation • Foundations of Applied Computer Science
                </p>
                <p className = "courses"> Computer Networks • Discrete Math for Computer Science • Full Stack Web Development</p>
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
                <div className="row">
                    <div className="col-4">
                        <Button variant="outline-secondary" onMouseEnter={() => mouseEnter("dropbox")}//setOpen1(true)} 
                                onMouseLeave={() => mouseExit()}//</div></div>setOpen1(false)} 
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://drive.google.com/drive/u/0/folders/1QTXHu2zoCeT1OaP-MqIziag-_PkM7Ecm';
                                }}
                                aria-controls="example-collapse-text" aria-expanded={open}>
                            P2P File Sharing
                        </Button> 
                    </div>
                    <div class = "col-4">
                        <Button variant="outline-secondary" onMouseEnter={() => mouseEnter("nuggets")}//setOpen1(true)} 
                            onMouseLeave={() => mouseExit()}//</div></div>setOpen1(false)} 
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href='https://drive.google.com/drive/u/0/folders/1DSHO1DTSurqIhs1QpG2li7eCHbDv9pWj';
                            }}
                            aria-controls="example-collapse-text" aria-expanded={open}>
                            Gold-Collecting Game
                        </Button>
                    </div>
                    <div className="col-4">
                        <Button variant="outline-secondary" onMouseEnter={() => mouseEnter("sudi")}//setOpen1(true)} 
                                onMouseLeave={() => mouseExit()}//</div></div>setOpen1(false)} 
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://drive.google.com/drive/u/0/folders/1X11AzRcu_wMUE-3lmRbSaA__MRGHJT0v';
                                }}
                                aria-controls="example-collapse-text" aria-expanded={open}>
                            NLP Parts of Speech Program
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
                    Software Developer for the Digital Applied Learning and Innovation (DALI) Lab
                </p>
                <p>
                    Undergraduate researcher (mainly SWE tasks) under Alireza Soltani for the Computational and Cognitive Neuroscience Lab
                </p>
                <p> 
                    Teaching assistant for Problem Solving via Object Oriented Programming
                </p>
                <p> 
                    Intern for the N.1 Institute for Health
                </p>
            </div>
        </ div>
    );
}
 
export default Home;