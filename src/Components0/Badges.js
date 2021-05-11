import React from 'react';

const Badges = ( {badgeList }) => (
  <>
    {
      badgeList.map((badge, key) => (

      <p key={key}>{badge}</p>

      ))}

  </>

);

export default Badges;
