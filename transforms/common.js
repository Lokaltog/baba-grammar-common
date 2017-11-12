module.exports = {
	'prepend-an': it => baba$$re(it, [
		// Exceptions
		[/^(hour)$/i, 'an $1'],
		// General rules
		[/^([aeiou].*)$/i, 'an $1'],
		[/^(.*)$/i, 'a $1'],
	]),
	uppercase: it => it.toString().toUpperCase(),
	lowercase: it => it.toString().toLowerCase(),
	titlecase: it => it.toString().replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1)),
	'uppercase-first': it => { it += ''; return it.charAt(0).toUpperCase() + it.substr(1); },
	constantify: it => it.toString().toUpperCase().replace(/[^a-z0-9]/gi, "_"),
	slugify: it => it.toString().replace(/[^\\w-]/g, "-").toLowerCase(),
};
