import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Note from '../components/Note';
import NoteForm from '../components/NoteForm';
import api from '../services/api';

function Notes() {
    const [notes, setNotes] = useState([]);

    function addNote(note) {
        api.post('/api/notes', note).then(() => {
            setNotes(prevState => {
                return [...prevState, note];
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    function deleteNote(id) {
        setNotes(prevState => {
            return prevState.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <NoteForm submitFunction={addNote} />
            {notes.map((note, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        deleteFunction={deleteNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default Notes;