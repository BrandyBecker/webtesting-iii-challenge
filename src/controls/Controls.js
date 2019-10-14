import React from 'react';

const Controls = props => {
  const { locked, closed, toggleLocked, toggleClosed } = props;

  return (
    <div className="controls panel">
      <button disabled={!closed} onClick={toggleLocked} className="toggle-btn">
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>
      <button disabled={locked} onClick={toggleClosed} className="toggle-btn">
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div>
  );
};

export default Controls;

/*
Disabled={not closed}, onClick={toggleLocked}
Is gate locked? If so, 'Unlock Gate'. If not, 'Lock Gate'
----------------------------------------------------------------
Disabled={locked} onClick={toggleClosed}
Is gate closed? If so, 'Open Gate'. If not, 'Close Gate'.
*/