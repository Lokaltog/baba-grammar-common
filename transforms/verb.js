export default {
	'tense-past': it => baba$$mapping(it, [
		// Exceptions
		[/((re)?set)$/i, '$1'],
		['send', 'sent'],
		['show', 'shown'],
		['checkout', 'checked out'],
		['catalog', 'cataloged'],
		// General rules
		[/(.*[aeiouy]{2}[bcdfghjklmnpqrstvwxz])$/i, '$1ed'],
		[/(.*c)$/i, '$1ked'],
		[/(.*)mit$/i, '$1mitted'],
		[/(.*)fer$/i, '$1ferred'],
		[/(.{1,3}[aeiou])([bdfglmnprstz])$/i, '$1$2$2ed'],
		[/(.*[aeiouy]l)$/i, '$1led'],
		[/(.*?[eyo]e)$/i, '$1d'],
		[/(.*)y$/i, '$1ied'],
		[/(.*?)e?$/i, '$1ed'],
	]),
	'tense-past-participle': it => baba$$mapping(it, [
		[/(.*?)[aeiouy]?$/i, '$1en'],
	]),
	'tense-present': it => baba$$mapping(it, [
		// exceptions
		['checkout', 'checks out'],
		// general rules
		[/(.*[^aeiou])y$/i, '$1ies'],
		[/(.*([sc]h|s|ex))$/i, '$1es'],
		[/(.*)$/i, '$1s'],
	]),
	'tense-present-participle': it => baba$$mapping(it, [
		// exceptions
		['checkout', 'checking out'],
		['catalog', 'cataloging'],
		// general rules
		[/(.*[aeiouy]{2}[bcdfghjklmnpqrstvwxz])$/i, '$1ing'],
		[/(.*c)$/i, '$1king'],
		[/(.*)mit$/i, '$1mitting'],
		[/(.*)fer$/i, '$1ferring'],
		[/(.*)ize$/i, '$1ization'],
		[/(.{1,3}[aeiou])([bdfglmnprstz])$/i, '$1$2$2ing'],
		[/(.*[aeiouy]l)$/i, '$1ling'],
		[/(.*?[eyo]e)$/i, '$1ing'],
		[/(.*?)e?$/i, '$1ing'],
	]),
	// Make/become/treat
	'convert-ize': it => baba$$mapping(it, [
		[/(.*)[aeiouy]$/i, '$1ize'],
		[/(.*)$/i, '$1ize'],
	]),
	'convert-agent-noun-latinate': it => baba$$mapping(it, [
		[/(.*?)(e|or)?$/i, '$1or'],
	]),
	'convert-agent-noun-germanic': it => baba$$mapping(it, [
		[/(.*?)e?$/i, '$1er'],
	]),
};
