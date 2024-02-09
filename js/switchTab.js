
/* ----------------------------------------------------------------------------
　マップタブ/グラフタブ 切替機能
---------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the tab links
    document.querySelectorAll('.nav-link').forEach(function(tab) {
        tab.addEventListener('click', function(event) {
            // Hide the map and show the chart when the "Graph" tab is clicked
            if (event.target.getAttribute('href') === '#mygraph') {
                document.getElementById('map').style.display = 'none';
                document.getElementById('canvas-container').style.display = 'block';
            } else {
                // Show the map and hide the chart for other tabs
                document.getElementById('map').style.display = 'block';
                document.getElementById('canvas-container').style.display = 'none';
            }
        });
    });
});

