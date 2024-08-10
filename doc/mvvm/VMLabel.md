## VM Label

### introduce 

VM component text monitoring is used to handle Label monitoring issues. Monitor the changes in the value of the watchPath path and change the Label text content. Using template mode, you can also format the input string. You can monitor multiple paths to display information from multiple data sources on one label at the same time.

### Editor properties

-`Template Mode` -Multipath template mode, after turning it on, you can monitor multipath and set text templates
-`Watch Path ` -Bind numerical monitoring path

-`Watch PathArr` -path array bound to numerical monitoring (appears after multi-path template mode is turned on)

-`Label Type` -read-only attribute, automatically bound to cc.Label or cc.RichText, you can modify your own defined Label in the script



### About template parsing
Use the {{0}} {{1}} {{2}} method to set the template content (set the String default value of label). At runtime, the value of multi-path monitoring will be dynamically obtained, and {{index}} will be replaced in order of index in the array. You can add additional modifiers to format the information source. For example, {{0:int}} will display the numeric content as an integer, {{0:time}} will display the timestamp in time format, etc.

The following are currently supported formats:

-`int` -display only the integer part
-`fix(n)` -display the number of decimal places
-`kmbt` -shorten the number in K M B T units
-`per` -display percentage
-`sep` -split numbers by thousands semicolon
-`limit(n)` -limit text character length

### Custom template format

All text format processing is placed in the StringFormat class, and you can modify the functions in it according to your custom needs.