import "./Styles.css";
export function Styles({ img, alt, name, price }) {
  return (
    <div className="styles">
      <img
        src={img}
        alt={alt}
        onClick={() => {
          alert("mmwebo");
        }}
      />
      <p>{name}</p>
      <span>Precio: ${price}</span>
    </div>
  );
}
