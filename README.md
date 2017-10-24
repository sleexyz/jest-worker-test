trying to see if process.env is local to a jest worker.
I got jest's parallelization to kick at a minimum of 21 test files.
```
yarn jest
```

from what these test results show, it seems that process.env should be local to the jest worker.
