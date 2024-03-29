## CMPT 315 Lab 2 Assignment
Creating and publishing an npm package implementing lodash-like javascript functions

## Purpose  
**_Beware:_ This library was published for learning purposes. It is _not_ intended for production-grade software.

## Usage  
**Install it:**  
`npm install nealhamacher/cmpt315-lab2`  
**Require it:**  
`const _ = require('nealhamacher/cmpt315-lab2)`  
**Call it:**  
`const results = _.findNaNIndex([1,2,NaN,4])`

## Documentation  
The following functions are currently implemented:  

* `findNaNIndex(arr)` : finds all indices of given array arr where NaN is found  
* `isArrayFactorChain(arr)` : determines if an array is a factor chain (each element is a factor of the next element)  
* `countNumberofArrays(arr)` : finds number of arrays inside a given array
* `participants(matches)` : finds name of participants in an array of matches
* `winnersObject(matches)` : finds match winners and list of people they've beaten
* `biggestLoser(matches)` : finds the biggest loser in a group of matches (most loser points)  
