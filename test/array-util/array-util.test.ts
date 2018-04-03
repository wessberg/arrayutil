import {test} from "ava";
import {ArrayUtil} from "../../src/array-util/array-util";

const arrayUtil = new ArrayUtil();

test("ArrayUtil () => Correctly flattens a 1-size array #1", t => {
	t.deepEqual(
		arrayUtil.flatten([1, 2, 3]),
		[1, 2, 3]
	);
});

test("ArrayUtil () => Correctly flattens a 2-size array #1", t => {
	t.deepEqual(
		arrayUtil.flatten([[1], [2], [3]]),
		[1, 2, 3]
	);
});

test("ArrayUtil () => Correctly flattens a 3-size array #1", t => {
	t.deepEqual(
		arrayUtil.flatten([[[1]], [[2]], [[3]]]),
		[1, 2, 3]
	);
});

test("ArrayUtil () => Correctly flattens a 4-size array #1", t => {
	t.deepEqual(
		arrayUtil.flatten([[[[1]]], [[[2]]], [[[3]]]]),
		[1, 2, 3]
	);
});

test("ArrayUtil () => Correctly maps an array into an object #1", t => {
	t.deepEqual(
		arrayUtil.mapToObject([1, 2, 3], element => element, element => element * 2),
		{1: 2, 2: 4, 3: 6}
	);
});