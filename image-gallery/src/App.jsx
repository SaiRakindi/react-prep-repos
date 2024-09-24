import { useState } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery";
import { createPortal } from "react-dom";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(!showModal)}>Open modal</button>

      {showModal &&
        createPortal(
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              // zIndex: 4,
              background: "gray",
              height: "100%",
              width: "100%",
              opacity: 0.8,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            "showing the modal"
            <button
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              Close
            </button>
          </div>,
          document.getElementById("modal-root")
        )}

      <ImageGallery />
    </div>
  );
}

export default App;
