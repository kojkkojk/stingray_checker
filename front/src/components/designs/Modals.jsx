import React from 'react'
import Modal from 'react-modal';
import { RiCloseCircleLine } from 'react-icons/ri';
import { not100Chars } from '../../configs/etc'

const customStyles = {
   content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
   },
};


function Modals(props) {
   return (
      <Modal
         isOpen={props.modalIsOpen}
         onAfterOpen={props.afterOpenModal}
         onRequestClose={props.closeModal}
         style={customStyles}
         ariaHideApp={false}
         contentLabel="Example Modal"
      >
         <div className='opppss'>
            <div className='modalTheme'>
               <p>마을만크 100% 아닌 직업</p>
               <span className='closeBtn' onClick={props.closeModal}><RiCloseCircleLine /></span>
            </div>
            <div className='modal_item'>
               <div className='theadModal'>
                  <span style={{ "color": "#fff" }}>직업</span>
                  <span style={{ "color": "#fff" }}>만크 수치</span>
               </div>
               <div className='tbodyModal'>
                  {not100Chars.length > 0 ?
                     not100Chars.map((v, i) => (
                        <div className='trModal' key={i}>
                           <span>{v["직업"].substring(2)}</span>
                           <span>{v["만크"]}</span>
                        </div>
                     ))
                     : ""}
               </div>
            </div>
         </div>
      </Modal>
   )
}

export default Modals