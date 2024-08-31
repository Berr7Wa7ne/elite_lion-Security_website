// MobilePatrolFeatures.js
import React from 'react';
import Image1 from '../../assets/Security_1.jpg';
import Image2 from '../../assets/Security_2.jpg';
import Image3 from '../../assets/Security_3.jpg';
import Image4 from '../../assets/Security_4.jpg';

const MobilePatrolFeatures = () => {
  return (
    <div className='mx-5'>   
    <h1 className='text-lime-500 text-left mt-10 text-lg md:text-3xl font-bold mb-4 mx-3'> ENHANCED SITE SECURITY, 24/7 </h1>
    <div className='lg:flex justify-between mx-3'>
      <p className='text-gray-600 text-left text-sm md:text-xl'> 
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

    <h1 className='text-lime-500 lg:flex justify-end text-left mt-10 text-lg md:text-3xl font-bold mb-4 mx-3 lg:mx-32'>MOBILE PATROL OFFICERS WHO<br />GO ABOVE AND BEYOND</h1>
    <div className='lg:flex justify-between'>
    <img src={Image1} alt="Image 1" className="w-full h-full max-w-xl mb-4 border rounded shadow-2xl ml-3" />
      <p className='text-gray-600 text-left text-sm md:text-xl mr-20 mx-3'> 
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

    <h1 className='text-lime-500 text-left mt-10 text-lg md:text-3xl font-bold mb-4 mx-3'>EFFICIENT SECURITY PATROL <br />CARS RESPONSES</h1>
    <div className='lg:flex justify-between mx-3'>
      <p className='text-gray-600 text-left text-sm md:text-xl mb-4'> 
        If anything appears out of the ordinary while on patrol — <br />such as a suspicious person, sound, or scent — our <br />mobile security officers will promptly deal with the <br />situation. Our mobile supervisor will locate the nearest <br />available mobile security officer by GPS, and immediately <br />dispatch them to respond to your site. Our guaranteed <br />response times and large vehicle fleets ensure a swift <br />reaction to any alarm or emergency, while highly-trained <br />officers provide reliable services that you can count on.
      </p>
      <img src={Image2} alt="Image 2" className="w-full h-full max-w-xl mb-4 border rounded shadow-2xl" />
      </div>

    <h1 className='text-lime-500 lg:flex justify-end text-left mt-10 text-lg md:text-3xl font-bold mb-4 mr-32 mx-3'>A PROVEN AND COST-EFFECTIVE <br />MOBILE SECURITY PATROLS</h1>
    <div className='lg:flex justify-between mb-4'>
    <img src={Image4} alt="Image 4" className="w-full h-full max-w-xl mb-4 mx-3 border rounded shadow-2xl" />
      <p className='text-gray-600 text-left text-sm md:text-xl mr-24 mx-3'> 
        A mobile security program can often be more cost-<br />effective than a static security program. A well-designed <br />private patrol service program supplemented with alarm <br />and emergency response services is an effective <br />deterrent for properties that experience infrequent <br />incidents. Additionally, the regular presence of a well-<br />marked security vehicle is also an effective tool in <br />deterring criminal activity.<br /><br />
        As an ISO14001 certified organization, PalAmerican has a <br />commitment to sustainability. We procure a hybrid fleet, <br />which makes our world a greener & friendlier place
      </p>
      </div>
      </div>
  );
};

export default MobilePatrolFeatures;