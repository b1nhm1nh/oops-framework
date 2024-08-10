### Function description
Oops Framework -Audio management module mainly handles two major functions: game background music and game sound effects.

### [Demonstration program](https://gitee.com/dgflash/oops-framework/tree/master/assets/demo/audio)

### Instructions for use
##### Play background music
```
oops.audio.playMusic("audios/nocturne");
```
Note: After calling this method, the music resources will be downloaded asynchronously in the background, and the music will start playing after completion.

##### Background music playback completion callback setting
```
oops.audio.setMusicComplete(() => {
    console.log("Music playback completed");
});
```
   
##### Get or set the background music volume
```
oops.audio.musicVolume = 0.5;
```
Note: Volume range (0 ~ 1)

##### Background music switch
```
oops.audio.switchMusic = false;
```
##### Get or set the music playback progress
```
oops.audio.progressMusic = 0.5;
```
Note: volume progress (0 ~ 1)

##### Play sound effects
```
oops.audio.playEffect("audios/Gravel");
```
Note: After calling this method, the music resources will be downloaded asynchronously in the background, and the music will start playing after completion.
   
##### Get or set the sound effect volume
```
oops.audio.volumeEffect = 0.5;
```
Note: Volume range (0 ~ 1)

##### Sound effect music switch
```
oops.audio.switchEffect = false;
```

##### Resume all paused music playback
```
oops.audio.resumeAll();
```

##### Pause the playback of current music and sound effects
```
oops.audio.pauseAll();
```

##### Stop playing the current music and sound effects
```
oops.audio.stopAll();
```
##### Stop playing the current music and sound effects
```
oops.audio.stopAll();
```

##### Save the volume and switch configuration data of music sound effects to the local
```
oops.audio.save();
```

#####Load the volume and switch configuration data of music sound effects locally and set them into the game
```
oops.audio.load();
```