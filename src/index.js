import _ from 'lodash';
import j from 'jquery'


  // 引入jQuery
  function component() {
    
    // let element = document.createElement('div');
    
    // jQuery
    let element = j('<div></div>');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
    // jQuery
    element.html(_.join(['Hello','webpack'], ' '))

    // return element;
    return element.get(0);
  }


  // 没有引入jQuery
  // function componentNojQuery() {
  //   let element = document.createElement('div');
  //   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  //   return element;
  // }

document.body.appendChild(component());