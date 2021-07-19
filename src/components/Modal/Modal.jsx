import React from 'react';
import "./modalStyle.scss";


const Modal = (props) => {

  const {id, toggleIsOpenModal, coment, urlImage } = props
  return (
    <div className="modalOverlay" onClick={() => toggleIsOpenModal(id)}>
      <div className="modalwindow">
        <div className="modalwindow__container">
        <div><img  className="modalwindow__img" src={urlImage} alt="user" /></div>
        <div>{coment}</div>  
        </div>   
      </div>
    </div>
  )
}

export default Modal

