// Clock
const deg = 6;
       const hr = document.querySelector(`#hr`);
       const mn = document.querySelector(`#mn`);
       const SC = document.querySelector(`#SC`);

       setInterval(()=>{
           let day =new Date();
           let hh = day.getHours() * 30;
           let mm = day.getMinutes() * deg;
           let ss = day.getSeconds() * deg;

           hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
           mn.style.transform = `rotateZ(${mm}deg)`;
           SC.style.transform = `rotateZ(${ss}deg)`;
       })
// validation
if (document.addEventListener) {
document.addEventListener("DOMContentLoaded", function() {
    load_home(null, 'pages/home.html');
}, false);
}

function load_home(e, file) {
(e || window.event).preventDefault(); // prevents anchor doing its thing
var con = document.getElementById('page-loader'), // assigns page-loader to con
    xhr = new XMLHttpRequest(); // assigns a new HTTP request to xhr
xhr.onreadystatechange = function(e) {
    if (xhr.readyState == 4 /*&& xhr.status == 200*/ ) {
    con.innerHTML = xhr.responseText;
    }
}

xhr.open("GET", file);
xhr.setRequestHeader('Content-type', 'text/html');
xhr.send();
}

// toggle menu
function toggle(){
    var sec = document.getElementById('sec');
    var nav = document.getElementById('navigation');
    sec.classList.toggle('active');
    nav.classList.toggle('active');
}