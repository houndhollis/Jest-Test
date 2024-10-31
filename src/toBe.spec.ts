import sum from "./toBe";

test("두 숫자를 더해야 합니다", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 2)).not.toBe(2);
});
