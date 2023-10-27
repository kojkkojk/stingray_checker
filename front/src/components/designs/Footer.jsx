import React from 'react';
import neople from '../../src_assets/neople.png'

function Footer() {
  return (
    <div className='footers'>
      <div>
         <span>Powered by</span>
         <a href="https://developers.neople.co.kr" target='_blank' rel="noreferrer noopener">
            <img src={neople} alt="neoplrAPI"  width={"75%"} height={"auto"}/>
         </a>
      </div>
    </div>
  )
}

export default Footer