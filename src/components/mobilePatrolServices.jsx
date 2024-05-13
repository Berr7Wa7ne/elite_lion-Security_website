import React from 'react';
import Image1 from '../assets/Security_1.jpg';
import Image2 from '../assets/Security_2.jpg';
import Image3 from '../assets/Security_3.jpg';
import Image4 from '../assets/Security_4.jpg';
import backgroundimg from '../assets/Sec_background.jpg'

const MobilePatrolServices = () => {
  // State and other logic can be declared here

  // Render function starts here
  return (
    <div className='w-100%'>
      <div
        className="absolute inset-0 bg-cover bg-center h-96"
        style={{
          backgroundImage: `url(${backgroundimg})`,
          // Adjust background properties for sharpness
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          webkitFilter: 'blur(5px)', // Correct syntax for -webkit-filter
          filter: 'blur(5px)',
        }}
      ></div>
     <div className="relative z-10 p-10 text-left font-mono mb-4">
      <h1 className="text-3xl lg:text-5xl font-bold mb-0 text-primary">MOBILE PATROL SECURITY SERVICES FOR YOUR PROPERTY</h1>
      <svg fill="#000000" height="80px" width="80px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon points="60.44,233.482 48.895,196.215 37.351,233.482 0,233.482 30.22,256.513 18.676,293.785 48.895,270.744 79.115,293.785 67.571,256.513 97.791,233.482 "></polygon> <polygon points="158.492,233.482 146.948,196.215 135.403,233.482 98.052,233.482 128.272,256.513 116.728,293.785 146.948,270.744 177.168,293.785 165.623,256.513 195.843,233.482 "></polygon> <polygon points="256.544,233.482 245,196.215 233.456,233.482 196.104,233.482 226.324,256.513 214.78,293.785 245,270.744 275.22,293.785 263.676,256.513 293.895,233.482 "></polygon> <polygon points="354.596,233.482 343.052,196.215 331.508,233.482 294.157,233.482 324.377,256.513 312.832,293.785 343.052,270.744 373.272,293.785 361.728,256.513 391.948,233.482 "></polygon> 
      <polygon points="441.105,196.215 429.56,233.482 392.209,233.482 422.429,256.513 410.885,293.785 441.105,270.744 471.324,293.785 459.78,256.513 490,233.482 452.649,233.482 "></polygon> </g> </g>
      </svg>
      <p className="mb-4 text-xl text-primary">
      Drive your business forward with peace of mind that your security <br />needs are handled by Elite Lion mobile <br />division.
      </p>
      <button className="bg-secondary-200 text-white py-2 px-4 rounded hover:bg-primary hover:shadow-inner hover:scale-95">Why Elites Lion Security</button>
    </div>
   <div className='mx-36 lg:mx-0'>   
    <h1 className='text-left mt-10 text-3xl font-bold mb-4 mx-3 text-secondary-100'> ENHANCED SITE SECURITY, 24/7 </h1>
    <div className='lg:flex justify-between mx-3'>
      <p className='text-left text-xl text-secondary-100'> 
          Our mobile officers will patrol your site in marked, well-<br />maintained security vehicles — at pre-designated times, <br />on a random basis, or responding to an alarm — to <br />ensure that the property is safe and secure. Our <br />patrolling security officers use handheld devices to <br />electronically document when they arrived at your <br />facility, where they checked and when they left.<br /><br />
          Get 24/7 support with our roving fleet of well-marked <br />vehicles. Our mobile team takes on a wide variety of <br />assignments, and our mobile officers receive top-notch <br />training beyond the industry standards.
        <ul className='mt-4'>
          <li className='mb-2'>Alarm response</li>
          <li className='mb-2'>Scheduled/unscheduled patrols</li>
          <li className='mb-2'>Supplementary static guard support</li>
          <li className='mb-2'>Lock/unlock services and key management</li>
          <li className='mb-2'>Safe walk for employees</li>
          <li className='mb-2'>Fire scene security</li>
          <li className='mb-2'>Timely reporting</li>
        </ul>
      </p>
        <img src={Image3} alt="Image 3" className="w-full h-full max-w-xl mb-0 border rounded shadow-2xl" />
      </div>

    <h1 className='lg:flex justify-end text-left mt-10 text-3xl font-bold mb-4 mx-3 lg:mx-32 text-secondary-100'>MOBILE PATROL OFFICERS WHO<br />GO ABOVE AND BEYOND</h1>
    <div className='lg:flex justify-between'>
    <img src={Image1} alt="Image 1" className="w-full h-full max-w-xl mb-4 border rounded shadow-2xl ml-3" />
      <p className='text-left text-xl text-secondary-100 mr-20 mx-3'> 
        Our mobile teams receive Elite Lion leading security <br />training as standard — training that is above and beyond <br />provincial and local licensing requirements. On top of <br />that, our mobile officers receive specific training on <br />issues they may face in the field, including incidents and <br />emergencies. We believe this training gives our officers <br />the tools and confidence to perform at their best for you.<br /><br />
        At your site’s scheduled mobile patrol, our elite officers <br />will check for the following:
        <ul className='mt-4'>
          <li className='mb-2'>Property damage or safety hazards</li>
          <li className='mb-2'>Unlocked doors or windows</li>
          <li className='mb-2'>Unauthorized person(s)</li>
          <li className='mb-2'>Suspicious activity</li>
        </ul>
      </p>
      </div>

    <h1 className='text-left mt-10 text-3xl font-bold mb-4 text-secondary-100 mx-3'>EFFICIENT SECURITY PATROL <br />CARS RESPONSES</h1>
    <div className='lg:flex justify-between mx-3'>
      <p className='text-left text-xl text-secondary-100 mb-4'> 
        If anything appears out of the ordinary while on patrol — <br />such as a suspicious person, sound, or scent — our <br />mobile security officers will promptly deal with the <br />situation. Our mobile supervisor will locate the nearest <br />available mobile security officer by GPS, and immediately <br />dispatch them to respond to your site. Our guaranteed <br />response times and large vehicle fleets ensure a swift <br />reaction to any alarm or emergency, while highly-trained <br />officers provide reliable services that you can count on.
      </p>
      <img src={Image2} alt="Image 2" className="w-full h-full max-w-xl mb-4 border rounded shadow-2xl" />
      </div>

    <h1 className='lg:flex justify-end text-left mt-10 text-3xl font-bold mb-4 text-secondary-100 mr-32 mx-3'>A PROVEN AND COST-EFFECTIVE <br />MOBILE SECURITY PATROLS</h1>
    <div className='lg:flex justify-between mb-4'>
    <img src={Image4} alt="Image 4" className="w-full h-full max-w-xl mb-4 mx-3 border rounded shadow-2xl" />
      <p className='text-left text-xl text-secondary-100 mr-24 mx-3'> 
        A mobile security program can often be more cost-<br />effective than a static security program. A well-designed <br />private patrol service program supplemented with alarm <br />and emergency response services is an effective <br />deterrent for properties that experience infrequent <br />incidents. Additionally, the regular presence of a well-<br />marked security vehicle is also an effective tool in <br />deterring criminal activity.<br /><br />
        As an ISO14001 certified organization, PalAmerican has a <br />commitment to sustainability. We procure a hybrid fleet, <br />which makes our world a greener & friendlier place
      </p>
      </div>
      </div> 
      <div className="bg-secondary-100 p-10 text-left font-mono mb-4">
      <h1 className="text-5xl font-bold mb-4 text-gray-300">WE’RE HERE TO HELP</h1>
      <p className="mb-4 text-xl text-gray-300">
        At Elites Lion Security, we take the time to understand the security <br />challenges you face and help you develop an integrated program <br />customized to address your individual situation. Contact us today to discuss <br />your specific security requirements.
      </p>
      <button className=" bg-secondary-200 text-white py-2 px-4 rounded uppercase hover:bg-primary hover:shadow-inner hover:scale-95">Get in touch</button>
      </div>
    
    </div>
    
  );
};

export default MobilePatrolServices;
