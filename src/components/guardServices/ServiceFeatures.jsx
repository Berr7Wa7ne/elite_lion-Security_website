import React from 'react';
import Image1 from '../../assets/Security_1.jpg';
import Image2 from '../../assets/Security_2.jpg';
import Image3 from '../../assets/Security_3.jpg';
import Image4 from '../../assets/Security_4.jpg';
import Image5 from '../../assets/Security_5.jpg';

const ServiceFeatures = () => {
  return (
    <div className='mx-5'>
    <h1 className='mt-10 text-lg md:text-3xl font-bold mb-4 mx-3 text-lime-500'>A HIGHER STANDARD OF <br />PROTECTION</h1>
    <div className='lg:flex justify-between mx-3'>
        <p className='mb-4 text-left text-sm md:text-xl text-gray-600'> 
            At Elites Lion Security, we treat every client as a partner — not <br />a number. We understand that each facility is unique in <br />its security needs, and our strategic staffing model <br />ensures that you receive a specialized security service <br />plan that’s specific to your site’s requirements.<br /><br />
            Further, our security officers are supported through <br />industry-leading training and an outstanding <br />supervisory structure. We believe the success of our <br />officers results in success for your facility, and nothing is <br />more important than that.
        </p>
        <img src={Image1} alt="Image 1" className="w-full h-full max-w-xl mb-0 border rounded shadow-2xl" />
      </div>

    <h1 className='lg:text-right text-left mt-10 text-lg md:text-3xl font-bold mb-4 mx-3 lg:mx-32 text-lime-500'>PROACTIVE SECURITY OFFICERS</h1>
    <div className='lg:flex justify-between'>
    <img src={Image3} alt="Image 3" className="w-full h-full max-w-xl mb-4 border rounded shadow-2xl ml-3" />
      <p className='text-left text-sm md:text-xl text-gray-600 mr-10 mx-3'> 
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

    <h1 className='text-left mt-10 text-lg md:text-3xl font-bold mb-4 text-lime-500 mx-3'>PATROL TECHNIQUES AND <br />PROCEDURES</h1>
    <div className='lg:flex justify-between mx-3'>
      <p className='mb-4 text-left text-sm md:text-xl text-gray-600'> 
        Our security officers are equipped to conduct various <br />types of patrols and understand the different advantages <br />and disadvantages of these methods. We believe in <br />teaching our officers customer service techniques (a <br />hands-off approach) to challenge persons found in <br />restricted areas and ensure all safety and security <br />measures are maintained.
      </p>
      <img src={Image2} alt="Image 2" className="w-full h-full max-w-xl mb-0 border rounded shadow-2xl" />
      </div>

    <h1 className='lg:text-right text-left mt-10 text-lg md:text-3xl font-bold mb-4 text-lime-500 mx-3 lg:mx-20'>OUR TRAINING PRODUCES RESULTS</h1>
    <div className='lg:flex justify-between'>
    <img src={Image4} alt="Image 4" className="w-full h-full max-w-xl mb-4 mx-3 border rounded shadow-2xl" />
      <p className='text-left text-sm md:text-xl text-gray-600 mr-20 mx-3'> 
        Our security officers receive the best training as standard <br />when they’re hired on. We’re known for providing <br />superior training that covers a variety of areas, including <br />customer service, communication and defense tactics. <br />Training increases our team’s competence and <br />confidence. Officers who are well-equipped to do their <br />jobs make better decisions — a strategy that significantly <br />reduces turnover and is proven to reduce incidents and <br />mitigate risk.
      </p>
      </div>

    <h1 className='text-left mt-10 text-lg md:text-3xl font-bold mb-4 text-lime-500 mx-3'>DOCUMENTATION & REPORTING</h1>
    <div className='lg:flex justify-between mb-4 mx-3'>
      <p className='mb-4 text-left text-sm md:text-xl text-gray-600'> 
        Proper documentation and incident reporting are crucial <br />to the safety and security of your staff and property. Our <br />security officers undertake training that addresses the <br />written communication skills necessary for providing <br />outstanding customer service in the security industry, <br />and at your site.<br /><br />
        In addition, your managers will receive activity summary <br />reports and real-time incident notification so they’re <br />always aware of activity within their portfolio. In certain <br />cases, we also set escalation notification processes <br />triggered by specific events.
      </p>
      <img src={Image5} alt="Image 5" className="w-full h-full max-w-xl mb-0 border rounded shadow-2xl" />
      </div>
      </div>
  );
};

export default ServiceFeatures;