import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Section1 from '../sections/Section1';
import Section2 from '../sections/Section2';
import Section3 from '../sections/Section3';


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
              <Section2 data={data}/>
            </div>
            
            <div className="section">
              <Section3 data={data}/>
            </div>
            
            <div className="section">
              <Section1 data={data}/>
            </div>
            
            <div className="section">
              <Section1 data={data}/>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
};