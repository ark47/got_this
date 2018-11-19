import React from 'react';
import ThemeIntro from './ThemeIntro';
import TimeIntro from './TimeIntro';
import BugIntro from './BugIntro';
import EMDR from './EMDR';
import classes from './Intro.css';

const intro = (props) => {
    return (
        <div style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-200vh)',
            opacity: props.show ? '1' : '0',
            display: props.show ? 'inherit' : 'hidden'
            }}
            className={classes.Intro}>
                <div className={classes.Close} onClick={props.close}></div>
                <div className={classes.About}>
                    <EMDR />
                    <p>
                        EMDR (Eye Movement Desensitization and Reprocessing) is a psychotherapy that enables people to heal from the symptoms and emotional distress that are the result of disturbing life experiences. Repeated studies show that by using EMDR therapy people can experience the benefits of psychotherapy that once took years to make a difference. Learn more <a href="http://www.emdr.com/what-is-emdr/" target="_blank" rel="noopener noreferrer">here.</a>
                    </p>
                </div>
                <div className={classes.Break}></div>
                <ul className={classes.Nav}>
                    <li className={classes.MenuItem} onClick={props.themeMenu}><ThemeIntro /></li>
                    <li className={classes.MenuItem} onClick={props.timeMenu}><TimeIntro /></li>
                    <li className={classes.MenuItem} onClick={props.bugMenu}><BugIntro /></li>
                </ul>
        </div>
    );
}

export default intro;