(function nameLoader() {
    let choices = [];
    HEATAPI.Search.SearchBusinessObject(
        'Frs_CompositeContract_Contact',
        '',
        ['DisplayName'],
        'DisplayName',
        'DESC',
        500,
        payload => {
            payload.data.forEach(name => choices.push(name.DisplayName));

            new autoComplete({
                selector: 'input[name="searchBox"]',
                minChars: 2,
                source: function(term, suggest) {
                    term = term.toLowerCase();
                    let matches = [];
                    for (i = 0; i < choices.length; i++)
                        if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
                    suggest(matches);
                }
            });
        }
    );
})();
