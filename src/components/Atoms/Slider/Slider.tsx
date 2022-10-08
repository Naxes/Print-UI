import React from 'react';
import { styled } from 'stitches.config';
import * as SliderPrimitive from '@radix-ui/react-slider';

const StyledSlider = styled(SliderPrimitive.Root, {
  alignItems: 'center',
  cursor: 'pointer',
  display: 'flex',
  position: 'relative',
  touchAction: 'none',
  userSelect: 'none',
  width: '100%',
});

const StyledTrack = styled(SliderPrimitive.Track, {
  backgroundColor: '$slate6',
  borderRadius: '$pill',
  flexGrow: 1,
  height: '$6',
  overflow: 'hidden',
  position: 'relative',
});

const StyledRange = styled(SliderPrimitive.Range, {
  backgroundColor: '$slate12',
  borderRadius: '$pill',
  height: '100%',
  position: 'absolute',
});

const StyledThumb = styled(SliderPrimitive.Thumb, {
  all: 'unset',
  backgroundColor: '$slate12',
  borderRadius: 17.5,
  display: 'block',
  height: '$6',
  opacity: 0,
  width: '$6',
});

const StyledStopper = styled('span', {
  background: '$slate12',
  borderRadius: '0 $pill $pill 0',
  height: '$6',
  margin: '0 -1px',
  pointerEvents: 'none',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '$6',
});

export const Slider = React.forwardRef<HTMLInputElement, SliderPrimitive.SliderProps>((props, forwardRef) => {
  const value = props.value || props.defaultValue;

  return (
    <StyledSlider ref={forwardRef} {...props}>
      <StyledTrack>
        <StyledRange/>
        <StyledStopper/>
      </StyledTrack>
      {value?.map((_: number, i: number) => (
        <StyledThumb key={i}/>
      ))}
    </StyledSlider>
  );
});
