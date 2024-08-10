### Function description
Oops Framework -interface management module, mainly implements different types of window management in games, such as permanent main interface windows, pop-up windows, modal windows, system prompt windows, etc.

### Instructions for use
##### Window configuration fields
| Fields | Introduction                      |
| ----- -| ----------------------------------|
| layer  | window level                      |
| prefab | Relative path of prefab resources |
| bundle | remote package name               |

##### Window configuration data
```
/**Unique identifier of the interface */
export enum UIID {
    /**Resource loading interface */
    Loading = 1,
    /**Pop-up interface */
    Window,
    /**Loading and delay prompt interface */
    Netinstable
}

/**Open the configuration data of the interface mode */
export var UIConfigData: { [key: number]: UIConfig } = {
[UIID.Loading]: { layer: LayerType.UI, prefab: "loading/prefab/loading", bundle: "resources" },
    [UIID.Netinstable]: { layer: LayerType.PopUp, prefab: "common/prefab/netinstable" },
    [UIID.Window]: { layer: LayerType.Dialog, prefab: "common/prefab/window" }
}
```

##### Open a window
```
var uic: UICallbacks = {
    //Window added to interface completion event
    onAdded: (node: Node, params: any) => {
        var comp = node.getComponent(LoadingViewComp) as ecs.Comp;
    }
    
    //Callback after window node destroy
onRemoved:(node: Node | null, params: any) => {
        
    }
};
oops.gui.open(UIID.Loading, null, uic);
```

##### Asynchronous function opens a window
```
var node = await oops.gui.openAsync(UIID.Loading);
```

##### Close a window
```
oops.gui.remove(UIID.Loading);
```

##### Specify a node to delete the window
```
oops.gui.removeByNode(cc.Node);
```
Note: The Node here must be opened through oops.gui.open or openAsync before it can be closed.

##### Whether the window with the specified ID exists in the cache
```typescript
oops.gui.has(UIID.Loading);
```

##### Fading and floating prompts
```typescript
oops.gui.toast("prompt content");
```
##### Clear all windows
```typescript
oops.gui.clear();
```