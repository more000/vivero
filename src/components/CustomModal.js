import React from 'react';
import Modal from '@material-ui/core/Modal';

export default function SimpleModal({open, close, content}) {
  return (
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {content}
      </Modal>
  );
}