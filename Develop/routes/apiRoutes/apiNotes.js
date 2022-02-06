const { createNewNote, validateNote, deleteNote } = require('../../lib/notes');
let { notes }  = require('../../db/db.json');
const router = require('express').Router();