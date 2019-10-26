import _ from 'lodash';
import './style.css';
import Fly from './fly.jpg';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const flyPig = new Image();
    flyPig.src = Fly;

    element.appendChild(flyPig);

    return element;
}

document.body.appendChild(component());
