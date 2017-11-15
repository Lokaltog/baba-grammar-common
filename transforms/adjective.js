export default {
	adjective: {
		convert: {
			'abstract-noun': it => baba$$mapping(it, [
				// general rules
				[/(.*)eme$/i, '$1emacy'],
				[/(.*)([ia])ble$/i, '$1$2bility'],
				[/(.*)([tv])e$/i, '$1$2eness'],
				[/(.*)[aeiouy]$/i, '$1ity'],
				[/(.*)$/i, '$1ity'],
			]),
			adverb: it => baba$$mapping(it, [
				// general rules
				[/(.*)ic$/i, '$1ically'],
				[/(.*)[aeiouy]$/i, '$1y'],
				[/(.*)$/i, '$1ly'],
			]),
		},
	},
};
