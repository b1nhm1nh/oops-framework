## VM Progress

### introduce 

VM component progress bar settings, suitable for any progress bar component, such as ProgressBar, cc.Slider, etc. Accepts two watchPath values, and finally reflects the change results on the progress attribute. The usage method is the same as the VM Custom component.

### Editor properties

-`Controller` -Activate the controller to enable two-way binding, otherwise you can only receive messages
-`Watch Path Arr` -Bind the numeric listening path array. Note that you must set an array with a length of 2. The first value is the minimum value and the second value is the maximum value, so that the progres attribute can be calculated correctly.
-`Component Name` -the name of the bound component (will be automatically recognized based on script configuration)
-`Component Property` -the property that needs to be monitored on the bound component (will be automatically identified based on the script configuration)
-`refreshRate` -refresh interval frequency (only affects the frequency of dirty checks), takes effect after the controller is turned on