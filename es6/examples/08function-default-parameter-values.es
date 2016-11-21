'use strict';

function fullName(firstName = 'w', lastName = 'fj'){
  return `我姓${firstName}, 名${lastName} !`;
}
console.log(fullName());
console.log('=========');
console.log(fullName('wu', 'fangjian'));

// 结果

// 我姓w, 名fj !
// =========
// 我姓wu, 名fangjian !
