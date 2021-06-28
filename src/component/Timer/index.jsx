import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import {
  decrementOneSec,
  determineNextPeriod,
  INITIAL_PERIOD,
} from '../../services/timer';
import timeOverSound from './time-over-soundfx.wav';

const timeOverSoundAudio = new Audio(timeOverSound);

const Timer = ({ shouldAutoStart }) => {
  const [[mins, secs], setTime] = useState([INITIAL_PERIOD.mins, INITIAL_PERIOD.secs]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentPeriod, setCurrentPeriod] = useState(INITIAL_PERIOD);
  const tickTimeoutId = useRef(0);
  const counter = useRef(0);
  useEffect(() => {
    if (!isRunning) {
      return;
    }
    const reset = () => {
      timeOverSoundAudio.play();
      setIsRunning(false);
      counter.current += 1;
      const nextPeriod = determineNextPeriod(currentPeriod, counter.current);
      if (counter.current === 7) {
        counter.current = 0;
      }
      setCurrentPeriod(nextPeriod);
      setTime([nextPeriod.mins, nextPeriod.secs]);
      if (shouldAutoStart) {
        setIsRunning(true);
      }
    };
    const tick = () => decrementOneSec(mins, secs, setTime, reset);
    tickTimeoutId.current = setTimeout(tick, 1000);
  });

  const handleStartClick = () => {
    setIsRunning(true);
  };

  const handleStopClick = () => {
    setIsRunning(false);
    clearTimeout(tickTimeoutId.current);
  };

  return (
    <>
      <h1>
        {`${mins.toString().padStart(2, '0')}:
        ${secs.toString().padStart(2, '0')}`}
        {' '}
      </h1>
      <div className="d-flex justify-content-around">
        <Button variant="dark" size="lg" type="button" onClick={handleStartClick}>Start &#128525;</Button>
        <Button variant="info" size="lg" type="button" onClick={handleStopClick}>Stop &#128564;</Button>
      </div>
    </>
  );
};

Timer.propTypes = {
  shouldAutoStart: PropTypes.bool.isRequired,
};

export default Timer;
