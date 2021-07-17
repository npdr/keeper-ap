import React, { useState } from 'react';
import {v4 as uuidv4 } from 'uuid';

function NoteForm(props) {
  const [note, setNote] = useState({
    id: '',
    title: '',
    content: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevState => {
      return {
        ...prevState,
        id: uuidv4(),
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.submitFunction(note);
    setNote({
      id: '',
      title: '',
      content: ''
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name='title'
          onChange={handleChange}
          value={note.title}
          placeholder='Title'
        />
        <textarea
          name='content'
          onChange={handleChange}
          value={note.content}
          placeholder='Take a note...'
          rows='3'
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>

  );
}

export default NoteForm;