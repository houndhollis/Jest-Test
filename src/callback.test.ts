import { timer } from "./callback";

test("타이머 잘 실행 되나?", (done) => {
  timer((message: string) => {
    expect(message).toBe("success");
    done();
  });
  // 콜백 함수를 할때는 done 매개변수를 해야 setTimeout 에서 지정한 3초를 기다린다.
});

test("시간 빨리가게 하기", (done) => {
  // advanceTimersByTime 를 써서 한번에 시간을 빠르게 할 순있지만, FakeTimers 를 같이 써줘야 한다.
  // 시간을 당기는 것은, 같거나 넘치게 해야한다
  expect.assertions(1);
  // assertions 타이머같은 비동기 함수를 할때는 필요하다, 비동기는 expect가 없어도 패스되기 때문이다.
  jest.useFakeTimers();
  timer((message: string) => {
    expect(message).toBe("success");
    done();
  });
  jest.advanceTimersByTime(3000);
});
