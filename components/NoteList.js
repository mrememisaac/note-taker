import React from 'react';
import NoteCard from './NoteCard';

function NoteList({notesData}) {

  return (
    <div className="row tab-content bg-transparent note-has-grid">
      {notesData.map(note => <NoteCard note={note} key={note.id} />)}
    </div>
  );
}

export default NoteList;
