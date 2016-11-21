'use strict';

let firstName = 'wu',
    lastName = 'fangjian';

let fullName = fun`我姓${firstName},名${lastName}`;

function fun(strings, ...values){
  console.log(strings);
  console.log(values);
}
