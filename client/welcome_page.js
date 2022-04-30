// window.onload = welcome_page_load

function welcome_page_load() {
    history.pushState('', '', '/')
    periodic_console()
}

function periodic_console() {
    console.log('I\'m here!')
    setTimeout(periodic_console, 500)
}

function login_button_func() {
   send_request('GET', '/login', login_handled) 
}

function login_handled(evt, response) {
    document.querySelector('html').innerHTML = response
    history.pushState('', '', '/login')
}

function send_request(method, path, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open(method, path)
    xhr.onload = (evt) => {
        callback(evt, xhr.response)
    }
    xhr.send()
    console.log('Welcome page js')
}
