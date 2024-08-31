import React from 'react';
import GuardIntro from '../../components/guardServices/GuardIntro';
import ServiceFeatures from '../../components/guardServices/ServiceFeatures';
import CallToAction from '../../components/guardServices/CallToAction';

const GuardServices = () => {
  return (
    <div className="w-100%">
      <GuardIntro />
      <ServiceFeatures />
      <CallToAction />
    </div>
  );
};

export default GuardServices;