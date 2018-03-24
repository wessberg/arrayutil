// tslint:disable:no-any
// tslint:disable:no-magic-numbers

export interface IArrayFlattenable {
	flatten<T> (arr: T[][][][][][][][], depth: 0): T[][][][][][][][];
	flatten<T> (arr: T[][][][][][][][], depth: 1): T[][][][][][][];
	flatten<T> (arr: T[][][][][][][][], depth: 2): T[][][][][][];
	flatten<T> (arr: T[][][][][][][][], depth: 3): T[][][][][];
	flatten<T> (arr: T[][][][][][][][], depth: 4): T[][][][];
	flatten<T> (arr: T[][][][][][][][], depth: 5): T[][][];
	flatten<T> (arr: T[][][][][][][][], depth: 6): T[][];
	flatten<T> (arr: T[][][][][][][][], depth: 7): T[];
	flatten<T> (arr: T[][][][][][][][], depth?: number): T[][][][][][][];

	flatten<T> (arr: T[][][][][][][], depth: 0): T[][][][][][][];
	flatten<T> (arr: T[][][][][][][], depth: 1): T[][][][][][];
	flatten<T> (arr: T[][][][][][][], depth: 2): T[][][][][];
	flatten<T> (arr: T[][][][][][][], depth: 3): T[][][][];
	flatten<T> (arr: T[][][][][][][], depth: 4): T[][][];
	flatten<T> (arr: T[][][][][][][], depth: 5): T[][];
	flatten<T> (arr: T[][][][][][][], depth: 6): T[];
	flatten<T> (arr: T[][][][][][][], depth: 7): T[];
	flatten<T> (arr: T[][][][][][][], depth?: number): T[][][][][][];

	flatten<T> (arr: T[][][][][][], depth: 0): T[][][][][][];
	flatten<T> (arr: T[][][][][][], depth: 1): T[][][][][];
	flatten<T> (arr: T[][][][][][], depth: 2): T[][][][];
	flatten<T> (arr: T[][][][][][], depth: 3): T[][][];
	flatten<T> (arr: T[][][][][][], depth: 4): T[][];
	flatten<T> (arr: T[][][][][][], depth: 5): T[];
	flatten<T> (arr: T[][][][][][], depth: 6): T[];
	flatten<T> (arr: T[][][][][][], depth: 7): T[];
	flatten<T> (arr: T[][][][][][], depth?: number): T[][][][][];

	flatten<T> (arr: T[][][][][], depth: 0): T[][][][][];
	flatten<T> (arr: T[][][][][], depth: 1): T[][][][];
	flatten<T> (arr: T[][][][][], depth: 2): T[][][];
	flatten<T> (arr: T[][][][][], depth: 3): T[][];
	flatten<T> (arr: T[][][][][], depth: 4): T[];
	flatten<T> (arr: T[][][][][], depth: 5): T[];
	flatten<T> (arr: T[][][][][], depth: 6): T[];
	flatten<T> (arr: T[][][][][], depth: 7): T[];
	flatten<T> (arr: T[][][][][], depth?: number): T[][][][];

	flatten<T> (arr: T[][][][], depth: 0): T[][][][];
	flatten<T> (arr: T[][][][], depth: 1): T[][][];
	flatten<T> (arr: T[][][][], depth: 2): T[][];
	flatten<T> (arr: T[][][][], depth: 3): T[];
	flatten<T> (arr: T[][][][], depth: 4): T[];
	flatten<T> (arr: T[][][][], depth: 5): T[];
	flatten<T> (arr: T[][][][], depth: 6): T[];
	flatten<T> (arr: T[][][][], depth: 7): T[];
	flatten<T> (arr: T[][][][], depth?: number): T[][][];

	flatten<T> (arr: T[][][], depth: 0): T[][][];
	flatten<T> (arr: T[][][], depth: 1): T[][];
	flatten<T> (arr: T[][][], depth: 2): T[];
	flatten<T> (arr: T[][][], depth: 3): T[];
	flatten<T> (arr: T[][][], depth: 4): T[];
	flatten<T> (arr: T[][][], depth: 5): T[];
	flatten<T> (arr: T[][][], depth: 6): T[];
	flatten<T> (arr: T[][][], depth: 7): T[];
	flatten<T> (arr: T[][][], depth?: number): T[][];

	flatten<T> (arr: T[][], depth: 0): T[][];
	flatten<T> (arr: T[][], depth: 1): T[];
	flatten<T> (arr: T[][], depth: 2): T[];
	flatten<T> (arr: T[][], depth: 3): T[];
	flatten<T> (arr: T[][], depth: 4): T[];
	flatten<T> (arr: T[][], depth: 5): T[];
	flatten<T> (arr: T[][], depth: 6): T[];
	flatten<T> (arr: T[][], depth: 7): T[];
	flatten<T> (arr: T[][], depth?: number): T[];

	flatten<T> (arr: T[], depth: 0): T[];
	flatten<T> (arr: T[], depth: 1): T[];
	flatten<T> (arr: T[], depth: 2): T[];
	flatten<T> (arr: T[], depth: 3): T[];
	flatten<T> (arr: T[], depth: 4): T[];
	flatten<T> (arr: T[], depth: 5): T[];
	flatten<T> (arr: T[], depth: 6): T[];
	flatten<T> (arr: T[], depth: 7): T[];
	flatten<T> (arr: T[], depth?: number): T[];
	flatten (arr: any[], depth?: number): any[];
}