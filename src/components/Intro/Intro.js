import React from 'react';
import ThemeIntro from './ThemeIntro';
import TimeIntro from './TimeIntro';
import BugIntro from './BugIntro';
import EMDR from './EMDR';
import Bug from '../MenuItems/Bug';
import ThemeIcon from '../MenuItems/ThemeIcon';
import TimeIcon from '../MenuItems/TimeIcon';
import About from './About';
import classes from './Intro.css';

const intro = (props) => {
    return (
        <div style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-200vh)',
            opacity: props.show ? '1' : '0',
            display: props.show ? 'inherit' : 'hidden',
            }}
            className={classes.Intro}>
                <div className={classes.Close} onClick={props.close}></div>
                <div className={classes.About}>
                    <div className={classes.Eye}><EMDR /></div>
                    <div className={classes.EyeBreak}></div>
                    <div className={classes.AboutText}><About /></div>
                    <p>
                        Got This is an app to use between <a href="http://www.emdr.com/what-is-emdr/" target="_blank" rel="noopener noreferrer">EMDR</a> sessions to boost your confidence, calm your anxiety, or help you reach your goals. This is not a substitute for <a href="http://www.emdr.com/what-is-emdr/" target="_blank" rel="noopener noreferrer">EMDR</a> therapy with a clinician, but can be a great way to spend one minute for your mind when you need it the most.
                    </p>
                </div>
                <div className={classes.Break}></div>
                <ul className={classes.Nav}>
                    <li className={classes.MenuItem} onClick={props.themeMenu}>
                        <div className={classes.Icon}><ThemeIcon /></div>
                        <div className={classes.Info}>
                            <div className={classes.Text}><ThemeIntro /></div>
                            <div className={classes.SubBreak}></div>
                            <h4>Select a theme with its own backdrop and pointer to follow.</h4>
                        </div>
                    </li>
                    <li className={classes.MenuItem} onClick={props.timeMenu}>
                        <div className={classes.Icon}><TimeIcon /></div>
                        <div className={classes.Info}>
                            <div className={classes.Text}><TimeIntro /></div>
                            <div className={classes.SubBreak}></div>
                            <h4>Click the clock to pick a length of time that works best for you.</h4>
                        </div>
                    </li>
                    <li className={classes.MenuItem} onClick={props.bugMenu}>
                        <div className={classes.Icon}><Bug /></div>
                        <div className={classes.Info}>
                            <div className={classes.Text}><BugIntro /></div>
                            <div className={classes.SubBreak}></div>
                            <h4>Something seem off? Or not working right? Tell us all about it.</h4>
                        </div>
                    </li>
                </ul>
        </div>
    );
}

export default intro;