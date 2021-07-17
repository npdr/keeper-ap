import React, { useState } from 'react';

function Note(props) {
    const [editable, setEditable] = useState(false);
    const [note, setNote] = useState({
        title: props.title,
        content: props.content
    });

    function handleEdit() {
        setEditable(!editable);
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevState => {
            return {
                ...prevState,
                [name]: value
            };
        });
    }

    function handleDelete() {
        props.deleteFunction(props.id);
    }

    function handleUpdate() {
        const noteToUpdate = {
            id: props.id,
            title: note.title,
            content: note.content
        };
        props.updateFunction(noteToUpdate);
        setEditable(!editable);
    }

    return (
        <div id={props.id} className="note">
            {editable ?
                <div>
                    <button onClick={handleEdit}>Edit</button>

                    <input
                        name='title'
                        onChange={handleChange}
                        value={note.title}
                    />
                    <textarea
                        name='content'
                        onChange={handleChange}
                        value={note.content}
                        rows='3'
                    />
                    <button onClick={handleUpdate}>Update</button>
                </div>

                :

                <div>
                    <button onClick={handleEdit}>Edit</button>
                    <h1>{note.title}</h1>
                    <p>{note.content}</p>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            }

        </div>
    );
}

export default Note;

