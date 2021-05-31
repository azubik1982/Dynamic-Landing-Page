// DOM Elements
const doc = document,
      time = doc.getElementById('time'),
      greeting = doc.getElementById('greeting'),
      name = doc.getElementById('name'),
      focus = doc.getElementById('focus'),
      showAmPm = true;

let btn24hrs = doc.getElementById('btn24hr'),
    btnBlck = doc.getElementById('btnBlack');

// Show Time
function showTime() {
  let today = new Date(),
  //let today = new Date(2021, 10, 06, 20, 10, 51),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  if (btn24hrs.classList.contains('active')) {
    // 24hr Format
    hour = hour;
    time.innerHTML = `${hour}<span>:</span> ${addZero(min)}<span>:</span> ${addZero(sec)}`;
  } else {
    // 12hr Format
    hour = hour % 12 || 12;
    time.innerHTML = `${hour}<span>:</span> ${addZero(min)}<span>:</span> ${addZero(sec)} ${showAmPm ? amPm : ''}`;
  }
  setTimeout(showTime, 1000);
}

//btns - click
btn24hrs.addEventListener('click', function() {
  btn24hrs.classList.toggle('active');
});

btnBlck.addEventListener('click', function() {
  btnBlck.classList.toggle('active');
});

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
      hour = today.getHours();

  if (btnBlck.classList.contains('active') === true) {
    doc.body.style.backgroundImage = "url('img/night.jpg')";
    doc.body.style.color = 'white';
    if (hour < 12) {
      greeting.textContent = 'Good Morning, ';
    } else if (hour < 18) {
      greeting.textContent = 'Good Afternoon, ';
    } else {
      greeting.textContent = 'Good Evening, ';
    }
  } else {
     if (hour < 12) {
      doc.body.style.backgroundImage = "url('img/morning.jpg')";
      greeting.textContent = 'Good Morning, ';
    } else if (hour < 18) {
      doc.body.style.backgroundImage = "url('img/afternoon.jpg')";
      greeting.textContent = 'Good Afternoon, ';
    } else {
      doc.body.style.backgroundImage = "url('img/night.jpg')";
      greeting.textContent = 'Good Evening, ';
      doc.body.style.color = 'white';
    }
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
      name.textContent = '[Enter Name]';
  } else {
      name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
      localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
      focus.textContent = '[Enter Focus]';
  } else {
      focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
      localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgGreet();
getName();
getFocus();
