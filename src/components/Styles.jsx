import "./Styles/Styles.css";

// eslint-disable-next-line react/prop-types
export function Styles({ img, alt, name, price }) {
  return (
    <div className="styles-container">
      <div className="styles">
        <img src={img} alt={alt} />
        <div className="styles-info">
          <p>{name}</p>
          <span>Precio: ${price}</span>
        </div>
      </div>
    </div>
  );
}
