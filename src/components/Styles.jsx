import "./Styles/Styles.css";
import { useState } from "react";
import { Modal } from "./Modal";

// eslint-disable-next-line react/prop-types
export function Styles({ img, alt, name, price }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="styles-container">
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
      <div className="styles">
        <img onClick={() => setIsModalOpen(true)} src={img} alt={alt} />
        <div className="styles-info">
          <p>{name}</p>
          <span>Precio: ${price}</span>
        </div>
      </div>
    </div>
  );
}
