### Function description
Oops Framework-global event management is mainly designed to reduce the coupling problem between objects and avoid calling mutual APIs to cause strong object dependence, thereby increasing maintenance costs when requirements change or expand in the middle and later stages of the project.

### Instructions for use
##### Register global events for continuous monitoring
```
export class RoleViewComp extends Component{
    onLoad(){
        //Listen to global events
        oops.message.on(GameEvent.GameServerConnected, this.onHandler, this);
    }
    
    protected onDestroy() {
        //Unregistered global events when the object is released
        oops.message.off(GameEvent.GameServerConnected, this.onHandler, this);
    }
    
    private onHandler(event: string, args: any) {
switch (event) {
            case GameEvent.GameServerConnected:
                console.log("Processing the logic after the game server connection is successful");
                break;
        }
    }
}
```

##### Register a global event that is triggered only once
```
export class RoleViewComp extends Component{
    onLoad(){
        //Listen to an event once. After the event is responded to, the listener is automatically removed.
        oops.message.once(GameEvent.GameServerConnected, this.onHandler, this);
    }
    
    private onHandler(event: string, args: any) {
        switch (event) {
case GameEvent.GameServerConnected:
                console.log("Processing the logic after the game server connection is successful");
                break;
        }
    }
}
```