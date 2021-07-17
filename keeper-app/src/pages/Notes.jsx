import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Note from '../components/Note';
import NoteForm from '../components/NoteForm';
import api from '../services/api';

function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        loadNotesFromDB();
    }, []);

    function loadNotesFromDB() {
        api.get('/api/notes').then((res) => {
            const notes = res.data;
            setNotes(notes);
        }).catch((err) => {
            console.log(err);
        });
    };

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
        api.delete('/api/notes/' + id).then((res) => {
            setNotes((prevState) => {
                return prevState.filter((note) => {
                    return note.id !== id;
                });
            });

        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
            <Header />
            <NoteForm submitFunction={addNote} />
            {notes.map((note, index) => {
                return (
                    <Note
                        key={note.id}
                        id={note.id}
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