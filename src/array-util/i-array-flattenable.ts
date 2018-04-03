// tslint:disable:no-any
// tslint:disable:no-magic-numbers
// tslint:disable:array-type

export declare type Flatten<A> =
	A extends Array<infer B>
	? B extends Array<infer C>
	? C extends Array<infer D>
	? D extends Array<infer E>
	? E extends Array<infer F>
	? F extends Array<infer G>
	? G extends Array<infer H>
	? H extends Array<infer I>
	? I extends Array<infer J>
	? J extends Array<infer K>
	? K extends Array<infer L>
	? L extends Array<infer M>
	? M extends Array<infer N>
	? M : L : K : J : I : H : G : F : E : D : C : B : A : A;

export interface IArrayFlattenable {
	flatten<T> (arr: T): Flatten<T>;
}