(function (Prism) {
	Prism.languages.lango = {
		'whiteSpace': /[ \t\n]+/,
		'number': /\d+\.?\d*/,
		'reference': /@[a-zA-Z0-9_]+/,
		'operator': /[+\-/*%]/,
		'cast': /\([a-z]+\)/,
		'parentheses': /[\(\)]/,
		'coma': /(,)/,
		'equalityOperator': /(=|=>|=>>)/,
		'funct': /(duree)/,
	};
}(Prism));