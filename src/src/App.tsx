import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  return (
    <main className="app">
      <header className="header">
        <div className="logo">RAIDER<span> AI</span></div>
        <div className="status">
          <span className="status-dot"></span>
          FOUNDATION
        </div>
      </header>

      <section className="welcome">
        <div className="symbol">R</div>
        <h1>RAIDER AI</h1>
        <p>Your intelligent business and productivity assistant.</p>
        <div className="notice">
          <span>STAGE 1</span>
          <p>Application foundation is being built.</p>
        </div>
      </section>

      <footer className="footer">
        <input
          type="text"
          placeholder="Your conversation starts here..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          disabled
        />
        <button disabled>Send</button>
        <small>AI connection will be activated in a later stage.</small>
