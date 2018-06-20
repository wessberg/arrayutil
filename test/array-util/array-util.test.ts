import {test} from "ava";
import {flatten, mapToObject} from "../../src/array-util/array-util";

test("ArrayUtil () => Correctly flattens a 1-size array #1", t => {
	t.deepEqual(
		flatten([1, 2, 3]),
		[1, 2, 3]
	);
});

test("ArrayUtil () => Correctly flattens a 2-size array #1", t => {
	t.deepEqual(
		flatten([[1], [2], [3]]),
		[1, 2, 3]
	);
});

test("ArrayUtil () => Correctly flattens a 3-size array #1", t => {
	t.deepEqual(
		flatten([[[1]], [[2]], [[3]]]),
		[1, 2, 3]
	);
});

test("ArrayUtil () => Correctly flattens a 4-size array #1", t => {
	t.deepEqual(
		flatten([[[[1]]], [[[2]]], [[[3]]]]),
		[1, 2, 3]
	);
});

test("ArrayUtil () => Correctly maps an array into an object #1", t => {
	t.deepEqual(
		mapToObject([1, 2, 3], el => ({[el]: el * 2})),
		{1: 2, 2: 4, 3: 6}
	);
});