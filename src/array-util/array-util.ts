import {Flatten} from "./i-array-flattenable";
import {MapToObjectCallbackResult} from "./map-to-object-callback-result";

// tslint:disable:no-any

/**
 * Flattens the array with the given recursive depth
 * @param {T[]} arr
 * @returns {T[]}
 */
export function flatten<T> (arr: T): Flatten<T> {
	const target: any[] = [];
	if (!Array.isArray(arr)) return <Flatten<T>> arr;

	flattenIntoArray(target, arr, Infinity);
	return <Flatten<T>><any> target;
}

/**
 * Sorts the given array by the given key
 * @param {T[]} arr
 * @param {string} key
 * @returns {T[]}
 */
export function sortByKey<T> (arr: T[], key: keyof T): T[] {
	return arr.sort((a, b) => {
		if(a[key] < b[key]) return -1;
		if(a[key] > b[key]) return 1;
		return 0;
	});
}

/**
 * Flattens the given source array into a new array
 * @param {T[]} target
 * @param {T[]} source
 * @param {number} [depth=1]
 * @param {number} [start=0]
 * @returns {number}
 */
function flattenIntoArray<T> (target: T[], source: T[], depth: number = 1, start: number = 0): number {
	let targetIndex = start;
	let sourceIndex = 0;
	const sourceLength = source.length;
	while (sourceIndex < sourceLength) {
		const element = source[sourceIndex];

		if (depth > 0 && Array.isArray(element)) {
			targetIndex = flattenIntoArray(target, element, depth - 1, targetIndex);
		}

		else {
			target[targetIndex] = element;
			targetIndex++;
		}
		sourceIndex++;
	}
	return targetIndex;
}

/**
 * Maps the given array into a new object
 * @param {T[]} arr
 * @param {Function} callback
 * @returns {object}
 */
export function mapToObject<T> (arr: T[], callback: (element: T, index: number, arr: T[]) => MapToObjectCallbackResult) {
	return Object.assign({}, ...arr.map(callback));
}