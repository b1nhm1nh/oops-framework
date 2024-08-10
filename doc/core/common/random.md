### Function description
Oops Framework -random number generation management module, encapsulating [seedrandom](https://www.npmjs.com/package/seedrandom) third-party random database

### Instructions for use
##### Set random seed
```
//Random seeds can be distributed by the server to other clients. If the same seed is used for the same number of times on multiple clients, the result will be the same.
RandomManager.instance.setSeed(123456789);
```

##### Generate random integers in the specified range
```
var min = 1;
var max = 10;
//[min,max) gets a random integer between two numbers. This value is not less than min (if min is not an integer, get a rounded-up min), and is less than (but not equal to) max.
RandomManager.instance.getRandomInt(min, max, 1);

//[min,max] Get a random integer between two numbers, including the two numbers. This value is greater than min (if min is not an integer, it is not less than an integer greater than min), but less than (but Not equal to) max
RandomManager.instance.getRandomInt(min, max, 2);

//(min,max) gets a random integer between two numbers
RandomManager.instance.getRandomInt(min, max, 3);
```

##### Generate a random number array based on the maximum value and minimum value range
```
var min = 1;
var max = 10;
var n = 10;
//Generate 10 random number arrays between 1 and 10
RandomManager.instance.getRandomByMinMaxList(min, max, n);
```

##### Get random objects in the array
```
var objs = [1,2,3,4,5,6,7,8,9]
RandomManager.instance.getRandomByObjectList(objs, 3);
```

##### Determined and randomly assigned
```
//5 random integers, the sum of the 5 numbers is 100
RandomManager.instance.getRandomBySumList(5,100);
```