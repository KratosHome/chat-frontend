const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());
const port = 3000;
app.use('/', express.static(path.join(__dirname, 'src/')));
app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
});
