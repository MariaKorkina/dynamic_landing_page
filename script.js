// select DOM elements 
const time = document.getElementById('time'),
	  greeting = document.getElementById('greeting'),
	  name = document.getElementById('name'),
	  focus = document.getElementById('focus')

// function which shows time
function showTime () {
	let today = new Date(),
		hours = today.getHours(),
		minutes = today.getMinutes(),
		seconds = today.getSeconds()

	// AM or PM
	const amPm = hours>=12 ? 'PM' : 'AM'
	const showAmPm = true;

	// 12 hour Format
	hours = hours%12 || 12

	// output time
	time.innerHTML = `${hours}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)} ${showAmPm ? amPm : ''}`

	// call every second
	setTimeout(showTime, 1000);
}

// function which add zeros to the end of seconds when it's 60
function addZero (n) {
	return (parseInt(n,10) < 10 ? '0' : '') + n
}

// function which sets background and greeting
function setBgGreeting () {
	let today = new Date(),
		hours = today.getHours()

		if (hours<12) {
			//morning
			document.body.style.backgroundImage = "url('images/morning.jpg')"
			greeting.textContent='Доброе утро'
		} else if (hours<18) {
			//afternoon
			document.body.style.backgroundImage = "url('images/afternoon.jpg')"
			greeting.textContent='Добрый день'

		} else if (hours<23) {
			//evening
			document.body.style.backgroundImage = "url('images/night.jpg')"
			greeting.textContent='Добрый вечер'
			document.body.style.color='white'


		}
}

// function which gets name
function getName () {
	//check is it something in local storage
	if (localStorage.getItem('name')===null) {
		name.textContent='[Как тебя зовут?]'
	} else {
		name.textContent=localStorage.getItem('name')
	}
}

// function which sets name
function setName (e) {
	//check events
	if (e.type==='keypress') {
	//is enter pressed (different browsers)
	if (e.which===13 || e.keyCode===13) {
		localStorage.setItem('name', e.target.innerText)
		name.blur()
	}
	} else {
		localStorage.setItem('name', e.target.innerText)
	}
}


// function which gets focus
function getFocus () {
	//check is it something in local storage
	if (localStorage.getItem('focus')===null) {
		focus.textContent='[На чем ты фокусируешься сегодня?]'
	} else {
		focus.textContent=localStorage.getItem('focus')
	}
}

// function which sets focus
function setFocus (e) {
	//check events
	if (e.type==='keypress') {
	//is enter pressed (different browsers)
	if (e.which===13 || e.keyCode===13) {
		localStorage.setItem('focus', e.target.innerText)
		focus.blur()
	}
	} else {
		localStorage.setItem('focus', e.target.innerText)
	}
}

name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)
focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)


// run
showTime()
setBgGreeting()
getName()
getFocus()