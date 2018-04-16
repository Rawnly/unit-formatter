'use strict';

/**
 * @name uFormatter
 * @description Format units
 * @example
 * uFormatter(1000) //=> 1k
 * 
 * @param {Number} num 
 */
export default function(num) {
	if (num > 999999999) {
		if (num % 1000000000 === 0) {
			return (num / 1000000000) + 'B';
		}
		return (num / 1000000000).toFixed(1) + 'B';
	}

	if (num > 999999) {
		if (num % 1000000 === 0) {
			return (num / 1000000) + 'M';
		}
		return (num / 1000000).toFixed(1) + 'M';
	}

	if (num > 999) {
		if (num % 1000 === 0) {
			return (num / 1000) + 'K';
		}
		return (num / 1000).toFixed(1) + 'K';
	}

	return num;
};