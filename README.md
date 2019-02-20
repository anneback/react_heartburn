This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

- node ^10.15.0
- Google Chrome
- preferably `yarn`, `npm` works fine
- preferably `Redux dev tools extension` in Chrome

## Installation

1. `brew install yarn`
2. `git clone https://github.com/anneback/react_heartburn.git`
3. `cd react_heartburn`
4. `yarn`
5. `yarn start`
6. [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `yarn start` [http://localhost:3000](http://localhost:3000)
- `yarn test`
- `yarn build`

## Troubleshooting

### TypeError: Cannot read property 'apply' of undefined

home/dev/react_heartburn/node_modules/redux/es/redux.js:575

```javascript
  572 |
  573 |   return funcs.reduce(function (a, b) {
  574 |     return function () {
> 575 |       return a(b.apply(void 0, arguments));
  576 |     };
  577 |   });
  578 | }
```

You don't have Redux dev tools extension installed.

1. Install it
2. Comment out `line 20` in `src/index.js`
