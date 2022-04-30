// window.onload = user_page_load

function user_page_load() {
    history.pushState('', '', '/user')
    periodic_console()
}

function periodic_console() {
    console.log('I\'m also here!')
    setTimeout(periodic_console, 500)
}
