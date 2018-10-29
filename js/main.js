(function app() { 

    (function checkConnection() {
        let id = document.getElementById('connection');
        HEATAPI.Auth.isSigned(data => {
            if (data) {
                id.innerText = "Connected"
            } else {
                id.innerText = "Disconnected"
            }
        })
    })();
    
    let searchButton = document.getElementById('searchButton');

        searchButton.addEventListener('click', () => {
            assetLoader.start();
    })

})();