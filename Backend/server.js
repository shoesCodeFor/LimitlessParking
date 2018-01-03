const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log('Listening on http://localhost:3000')
});

app.get('/', (res, err){

    res.send('Its Working');

});
