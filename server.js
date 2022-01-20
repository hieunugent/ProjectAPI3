const express = require('express');
const cors = require('cors');
const PORT = 8000;
require('dotenv').config();
const axios = require('axios');

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.json("Hello World");
})
app.get("/words", (req, res) => {
    console.log(req)
    const options = {
        method: "GET",
        url: "https://twinword-word-association-quiz.p.rapidapi.com/type1/",
        params: { level: 1, area: "sat" },
        headers: {
            "x-rapidapi-host": "twinword-word-association-quiz.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        },
    };

    axios
        .request(options)
        .then((response) => {
            res.json(response.data);

        })
        .catch((error) => {
            console.error(error);
        });


})
app.listen(PORT, () => console.log(`Server listening to PORT", ${PORT}`));