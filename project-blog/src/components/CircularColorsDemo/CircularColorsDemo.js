'use client';
import React, { useEffect } from 'react';
import clsx from 'clsx';
import { Play, Pause, RotateCcw } from 'react-feather';

import Card from '@/components/Card';
import VisuallyHidden from '@/components/VisuallyHidden';
import { motion } from 'framer-motion';

import styles from './CircularColorsDemo.module.css';

const COLORS = [
  { label: 'red', value: 'hsl(348deg 100% 60%)' },
  { label: 'yellow', value: 'hsl(50deg 100% 55%)' },
  { label: 'blue', value: 'hsl(235deg 100% 65%)' },
];

function CircularColorsDemo() {
  const id = React.useId();
  const [timeElapsed, setTimeElapsed] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const selectedColor = COLORS[timeElapsed % COLORS.length];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      if (isPlaying) {
        setTimeElapsed((currentValue) => currentValue + 1);
      }
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPlaying]);

  return (
    <Card as='section' className={styles.wrapper}>
      <ul className={styles.colorsWrapper}>
        {COLORS.map((color, index) => {
          const isSelected = color.value === selectedColor.value;

          return (
            <li className={styles.color} key={index}>
              {isSelected && (
                <motion.div
                  layoutId={`${id}-selected-color-outline`}
                  className={styles.selectedColorOutline}
                />
              )}
              <div
                layoutId={`${isSelected}-${index}`}
                className={clsx(
                  styles.colorBox,
                  isSelected && styles.selectedColorBox
                )}
                style={{
                  backgroundColor: color.value,
                }}
              >
                <VisuallyHidden>{color.label}</VisuallyHidden>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.timeWrapper}>
        <dl className={styles.timeDisplay}>
          <dt>Time Elapsed</dt>
          <dd>{timeElapsed}</dd>
        </dl>
        <div className={styles.actions}>
          <button onClick={() => {
            const nextIsPlaying = !isPlaying;
            setIsPlaying(nextIsPlaying);
            if (nextIsPlaying) {
              setTimeElapsed(timeElapsed + 1);
            }
          }}>
            {isPlaying ? <Pause /> : <Play />}
            <VisuallyHidden>{isPlaying ? 'Pause' : 'Play'}</VisuallyHidden>
          </button>
          <button
            onClick={() => {
              setIsPlaying(false);
              setTimeElapsed(0);
            }}
          >
            <RotateCcw />
            <VisuallyHidden>Reset</VisuallyHidden>
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CircularColorsDemo;
