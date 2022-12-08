import React from 'react';

function GMTTime() {
  const date = new Date();
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');

  return (
    <div>
      <p className='text-sm text-zinc-500'> {hours}:{minutes}</p>
    </div>
  );
}

export default GMTTime;
