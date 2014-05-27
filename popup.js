// found in the LICENSE file.
var x=document.getElementById("one");
getLocation();
function getLocation()
{
  if (navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else{
    x.innerHTML="Geolocation is not supported by this browser.";
    alert("no");
      }
}
function showPosition(position)
{
  alert("si");
  x.innerHTML="Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
