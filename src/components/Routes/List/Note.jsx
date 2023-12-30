/* eslint-disable react/prop-types */

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function Note({ Id, Title, Text, DeleteNote, setFavorite, type }) {
  const NoteRef = useRef();
  const Navigate = useNavigate();
  const Delete = () => {
    NoteRef.current.classList.add('out')
    setTimeout(() => DeleteNote(Id), 400);
    clearTimeout();
  };
  const Edit = () =>{
    Navigate(`/edit/${Id}`);
  }
  return (
    <div className="Note" ref={NoteRef}>
      <noscript>Id: {Id}</noscript>
      <h2>{Title}</h2>
      <p>{Text.slice(0, 12).replace(/<[^>]*>/g, "")}...</p>
      <div className="buttons">
        <button title="Edit" onClick={()=>Edit()}>
          <i className="fas fa-pen"></i> Edit
        </button>
        <button id={type==='normal'?"":"favorite"} title="Favorite" onClick={()=> setFavorite(type,Id)}>
          <i className="fas fa-star" ></i> Favorite
        </button>
        <button id="delete" title="Delete" onClick={() => Delete()}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
