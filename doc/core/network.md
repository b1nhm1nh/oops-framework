### Function description
Oops Framework -Network module WebSocket handles long-term communication between the client and the service.

### Instructions for use
##### Customized network communication data protocol (GZip compression)
```
class GameProtocol extends NetProtocolPako {
    /**Heartbeat protocol */
    getHearbeat(): NetData {
        return `{"action":"LoginAction","method":"heart","data":"null","isCompress":false,"channelid":1,"callback":"LoginAction_heart"}`;
    }
}
```

##### Create a WebSocket network connection object
```
var net = new NetNodeGame();
var ws = new WebSock(); //WebSocket network connection object
var gp = new GameProtocol(); //Network communication protocol object
var gt = new NetGameTips() //Network tips object
net.init(ws, gp, gt);
NetManager.getInstance().setNetNode(net, NetChannelType.Game);
```

##### Connect to game server
```
var options = {
    url: `ws://127.0.0.1:3000`,
    autoReconnect: 0 //-1 permanent reconnect, 0 does not automatically reconnect, other positive integers are the number of automatic retries
}
NetManager.getInstance().connect(options, NetChannelType.Game);
```

##### Disconnect from the game server
```
NetManager.getInstance().close(undefined, undefined, NetChannelType.Game);
    
```
##### Game Server Tips
```
export class NetGameTips implements INetworkTips {
    /**Connection prompt */
    connectTips(isShow: boolean): void {
        if (isShow) {
            Logger.logNet("Game server is connecting");
            tips.netInstableOpen();
        }
        else {
            Logger.logNet("Game server connection successful");
            tips.netInstableClose();
            Message.dispatchEvent(GameEvent.GameServerConnected);
        }
    }

    /**Reconnection prompt */
    reconnectTips(isShow: boolean): void {
if (isShow) {
            Logger.logNet("Reconnection starts");
        }
        else {
            Logger.logNet("Reconnection successful");
        }
    }

    /**Request prompt */
    requestTips(isShow: boolean): void {
        if (isShow) {
            Logger.logNet("Request data starts");
        }
        else {
            Logger.logNet("Request data completed");
        }
    }

    /**Response error code prompt */
    responseErrorCode(code: number): void {
        console.log("Game server error code", code);
    }
}
```

##### Request server data
```
var params: any = {
    playerId: 10000
}

let onComplete = {
    target: this,
    callback: (data: any) => {
        //Server returns data
        console.log(data);
    }
}
//net is the NetNodeGame object
net.req("LoginAction", "loadPlayer", params, onComplete);
```

##### Listen to server push data
```
var onComplete = (data: any) => {
    //The server returns data
    console.log(data);
}

//net is the NetNodeGame object
net.setResponeHandler("notify", onComplete, this);
```