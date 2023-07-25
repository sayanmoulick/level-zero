class Solution {
    dec2bin(dec) {
        return (dec >>> 0).toString(2);
    }
    computeParity(N) {
        //code here
        let binNum = this.dec2bin(N);
        let mc = {'countOfOne': 0};
        for (var i of binNum){
            if(i === '1'){
                mc.countOfOne += 1;
            }
        }
        if(mc.countOfOne % 2 === 0){
            console.log('even');
        } else {
            console.log('odd');
        }
        
    }
}

let obj = new Solution();
// let op = obj.dec2bin(256);
// console.log(op);
obj.computeParity(10);