import * as fns from "./asyncFunction";

test("onPromise fns 테스트", () => {
  // mockReturnValue 값을 수정해서, 실제로는 ok 지만, no로 나오게 할 수 있다.
  jest.spyOn(fns, "okPromise").mockReturnValue(Promise.resolve("no"));
  return expect(fns.okPromise()).resolves.toBe("no");
});

test("mockResolvedValue 테스트", () => {
  // mockResolvedValue를 사용하면, Promise.resolve를 줄일 수 있다.
  jest.spyOn(fns, "okPromise").mockResolvedValue("ok");
  return expect(fns.okPromise()).resolves.toBe("ok");
});
