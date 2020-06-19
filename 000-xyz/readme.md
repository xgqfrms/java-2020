# find-Int-array-balance-point

https://repl.it/@xgqfrms/find-Int-array-balance-point#Main.java

https://leetcode-cn.com/problems/balanced-binary-tree/

https://www.cnblogs.com/xgqfrms/p/13167156.html

## TypeScript

https://javascript.xgqfrms.xyz/pdfs/TypeScript%20Language%20Specification.pdf


> TypeScript auto Build

https://code.visualstudio.com/docs/typescript/typescript-compiling

task.json + vscode


```sh
# ts to js
$ tsc app.ts

# node
$ node app.js

```

## ts-node

https://stackoverflow.com/questions/33535879/how-to-run-typescript-files-from-command-line

https://github.com/TypeStrong/ts-node

```sh
$ npx ts-node app.ts

$ npx ts-node src/app.ts

```


## js hack

https://www.cnblogs.com/xgqfrms/p/13164589.html

```js

const log = console.log;

try {
  // throw new Error(`ts`);// ts
  const err = {
    type: "ts",
    message: "ts error",
  };
  // throw new Error(err);
  throw new Error(JSON.stringify(err));
} catch (e) {
  log(e, typeof e, e.message)
  // Error: {"type":"ts","message":"ts error"}
  // "object" "{"type":"ts","message":"ts error"}"
  const obj = JSON.parse(e.message)
  log(obj)
  const {
    type,
    message,
  } = obj;
  window.parent.location.href = `https://stackoverflow.com/search?q=[${type}]+${message}`;
}

```
