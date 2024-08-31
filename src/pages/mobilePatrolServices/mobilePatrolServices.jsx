import React from 'react';
import MobilePatrolIntro from '../../components/mobilePatrolServuces/MobilePatrolIntro';
import MobilePatrolFeatures from '../../components/mobilePatrolServuces/MobilePatrolFeatures';
import GetInTouch from '../../components/mobilePatrolServuces/GetInTouch';

const MobilePatrolServices = () => {
  return (
    <div className="w-100%">
      <MobilePatrolIntro />
      <MobilePatrolFeatures />
      <GetInTouch />
    </div>
  );
};

export default MobilePatrolServices;