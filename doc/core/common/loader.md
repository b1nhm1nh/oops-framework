### Function description
Oops Framework -Resource management module mainly handles the loading and releasing functions of various types of game resources.

### Instructions for use
##### Load remote resources
```typescript
var opt: IRemoteOptions = { ext: ".png" };
var onComplete = (err: Error | null, data: ImageAsset) => {
    const texture = new Texture2D();
    texture.image = data;
    
    const spriteFrame = new SpriteFrame();
    spriteFrame.texture = texture;
    
    var sprite = this.sprite.addComponent(Sprite);
    sprite.spriteFrame = spriteFrame;
}
resLoader.loadRemote<ImageAsset>(this.url, opt, onComplete);
```

##### Load resource package configuration information
```typescript
var serverUrl = "http://192.168.1.13:8082/"; //Server address
var md5 = "8e5c0"; //MD5 characters built by Cocos Creator
await resLoader.loadBundle(serverUrl,md5);
```

##### Load a single resource
```typescript
var path = "model";
resLoader.load(path, sp.SkeletonData, (err: Error | null, sd: sp.SkeletonData) => {
    if (err) {
        console.error(`resource does not exist`);
        return;
    }
this.spine.skeletonData = sd;
});
```

Load resources in other bundles
```typescript
var path = "model";
resLoader.load("bundleName", path, sp.SkeletonData, (err: Error | null, sd: sp.SkeletonData) => {
    if (err) {
        console.error(`resource does not exist`);
        return;
    }

    this.spine.skeletonData = sd;
});
```

##### Load resources in a folder
```typescript
/**Loading progress event */
var onProgressCallback = (finished: number, total: number, item: any) => {
    console.log("Resource loading progress", finished, total);
}

/**Loading completion event */
var onCompleteCallback = () => {
    console.log("Resource loading completed");
}
resLoader.loadDir("game", onProgressCallback, onCompleteCallback);
```

##### Release a resource
```typescript
resLoader.release("model", "resources");
```
Note: The second parameter "resources" is the default value and is the engine's default bundle. If you need to release resources in other bundles, just modify this parameter.

##### Release resources of a folder
```typescript
resLoader.releaseDir("model", "resources");
```
Note: The second parameter "resources" is the default value and is the engine's default bundle. If you need to release resources in other bundles, just modify this parameter.

##### Get resources in cache
```typescript
resLoader.get("common/anim/button_scale_start", AnimationClip, "resources")
```
Note: The third parameter "resources" is the default value and is the engine's default bundle. If you need to obtain resources from other bundles, just modify this parameter.


##### Print all resource information in the cache
```typescript
resLoader.dump();
```
Note: When debugging, observe whether the resources are released correctly.