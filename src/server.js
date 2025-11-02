const express = require('express');
const pjson = require('../package.json');


const PORT = process.env.PORT || 3000;
const app = express();


app.get('/healthz', (req, res) => {
res.status(200).json({ status: 'ok', service: pjson.name, version: pjson.version });
});


app.get('/api/v1/hello', (req, res) => {
const name = (req.query.name || 'World').toString();
res.json({ message: `Hello, ${name}!` });
});


// Simple root endpoint for ELB/Nginx default checks
app.get('/', (req, res) => {
res.send(`<h1>${pjson.name}</h1><p>Version ${pjson.version}</p>`);
});


if (require.main === module) {
app.listen(PORT, () => console.log(`🚀 ${pjson.name} listening on :${PORT}`));
}


module.exports = app;