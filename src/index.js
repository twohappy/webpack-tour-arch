import _ from 'lodash';
import './styles/style.css';
import Fly from './assets/fly.jpg';
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';
import Data from './data.xml';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const flyPig = new Image();
    flyPig.src = Fly;
    element.appendChild(flyPig);

    return element;
}
function component2() {
    const element = document.createElement('div');
    const fragment = require("html-loader!./fragment.html");

    element.innerHTML = fragment;

    return element;
}
function component3() {
    const element = document.createElement('i');
    element.classList.add('fa');
    element.classList.add('fa-plus');

    return element;
}
console.log(Data);
document.body.appendChild(component());
document.body.appendChild(component2());
document.body.appendChild(component3());
