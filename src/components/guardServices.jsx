import React from 'react';
import Image1 from '../assets/Security_1.jpg';
import Image2 from '../assets/Security_2.jpg';
import Image3 from '../assets/Security_3.jpg';
import Image4 from '../assets/Security_4.jpg';
import Image5 from '../assets/Security_5.jpg'; 

const GuardServices = () => {
  // State and other logic can be declared here

  // Render function starts here
  return (
    <div className='w-100%'>
     <div className="bg-secondary-100 p-10 text-left font-mono mb-4">
      <h1 className="text-3xl lg:text-5xl font-bold mb-0 text-gray-300">ELITES LION SECURITY GUARD SERVICES</h1>
      <svg fill="#DBD56E" height="80px" width="80px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon points="60.44,233.482 48.895,196.215 37.351,233.482 0,233.482 30.22,256.513 18.676,293.785 48.895,270.744 79.115,293.785 67.571,256.513 97.791,233.482 "></polygon> <polygon points="158.492,233.482 146.948,196.215 135.403,233.482 98.052,233.482 128.272,256.513 116.728,293.785 146.948,270.744 177.168,293.785 165.623,256.513 195.843,233.482 "></polygon> <polygon points="256.544,233.482 245,196.215 233.456,233.482 196.104,233.482 226.324,256.513 214.78,293.785 245,270.744 275.22,293.785 263.676,256.513 293.895,233.482 "></polygon> <polygon points="354.596,233.482 343.052,196.215 331.508,233.482 294.157,233.482 324.377,256.513 312.832,293.785 343.052,270.744 373.272,293.785 361.728,256.513 391.948,233.482 "></polygon> 
      <polygon points="441.105,196.215 429.56,233.482 392.209,233.482 422.429,256.513 410.885,293.785 441.105,270.744 471.324,293.785 459.78,256.513 490,233.482 452.649,233.482 "></polygon> </g> </g>
      </svg>
      <p className="mb-4 text-xl text-gray-300">
        Best-in-class security officer services. Our officers are making <br />the world a safer & friendlier place.
      </p>
      <button className="bg-secondary-200 text-white py-2 px-4 rounded hover:bg-primary hover:shadow-inner hover:scale-95">Why Elites Lion Security</button>
    </div>
    <div className='mx-36 lg:mx-0'>
    <h1 className='text-left mt-10 text-3xl font-bold mb-4 mx-3 text-secondary-100'>A HIGHER STANDARD OF <br />PROTECTION</h1>
    <div className='lg:flex justify-between mx-3'>
        <p className='mb-4 text-left text-xl text-secondary-100'> 
            At Elites Lion Security, we treat every client as a partner — not <br />a number. We understand that each facility is unique in <br />its security needs, and our strategic staffing model <br />ensures that you receive a specialized security service <br />plan that’s specific to your site’s requirements.<br /><br />
            Further, our security officers are supported through <br />industry-leading training and an outstanding <br />supervisory structure. We believe the success of our <br />officers results in success for your facility, and nothing is <br />more important than that.
        </p>
        <img src={Image1} alt="Image 1" className="w-full h-full max-w-xl mb-0 border rounded shadow-2xl" />
      </div>

    <h1 className='lg:text-right text-left mt-10 text-3xl font-bold mb-4 mx-3 lg:mx-32 text-secondary-100'>PROACTIVE SECURITY OFFICERS</h1>
    <div className='lg:flex justify-between'>
    <img src={Image3} alt="Image 3" className="w-full h-full max-w-xl mb-4 border rounded shadow-2xl ml-3" />
      <p className='text-left text-xl text-secondary-100 mr-10 mx-3'> 
        Elites Lion Security provides complete turnkey security <br />solutions with security officers who are trained to <br />perform at the highest level. Through our industry-<br />leading selection process and highly-advanced, <br />specialized training, Elites Lion Security has the highest client <br />retention rate in the industry.<br /><br />
        Daily duties and functions are carried out diligently and <br />at the client and site supervisor’s discretion.<br /><br />
        Our security officer services include:
    <ul className='mt-4'>
      <li className='mb-2'>Preventative Patrol</li>
      <li className='mb-2'>Video surveillance monitoring & dispatch service</li>
      <li className='mb-2'>Parking enforcement</li>
      <li className='mb-2'>Incident response & reporting</li>
      <li className='mb-2'>First aid & safety</li>
      <li className='mb-2'>Wayfinding & customer service</li>
      <li className='mb-2'>Courteous enforcement</li>
      <li className='mb-2'>Custom service offerings</li>
    </ul>
      </p>
      </div>

    <h1 className='text-left mt-10 text-3xl font-bold mb-4 text-secondary-100 mx-3'>PATROL TECHNIQUES AND <br />PROCEDURES</h1>
    <div className='lg:flex justify-between mx-3'>
      <p className='mb-4 text-left text-xl text-secondary-100'> 
        Our security officers are equipped to conduct various <br />types of patrols and understand the different advantages <br />and disadvantages of these methods. We believe in <br />teaching our officers customer service techniques (a <br />hands-off approach) to challenge persons found in <br />restricted areas and ensure all safety and security <br />measures are maintained.
      </p>
      <img src={Image2} alt="Image 2" className="w-full h-full max-w-xl mb-0 border rounded shadow-2xl" />
      </div>

    <h1 className='lg:text-right text-left mt-10 text-3xl font-bold mb-4 text-secondary-100 mx-3 lg:mx-20'>OUR TRAINING PRODUCES RESULTS</h1>
    <div className='lg:flex justify-between'>
    <img src={Image4} alt="Image 4" className="w-full h-full max-w-xl mb-4 mx-3 border rounded shadow-2xl" />
      <p className='text-left text-xl text-secondary-100 mr-20 mx-3'> 
        Our security officers receive the best training as standard <br />when they’re hired on. We’re known for providing <br />superior training that covers a variety of areas, including <br />customer service, communication and defense tactics. <br />Training increases our team’s competence and <br />confidence. Officers who are well-equipped to do their <br />jobs make better decisions — a strategy that significantly <br />reduces turnover and is proven to reduce incidents and <br />mitigate risk.
      </p>
      </div>

    <h1 className='text-left mt-10 text-3xl font-bold mb-4 text-secondary-100 mx-3'>DOCUMENTATION & REPORTING</h1>
    <div className='lg:flex justify-between mb-4 mx-3'>
      <p className='mb-4 text-left text-xl text-secondary-100'> 
        Proper documentation and incident reporting are crucial <br />to the safety and security of your staff and property. Our <br />security officers undertake training that addresses the <br />written communication skills necessary for providing <br />outstanding customer service in the security industry, <br />and at your site.<br /><br />
        In addition, your managers will receive activity summary <br />reports and real-time incident notification so they’re <br />always aware of activity within their portfolio. In certain <br />cases, we also set escalation notification processes <br />triggered by specific events.
      </p>
      <img src={Image5} alt="Image 5" className="w-full h-full max-w-xl mb-0 border rounded shadow-2xl" />
      </div>
      </div>
      <div className="bg-secondary-100 p-10 text-left font-mono mb-4">
      <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-gray-300">WE’RE HERE TO HELP</h1>

      <p className="mb-4 text-lg lg:text-xl text-gray-300">
        At Elites Lion Security, we take the time to understand the security <br />challenges you face and help you develop an integrated program <br />customized to address your individual situation. Contact us today to discuss <br />your specific security requirements.
      </p>
      <button className=" bg-secondary-200 text-white py-2 px-4 rounded uppercase hover:bg-primary hover:shadow-inner hover:scale-95">Get in touch</button>
      </div>
    
    </div>
    
  );
};

export default GuardServices;
