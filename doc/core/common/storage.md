### Function description
Oops Framework -the local storage module mainly encapsulates the cross-platform flat storage function of the sys.localStorage object in the Cocos Crator engine, and also adds the functions of data encryption and different account differentiation on this basis.

### Instructions for use
##### Initialize local storage encryption
```
oops.storage.init("key", "vi");
```
Note: Data encryption will not be triggered in debugging mode, which facilitates clear text debugging. Release mode automatically starts data encryption

##### Initialize local storage encryption
```
var uid = 10000; //User unique number data
oops.storage.setUser(uid);
```
Note: Used to distinguish local storage data of different accounts to prevent data with the same key from being overwritten when logging in with other accounts.

##### Set the data of the specified keyword
```
oops.storage.set(key, value);
```

##### Get the data of the specified keyword
```
var data = oops.storage.get(key);
```
##### Delete the data of the specified keyword
```
oops.storage.remove(key);
```

##### Clear the entire local storage
```
oops.storage.clear();
```