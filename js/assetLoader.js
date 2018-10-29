const assetLoader = (function() {
    let start = function() {
        let ownerValue = document.getElementById('searchBox');
        let data = document.getElementById('data');

        data.innerText = '';

        HEATAPI.Search.SearchBusinessObject(
            'CI',
            '',
            ['Owner', 'IdentityType'],
            'IdentityType',
            'DESC',
            15000,
            payload => {
                payload.data.forEach(asset => {
                    if (asset.Owner === ownerValue.value) {
                      data.innerText += asset.IdentityType + "\r";
                    }
                });
            }
        );
    };

    return {
        start: start
    };
})();
