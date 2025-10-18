import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);              // single selection
  const [enableMultiSelection, setEnableMultiSelection] = useState(false); // toggle mode
  const [multiple, setMultiple] = useState([]);                // multi selection

  // Handle single selection
  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id);
  };

  // Handle multi selection (modern style)
  const handleMultiSelection = (id) => {
    setMultiple((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="acc-wrapper">
      <button
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
          setSelected(null);   // reset single selection
          setMultiple([]);     // reset multi selection
        }}
        className="toggle-btn"
      >
        {enableMultiSelection ? "Switch to Single Selection" : "Enable Multi Selection"}
      </button>

      <div className="accordion">
        {data?.length > 0 ? (
          data.map((item) => {
            const isOpen = enableMultiSelection
              ? multiple.includes(item.id)
              : selected === item.id;

            return (
              <div key={item.id} className="item">
                <div
                  className="title"
                  onClick={() =>
                    enableMultiSelection
                      ? handleMultiSelection(item.id)
                      : handleSingleSelection(item.id)
                  }
                >
                  <h3>{item.question}</h3>
                  <span>{isOpen ? "-" : "+"}</span>
                </div>

                {isOpen && <div className="acc-content">{item.answer}</div>}
              </div>
            );
          })
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
