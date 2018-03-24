import {IArrayFlattenable} from "./i-array-flattenable";

// tslint:disable:no-any

export interface IArrayUtil extends IArrayFlattenable {
	unique<T> (arr: T[]): T[];
	sortByKey<T> (arr: T[], key: keyof T): T[];
}