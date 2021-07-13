module.exports = mongoose => {
    const Notes = mongoose.model(
        "note",
        mongoose.Schema({
            title: String,
            content: String,
        })
    );

    return Notes;
};