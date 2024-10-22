export default [
	{
		validator: (name) => name.length > 2,
		message: 'Name must be longer than 2 characters.',
	},
	{
		validator: (name) => name.length < 100,
		message: 'Name must be shorter than 100 characters.',
	},
	{
		validator: (name) => /^[a-zA-Z0-9\- ]+$/.test(name),
		message: 'Name must contain only alphanumeric characters.',
	}
]