/* eslint-disable react/prop-types */
import '../../styles/List.scss'
import Note from './List/Note'
export default function Favorites({ itens, DeleteNote, setFavorite }) {

  return (

    <main className='list-content'>
      {itens.length > 0 ? (
        itens.filter(note=>note.type === "favorite").map((note, index) => {
          return <p key={index}><Note  Id={note.id} Title={note.title} Text={note.text} DeleteNote={DeleteNote} setFavorite={setFavorite} type={note.type}></Note></p>;
        })
      ) : (
        <p className='error'>Não há notas favoritadas!</p>
      )}
    </main>
  );
}
