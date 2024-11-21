//{ Driver Code Starts
// Initial Template for javascript

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.getSecondLargest(arr);
        console.log(ans);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

class Solution {
    // Function returns the second largest element
    getSecondLargest(arr) {
        const n = arr.length;
        if (n < 2) return -1;
        let a = arr[0], b = -1;
        // if (n === 2 && a === b) return -1;
        // if (a < b) {
        //     [a, b] = [b, a];
        // }
        for (let i = 1; i < n; i++) {
            let c = arr[i];
            if(c > b && c !== a ) {
                b = arr[i];
                if (b > a) {
                    [a, b] = [b, a];
                }
            }
        }
        return b;
    }
}