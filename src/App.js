import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1663600902149!6m8!1m7!1sCAoSLEFGMVFpcE9mNTVMMVBWLVB5Zkl5cXpyU2FmQzZqNXJJS1BhWldKNXRwZDZx!2m2!1d37.25860432904193!2d55.15106112381054!3f88!4f0!5f0.7820865974627469"
        width="700"
        height="900"
        style={{ border: 0 }}
        allowFullScreen=""
        // loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default App;
