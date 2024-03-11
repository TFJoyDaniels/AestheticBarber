import "./Styles/Modal.css";
// eslint-disable-next-line react/prop-types
export function Modal({ isOpen, closeModal }) {
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal-container">
        <p className="close-modal" onClick={closeModal}>
          X
        </p>
        <div className="container">
          <h1>Coming soon</h1>
        </div>
      </div>
    </div>
  );
}
