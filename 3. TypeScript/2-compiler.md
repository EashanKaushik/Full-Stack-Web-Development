# Compiler Configuration

## Some Basics

### noEmitOnError

Even is running `tsc app.ts` gives you an error we still will have a new `app.js` file. This is because, TypeScript assumes you know better. If you want to gte more strict you can use `tsc --noEmitOnError app.ts`, this will not update `app.js`.

You can also add `noEmitOnError` to true in `tsconfig.compilerOptions`.

### Downleveling

One other difference from the above was that our template string was rewritten from

```
`Hello ${person}, today is ${date.toDateString()}!`;
```

to

```
"Hello " + person + ", today is " + date.toDateString() + "!";
```

Why did this happen?

Template strings are a feature from a version of ECMAScript called ECMAScript 2015 (a.k.a. ECMAScript 6, ES2015, ES6, etc. - don’t ask). TypeScript has the ability to rewrite code from newer versions of ECMAScript to older ones such as ECMAScript 3 or ECMAScript 5 (a.k.a. ES3 and ES5). This process of moving from a newer or “higher” version of ECMAScript down to an older or “lower” one is sometimes called downleveling.

By default TypeScript targets ES3, an extremely old version of ECMAScript. We could have chosen something a little bit more recent by using the target option. Running with --target es2015 changes TypeScript to target ECMAScript 2015, meaning code should be able to run wherever ECMAScript 2015 is supported. So running `tsc --target es2015 app.ts` gives us the following output:

```
`Hello ${person}, today is ${date.toDateString()}!`
```

## Watch Mode

```
tsc .\app.ts --watch
tsc .\app.ts -w
```

## Multiple Files

```
tsc --init
tsc --watch
```

### Including/ Excluding

```
"exclude": [
    "node_modules" // no other would be excluded if exclude keyword is added then only files mentioned in include are compiled
    "*.dev.ts",
    "**/*.dev.ts"
  ]

"include": [
    "app.ts"
] // no other would be included if include keyword is added then only files mentioned in include are compiled

"files": [ // cant use folders
    "app.ts"
]
```

## lib

```
// default behaviour in tsconfig.json
"lib": [
      "DOM",
      "DOM.Iterable",
      "ES2016",
      "ScriptHost"
    ]
```

## sourceMap

For debugging ts files in browser.

## outDir and rootDir

```
"outDir": "./dist",
"rootDir": "./src"
```

Makes sure the file structure is retained for js files.

## noImplicitAny

This forces function parameters to have a defined type.

## strictNullChecks

```
let button = document.querySelector('button');// 1

button.addEventListener('click', () => {
    console.log('clicked');
});
```

If strictNullChecks is true than (1) will result in an error as button might not exist.

You can solve this my adding `document.querySelector('button')!;`

More can be found at [Non-null Assertion Operator (Postfix)](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-).

Another way to solve this is:

```
let button = document.querySelector('button');

if (button){
    button.addEventListener('click', () => {
        console.log('clicked');
    });
}
```

## noUnusedLocals

## noUnusedParameters

## noImplicitReturns
