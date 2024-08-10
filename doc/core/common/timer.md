### Function description
Oops Framework-time management module mainly implements different types of timer functions in games.

### Instructions for use
##### Get the elapsed time from the start of the game to now
```
oops.timer.getTime();
```

##### Get local time scale
```
oops.timer.getLocalTime();
```

##### Register a trigger with a fixed interval
```
oops.timer.schedule(()=>{
    //Trigger once every second
}, 1000);
```

##### Register a delayed trigger that only fires once
```
oops.timer.scheduleOnce(()=>{
    //After triggering once after 1 second, it will not trigger again.
}, 1000);
```

##### Delete a time trigger
```
var uuid = oops.timer.schedule(()=>{
    //Trigger once every second
}, 1000);

//Delete the trigger with the specified ID
oops.timer.unschedule(uuid);
```

##### Delete all time triggers
```
oops.timer.unscheduleAll();
```

##### Register a countdown callback manager on the specified object
```
export class Test extends Component {
    private timeId!: string;
    
    start() {
        //Register a countdown callback manager on the specified object
        this.timeId = oops.timer.register(this, "countDown", this.onSecond, this.onComplete);
    }
    
    private onSecond() {
        console.log("Triggered once every second");
    }

    private onComplete() {
        console.log("Countdown completed trigger");
    }
}
```

##### Unregister a countdown callback manager on the specified object
```
export class Test extends Component {
    private timeId!: string;
    
    start() {
        this.timeId = oops.timer.register(this, "countDown", this.onSecond, this.onComplete);
    }
    
    onDestroy() {
        //Unregister a countdown callback manager on the specified object
        oops.timer.unRegister(this.timeId);
    }
}
```

##### Timing beating component
```
export class Test extends Component {
    //Create a timed beat component
    private timer: Timer = new Timer(1);

    update(dt: number) {
if (this.timer.update(this.dt)) {
            console.log(triggered every second);
        }
    }
}
```