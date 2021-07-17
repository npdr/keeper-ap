module.exports = mongoose => {
    var schema = mongoose.Schema({
        id: String,
        title: String,
        content: String,
    });

    const Note = mongoose.model("note", schema);
    return Note;
};