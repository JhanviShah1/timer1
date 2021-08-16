//process.stdout.write('\x07');
//console.log('\x07');
//process.stderr.write("\007");
const timer1 = function(list) {
  for (let second of list) {
    if (second !== "" && second > 0) {
      setTimeout(() => {
        process.stdout.write("@@");
      }, (Number(second) * 1000));
    }
  }
};
let num = process.argv.slice(2);
console.log(timer1(num));
//const timer = function(list){
  //   for(let second of list){
  //     if ((second !== '') && (second>0)) {
  //     setTimeout(() => {
  //       process.stdout.write('@');
  //     }, second);
  //   }
  //   }
  // };
  // timer1([10000,3000,5000,15000,9000]);
  // timer1([-1,0,2000]);
  // timer1([]);
