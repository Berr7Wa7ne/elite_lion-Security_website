import React from 'react';

const GetInTouch = () => {
  return (
    <div className="bg-gray-800 p-5 text-left font-mono mb-4">
      <h1 className="text-xl lg:text-5xl font-bold mb-4 text-white">WE’RE HERE TO HELP</h1>
      <p className="mb-4 text-sm lg:text-xl text-white">
        At Elites Lion Security, we take the time to understand the security <br />challenges you face and help you develop an integrated program <br />customized to address your individual situation. Contact us today to discuss <br />your specific security requirements.
      </p>
      <div className='flex justify-start'>
      <a href="#" className=" bg-lime-500 text-white py-2 px-2 rounded uppercase hover:bg-primary hover:shadow-inner hover:scale-95">Get in touch</a>
      </div>  
    </div>
  );
};

export default GetInTouch;