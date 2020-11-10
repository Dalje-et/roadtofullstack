import React from 'react';

import './twoColumnSection.less';

export default function TwoColumnSection({contentLeft, contentRight}) {
  return (
    <div className="twoColumnSectionContainer">
      <div className="left">
        {contentLeft}
      </div>
      <div className="right">
        {contentRight}
      </div>
    </div>
  );
}
