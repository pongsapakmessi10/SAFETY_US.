document.getElementById('people-btn').addEventListener('click', function() {
    window.location.href = 'chat.html'; 
});

document.getElementById('home-btn').addEventListener('click', function() {
    window.location.href = 'index.html'; 
});

document.getElementById('map-btn').addEventListener('click', function() {
    window.location.href = 'map.html';
});

function changeLanguage() {
    var language = document.getElementById('language-select').value;
    if (language === 'en') {
        window.location.href = 'setting_en.html';
    } else if (language === 'th') {
        window.location.href = 'setting_th.html';
    }
}

document.getElementById('dark-mode-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.settings-page').classList.toggle('dark-mode');
    document.querySelectorAll('.setting-item').forEach(function(item) {
        item.classList.toggle('dark-mode');
    });
});
