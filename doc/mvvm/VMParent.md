## VM Parent

### introduce 

If you want your component to have the ability to dynamically monitor data, you need to inherit VMParent. The data type monitored is owned by the component instance itself and is local data rather than global data.

### Properties

`data` -defines the data type to be bound, only valid within this component. Once defined, these data will be automatically bound.

`onBind()` -this method is called after data binding is complete

`onUnBind()` -This method is called before the data binding is released

`tag` -the bound tag, you can get the current vm instance through this tag

`VM` -VM management object that can be used to obtain the value path

### Notes

-If you don't know the inheritance mechanism, don't override the onLoad() event at will. Please use onBind() function instead of onLoad() function, and onUnBind() function instead of onDestroy() function. If you are familiar with it, you can use super.onLoad() to call the parent method
-Do not use VMParent in too many nests, as it may affect some performance during binding.