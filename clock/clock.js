var span = document.getElementById('span');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = h + ":" + m + ":" + s;
}

setInterval(time, 1000);

function changeBg() {
    var now = new Date();
    var hours = now.getHours();

        document.body.style.backgroundImage ="url('" + hours + ".png')"

 }
changeBg();
 setInterval(function(){ changeBg(); }, 3600000);
