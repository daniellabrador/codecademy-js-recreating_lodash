const _ = {
    clamp(n,x,y){
        // Establish lower and upper bounds
        const lower = Math.min(x,y);
        const upper = Math.max(x,y);

        // Return clamped value
        n = Math.max(n,lower);
        return Math.min(n,upper);
    },
    inRange(n,x,y){
        // Establish lower and upper ranges
        y ? y : y=0; // y=0 if y is falsy
        if (!x){return `Please specify a lower bound and an upper bound.`} // Check if x has a value

        const lower = Math.min(x,y)
        const upper = Math.max(x,y)

        // Test if in range
        return lower <= n && n < upper;
    },
    words(string){
        return string.split(' ');
    },
    pad(string,length){
        const sArr = string.split(' ');
        const sLength = string.length;

        // Assign pad value or return string
        let padding = 0;
        if (sLength < length){
            padding += length-sLength
        } else {
            return string
        }
        
        // Create start padding
        const startPad = [];
        for (i=0; i<Math.floor(padding/2); i++){
            startPad.push(' ')
        }
        const start = startPad.join('');

        // Create end padding
        const endPad = [];
        for (i=0; i<Math.ceil(padding/2); i++){
            endPad.push(' ')
        }
        const end = endPad.join('')

        // Add padding to the string's array
        sArr.unshift(start); sArr.push(end)

        // Return new string
        const newString = sArr.join('')
        return newString
    },
    has(obj,key){
        const keys = Object.keys(obj)
        return keys.some(k => k===key) 
    },
    invert(obj){
        const keyArr = Object.keys(obj);
        const valueArr = Object.values(obj);
    
        // Create new object and new properties.
        const newObj = {}
        for (i=0; i<keyArr.length; i++){
            newObj[valueArr[i]] = keyArr[i];
        }
    
        return newObj
    },
    findKey(obj,func) {
        // Store all keys and values into separate arrays
        const keysArr = Object.keys(obj);
        const valuesArr = Object.values(obj);
    
        // Return the key that returned true
        const i = valuesArr.findIndex(func);
        return keysArr[i]
    },
    drop(arr,x){
        // Unspecified x
        if (!x){x=1}
    
        // Removes items from the beginning of the array
        for (i=0;i<x;i++){
            arr.shift()
        }
        return arr
    },
    dropWhile(arr,func){
        // Determine item to keep
        const toFlip = arr.map(func);
        const filter = toFlip.map(boolean => !boolean)
    
        // Push items to keep using filter
        const newArr = [];
    
        for (i=0; i<arr.length; i++){
            if(filter[i]){
                newArr.push(arr[i])
            }
        }
        
        return newArr;
    }    
}

//const r = [1,2,3,4,5]
//console.log(drop(r))

// const o = {a:1,b:2,c:3,d:4}
// console.log(findKeys(r, (key => key===2)))

/*const ro = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
];

console.log(dropWhile(ro, o => !o.active))*/


// Do not write or modify code below this line.
module.exports = _;