// /* eslint-disable react/jsx-no-target-blank */
import "./Styles/Header.css";

export function Header() {
  return (
    <header>
      <div className="header-container">
        <h1>Bienvenid@ a Aesthetic Barber</h1>
        <a
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=%2B5350046951&text&type=phone_number&app_absent=0"
          rel="noreferrer"
        >
          Reserva Ya
        </a>
        <p>Explora nuestra tienda</p>
      </div>
    </header>
  );
}
