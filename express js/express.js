const express = require('express')

const app = express()
const PORT = 5000
 
// Array of gamers (books)
const books  = [
    { id: 1, title: 'free fire', author: 'shivendra' },
    { id: 2, title: 'BGMI', author: 'Aditya' },
]

// Route: sab gamers dikhana
app.get('/gamer', (req, res) => {
    res.setHeader('pro', 'shivendra');   
    res.json(books);                     
});

app.get('/gamer/:id', (req, res) => {
    const id = Number(req.params.id);              
    const book = books.find((e) => e.id === id);   

    if (!book) {
        return res
            .status(404)
            .json({ error: `gamer does not exist with id ${id}` });
    }

    return res.json(book);
});

app.listen(PORT, () => console.log(`🚀 Server is running on PORT ${PORT}`));
