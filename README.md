### example

```js
const parser = require('@crapthings/parentheses-matcher')
console.log(parser('test(1) test(2) test(nest(nest(test))) test123(wow)'))
```

```json
[
  {
    "method": "test",
    "arg": "1"
  },
  {
    "method": "test",
    "arg": "2"
  },
  {
    "method": "test",
    "arg": "nest(nest(test))"
  },
  {
    "method": "test123",
    "arg": "wow"
  }
]
```
