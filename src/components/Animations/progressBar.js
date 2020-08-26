import React from 'react';
import { ProgressBarContainer, Number, Figure, Circle } from './styles';
import CountUp from 'react-countup'; // Number counter from Npm (https://www.npmjs.com/package/react-countup)

const progressBar = () => {
    
    return (
        <ProgressBarContainer>
            <Number>
                <CountUp
                    start={0}
                    end={93}
                    duration={5}
                    suffix="%"
                />
            </Number>
            <Figure>
                <svg viewBox="0 0 42 42">
                    <circle
                        className="ring"
                        cx="21"
                        cy="21"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#595b56"
                        strokeWidth="5"
                    />

                    <Circle
                        className="path"
                        cx="21"
                        cy="21"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#ffda1a"
                        strokeDasharray="93 7"
                        strokeWidth="5"
                    />
                </svg>
            </Figure>
        </ProgressBarContainer>
    );
};
export default progressBar;
