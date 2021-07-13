import React, { useState } from 'react';

function NoteForm(props) {
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.submitFunction(note);
    setNote({
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