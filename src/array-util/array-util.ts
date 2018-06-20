import {Flat} from "./i-array-flattenable";

// tslint:disable:no-any

/**
 * Flattens the array with the given recursive depth
 * @param {T[]} arr
 * @returns {T[]}
 */
export function flat<T> (arr: T): Flat<T> {
	const target: any[] = [];
	if (!Array.isArray(arr)) return <Flat<T>> arr;

	flattenIntoArray(target, arr, Infinity);
	return <Flat<T>><any> target;
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