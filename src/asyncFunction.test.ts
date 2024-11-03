import { okPromise, noPromise, okAsync, noAsync } from "./asyncFunction";

test("okPromise 테스트", () => {
  // expect(okPromise()).resolves.toBe("ok");
  // return 이 없으면 resolve 되기전에 테스트가 끝나버린다.
  const okSpy = jest.fn(okPromise);
  return expect(okSpy()).resolves.toBe("ok");
});

test("okPromise 테스트2", () => {
  const okSpy = jest.fn(okPromise);
  return okSpy().then((result) => {
    expect(result).toBe("ok");
  });
});

test("okPromise 테스트3", async () => {
  const okSpy = jest.fn(okPromise);
  const result = await okSpy();
  expect(result).toBe("ok");
});

test("noPromise 테스트", () => {
  const noSpy = jest.fn(noPromise);
  return noSpy().catch((result) => {
    expect(result).toBe("no");
  });
});

test("noPromise 테스트2", () => {
  const noSpy = jest.fn(noPromise);
  expect(noSpy()).rejects.toBe("no");
});

test("noPromise 테스트3", async () => {
  // async 에러날 경우 try catch 해야 한다.
  const noSpy = jest.fn(noPromise);
  try {
    const result = await noSpy();
    expect(result).toBe("no");
  } catch (error) {
    expect(error).toBe("no");
  }
});

// async 테스트

test("okAsync 테스트", () => {
  // expect(okPromise()).resolves.toBe("ok");
  // return 이 없으면 resolve 되기전에 테스트가 끝나버린다.
  const okSpy = jest.fn(okAsync);
  return expect(okSpy()).resolves.toBe("ok");
});

test("okAsync 테스트2", () => {
  const okSpy = jest.fn(okAsync);
  return okSpy().then((result) => {
    expect(result).toBe("ok");
  });
});

test("okAsync 테스트3", async () => {
  const okSpy = jest.fn(okAsync);
  const result = await okSpy();
  expect(result).toBe("ok");
});
