let a = [];
let n = 1000000;
let t = Math.floor(Math.random()*n*n/2);

for(let i = 0; i < n; i++) {
    a.push({ id : i, value : Math.floor(Math.random()*2*n)})
}

console.log('N: %d', n);
console.log('t: %d', t);
console.log('---');
let s = Date.now();
let sum = execute(a, t);
let result = sum.reduce((a, b) => a + b)
console.log('Sum: %s', result);
console.log('Time: %dms', Date.now() - s);
console.log('Accuracy: %d', result / t);


function execute(arr, sum) {
    let result = [];
    let s = 0;
    let retries = arr.length;
    let r = 0;
    for (let i in arr) {
        if (r === retries) {
            break;
        }
        if (s + arr[i].value <= sum) {
            s = s + arr[i].value;
            //result.push(arr[i].id);
            result.push(arr[i].value);
        } else {
            r++;
            continue;
        }
    }
    return result;
};