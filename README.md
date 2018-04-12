# unit-formatter
> Format numbers by adding 'b/k/m' at the end. 1000 => 1k

## Install
```sh
	$ npm install @splash-cli/unit-formatter --save

	#or

	$ yarn add @splash-cli/unit-formatter
```

## Usage
```js
	import uFormatter from '@splash-cli/unit-formatter';

	console.log( uFormatter(1000) ); //=> '1k'
```

## Api
### uFormatter(num)
Returns formatted number into a string.

#### num
Type: `Number`
Number to be formatted

## License
MIT © [Federico Vitale](https://federicovitale.me)