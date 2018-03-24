import {IArrayUtil} from "./i-array-util";
// tslint:disable:no-magic-numbers
// tslint:disable:no-any

/**
 * A class that helps with working with arrays
 */
export class ArrayUtil implements IArrayUtil {
	/**
	 * Flattens the array with the given recursive depth
	 * @param {T[]} arr
	 * @param {number} depth
	 * @returns {T[]}
	 */
	public flatten<T> (arr: T[][][][][][][][], depth: 0): T[][][][][][][][];
	public flatten<T> (arr: T[][][][][][][][], depth: 1): T[][][][][][][];
	public flatten<T> (arr: T[][][][][][][][], depth: 2): T[][][][][][];
	public flatten<T> (arr: T[][][][][][][][], depth: 3): T[][][][][];
	public flatten<T> (arr: T[][][][][][][][], depth: 4): T[][][][];
	public flatten<T> (arr: T[][][][][][][][], depth: 5): T[][][];
	public flatten<T> (arr: T[][][][][][][][], depth: 6): T[][];
	public flatten<T> (arr: T[][][][][][][][], depth: 7): T[];
	public flatten<T> (arr: T[][][][][][][][], depth?: number): T[][][][][][][];

	public flatten<T> (arr: T[][][][][][][], depth: 0): T[][][][][][][];
	public flatten<T> (arr: T[][][][][][][], depth: 1): T[][][][][][];
	public flatten<T> (arr: T[][][][][][][], depth: 2): T[][][][][];
	public flatten<T> (arr: T[][][][][][][], depth: 3): T[][][][];
	public flatten<T> (arr: T[][][][][][][], depth: 4): T[][][];
	public flatten<T> (arr: T[][][][][][][], depth: 5): T[][];
	public flatten<T> (arr: T[][][][][][][], depth: 6): T[];
	public flatten<T> (arr: T[][][][][][][], depth: 7): T[];
	public flatten<T> (arr: T[][][][][][][], depth?: number): T[][][][][][];

	public flatten<T> (arr: T[][][][][][], depth: 0): T[][][][][][];
	public flatten<T> (arr: T[][][][][][], depth: 1): T[][][][][];
	public flatten<T> (arr: T[][][][][][], depth: 2): T[][][][];
	public flatten<T> (arr: T[][][][][][], depth: 3): T[][][];
	public flatten<T> (arr: T[][][][][][], depth: 4): T[][];
	public flatten<T> (arr: T[][][][][][], depth: 5): T[];
	public flatten<T> (arr: T[][][][][][], depth: 6): T[];
	public flatten<T> (arr: T[][][][][][], depth: 7): T[];
	public flatten<T> (arr: T[][][][][][], depth?: number): T[][][][][];

	public flatten<T> (arr: T[][][][][], depth: 0): T[][][][][];
	public flatten<T> (arr: T[][][][][], depth: 1): T[][][][];
	public flatten<T> (arr: T[][][][][], depth: 2): T[][][];
	public flatten<T> (arr: T[][][][][], depth: 3): T[][];
	public flatten<T> (arr: T[][][][][], depth: 4): T[];
	public flatten<T> (arr: T[][][][][], depth: 5): T[];
	public flatten<T> (arr: T[][][][][], depth: 6): T[];
	public flatten<T> (arr: T[][][][][], depth: 7): T[];
	public flatten<T> (arr: T[][][][][], depth?: number): T[][][][];

	public flatten<T> (arr: T[][][][], depth: 0): T[][][][];
	public flatten<T> (arr: T[][][][], depth: 1): T[][][];
	public flatten<T> (arr: T[][][][], depth: 2): T[][];
	public flatten<T> (arr: T[][][][], depth: 3): T[];
	public flatten<T> (arr: T[][][][], depth: 4): T[];
	public flatten<T> (arr: T[][][][], depth: 5): T[];
	public flatten<T> (arr: T[][][][], depth: 6): T[];
	public flatten<T> (arr: T[][][][], depth: 7): T[];
	public flatten<T> (arr: T[][][][], depth?: number): T[][][];

	public flatten<T> (arr: T[][][], depth: 0): T[][][];
	public flatten<T> (arr: T[][][], depth: 1): T[][];
	public flatten<T> (arr: T[][][], depth: 2): T[];
	public flatten<T> (arr: T[][][], depth: 3): T[];
	public flatten<T> (arr: T[][][], depth: 4): T[];
	public flatten<T> (arr: T[][][], depth: 5): T[];
	public flatten<T> (arr: T[][][], depth: 6): T[];
	public flatten<T> (arr: T[][][], depth: 7): T[];
	public flatten<T> (arr: T[][][], depth?: number): T[][];

	public flatten<T> (arr: T[][], depth: 0): T[][];
	public flatten<T> (arr: T[][], depth: 1): T[];
	public flatten<T> (arr: T[][], depth: 2): T[];
	public flatten<T> (arr: T[][], depth: 3): T[];
	public flatten<T> (arr: T[][], depth: 4): T[];
	public flatten<T> (arr: T[][], depth: 5): T[];
	public flatten<T> (arr: T[][], depth: 6): T[];
	public flatten<T> (arr: T[][], depth: 7): T[];
	public flatten<T> (arr: T[][], depth?: number): T[];

	public flatten<T> (arr: T[], depth: 0): T[];
	public flatten<T> (arr: T[], depth: 1): T[];
	public flatten<T> (arr: T[], depth: 2): T[];
	public flatten<T> (arr: T[], depth: 3): T[];
	public flatten<T> (arr: T[], depth: 4): T[];
	public flatten<T> (arr: T[], depth: 5): T[];
	public flatten<T> (arr: T[], depth: 6): T[];
	public flatten<T> (arr: T[], depth: 7): T[];
	public flatten<T> (arr: T[], depth?: number): T[];
	public flatten (arr: any[], depth?: number): any[] {
		const target: any[] = [];
		this.flattenIntoArray(target, arr, depth);
		return target;
	}

	/**
	 * Flattens the given source array into a new array
	 * @param {T[]} target
	 * @param {T[]} source
	 * @param {number} [depth=1]
	 * @param {number} [start=0]
	 * @returns {number}
	 */
	private flattenIntoArray<T> (target: T[], source: T[], depth: number = 1, start: number = 0): number {
		let targetIndex = start;
		let sourceIndex = 0;
		const sourceLength = source.length;
		while (sourceIndex < sourceLength) {
			const element = source[sourceIndex];

			if (depth > 0 && Array.isArray(element)) {
				targetIndex = this.flattenIntoArray(target, element, depth - 1, targetIndex);
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
	 * Takes the unique elements of the given array
	 * @param {T[]} arr
	 * @returns {T[]}
	 */
	public unique<T> (arr: T[]): T[] {
		return [...new Set(arr)];
	}

	/**
	 * Sorts the given array by the given key
	 * @param {T[]} arr
	 * @param {string} key
	 * @returns {T[]}
	 */
	public sortByKey<T> (arr: T[], key: keyof T): T[] {
		return arr.sort((a, b) => {
			if(a[key] < b[key]) return -1;
			if(a[key] > b[key]) return 1;
			return 0;
		});
	}
}