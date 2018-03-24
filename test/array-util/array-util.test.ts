import {test} from "ava";
import {ArrayUtil} from "../../src/array-util/array-util";

const arrayUtil = new ArrayUtil();

test("ArrayUtil () => Correctly flattens a 1-size array with depth 0 #1", t => {
	t.deepEqual(
		arrayUtil.flatten([1, 2, 3], 0),
		[1, 2, 3]
	);
});

test("ArrayUtil () => Correctly flattens a 1-size array with depth 1 #1", t => {
	t.deepEqual(
		arrayUtil.flatten([1, 2, 3], 1),
		[1, 2, 3]
	);
});

test("ArrayUtil () => Correctly flattens a 1-size array with depth 2 #1", t => {
	t.deepEqual(
		arrayUtil.flatten([1, 2, 3], 2),
		[1, 2, 3]
	);
});

test("ArrayUtil () => Correctly flattens a 2-size array with depth 0 #1", t => {
	t.deepEqual(
		arrayUtil.flatten([[1], [2], [3]], 0),
		[[1], [2], [3]]
	);
});

test("ArrayUtil () => Correctly flattens a 2-size array with depth 1 #1", t => {
	t.deepEqual(
		arrayUtil.flatten([[1], [2], [3]], 1),
		[1, 2, 3]
	);
});

test("ArrayUtil () => Correctly flattens a 2-size array with depth 2 #1", t => {
	t.deepEqual(
		arrayUtil.flatten([[1], [2], [3]], 2),
		[1, 2, 3]
	);
});

test("ArrayUtil () => Correctly flattens a 3-size array with depth 0 #1", t => {
	t.deepEqual(
		arrayUtil.flatten([[[1]], [[2]], [[3]]], 0),
		[[[1]], [[2]], [[3]]]
	);
});

test("ArrayUtil () => Correctly flattens a 3-size array with depth 1 #1", t => {
	t.deepEqual(
		arrayUtil.flatten([[[1]], [[2]], [[3]]], 1),
		[[1], [2], [3]]
	);
});

test("ArrayUtil () => Correctly flattens a 3-size array with depth 2 #1", t => {
	t.deepEqual(
		arrayUtil.flatten([[[1]], [[2]], [[3]]], 2),
		[1, 2, 3]
	);
});