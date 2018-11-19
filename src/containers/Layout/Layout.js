import React, { Component } from 'react';
// import axios from '../../axios-bugs';
// import Aux from '../../hoc/Aux';
// import Toolbar from '../../components/Toolbar/Toolbar';
// import Backdrop from '../../components/Backdrop/Backdrop';
// import PointerOptions from '../../components/PointerOptions/PointerOptions';
import Pointer from '../../components/Pointer/Pointer';
// import BackgroundOptions from '../../components/BackgroundOptions/BackgroundOptions';
import Background from '../../components/Background/Background';
// import PathOptions from '../../components/PathOptions/PathOptions';
import Path from '../../components/Path/Path';
import Menu from '../../components/Menu/Menu'
import Timer from '../../components/Timer/Timer';
// import PreQuestion from '../PreQuestion/PreQuestion'
import Theme from '../../components/Theme/Theme';
import Times from '../../components/Times/Times';
import BugForm from '../../components/BugForm/BugForm';
import Intro from '../../components/Intro/Intro';
import Start from '../../components/Start/Start';
import classes from './Layout.css';

class Layout extends Component {
    
    state = {
        optionsShow: false,
        showPointer: false,
        showBackgrounds: false,
        showPaths: false,
        cursor: null,
        background: null,
        path: 'default',
        time: 60,
        speed: 1.5,
        postBother: null,
        themeShow: false,
        bugFormShow: false,
        timesShow: false,
        introShow: true,
        showStart: true
    }

    optionsHandler = () => {
        let optionState = this.state.optionsShow ? false : true;
        this.setState({
            optionsShow: optionState,
            showPointer: false,
            showBackgrounds: false,
            showPaths: false,
        });
    }

    pointerMenuHandler = () => {
        this.setState({
            showPointer: !this.state.showPointer,
            showBackgrounds: false,
            showPaths: false
        });
    }

    backgroundMenuHandler = () => {
        this.setState({
            showBackgrounds: !this.state.showBackgrounds,
            showPointer: false,
            showPaths: false
        });
    }

    pathMenuHandler = () => {
        this.setState({
            showPaths: !this.state.showPaths,
            showBackgrounds: false,
            showPointer: false,
        });
    }

    bugMenuHandler = () => {
        let bugShowState = this.state.bugFormShow ? false : true;
        this.setState({
            bugFormShow: bugShowState,
            themeShow: false,
            timesShow: false,
            introShow: false
        });
    }

    bugFormClose = () => {
        this.setState({
            bugFormShow: false
        });
    }

    timeMenuHandler = () => {
        let timeState = this.state.timesShow ? false : true;
        this.setState({
            timesShow: timeState,
            themeShow: false,
            bugFormShow: false,
            introShow: false
        });
    }

    timeChangeHandler = (type) => {
        this.setState({
            time: type,
            timesShow: false
        });
    }

    themeMenuHandler = () => {
        let themeState = this.state.themeShow ? false : true;
        this.setState({
            themeShow: themeState,
            timesShow: false,
            bugFormShow: false,
            introShow: false
        });
    }

    themeChangeHandler = (type) => {
        let mph = this.state.speed;
        if (type === 'balloon') {
            mph = 4;
        } else if (type === 'classic') {
            mph = 6;
        }
        this.setState({
            cursor: type,
            background: type,
            path: type,
            themeShow: false,
            speed: mph
        });
    }

    cursorChangeHandler = (type) => {
        this.setState({cursor: type});
    }

    backgroundChangeHandler = (bg) => {
        this.setState({background: bg});
    }

    pathChangeHandler = (pth) => {
        this.setState({path: pth});
    }

    // timeChangeHandler = (e) => {
    //     this.setState({time: e.target.value});
    // }

    speedChangeHandler = (e) => {
        this.setState({speed: e.target.value});
    }

    clockStop = () => {

        if (this.state.background === null) {
            this.setState({
                cursor: 'default',
                background: 'default',
                speed: 5
            });
        }

        /* Countdown functions, variables, and call. */
        let initialTime = this.state.time;
        let countInt;

        let countDownClock = () => {
            countInt = setInterval(countDown, 1000);
        }
        
        let stopFunc = () => {
            clearInterval(countInt);
        }
    
        let countDown = () => {
            if (this.state.time === 0 || this.state.timesShow || this.state.themeShow || this.state.bugFormShow) {
                this.setState({
                    time: initialTime,
                    postBother: true,
                    showStart: true
                });
                stopFunc();
            } else {
                let newTime = this.state.time;
                newTime--;
                this.setState({time: newTime});
            }
        }

        /* Call the clock countdown function. */
        countDownClock();
    }

    edrmStartHandler = () => {

        this.setState({
            themeShow: false,
            bugFormShow: false,
            timesShow: false,
            introShow: false,
            showPointer: false
        });

        this.clockStop();

        let counter = 0;

        /*	A boolean variable to keep track of the direction we want to travel in 
            true = move to the left; false = move to the right */
        let direction = true;

        /*	Establish a reference to the enclosing div and then to
            the svg path and the current pointer */
        let svgContainer = document.getElementById("outerWrapper");
        let svg = svgContainer.getElementsByTagName("path");
        var svgPointer = svgContainer.getElementsByTagName("g");

        /*	Select the length of the path */
        let lineLength = svg[0].getTotalLength();
        
        this.setState({
            optionsShow: false,
            showPointer: false,
            showBackgrounds: false,
            showPaths: false,
            themeShow: false,
            bugFormShow: false,
            showStart: false
        });

        // const choice = {
        //     userChoice: this.state.background
        // }

        // axios.post('/stats.json', choice).then(response => {
        //     console.log(response);
        // }).catch(error => console.log(error));

        /* Inner Function */
        let moveShape = () => {

            /*	Check to see where the pointer is to determine 
                what direction it should be travelling in */
            if (parseInt(counter, 10) === 1 && svg[0].id) {
                /* If it hits the end and we want to change directions and go back the other way. */
                direction = false;
            } else if (parseInt(counter, 10) === 1 && !svg[0].id) {
                /* If we want it to continually go in the same direction. */
                counter = 0;
                svgPointer[0].setAttribute("transform","translate("+ (svg[0].getPointAtLength(counter * lineLength).x-25)  + "," + (svg[0].getPointAtLength(counter * lineLength).y-25) + ")");
            } else if (parseInt(counter, 10) < 0) {
                /* If  */
                direction = true;
            }

            /* Define the speed integer as decimal to be used as the pointer speed. */
            let speedPoint;
            if (this.state.speed <= 9) {
                speedPoint = parseFloat('0.00' + this.state.speed);
              } else if (this.state.speed >= 10 && this.state.speed <= 99) {
                speedPoint = parseFloat('0.0' + this.state.speed)
              } else if (this.state.speed >= 100 && this.state.speed <= 999) {
                speedPoint = parseFloat('0.' + this.state.speed);
              }
        
            /*	Based on the direction variable either increase or decrease the counter */
            if (direction) {
                counter += speedPoint;
            } else {
                counter -= speedPoint;
            }
            
            /*	Now the magic part. We are able to call .getPointAtLength on the tow paths to
                return the coordinates at any point along their lengths. We then simply set the stars to be positioned at these coordinates, incrementing along the lengths of the paths */
            svgPointer[0].setAttribute("transform","translate("+ (svg[0].getPointAtLength(counter * lineLength).x-25)  + "," + (svg[0].getPointAtLength(counter * lineLength).y-25) + ")");

            if (this.state.time === 0 || this.state.optionsShow || this.state.themeShow) {
                return;
            }
        
            /*	Use requestAnimationFrame to recursively call moveShape() 60 times a second
                to create the illusion of movement */
            requestAnimationFrame(moveShape);
        
        }
        /* Function call. */
        requestAnimationFrame(moveShape);
        
    }

    introClose = () => {
        this.setState({
            introShow: false
        });
    }

    render () {

        return (
            <div>

                <Intro
                    show={this.state.introShow}
                    close={this.introClose}
                    themeMenu={this.themeMenuHandler}
                    timeMenu={this.timeMenuHandler}
                    bugMenu={this.bugMenuHandler}
                />

                <Start show={this.state.showStart} start={this.edrmStartHandler} />

                <Menu  themeMenu={this.themeMenuHandler} timeMenu={this.timeMenuHandler} bugMenu={this.bugMenuHandler} />

                <Theme theme={this.themeChangeHandler} show={this.state.themeShow} />

                <Times show={this.state.timesShow} times={this.timeChangeHandler} />

                <BugForm show={this.state.bugFormShow} close={this.bugFormClose} />
                
                {/* <div style={{color: this.state.optionsShow ? 'white' : 'black'}} className={classes.Menu}><i className="material-icons" onClick={this.optionsHandler}>menu</i></div> */}
                
                {/* <Backdrop show={this.state.optionsShow} /> */}
                
                {/* <Toolbar
                    pathActive={this.state.showPaths}
                    bgActive={this.state.showBackgrounds}
                    pointerActive={this.state.showPointer}
                    show={this.state.optionsShow}
                    pointerMenu={this.pointerMenuHandler}
                    bgMenu={this.backgroundMenuHandler}
                    pathMenu={this.pathMenuHandler}
                    start={this.edrmStartHandler}
                    time={this.state.time}
                    speed={this.state.speed}
                    cursor={this.state.cursor}
                    path={this.state.path}
                    background={this.state.background}
                    changeTime={this.timeChangeHandler}
                    changeSpeed={this.speedChangeHandler}
                />
                
                <PointerOptions show={this.state.showPointer} cursorSelect={this.cursorChangeHandler} />
                
                <BackgroundOptions show={this.state.showBackgrounds} bgSelect={this.backgroundChangeHandler} />

                <PathOptions show={this.state.showPaths} pathSelect={this.pathChangeHandler} />*/}

                <Background background={this.state.background} />

                <Timer bg={this.state.background} time={this.state.time} />

                {/* <PreQuestion menu={this.optionsHandler} post={this.state.postBother} /> */}
                
                {/* CREATE NEW COMPONENT */}
                    <div className={classes.outerWrapper} id="outerWrapper">
                        <svg width="100%" viewBox="0 0 800 300">
                            <Path path={this.state.path} />
                            <g style={{height: '5%', width: '5%'}}>
                                <Pointer cursor={this.state.cursor} />
                            </g> 
                        </svg>   
                    </div>
                {/* CREATE NEW COMPONENT */}

            </div>
        );
    }
}

export default Layout;