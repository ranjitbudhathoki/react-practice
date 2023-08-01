import { useState } from "react";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="header">
      <h1>Booker - List of Fav Books</h1>
      <button
        className="btn-add"
        onClick={() => setShowModal((showModal) => !showModal)}
      >
        Add
      </button>
    </header>
  );
}
