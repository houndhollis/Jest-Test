import Obj from "./toStrictEqual";

test("객체 끼리 비교할때는 toStrictEqual", () => {
  expect([1, 2, 3]).toStrictEqual([1, 2, 3]);
  expect([1, 2, 3]).not.toBe([1, 2, 3]);
  // toStrictEqual 를 써야하는 이유, 5번째 줄
  expect(Obj()).not.toBe({ a: "hello" });
  // 객체가 toBe가 안되는 이유는 === 하면 false 가 되기 때문에
  // 객체 끼리 비교할때는 toStrictEqual
});
