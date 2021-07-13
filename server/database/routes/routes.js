const express = require("express");

module.exports = app => {
    const notes = require("../controllers/notesController");
  
    var router = require("express").Router();
  
    // Create a new Note
    router.post("/", notes.create);
  
    app.use('/api/notes', router);
  };