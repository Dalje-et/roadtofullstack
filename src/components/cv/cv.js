import React from 'react';

// import TwoColumnSection from 'src/components/TwoColumnSection/twoColumnSection';

export default function CV() {
  
  return (
    <TwoColumnSection
      contentLeft={(
        <h1>This is a test</h1>
      )}
      contentRight={(
        <p>This is a bit longer test</p>
      )}
    />
  );
}
