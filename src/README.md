The `bar` folder contains a test suite that hijacks `process.env`.
The `foo*` folders contain test suites that pass only if `process.env` reflect's bar's changes.

---

result: none of the foo tests pass, meaning that process.env doesn't get hijacked even when jest runs multiple tests in parallel.
