import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Section1 from '../sections/Section1';


export default function Fullpage({data}) {
  return(
    <ReactFullpage
      //fullpage options
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000} /* Options here */

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Section1 data={data}/>
            </div>
            <div className="section">
              <p>Section 2</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
};