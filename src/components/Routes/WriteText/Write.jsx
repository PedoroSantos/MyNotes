/* eslint-disable react/prop-types */
import "../../../styles/Write.scss";
import {Paragraph} from "./Paragraph"
import { useRef, useState, useEffect } from "react";
export default function Write({Notes}) {
    
  const Text = useRef();
  const [TextContent, setTextContent] = useState("");
  const Title = useRef();
  const Limit = 1600;


  const SaveNote = () =>{
    var obj = {
        id: Notes.length + 1,
        title: Title.current.innerText,
        text: Text.current.innerText,
    }
    Notes.push(obj);
  }

  return (
    <div className="write-content">
      <nav>
        <div className="write-effects">
          <button id="btn-bold" title="Bold">
            <i className="fas fa-bold"></i>
          </button>
          <button id="btn-italic" title="Italic">
            <i className="fas fa-italic"></i>
          </button>
          <button id="btn-underline" title="Underline">
            <i className="fas fa-underline"></i>
          </button>
        </div>
        <div className="finish">
          <button
            id="btn-save"
            title="Save"
            onClick={() => {
              SaveNote();
              console.log(Notes)
            }}
          >
            <i className="fas fa-check"></i>
          </button>
        </div>
      </nav>
      <div className="text-title" contentEditable="true" ref={Title}>
        Title
      </div>
      <div className="text-container">
        <Paragraph setTextContent={setTextContent} Limit={Limit}></Paragraph>
      </div>
      <div className="counter">
        {TextContent.length}/{Limit}
      </div>
    </div>
  );
}


