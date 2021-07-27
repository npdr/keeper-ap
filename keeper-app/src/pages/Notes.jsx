import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Note from '../components/Note/Note';
import NoteForm from '../components/NoteForm/NoteForm';
import api from '../services/api';

function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        loadNotesFromDB();
    }, []);

    function loadNotesFromDB() {
        api.get('/auth/notes', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }).then((res) => {
            const notes = res.data;
            setNotes(notes);
        }).catch((err) => {
            console.log(err);
        });
    };

    function addNote(note) {
        api.post('/auth/notes', note, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }).then(() => {
            setNotes(prevState => {
                return [...prevState, note];
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    function deleteNote(id) {
        api.delete('/auth/notes/' + id, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }).then(() => {
            setNotes((prevState) => {
                return prevState.filter((note) => {
                    return note.id !== id;
                });
            });

        }).catch((err) => {
            console.log(err);
        });
    }

    function updateNote(note) {
        api.put('/auth/notes/' + note.id, note, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }).then((res) => {
            setNotes(() => {
                return notes.map((foundNote) => {
                    if (foundNote.id === note.id) {
                        foundNote.title = res.data.title;
                        foundNote.content = res.data.content;
                    }
                    return foundNote;
                })
            });

        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
            <Header />
            <NoteForm submitFunction={addNote} />
            {notes.map((note) => {
                return (
                    <Note
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        content={note.content}
                        deleteFunction={deleteNote}
                        updateFunction={updateNote}
                    />
                );
            })}
        </div>
    );
}

export default Notes;