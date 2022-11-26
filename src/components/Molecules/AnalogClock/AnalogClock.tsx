import React, { useEffect, useState } from 'react';
import { styled } from 'stitches.config';

const Frame = styled('div', {
  background: '$loContrast',
  borderRadius: '50%',
  height: '20rem',
  padding: '2rem',
  position: 'relative',
  width: '20rem',
});

const Digit = styled('span', {
  color: '$hiContrast',
  display: 'block',
  position: 'relative',

  '&:nth-of-type(1)': {
    '&::before': {
      content: '12',
      fontSize: '$7',
      left: '50%',
      position: 'absolute',
      top: 0,
      transform: 'translateX(-50%)',
    },
    '&::after': {
      bottom: 0,
      content: '6',
      fontSize: '$7',
      left: '50%',
      position: 'absolute',
      transform: 'translateX(-50%)',
    },
  },
  '&:nth-of-type(2)': {
    height: '5px',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',

    '&::before': {
      content: '3',
      fontSize: '$7',
      right: 0,
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    '&::after': {
      content: '9',
      fontSize: '$7',
      left: 0,
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  },
});

const Graduation = styled('div', {
  background: 'transparent !important',
  position: 'relative',
  width: '10px',

  '&::before': {
    background: '$slate8',
    borderRadius: '100%',
    bottom: '0',
    content: '',
    display: 'block',
    height: '14px',
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%)',
    width: '14px',
  },

  '&::after': {
    background: '$slate8',
    borderRadius: '100%',
    content: '',
    display: 'block',
    height: '14px',
    left: '50%',
    position: 'absolute',
    top: '0',
    transform: 'translateX(-50%)',
    width: '14px',
  },

  '&:nth-of-type(1)': { transform: 'rotate(30deg)' },
  '&:nth-of-type(2)': { transform: 'rotate(60deg)' },
  '&:nth-of-type(3)': { transform: 'rotate(120deg)' },
  '&:nth-of-type(4)': { transform: 'rotate(150deg)' },
});

const OuterFace = styled('div', {
  borderRadius: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  width: '100%',

  [`${Digit}, ${Graduation}`]: {
    height: '100%',
    left: '49%',
    position: 'absolute',
    width: '5px',
    zIndex: 0,
  },
});

const InnerFace = styled('div', {
  background: '$loContrast',
  borderRadius: '100%',
  height: '80%',
  left: '10%',
  position: 'absolute',
  top: '10%',
  width: '80%',
  zIndex: 1,

  '&::before': {
    background: '$loContrast',
    border: '4px solid $hiContrast',
    borderRadius: '18px',
    content: '',
    height: '12px',
    left: '50%',
    marginLeft: '-10px',
    marginTop: '-7px',
    position: 'absolute',
    top: '50%',
    width: '12px',
    zIndex: 5,
  },
});

const Hand = styled('div', {
  background: '$slate8',
  borderRadius: '6px',
  height: '10px',
  position: 'absolute',
  right: '50%',
  top: '50%',
  transform: 'rotate(180deg)',
  transformOrigin: '100%',
  width: '50%',

  variants: {
    hour: {
      true: {
        marginTop: '-2.5px',
        width: '35%',
        zIndex: 3,
      }
    },
    minute: {
      true: {
        marginTop: '-2.5px',
        width: '45%',
        zIndex: 4,
      }
    },
    second: {
      true: {
        background: '$hiContrast',
        marginTop: '-1.5px',
        height: '6px',
        width: '48%',
      }
    },
  },
});

/**
 * before/after digits for each
 * quadrant (i.e. 12, 3, 6, & 9).
 * @constructor
 */
const Digits = () => (
  <>
    <Digit/>
    <Digit/>
  </>
);

/**
 * before/after graduations for
 * each quadrant.
 * @constructor
 */
const Graduations = () => (
  <>
    <Graduation/>
    <Graduation/>
    <Graduation/>
    <Graduation/>
  </>
);

type Props = {
  date: Date,
}

export const AnalogClock = ({ date }: Props) => {
  let timer: ReturnType<typeof setInterval>;
  const now = date || new Date();

  const hours = `rotate(${((now.getHours() / 12) * 360) + ((now.getMinutes() / 60) * 30) + 90}deg)`;
  const minutes = `rotate(${((now.getMinutes() / 60) * 360) + ((now.getSeconds() / 60) * 6) + 90}deg)`;
  const seconds = `rotate(${((now.getSeconds() / 60) * 360) + 90}deg)`;

  const [time, setTime] = useState({ hours, minutes, seconds });

  const updateTime = () => {
    if (!timer) {
      timer = setInterval(() => {
        setTime({ hours, minutes, seconds });
      }, 1000);
    }
  };

  useEffect(() => {
    updateTime();
    return () => clearInterval(timer);
  }, [time]);

  return (
    <Frame>
      <OuterFace>
        <Digits/>
        <Graduations/>
        <InnerFace>
          <Hand hour css={{ transform: time.hours }}/>
          <Hand minute css={{ transform: time.minutes }}/>
          <Hand second css={{ transform: time.seconds }}/>
        </InnerFace>
      </OuterFace>
    </Frame>
  );
};
