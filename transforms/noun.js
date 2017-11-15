export default {
	plural: it => baba$$mapping(it, [
		// exceptions
		['sheep', 'sheep'],
		[/(.*)man$/i, '$1men'],
		[/(person)$/i, 'people'],
		// general rules
		[/(.*)ife$/i, '$1ives'],
		[/(.*)ex$/i, '$1ices'],
		[/(.*)([^ou])y$/i, '$1$2ies'],
		[/(.*)([sc]h|s)$/i, '$1$2es'],
		[/(.*)/i, '$1s'],
	]),
};
