const express = require("express");

module.exports = app => {
    const notes = require("../controllers/notesController");
  
    var router = require("express").Router();
  
    // Create a new Note
    router.get("/", notes.findAll)
    router.post("/", notes.create);
    router.put("/:id", notes.edit);
    router.delete("/:id", notes.remove);
  
    app.use('/api/notes', router);
  };