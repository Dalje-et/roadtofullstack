import React from 'react';

import './blogHeader.less';

export default function BlogHeader({ title }) {
  return <div className="blogHeader">
    <p className="blogHeaderTitle">{title}</p>
  </div>;
}
