
# Redmart Assignment


### This Assignment contain following modules


- [x] [React](https://facebook.github.io/react/) — A virtual DOM JavaScript library for rendering UI.
- [x] [Redux](http://redux.js.org/) — An incredibly simple way of modelling your data app state.
- [x] [Webpack](https://webpack.js.org/) — Client-side module builder and module loader
- [x] [React Router Redux](https://github.com/reactjs/react-router-redux) — Simple bindings to keep React Router and Redux in sync
- [x] [Yarn](https://yarnpkg.com/) — Package manager and task runner
- [x] [Babel](http://babeljs.io/) — Transpiler from ES6 / JSX to ES5
- [x] [ESLint](http://eslint.org/) — As a reporter for syntax and style issues

## How to Setup project

### Installation

```
git clone https://github.com/nisargrthakkar/redmart-assignment.git redmart
cd redmart
yarn install
```

### To Run Application:

```
yarn start
```

open URL http://localhost:8080/  in your browser if it will not open after ```yarn start``` 


# Note

Please find completed task as per below mentioned points for your review. Please note that below mentioned points contains the list of method used for coding & also I have enlisted other possible method to complete the task in a different way. Also, I have justified the current method used. If you are looking for any other alternative method I am open to do the same. Please let me know your views.


1. I have used [my starter](github.com/nisargrthakkar/react-redux-starter-kit) kit to start this project

2. Here I used one single CSS file for all pages because it has only three pages and I think there are no much of CSS required to so make only one file instead of multiple css files based on page or component. 

3. I will filter products, based on brand and price while the page loading. Because of less product and filters are available. The logic/process of filtering is totally depend on total number of product and filters. It is not advisable to use the filter while page loading if there are number of products available. Suppose there are number of products than I will filter the product based on user action as well as I will go with mix approach (initial loading and user action)(Please let me know if it is not clear).

4. I tried to make app design as simple as possible. Please also note that this web app is not responsive and I tested web app in mac chrome and safari(due to unavailability of other systems)

5. After reloading the web application, cart and filter data will automatically remove as this data is not stored at local storage or third party.If required I can always do the same.
