import React from 'react';
import { Circles } from 'react-loader-spinner';

const Spinner = ({message}) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full content-center'>
      <Circles
        color='#00BFFF'
        height={100}
        width={200}
        className='m-5'
      />
      <p className='text-lg text-center px-2'>{message}</p>
    </div>
  )
}

export default Spinner