const express = require('express'); //
const http = require('http');
const { sendmailfunc } = require('./mailer');
const cors = require('cors')

const app = express();

const server = http.createServer(app);

app.use(cors({origin:'*'}))
app.use(express.json());


app.post('/sendmail', async (req, res, next) => {
    try {
        console.log("hello");
        const { email, name, contact, message, url } = req.body;
        await sendmailfunc({ email, name, contact, message, url });
        return res.json('sendmail')
    } catch (err) {
        console.log("error",err)
        return res.status(400).json(err)
    }
})

server.listen(5000, () => {
    console.log(`Your server is listening on ${5000}`)
})