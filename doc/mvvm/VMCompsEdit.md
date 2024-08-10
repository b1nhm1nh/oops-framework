## VM Component Edit

### introduce 

VM component editor, providing some basic functions. You can search the component content under the current node to easily query the bound node and debug information.

### Editor properties

-`Find List` -the name of the component to be queried

-`Action Type` -operation behavior

     `SEARCH_COMPONENT` -query component

     `ENABLE_COMPONENT` -Activate a closed component

     `REPLACE_WATCH_PATH` -Replace component path

     `DELETE_COMPONENT` -delete all matching components

-`Trigger` -Check the box and the corresponding command will be executed immediately. The Trigger name is different in different modes.

-`Can Collect Nodes` -Collect nodes and place them in Collect Nodes. This can only be used when the Action Type is SEARCH_COMPONENT.
-`Target Path` -The target path to be searched, available when Action Type is REPLACE_WATCH_PATH

-`Replace Path` -The path value to be replaced, available when Action Type is REPLACE_WATCH_PATH

### Manual editor

Search for t:VMBase in the hierarchical manager. You can also query the nodes of all VM components, and then you can perform manual management operations.