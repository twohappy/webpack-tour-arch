function getComponent() {

  return import(/* webpackChunkName: "lodash"*/ 'lodash').then(({ default: _ }) => {
      const element = document.createElement('dev');

      element.innerHTML = _.join(['hello', 'webpack'], ' ');

      return element;
  }).catch(err => 'An error occured while loading the component');
}

getComponent().then(component =>{
    document.body.appendChild(component);
});
