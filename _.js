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
        // Shift elements until predicate function returns falsey
        for(i=0;i<arr.length;i++){
            if(func){
                arr.shift()
            }
        }
        
        return arr;
    },
    chunk(arr,n){
        // If n is undefined, set it equal to 1.
        n ? n=n : n=1;
        const newArr = [];

        // Number of individual arrays that will be inside newArr
        const rounds = Math.ceil(arr.length/n);


        const size = n; // Remember size for the loops
        let rep = 0; // Record number of reps of loops done
        let divArr = []; // Individual arrays to be pushed

        
        // Loop to create new arrays pushed to newArray
        const oddSize = (arr.length % 2)===1 ? true : false;
        if(oddSize){
            for(i=0;i<rounds-1;i++){
                for(j=rep;j<n;j++){
                    divArr.push(arr[j]);
                    rep++;
                }
                n=size;
                n+=rep;
                newArr.push(divArr);
                divArr = [];
            }
            // Push last item as an array
            let lastArr = [];
            lastArr.push(arr[arr.length-1]);
            newArr.push(lastArr);
        }else{
            for(i=0;i<rounds;i++){
                for(j=rep;j<n;j++){
                    divArr.push(arr[j]);
                    rep++;
                }
                n=size;
                n+=rep;
                newArr.push(divArr);
                divArr = [];
            }
        }

        return newArr;
    }

}

// Do not write or modify code below this line.
module.exports = _;