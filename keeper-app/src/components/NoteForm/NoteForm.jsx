import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import { v4 as uuidv4 } from 'uuid';
import './styles.css';

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

  const [isFormClicked, setIsFormClicked] = useState(false);

  function handleFormClick() {
    setIsFormClicked(true);
  }

  return (
    <div>
      <form className="create-note">
        {isFormClicked &&
          <input
            name='title'
            onChange={handleChange}
            value={note.title}
            placeholder='Title'
          />}
        <textarea
          name='content'
          onChange={handleChange}
          onClick={handleFormClick}
          value={note.content}
          placeholder='Take a note...'
          rows={isFormClicked ? 3 : 1}
        />
        <Zoom in={isFormClicked}>
          <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>

  );
}

export default NoteForm;