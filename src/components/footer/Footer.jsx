import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="copyrights">
        <p>© 2023 Farellandr.com</p>
      </div>
      <div className="socmeds">
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/farellandr/">Instagram</a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/farell-andreano-759772256/">LinkedIn</a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/farellandr">Github</a>
            </li>
            </ul>
      </div>
    </footer>
  );
}
