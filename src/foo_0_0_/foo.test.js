function wait(ms) {
  return new Promise((res, rej) => {
    setTimeout(res, ms);
  });
}

describe("bar", () => {
  test("test", async () => {
    await wait(100);
    expect(process.env).toEqual({
      bar: "hello"
    });
  });
  test("test", async () => {
    await wait(100);
    expect(process.env).toEqual({
      bar: "hello"
    });
  });
});
