import React from 'react';

const Display = ({ closed, locked }) => {
  const lockedClass = `led ${locked ? '❌ red-led' : '✅ green-led'}`;
  const closedClass = `led ${closed ? '❌ red-led' : '✅ green-led'}`;

  return (
    <div className="display panel">
      <div className={lockedClass}>{locked ? '❌ Locked' : '✅ Unlocked'}</div>
      <div className={closedClass}>{closed ? '❌ Closed' : '✅ Open'}</div>
    </div>
  );
};

Display.defaultProps = {
  closed: false,
  locked: false,
};

export default Display;
/*
closedClass = led {is it closed? if so, '❌Red-LED'. If not, '✅Green-LED'.}
lockedClass = led {is it locked? if so, '❌Red-LED'. If not, '✅Green-LED'.}

*/