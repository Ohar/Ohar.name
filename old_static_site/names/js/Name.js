function Name () {
    var gender = $('.j-gender:checked').val(),
        type = $('.j-type:checked').val(),
        firstnamesDict = getFirstnamesDict(),
        surnamesDict = getFirstnamesDict();
    
    return {
        firstname: getName(),
        surname: getSurname(),
        get fullname () {
            return this.firstname + ' ' + this.surname;
        },
    };

    function getName () {
        return _.sample(firstnamesDict);
    }

    function getSurname () {
        var basis = _.sample(surnamesDict),
            postfix = _.sample(postfixes[gender]);
            
        while (basis.length
            && !letter.isConsonant(basis[basis.length - 1])
        ) {
            basis = basis.substring(0, basis.length - 1);
        }
        
        return basis + postfix;
    }

    function getSurnamesDict () {
    }

    function getFirstnamesDict () {
        var names = [
                NAMES_SLAVIC_FEMALE, 
                NAMES_SLAVIC_MALE, 
                NAMES_SOVIET_FEMALE, 
                NAMES_SOVIET_MALE,
                NAMES_GREEK_FEMALE, 
                NAMES_GREEK_MALE,
            ],
            dict = [];
        
        if (gender !== 'all') {
            names = _.filter(names, {gender: gender});
        }
        
        if (type !== 'all') {
            names = _.filter(names, {type: type});
        }
        
        dict = _.flatten(_.map(names, 'names'))
        
        return dict;
    }
}
