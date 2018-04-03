import {IArrayFlattenable} from "./i-array-flattenable";

// tslint:disable:no-any

export interface IArrayUtil extends IArrayFlattenable {
	unique<T> (arr: T[]): T[];
	sortByKey<T> (arr: T[], key: keyof T): T[];
	mapToObject<T> (arr: T[], keyMapper: (element: T, index: number) => string|number, valueMapper: (element: T, index: number) => any): {[key: string]: any};
}