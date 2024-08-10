## VM Event

### introduce 

VM component events, monitor changes in the value of the watchPath path, and call the callback function. The values ​​of multiple paths can be monitored at the same time. Suitable for situations where you need to handle numerical change behavior yourself. For example, if you get 1 gold coin and want the number to flash, with VMEvent, you don't have to make the number flash manually. Callbacks can be set directly in the editor to trigger functions of other components.

### Editor properties

-`Template Mode` -Multipath template mode, when enabled, you can monitor multipath

-`Watch Path ` -Bind numerical monitoring path

-`Watch PathArr` -path array bound to numerical monitoring (appears after multi-path template mode is turned on)

-`Component Name` -the name of the bound component (will be automatically recognized based on script configuration)

-`Component Property` -the property that needs to be monitored on the bound component (will be automatically identified based on the script configuration)

-`Trigger Once` -The event notification is only delivered once, and then the component is automatically disabled
-`Filter Mode` -Filter notification events based on conditions, for example, when the value >=30, the notification event will be called Change Events

-`Change Events` -value path change events, similar to button callback events. Bind the corresponding node function to be executed in the editor