const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.redirect('/welcome_page.html')
})


// API

app.get('/login', (req, res) => {
    res.redirect('/user_page.html')
})

// Page retrievals

app.get('/welcome_page.html', (req, res) => {
    send_file(res, 'welcome_page.html')
})

app.get('/welcome_page.js', (req, res) => {
    send_file(res, 'welcome_page.js')
})

app.get('/user_page.html', (req, res) => {
    send_file(res, 'user_page.html')
})

app.get('/user_page.js', (req, res) => {
    send_file(res, 'user_page.js')
})

function send_file(res, file) {
    res.sendFile(file, {'root': __dirname + '/../client/'})
}


// App start

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})
