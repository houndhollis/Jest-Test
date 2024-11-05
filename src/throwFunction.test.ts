import { error, customError, CustomError } from "./throwFunction";

test("error가 잘 난다", () => {
  expect(() => error()).toThrow(Error);
  expect(() => customError()).toThrow(CustomError);
  // error 를 throw 하면 감싸숴 넣어줘야 한다, () =>
});

test("error 가 잘 난다(try, catch)", () => {
  try {
    error();
  } catch (err) {
    // 에러가 같은지 봐야 하니깐, toStrictEqual
    expect(err).toStrictEqual(new Error());
  }
});
