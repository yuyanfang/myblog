'use strict'

function breakfast() {
  return {f1: '苹果', f2: '香蕉', f3: '橘子'};
}

let {f1: f1, f2: f2, f3: f3} = breakfast();


console.log(f1, f2, f3)
