import { timer } from "./callback";

test("타이머 잘 실행 되나?", (done) => {
  timer((message: string) => {
    expect(message).toBe("success");
    done();
  });
  // 콜백 함수를 할때는 done 매개변수를 해야 setTimeout 에서 지정한 3초를 기다린다.
});
