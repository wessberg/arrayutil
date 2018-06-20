import {test} from "ava";
import {flat} from "../../src/array-util/array-util";

test("ArrayUtil () => Correctly flattens a 1-size array #1", t => {
	t.deepEqual(
		flat([1, 2, 3]),
		[1, 2, 3]
	);
});

test("ArrayUtil () => Correctly flattens a 2-size array #1", t => {
	t.deepEqual(
		flat([[1], [2], [3]]),
		[1, 2, 3]
	);
});

test("ArrayUtil () => Correctly flattens a 3-size array #1", t => {
	t.deepEqual(
		flat([[[1]], [[2]], [[3]]]),
		[1, 2, 3]
	);
});

test("ArrayUtil () => Correctly flattens a 4-size array #1", t => {
	t.deepEqual(
		flat([[[[1]]], [[[2]]], [[[3]]]]),
		[1, 2, 3]
	);
});