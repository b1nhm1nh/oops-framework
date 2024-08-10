## VM State

### introduce 

VM component status conditions, based on the watchPath path, determine whether the value meets the conditions, and then set the status of the corresponding node. You can change the color of the node according to the data, activate and close the node, etc.

### Editor properties

-`Watch Path ` -Bind numerical monitoring path
-`Foreach Child Mode` -A special way to compare values. It will use the names of all child nodes under the current node as value comparison to control the display status of all child nodes.
-`Foreach Child Type` -`NODE_INDEX` compares the index value of the node or `NODE_NAME` compares the name of the node
-`Condition` -Judgment conditions, judging whether the size of the value meets the conditions
-`Value Action`-effect behavior, conditions to be executed when the state is met
-`Watch Nodes` -Nodes that need to change their state. If not set, all states of this node and its child nodes will be changed by default.

### Effect behavior

-`NODE_ACTIVE` -Change the activation status of the node (mounting to this node is invalid)
-`NODE_VISIBLE` -Change the display status of the node (opacity switching). It is effective when mounted to this node and only affects the display.

-`NODE_OPACITY` -Change the opacity of a node

  `Action Opacity` -sets an opaque value

-`NODE_COLOR` -change the color of a node

  `Action Color` -Set the value of a color

-`COMPONENT_CUSTOM` -Completely customizable changes to component properties

  `Component Name` -component name

  `Component Property` -a property on a component

  `Default Value` -default value

  `Action Value` -the value changed when the condition is met

### Notes

NODE_ACTIVE condition will not change the activation status of its own node