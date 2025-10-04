import React from "react";

const ModalContainer = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal__dialog">
        <button
          className="btn btn--ghost modal__close"
          onClick={onClose}
          aria-label="Fermer"
        >
          ✕
        </button>
        <h3 className="modal__title">{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ModalContainer;
