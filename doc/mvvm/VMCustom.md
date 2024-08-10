## VM Custom

### introduce 

VM component customization, you can set the component name and component properties that need to be monitored, and the component name can be automatically recognized when mounting. More general. Suitable for any homemade component. (If you want to automatically recognize the component name you wrote, you can modify the script configuration content).

### Editor properties

-`Controller` -Activate the controller to enable two-way binding, otherwise you can only receive messages

-`Watch Path` -Bind numerical monitoring path

-`Component Name` -the name of the bound component (will be automatically recognized based on script configuration)

-`Component Property` -the property that needs to be monitored on the bound component (will be automatically identified based on the script configuration)

-`refreshRate` -refresh interval frequency (only affects the frequency of dirty checks), takes effect after the controller is turned on