import React from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import SettingsForm from '../SettingsForm';

function SettingsModal({
  toggleShow, show, handelStartAuto,
}) {
  return (
    <Modal show={show} onHide={toggleShow}>
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SettingsForm handelStartAuto={handelStartAuto} />
      </Modal.Body>
    </Modal>
  );
}

SettingsModal.propTypes = {
  toggleShow: PropTypes.func.isRequired,
  handelStartAuto: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

SettingsModal.defaultProps = {
  show: true,
};

export default SettingsModal;
