const { test, expect } = require("@jest/globals");
const strStr = require("./strStr.easy");

test("Example 1", () => {
	expect(strStr('hello', 'll')).toBe(2);
});

test("Example 2", () => {
	expect(strStr('aaaaa', 'bba')).toBe(-1);
});
