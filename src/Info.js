import React, { useState } from 'react';
import Modal from 'react-modal';
import './style/Info.css'

// Define your modal content
const InfoFrame = ({ isOpen, onClose }) => {
    const modalStyles = {
        content: {
          width: '200px',
          margin: 'auto',
        },
        overlay: {
            backgroundColor: 'transparent', // Make the overlay transparent
        },
      };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyles}>
        <h2>Popup Window</h2>
        <p>This is the content of the popup window.</p>
        <button onClick={onClose}>Close</button>
        </Modal>
    );
};

function InfoButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return(
    <div>
      <a className='info-button' href='#' onClick={openModal}>
        ?
      </a>
      <InfoFrame isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default InfoButton;