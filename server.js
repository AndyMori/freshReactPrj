const express = require('express');
const app = express();
const port = 3000;
const FS = require('fs');
const path = require('path');

// const optionsStatic  = {
//     extensions: ['htm', 'html'],
//     redirect: true
// }

app.use('/', express.static('dist'));
// app.get('/', (req, res) => {
//     var filePath = path.join(__dirname, 'index.html');
//     var stat = FS.statSync(filePath);
//     var readStream = FS.createReadStream(filePath);
//     readStream.pipe(res);
// });

app.listen(port, () => {
    console.log(`Just started application on ${port}`);
});
