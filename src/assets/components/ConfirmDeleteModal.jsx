
import React from "react";

const ConfirmDeleteModal = ({ onClose, onConfirm }) => {
  return (
    <div className="modal-overlay">
      <div className="modal confirm-modal">
        <span className="warning-icon">❗</span>
        <h3>Are you sure</h3>
        <p>You won't be able to revert this!</p>
        <div className="modal-actions">
          <button onClick={onClose} className="cancel-btn">Cancel</button>
          <button onClick={onConfirm} className="delete-btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
