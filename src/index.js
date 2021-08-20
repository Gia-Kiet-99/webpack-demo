// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import _ from 'lodash';
import Print from './print';

const test = {
  getName() {
    return 'gia kiet';
  },
  getAge() {
    return 22;
  },
  getGt4() {
    return Array.from([1, 2, 3], (x) => x + x);
  },
};

console.log(test.getGt4());

const component = () => {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.onclick = Print.bind(null, 'Hello webpack!');

  return element;
};

document.body.appendChild(component());
