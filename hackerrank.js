// hackerrank practice

//#########################################
// Simple Array sum

// Adds all numbers in an array

function simpleArraySum(ar) {
    let sum = 0;

    for(let i = 0; i < ar.length; i++) {
        sum = sum + ar[i];
    }
    return sum;
}
//OR

function aVeryBigSum(ar) {
    let total = 0;
    for(let nums of ar){
        total = total + nums;
    }
    return total;
}
//##############################################

//compares 2 arrays and scores a point to one or
//the other depending on which sets were higher.

function compareTriplets(a, b) {
    let ateam = 0;
    let bteam = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            ateam++;
        } else if (a[i] != b[i]) {
            bteam++;
        }
    }
    let results = [];
    results[0] = ateam;
    results[1] = bteam;
    return results;

}

//#########################################

//Given a square matrix, calculate the absolute difference between the sums of its diagonals.


function diagonalDifference(arr) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i<arr.length; i++){
        sum1 += arr[i][i]; //when working with 2d arrays the first [] is the list and the second is the index of that list.
        sum2 += arr[i][arr.length-1-i];
        
}
return Math.abs(sum1 - sum2);
}

//##########################################
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal 
// value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
    let nagativeNums = 0;
    let positiveNums = 0;
    let zeroNums = 0;
    let n = arr.length;

    for (let num = 0; num < arr.length; num++){
        if (arr[num] < 0){
            nagativeNums++;
        }
        else if(arr[num] > 0){
            positiveNums++;
        }
        else{
            zeroNums++;
        }
    }
    let zeroFract = zeroNums / n;
    let posFract = positiveNums / n;
    let negFract = nagativeNums / n;
        
    console.log(posFract.toFixed(6))
    console.log(negFract.toFixed(6))
    console.log(zeroFract.toFixed(6))
    

}

//###########################################
This is a staircase of size n:

Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.

function staircase(n) {
for (let i = 0; i < n; i++){
    let string = "";
    
    for (let j = 0; j< n-i-1; j++){
        string += " ";
    }
    
    for (let k = 0; k < i+1; k++){
        string += "#";
    }
  console.log(string);
 
}

}

//##########################################

// Given five positive integers, find the minimum and maximum values that can 
// be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two 
// space-separated long integers.

function miniMaxSum(arr) {
    arr.sort();
    let min = 0;
    let max = 0;
    
    for (let i = 0; i < arr.length -1; i++){
        min = min + arr[i];
        
    }
    for (let i = 1; i < arr.length; i++){
        max = max + arr[i];
        
    }
    console.log(min + " " + max);
    
    

}

//#############################################

// two methods to reverse a string

 let str = "hello, how was your day"

 let reverseStr = str.split("").reverse().join("");

//############################################
// method 2

let revStr = ""
for(i = str.length -1; i >=0; i--){
  
  revStr += str[i];
  
}

