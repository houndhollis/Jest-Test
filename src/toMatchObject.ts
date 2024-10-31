class TestObj {
  constructor(public str: string) {}
}
export default function toMa(str: string) {
  return new TestObj(str);
}
