import toMa from "./toMatchObject";

test("클래스 비교는 toMatchObject로 해야한다.", () => {
  expect(toMa("hello")).toMatchObject({ str: "hello" });
});
