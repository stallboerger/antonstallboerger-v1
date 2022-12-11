import React from 'react';

function GMTTime() {
  // get the time in GMT
  const date = new Date();
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');

  // add one hour to the time
  const newHours = (parseInt(hours) + 1).toString().padStart(2, '0');

  return (
    <div>
      <p className='text-sm text-zinc-500'> {newHours}:{minutes}</p>
    </div>
  );
}

export default GMTTime;
