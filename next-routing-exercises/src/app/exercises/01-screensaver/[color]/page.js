import React from 'react';

import ScreenSaver from '../../../../components/ScreenSaver';

function ScreenSaverExercise({params}) {
  const {color} = params;
  const selectedColor = color ?? "white";
  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={selectedColor} />
    </main>
  );
}

export default ScreenSaverExercise;
