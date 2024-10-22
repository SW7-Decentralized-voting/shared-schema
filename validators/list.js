export default [
	{
		validator: (list) => /^[A-Z]$/.test(list),
		message: 'List must be a one letter (uppercase) string.',
	}
]