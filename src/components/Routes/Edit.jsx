/* eslint-disable react/prop-types */

import "../../styles/Write.scss";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit({ Notes, UpdateNote }) {
  let disable = false;
  const { id } = useParams();
  const Text = useRef();
  const [TextContent, setTextContent] = useState("");
  const Title = useRef();
  const Limit = 1600;
  const navigate = useNavigate();
  const SaveNote = () => {
    UpdateNote(id, Title, Text);
    navigate("/");
  };
  console.log(id)
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
          <button
            id="btn-save"
            title="Save"
            {...disable?'disabled':''}
            onClick={() => {
              SaveNote();
            }}
            >
            <i className="fas fa-check"></i>
           
          </button>
        </div>
      </nav>
      <div
        className="text-title"
        contentEditable="true"
        ref={Title}
        onKeyDown={(e) => {
          let inputText = e.target.innerText;
          if (inputText.length >= 15 && e.key !== "Backspace") {
            e.preventDefault();
          }
          if (e.key == "Enter"){
            e.preventDefault();
          }
          if (inputText.length <= 0){
            disable = true;
          } else disable = false;
        }}
      >
        {Notes[id-1].title}
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
          dangerouslySetInnerHTML={{ __html: Notes[id-1].text }}></p>
      </div>
      <div className="counter">
        {TextContent.length}/{Limit}
      </div>
    </div>
  );
}
