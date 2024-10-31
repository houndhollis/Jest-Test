import sum from "./toHaveBeenCalled";
import { toHaveObj } from "./toHaveBeenCalled";

test("sum 함수가 호출 되었다.", () => {
  const sumSpy = jest.fn(sum);
  // sum 함수를 호출하면서 호출 되었는지도 파악할 수 있다.
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalled();
});

test("sum 함수가 1번 호출되었다.", () => {
  const sumSpy = jest.fn(sum);
  // sum 함수를 호출하면서 호출 되었는지도 파악할 수 있다.
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalledTimes(1);
});

test("sum 함수가 1,2 와 함께 호출되었다.(spy함수 실행)", () => {
  const sumSpy = jest.fn(sum);
  // sum 함수를 호출하면서 호출 되었는지도 파악할 수 있다.
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalledWith(1, 2);
});

test("toHaveObj 함수가 1번 호출되었다.(spy함수 삽입)", () => {
  jest.spyOn(toHaveObj, "minus");
  // toHaveObj.minus 메서드에 spy를 심을 수 있다.
  const result = toHaveObj.minus(1, 2);
  expect(toHaveObj.minus).toHaveBeenCalledTimes(1);
  expect(result).toBe(-1);
});
