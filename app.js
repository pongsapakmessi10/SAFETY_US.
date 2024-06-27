document.getElementById('people-btn').addEventListener('click', function() {
  window.location.href = 'chat.html'; 
});

document.getElementById('home-btn').addEventListener('click', function() {
  window.location.href = 'index.html'; 
});

document.getElementById('map-btn').addEventListener('click', function() {
  window.location.href = 'map.html';
});

function updateTime() {
  const timeElement = document.getElementById('time');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  
  timeElement.textContent = `${hours}:${minutes}`;
}

function goToHome() {
  window.location.href = 'index.html'; 
}


updateTime();

setInterval(updateTime, 1000);
