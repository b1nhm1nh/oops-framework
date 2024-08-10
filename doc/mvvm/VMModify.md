## VM Modify

### introduce 

The VM component modifies data and modifies the data of the specified path watchPath. Generally used with the cc.Button component, you can directly modify the value of the specified path after clicking the button.

### Editor properties

-`Watch Path ` -Bind numerical monitoring path
-`Value Clamp` -whether to limit the modification range of numbers
-`Value Min` -limit the minimum value to no less than
-`Value Min` -limits the maximum value to no higher than

### How to use

Similar to Click Events settings, you can modify the value of the path monitored by watch Path by calling the corresponding function on the VMModify component.

-`vAddInt` -adds an integer
-`vSubInt` -reduce integer
-`vMulInt` -multiply an integer
-`vDivInt` -divide by an integer
-`vAdd` -add floating point number
-`vSub` -reduce floating point numbers
-`vMul` -multiply floating point numbers
-`vDiv` -divide by floating point number
-`vString` -set string
-`vNumberInt` -set integer
-`vNumber` -set floating point number