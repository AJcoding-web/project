
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.fields([{ name: 'photo' }, { name: 'video' }]), (req, res) => {
    const text = req.body.text;
    res.send('Files and text uploaded successfully!');
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
