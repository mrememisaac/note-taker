import React from 'react';
import useNotes from '../hooks/useNotes';
import NoteList from './NoteList';

function App() {
  
  const {notesData, notesDataError} = useNotes();

  if(notesDataError){
    return<div>error: {notesDataError}</div>;
  }
  if(!notesData){
    return <div>...loading </div>;
  }

  return (
    <div className="container">
      <h1><i class="fas fa-book-open"></i> My Note Book</h1>
      <NoteList notesData={notesData}/>
    </div>
  );
}

export default App;
