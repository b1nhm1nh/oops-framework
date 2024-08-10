## VM Base

### introduce 

VM basic components only implement data binding and need to be inherited and used. You can implement your own VM components by inheriting VM Base. Of course, under normal circumstances it is enough to use other component scripts provided by this tool.

### Script properties

-`watchPath` -The path that needs to be monitored, the structure you defined in the VM, just write the value path here.

   For example, if the viewModel of the global tag takes the value player.atk, it is gloobl.player.atk.

-`watchPathArr` -The multi-path array that needs to be monitored, the same as above, but the array that needs to be monitored is an array of paths.

-`templateMode` -Template mode (multi-path mode), only when enabled can you monitor all paths in the watchPathArr array

-`templateValueArr` -Cache the value of the listening path. When the value of a listening path changes, the cached value in the array will be automatically updated. Generally there is no need to consider using it.

-`VM` -a reference to the VMManager object, refer to the description of ViewModel
-`onLoad()` -Split and parse the monitored path in advance to catch some errors

   **If you need to override the onLoad method**, please call **super.onLoad()**according to the sequence to execute the default method. Direct overriding will result in the function's functionality being lost.

-`onEnable()` -When activating a node, update the initial value of the object and enable monitoring of watchPath.

  **Rewriteable**, you need to call super.onEnable() to process the parent method when rewriting

-`onDisable()`-When closing the node, turn off the monitoring of watchPath.

  **Rewriteable**, you need to call super.onDisable() to process the parent method when rewriting

-`onValueInit()`-function called when initializing the value

  Virtual methods can be directly overridden.

-`onValueChanged(newValue,oldValue,pathArray)` -function called when the value changes

  Virtual methods can be overridden directly.