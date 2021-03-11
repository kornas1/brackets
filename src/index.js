module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let a = [];
  let step = 0;
  
  while(step == 0) {
      step = 1;
      
      for(let i = 0; i < bracketsConfig.length; i++) {
          a[i] = bracketsConfig[i][0] + bracketsConfig[i][1];
          arr = str.split(a[i]);
          console.log(arr)
          if(arr.length > 1) {
              step = 0;
          }
          str = arr.join('');
      }
  }
  return str === '' ? true : false
}
}
