import React from 'react';

import './blogHeader.less';

export default function BlogHeader({ title }) {
  return <div className="blogHeader">
    <span className="blogHeaderTitle">{title}</span>
  </div>;
}
