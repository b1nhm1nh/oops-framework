### The original author has a 2.x DEMO.
Github address: https://github.com/wsssheep/cocos_creator_mvvm_tools

### Project structure

The core script files are stored in the assets\Script\modelView path. To use them, they must be imported.

-**JsonOb.ts**-Implements the basic observer pattern. Changing the bound data will automatically call the callback function. You can always replace it with an observer you write yourself.
-**ViewModel.ts**-The core module of VM, dynamically manages ViewModel, and uses cc.director.emit to notify the node components in the game to change state.
-**VMBase.ts**-VM monitoring core component, used to receive value change messages of ViewModel. Derived components such as VMCustom /VMEvent are inherited from VMBase
-**VMParent.ts**-VM parent component, suitable for multi-instance prefab pop-up windows. It binds data to components that inherit VMparent and only belongs to the instance created this time. It needs to be inherited and used in a special way.

****

### Introduction to components
-`VMCustom` — Mount VMCustom, and then the components of the current node will be automatically identified (you can also set it yourself). Fill in your numerical path and you're done.
-`VMLabel` — Hang on VMLabel, don’t worry about whether your value is integer or zero, use template syntax {{0:int}} to automatically format, solving the problem of text data display
-`VMState` — solve the node state switching problem
-`VMProgress` — solve the problem of progress bar display
-`VMEvent`—mount VMEventCall and trigger events. Call other component methods when the value changes (use it in conjunction with other components to get twice the result with half the effort)
-`VMParent` — Define the ViewModel data used by the local scope

Define data model: `VM.add(data,"tag")`

I have been using cc.find, getChildByName, and getComponent, so I always wanted to put together a good solution. Partially refers to Vue (OS: pretend to refer to it), and introduces MVVM in a way suitable for Creator componentization. You can even complete most of the complex UI logic without writing a line of code, which is very suitable for high-intensity detailed modifications (os: let the planner change it by himself).
The core of this set of tools lies in the collection of components provided, not Mvvm itself. A low-coupling component script is used to control the binding of numerical listeners, which is less intrusive.

****

### Usage instructions

-**Import Framework**-Import all scripts in assets\Script\modelView

-**Create data model**-Create a new data script anywhere, define your own data model, and use `VM.add(data,'tag')` to add viewModel. This data can be managed directly through the VM, or the data data model can be managed globally by yourself.

-**Hang script**-Add the component VMCustom directly in the editor, and it will automatically identify the components bound to the components that need to set values ​​and the properties of the components, such as cc.Label, cc.Progress, etc. As long as you fill in the corresponding watchPath, it will be automatically assigned to the component's properties. For example, filling in global.play.hp will assign values ​​to the bound component properties when the game is running.

-**Change data**-If you change the value of global.play.hp arbitrarily in the game, the corresponding label will automatically change the value.
-**Global registration VM**: (global free use path) VM.add(data,'tag'); //

-**Local components use VM**: (only relative paths used within components)

  1. Inherit the VMParent component

  2. Set data data (data attribute) in the component

  3. Relative path Use *.name to set watchPath. VMParent will automatically replace *with the actual ViewModel label during onLoad to monitor data changes.

****