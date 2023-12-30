/* eslint-disable react/prop-types */

import "../../styles/Write.scss";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Write({ addNote }) {
  const [TitleState, setTitleState] = useState("");
  const Text = useRef();
  const [TextContent, setTextContent] = useState("");
  const Title = useRef();
  const Limit = 1600;
  const navigate = useNavigate();
  const SaveNote = () => {
    addNote(Title, Text);

    navigate("/");
  };
  useEffect(() => {
    setTitleState(Title.current.innerText);
  }, [TitleState]);

  return (
    <div className="write-content">
      <nav>
        <div className="write-effects">
          <button
            id="btn-bold"
            title="Bold"
            onClick={() => {
              document.execCommand("bold", false, null);
            }}
          >
            <i className="fas fa-bold"></i>
          </button>

          <button
            id="btn-italic"
            title="Italic"
            onClick={() => {
              document.execCommand("italic", false, null);
            }}
          >
            <i className="fas fa-italic"></i>
          </button>
          <button
            id="btn-underline"
            title="Underline"
            onClick={() => {
              document.execCommand("underline", false, null);
            }}
          >
            <i className="fas fa-underline"></i>
          </button>
        </div>

        <div className="finish">
          {TitleState.length > 0 ? (
            <button
              id="btn-save"
              title="Save"
              onClick={() => {
                9;
                SaveNote();
              }}
            >
              <i className="fas fa-check"></i>
            </button>
          ) : (
            <button
              id="btn-save"
              disabled
            >
              <i className="fas fa-check"></i>
            </button>
          )}
        </div>
      </nav>
      <div
        className="text-title"
        contentEditable="true"
        ref={Title}
        onInput={(e) => {
          let inputText = e.target.innerText;
          setTitleState(inputText);
        }}
        onKeyDown={(e) => {
          let inputText = e.target.innerText;
          setTitleState(inputText);
          if (e.key == "Enter"){
            e.preventDefault();
          }
          if (inputText.length >= 15 && e.key !== "Backspace") {
            e.preventDefault();
          }
        }}
      >
        Title
      </div>
      <div className="text-container">
        <p
          contentEditable="true"
          onKeyDown={(e) => {
            let inputText = e.target.innerText;
            if (inputText.length >= Limit && e.key !== "Backspace") {
              e.preventDefault();
            }
          }}
          onInput={(e) => {
            let inputText = e.target.innerText;
            setTextContent(inputText);
          }}
          onPaste={(e) => {
            let pastedText = e.clipboardData.getData("text");
            let totalText = e.target.innerText + pastedText;
            if (totalText.length > Limit) {
              e.preventDefault();
            }
          }}
          ref={Text}
          className="text-writable"
        ></p>
      </div>
      <div className="counter">
        {TextContent.length}/{Limit}
      </div>
    </div>
  );
}
