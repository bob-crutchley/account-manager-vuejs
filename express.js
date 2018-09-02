const express = require('express');
const app = express();
const axios = require('axios');
const JSON = require('circular-json');
const accountApi = 'http://localhost:8080/api/v1/account';

app.get('/all', (req, res) => {
    axios.get(accountApi + '/all').then((accounts) => {
        res.send(JSON.stringify(accounts.data));
    }).catch(e => console.log(e));
});

app.delete('/delete/:id', (req, res) => {
    console.log('deleting: ' + req.params.id);
    axios.delete(accountApi + '/delete/' + req.params.id).then((account) => {
        res.send(JSON.stringify(account.data));
    }).catch(e => console.log(e));
});

app.use('/', express.static('dist'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
