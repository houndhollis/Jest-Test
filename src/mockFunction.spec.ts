import { obj } from "./mockFunction";

test("obj.minus 에 스파이를 심고 실행이 안되게,", () => {
  // 스파이도 심지만, 진짜 함수 실행은 안되게 할려면 mockImplementation을 뒤에 붙여주면된다.
  // 예) 데이터 베이스를 쓰는데 실제 실행은 안시키고 실행되는지만 보고싶을 경우,
  jest.spyOn(obj, "minus").mockImplementation();
  const result = obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(1);
});

test("obj.minus 에 스파이를 심고 리턴값을 바꾸게,", () => {
  jest.spyOn(obj, "minus").mockImplementation((a, b) => a + b);
  const result = obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(2);
  // 위에서도 한번 실행
  expect(result).toBe(3);
});

test("obj.minus 에 mockImplementationOnce 테스트 해보기", () => {
  jest.spyOn(obj, "minus").mockImplementationOnce(() => 5);
  jest.spyOn(obj, "minus").mockImplementationOnce((a, b) => a + b);
  jest.spyOn(obj, "minus").mockImplementationOnce((a, b) => a * b);
  const result1 = obj.minus(1, 2);
  const result2 = obj.minus(1, 2);
  const result3 = obj.minus(1, 2);
  const result4 = obj.minus(1, 2);

  expect(obj.minus).toHaveBeenCalledTimes(6);
  // 위에서 4번 실행
  expect(result1).toBe(5);
  expect(result2).toBe(3);
  expect(result3).toBe(2);
  expect(result4).toBe(-1);
});

test("obj.minus 에 스파이를 심고 리턴값이 다르게 나오게,", () => {
  jest.spyOn(obj, "minus").mockReturnValue(5);
  const result = obj.minus(1, 2);
  expect(result).toBe(5);
});
