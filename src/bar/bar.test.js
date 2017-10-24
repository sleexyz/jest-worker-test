function hijackProcessEnv(newEnv) {
  const _processEnv = process.env;
  beforeEach(() => {
    process.env = newEnv
    console.log(process.env);
  });
  afterEach(() => {
    process.env = _processEnv
  });
}

function wait(ms) {
  return new Promise((res, rej) => {
    setTimeout(res, ms);
  });
}

hijackProcessEnv({ bar: "hello" });

describe("bar", () => {

  test("test", async () => {
    await wait(500);
    expect(process.env).toEqual({ bar: "hello" });
  });

  test("test", async () => {
    await wait(500);
    expect(process.env).toEqual({ bar: "hello" });
  });

  test("test", async () => {
    await wait(500);
    expect(process.env).toEqual({ bar: "hello" });
  });

  test("test", async () => {
    await wait(500);
    expect(process.env).toEqual({ bar: "hello" });
  });

  test("test", async () => {
    await wait(500);
    expect(process.env).toEqual({ bar: "hello" });
  });

  test("test", async () => {
    await wait(500);
    expect(process.env).toEqual({ bar: "hello" });
  });

  test("test", async () => {
    await wait(500);
    expect(process.env).toEqual({ bar: "hello" });
  });

  test("test", async () => {
    await wait(500);
    expect(process.env).toEqual({ bar: "hello" });
  });

  test("test", async () => {
    await wait(500);
    expect(process.env).toEqual({ bar: "hello" });
  });

  test("test", async () => {
    await wait(500);
    expect(process.env).toEqual({ bar: "hello" });
  });

  test("test", async () => {
    await wait(500);
    expect(process.env).toEqual({ bar: "hello" });
  });

  test("test", async () => {
    await wait(500);
    expect(process.env).toEqual({ bar: "hello" });
  });
});
