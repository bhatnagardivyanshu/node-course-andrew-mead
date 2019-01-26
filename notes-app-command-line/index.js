const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const { title, body } = yargs
    .command('add', 'add a new node', {
        title: {
            describe: 'Title of the note', // description of the argument
            demand: true, // required, fails if add called without title
            alias: 't'  // replace title with t
        }
    })
    .help()
    .argv;
console.log(title, body);