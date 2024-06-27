function initMap() {
    var map = new longdo.Map({
        placeholder: document.getElementById('map')
    });

    // Example coordinates (Bangkok)
    map.location({ lon: 100.5018, lat: 13.7563 }, true);
}

// Initialize the map when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initMap);
