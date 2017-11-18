var letter = {
    vowels: [
        'а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 
    ],
    consonants: [
        'б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ' 
    ],
    isVowel: function (string) {
        return _.includes(this.vowels, string);
    },
    isConsonant: function (string) {
        return _.includes(this.consonants, string);
    }
};

var postfixes = {
    _unisex: [
        'ник', 'ко', 'енко', 'як', 'чак', 'чук', 'ец', 'ич', 'ыч', 'ян', 'евич', 'ович', 'юк', 'ник', 'ук', 'юк', 'як', 'ких', 'ица', 'юта', 'ич', 'ных', 'огон', 'кис', 'алог', 'ик', 'да', 'ас', 'ак', 'ула'
    ],
    _male: [
        'ов', 'ев', 'ёв', 'ин', 'ицкий', 'ецкий', 'ицын', 'вой', 'ный'
    ],
    _female: [
        'ова', 'ева', 'ёва', 'овая', 'евая', 'ицкая', 'ецкая', 'ицкая', 'ицына', 'вая', 'ная'
    ],
    get female () {
        return this._female.concat(this._unisex);
    },
    get male () {
        return this._male.concat(this._unisex);
    },
    get all () {
        return this._unisex.concat(this._male).concat(this._female);
    },
}

function Postfix (text, rule) {
	return {
		text: text,
		rule: rule,
	}
}
