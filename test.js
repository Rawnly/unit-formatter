import test from 'ava';
import uFormatter from '.';

test('Testing: Formatter', t => {
	const formatted = uFormatter(1000).toUpperCase();
	const expected = '1K';

	t.is(formatted, expected);
})