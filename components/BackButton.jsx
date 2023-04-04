import React from 'react';
import { KeyCommand, LeftRoundArrow } from 'iconoir-react';

const BackButton = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className=''>
        <button 
            onClick={handleBackClick} 
            className='text-xs flex gap-4 hover:bg-zinc-100 p-2 rounded-lg'
        >
            {/* <p className='text-zinc-500'>Back</p> */}
            <div className='flex gap-2 self-center text-xs'>   
                <KeyCommand className='stroke-2 text-zinc-500 self-center' />
                <LeftRoundArrow className='stroke-2 text-zinc-500 self-center' />
            </div>
            
        </button>
    </div>
  );
};

export default BackButton;