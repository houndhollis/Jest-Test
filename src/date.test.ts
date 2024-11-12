import { after3days } from "./date";

test("3일 후를 리턴한다", () => {
  jest.useFakeTimers().setSystemTime(new Date(2024, 10, 12));
  console.log(new Date());

  expect(after3days()).toStrictEqual(new Date(2024, 10, 15));
  /**
   * useFakeTimers 를 쓰면 항상 가짜 시간임으로
   * jest.useRealTimers 를 사용해서 원래 시간으로 돌려준다.
   * */
});

test("0.1 + 0.2 는 0.3", () => {
  // 일반 적 toBe 를 사용하면 부동 수소점 문제가 생긴다.
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});

afterEach(() => {
  jest.useRealTimers();
});
