import React, { useState } from 'react';
import contactImage from '../assets/contact.jpg';

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Here you can implement your form submission logic,
    // such as sending the form data to a server using fetch or axios.

    // For demonstration purposes, let's just reset the form after submission.
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
    setStatus('Form submitted successfully!');

    // You can also add error handling here, for example:
    // setStatus('An error occurred while submitting the form.');
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2 relative m-auto">
      {/* Apply background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${contactImage})`,
          // Adjust background properties for sharpness
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          webkitFilter: 'blur(10px)', // Correct syntax for -webkit-filter
          filter: 'blur(10px)',
        }}
      ></div>

      <div className="relative z-10">
        <h2 className="text-center mb-0 md:mb-6 font-semibold text-lg md:text-4xl text-primary">Contact Us</h2>
        <p className="text-bold text-center text-sm md:text-lg mb-4 text-gray-300">
            Partner with Elite Lion Security to improve your security program. We are licensed in over 10 <br />states and work with clients across the country. Contact us today to learn more.
        </p>
    <h2 className="text-center mb-0 md:mb-6 font-semibold text-lg md:text-4xl text-primary">Our Locations</h2>
      <div className='mb-4 font-semibold flex justify-between space-x-4 text-gray-300 text-sm md:text-lg'>
      <h5>Abuja Office:<br /> Block B Suit 11 POWA Int'l Plaza <br /> Nyanya FCT, Abuja <br /> Tel:07037364574, 07035106530</h5>
      <h5>Imo Office:<br /> 148 Police Shell Camp Mummy Market <br /> behind Moseque <br /> Tel:07037364574</h5>
      <h5>Anambra Office:<br /> City of Love Plaza Kil. 3 Shop 39 <br /> Owerri Road, Close to <br /> Peoples Club Headquarters, Onitsha <br /> Tel:07037364574, 08025037200, 07035106530</h5>
      <h5>Ebonyi Office:<br /> 39 Ekwunumiri Street <br /> Opp. First Bank Afikpo Road, Abakaliki <br /> Tel:07037364574, 08025037200</h5>
      <h5>Edo Office:<br /> No. 55 Ujie-Oror Street off Mission Road <br /> After PDP Secretariate before <br /> Assemblies of God Church, Uromi <br /> Tel:07037364574, 07035106530</h5>
      </div>  
      <h2 className="text-lg md:text-3xl text-center mb-0 md:mb-6 font-semibold text-primary">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex justify-center">
          <label className="text-gray-300 text-lg font-bold mb-2" htmlFor="firstName">
            First Name:
          </label>
          <input
            className=" flex justify-start shadow appearance-none border rounded w-96 mx-3 py-2 px-3 text-gray-700 hover:border-primary hover:border-x-2 hover:border-y-2"
            id="firstName"
            type="text"
            name="firstName"
            placeholder='Please type first name'
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4 flex justify-center">
          <label className="text-gray-300 text-lg font-bold mb-2" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className="flex justify-start shadow appearance-none border rounded mx-3 w-96 py-2 px-3 text-gray-700 hover:border-primary hover:border-x-2 hover:border-y-2"
            id="lastName"
            type="text"
            name="lastName"
            placeholder='Please type last name'
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4 flex justify-center">
          <label className="text-gray-300 text-lg font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="flex justify-start shadow appearance-none border rounded w-96 ml-10 py-2 px-3 text-gray-700 hover:border-primary hover:border-x-2 hover:border-y-2"
            id="email"
            type="email"
            name="email"
            placeholder='Please type email address'
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4 flex justify-center">
          <label className="text-gray-300 text-lg font-bold mb-2" htmlFor="subject">
            Subject:
          </label>
          <input
            className="flex justify-start shadow appearance-none border rounded ml-6 w-96 py-2 px-3 text-gray-700 hover:border-primary hover:border-x-2 hover:border-y-2"
            id="subject"
            type="text"
            name="subject"
            placeholder='Please type your subject'
            value={form.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6 flex justify-center">
          <label className="text-gray-300 text-lg font-bold mb-2" htmlFor="message">
            Message:
          </label>
          <textarea
            className="flex justify-start shadow appearance-none border rounded ml-3 w-96 py-2 px-3text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-primary hover:border-x-2 hover:border-y-2"
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-primary hover:bg-secondary-200 hover:shadow-inner hover:scale-110 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Contact;