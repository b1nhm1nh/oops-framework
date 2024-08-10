### Function description
Oops Framework -Log management mainly encapsulates the console object log output function to facilitate troubleshooting problems in complex business logic by providing clearer information.

### Instructions for use
##### Print the execution time of the code segment
```typescript
oops.log.start();
...
Omit N lines of code
...
oops.log.end();
```

##### Print form
```typescript
var object:any = {uid:1000, name:"oops"};
oops.log.table(object);
```

##### Print log
```typescript
oops.log.trace("Default standard log");
oops.log.logConfig("Gray configuration log");
oops.log.logNet("Orange Network Log");
oops.log.logModel("Purple Data Log");
oops.log.logBusiness("Blue Business Log");
oops.log.logView("Green View Log");
//Log format: [11:31:07:293][Standard log][Generator.ts->next]:'Default standard log'
```