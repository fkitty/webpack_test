import _ from 'lodash';
import j from 'jquery'
import foo from './foo';
import './style.css';


  // 引入jQuery
  // function component() {
  //   // let element = document.createElement('div');
    
  //   // jQuery
  //   let element = j('<div></div>');

  //   // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
  //   // jQuery
  //   element.html(_.join(['Hi','webpack'], ' '))
  //   // return element;
  //   return element.get(0);
  // }


  // 没有引入jQuery
  function componentNojQuery() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;
  }

document.body.appendChild(componentNojQuery());



