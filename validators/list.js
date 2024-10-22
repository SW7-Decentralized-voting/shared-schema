export default [
	{
		validator: (list) => /^[A-ZÆØÅ]$/.test(list),
		message: 'List must be a one letter (uppercase) string.',
	}
]