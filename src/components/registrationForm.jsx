import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    otherName: '',
    email: '',
    dob: '',
    phone: '',
    religion: '',
    state: '',
    lga: '',
    community: '',
    address: '',
    maritalStatus: '',
    qualification: '',
  });

  const [formattedDob, setFormattedDob] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value.replace(/\D/g, '').slice(0, 8); 
    
    if (formattedValue.length >= 4 && formattedValue.length < 7) {
    formattedValue = formattedValue.replace(/(\d{4})(\d{1,2})/, '$1/$2');
  } else if (formattedValue.length >= 7) {
    formattedValue = formattedValue.replace(/(\d{4})(\d{2})(\d{1,2})/, '$1/$2/$3');
  }

  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: formattedValue,
  }));
};


  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement form submission logic
    console.log(formData);
  };

  return (
<div className='flex flex-col items-right'>
  <h2 className="text-2xl font-semibold mb-7 flex justify-start text-secondary-100 m-auto">Registration Form</h2>
  <form onSubmit={handleSubmit} className='flex justify-end'>
  <div className="mb-7 mx-10">
        <label htmlFor="passport" className="block text-sm font-medium text-secondary-100">
          Passport (Upload):
        </label>
        <input
          type="file"
          id="passport"
          name="passport"
          accept="image/*"
          className="mt-1 p-2 w-56 border border-primary rounded-md"
          required
        />
      </div>
  </form>
  <div className="w-full max-w-screen-xl m-auto">
    <form onSubmit={handleSubmit} className='w-full flex flex-wrap justify-center'>
      <div className="flex flex-wrap justify-between w-full mb-4 mx-10 md:mx-auto">
        <div className="w-full md:w-96 mb-4 md:mb-7">
          <label htmlFor="firstName" className="block text-sm font-medium text-secondary-100 md:mx-10">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-primary rounded-md md:mx-10"
            required
          />
        </div>

        <div className="w-full md:w-96 mb-4 md:mb-7">
          <label htmlFor="lastName" className="block text-sm font-medium text-secondary-100 md:mx-10">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-primary rounded-md md:mx-10"
            required
          />
        </div>

        <div className="w-full md:w-96 mb-4 md:mb-7">
          <label htmlFor="otherName" className="block text-sm font-medium text-secondary-100 md:mx-10">
            Other Name:
          </label>
          <input
            type="text"
            id="otherName"
            name="otherName"
            value={formData.otherName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-primary rounded-md md:mx-10"
            required
          />
        </div>

        <div className="w-full md:w-96 mb-4 md:mb-7">
          <label htmlFor="email" className="block text-sm font-medium text-secondary-100 md:mx-10">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-primary rounded-md md:mx-10"
            required
          />
        </div>

        <div className="w-full md:w-96 mb-4 md:mb-7">
          <label htmlFor="dob" className="block text-sm font-medium text-secondary-100 md:mx-10">
            DOB:
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={setFormattedDob.dob}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-primary rounded-md md:mx-10"
            required
          />
        </div>

        <div className="w-full md:w-96 mb-4 md:mb-7">
          <label htmlFor="phone" className="block text-sm font-medium text-secondary-100 md:mx-10">
            Phone No:
          </label>
          <input
            type="num"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-primary rounded-md md:mx-10"
            required
          />
        </div>

        <div className="w-full md:w-96 mb-4 md:mb-7">
          <label htmlFor="religion" className="block text-sm font-medium text-secondary-100 md:mx-10">
            Religion:
          </label>
          <input
            type="text"
            id="religion"
            name="religion"
            value={formData.religion}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-primary rounded-md md:mx-10"
            required
          />
        </div>

        <div className="w-full md:w-96 mb-4 md:mb-7">
          <label htmlFor="state" className="block text-sm font-medium text-secondary-100 md:mx-10">
            State:
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-primary rounded-md md:mx-10"
            required
          />
        </div>

        <div className="w-full md:w-96 mb-4 md:mb-7">
          <label htmlFor="lga" className="block text-sm font-medium text-secondary-100 md:mx-10">
            LGA:
          </label>
          <input
            type="text"
            id="lga"
            name="lga"
            value={formData.lga}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-primary rounded-md md:mx-10"
            required
          />
        </div>

        <div className="w-full md:w-96 mb-4 md:mb-7">
          <label htmlFor="community" className="block text-sm font-medium text-secondary-100 md:mx-10">
            Community:
          </label>
          <input
            type="text"
            id="community"
            name="community"
            value={formData.community}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-primary rounded-md md:mx-10"
            required
          />
        </div>
        {/* Add other form fields similarly */}
        <div className="w-full md:w-96 mb-4 md:mb-7">
          <label htmlFor="maritalStatus" className="block text-sm font-medium text-secondary-100 md:mx-10">
            Marital Status:
          </label>
          <select
            id="maritalStatus"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-primary rounded-md md:mx-10"
            required
          >
            <option value="">Select Marital Status</option>
            <option value="married">Married</option>
            <option value="single">Single</option>
            <option value="divorced">Divorced</option>
          </select>
        </div>
        <div className="w-full md:w-96 mb-4 md:mb-7">
          <label htmlFor="qualification" className="block text-sm font-medium text-secondary-100 md:mx-10">
            Qualification:
          </label>
          <select
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-primary rounded-md md:mx-10"
            required
          >
            <option value="">Select Qualification</option>
            <option value="bsc">BSc.</option>
            <option value="hnd">HND</option>
            <option value="nd">ND</option>
            <option value="ond">OND</option>
            <option value="ssce">O'Level</option>

            
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="w-full md:w-20 bg-secondary-200 text-white py-2 px-4 rounded-md hover:bg-primary mx-10"
      >
        Register
      </button>
    </form>
  </div>
  <div className="mt-4">
    <p className="text-sm text-red-500 text-center m-auto mx-10">
      Attention: Please be advised that any form of forgery, misrepresentation, or impersonation while filling out this form is strictly prohibited and may result in legal consequences. We take the security and integrity of our records seriously, and any fraudulent activity will be dealt with accordingly. Thank you for your cooperation and understanding.
    </p>
  </div>
</div>
);
};

export default RegistrationForm;
