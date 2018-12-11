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
                        EMDR (Eye Movement Desensitization and Reprocessing) is a psychotherapy that enables people to heal from the symptoms and emotional distress that are the result of disturbing life experiences. Repeated studies show that by using EMDR therapy people can experience the benefits of psychotherapy that once took years to make a difference. Learn more <a href="http://www.emdr.com/what-is-emdr/" target="_blank" rel="noopener noreferrer">here.</a>
                    </p>
                </div>
                <div className={classes.Break}></div>
                <ul className={classes.Nav}>
                    <li className={classes.MenuItem} onClick={props.themeMenu}>
                        <div className={classes.Icon}><ThemeIcon /></div>
                        <div className={classes.Info}>
                            <div className={classes.Text}><ThemeIntro /></div>
                            <div className={classes.SubBreak}></div>
                            <h3>Select a background.</h3>
                        </div>
                    </li>
                    <li className={classes.MenuItem} onClick={props.timeMenu}>
                        <div className={classes.Icon}><TimeIcon /></div>
                        <div className={classes.Info}>
                            <div className={classes.Text}><TimeIntro /></div>
                            <div className={classes.SubBreak}></div>
                            <h3>Choose a length of time.</h3>
                        </div>
                    </li>
                    <li className={classes.MenuItem} onClick={props.bugMenu}>
                        <div className={classes.Icon}><Bug /></div>
                        <div className={classes.Info}>
                            <div className={classes.Text}><BugIntro /></div>
                            <div className={classes.SubBreak}></div>
                            <h3>Submit a bug.</h3>
                        </div>
                    </li>
                </ul>
        </div>
    );
}

export default intro;