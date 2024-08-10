#oops-framework

#### introduce
Oops Framework is a game framework developed based on Cocos Creator 3.x.
1. Provide common function libraries for games to improve development efficiency
2. Provide business module code templates to reduce the difficulty of programming
3. The built-in modules of the framework are low-coupled, and unnecessary modules can be deleted to adapt to different types of games.
4. The framework provides commonly used plug-in tools for games
    -Hot update configuration generation plug-in ([portal](https://github.com/dgflash/oops-plugin-hot-update))
    -Plan Excel configuration table to generate Json format and supporting ts code plug-in ([portal](https://github.com/dgflash/oops-plugin-excel-to-json))

Note:
1. After downloading the project, execute update-oops-plugin-framework.bat to download the latest version of the framework plug-in, and then start Cocos Creator to run the project.
1. The master branch will generally be synchronized with the latest version of the Cocos Creator engine. If you need other versions, you can download other branches.

### QQ group
-798575969 (1 group)
-621415300 (group 2)
-628575875 (3 groups)
-226524184 (4 groups)

### QQ channel provides tutorials and is continuously updated (channel number: q366856bf5)

#### [Video tutorial](https://www.bilibili.com/video/BV1WV4y1G7Gb/?spm_id_from=333.337.search-card.all.click&vd_source=2ecab277f9fb79c5e11c909bf0affd34)

#### Technical Documentation
-[oops-framework](https://oops-1255342636.cos.ap-shanghai.myqcloud.com/doc/oops-framework/index.html)
-[ecs](https://github.com/b1nhm1nh/oops-framework/tree/master/doc/ecs/ecs.md)
-[mvvm](https://github.com/b1nhm1nh/oops-framework/tree/master/doc/mvvm)
-[animator](https://github.com/LeeYip/cocos-animator/blob/master/README.md)

#### Technical classification
1. Basic class
    -Interface management -LayerManager.ts
    -Resource Management -ResLoader.ts
    -Time management -TimerManager.ts
    -Audio management -AudioManager.ts
    -Message Management -MessageManager.ts
    -Screen adaptation -GUI.ts
    -Local Storage -StorageManager.ts
2. Interface class
    -Commonly used UI components
        -Button class -gui/button
        -Label class -gui/label
        -Language category -gui/language
-MVVM component library -libs/model-view
    -Special effects management -libs/animator-effect
    -Displacement component -libs/animator-move
    -Camera control -libs/camera
3. Network category
    -Http-libs/network/HttpRequest.ts
    -WebSocket -libs/network/NetManager.ts
4. Frame class
    -ECS-libs/ecs
    -BehaviorTree behavior tree -libs/behavior-tree
    -Visual animation state machine -libs/animator
5. Tools
    -Log management -Logger.ts
    -Random number generator -RandomManager.ts
    -Data collection -libs/collection
    -Encryption tools -libs/security
    -GZip compression -libs/network/protocol
-Auxiliary method library -core/utils
6. Render texture
    -3D camera content is displayed on the model -libs/render-texture/RtToModel
    -Display the 3D model on the 2D sprite -libs/render-texture/RtToSprite
7. Hot update
    -Hot update control script game/initialize/view/HotUpdate.ts
    -Local hot update configuration resources/project.manifes
    -Local hot update configuration resources/version.manifes
8. Business Framework Template
    ![](https://github.com/dgflash/oops-framework/raw/master/doc/img/module.png)

9. The framework is provided as a plug-in and is separated from the project code to facilitate smooth upgrades of different versions.
    ![](https://github.com/dgflash/oops-framework/raw/master/doc/img/oops-plug-in1.jpg)
![](https://github.com/dgflash/oops-framework/raw/master/doc/img/oops-plug-in2.jpg)
10. Framework auxiliary plug-in
    ![](https://github.com/dgflash/oops-framework/raw/master/doc/img/tools.jpg)

#### Plug-in classification
1. Static configuration table Excel to Json data and corresponding data structure TS script plug-in [[Tutorial Portal]](https://blog.csdn.net/weixin_39324642/article/details/124484273?spm=1001.2014.3001.5502)
    -Execute the update-oops-plugin-excel-to-json.bat file in the project root directory to update the latest version
2. The hot update component is matched with the hot update data plug-in [[Tutorial Portal]](https://blog.csdn.net/weixin_39324642/article/details/124483993?spm=1001.2014.3001.5502)
    -Execute the update-oops-plugin-hot-update.bat file in the project root directory to update the latest version

#### Referenced third-party source code libraries
| Library name | Introduction | Original |
| ----------| --------------------------------------------------------------------------| ------------------------------------------------------------|
| WebSocket | Flexible design by the original author, easy to expand custom protocols | [Original](https://github.com/wyb10a10/cocos_creator_framework) |
| animator | Visual animation state machine, similar to Untiy's Animator experience, extended 3D skeletal animation support | [Original](https://github.com/LeeYip/cocos-animator) |
| model-view | MVVM component library, originally cc2.x version, I upgraded to cc3.x | [Original](https://github.com/wsssheep/cocos_creator_mvvm_tools) |
| ECS | Entity-Component-System, upgraded and optimized | [Original](https://github.com/shangdibaozi/ECS) |

#### Referenced third-party NPM library
| Library name | Introduction | Installation | Original |
| ----------| ----------| -----------------------| ------------------------------------------------------|
| seedrandom | Generate random numbers | npm install seedrandom | [Original](https://www.npmjs.com/package/seedrandom) |
| crypto-es | Encryption algorithm library | yarn add crypto-es | [Original](https://github.com/entronad/crypto-es) |

#### Contribution List
| Time | Developer | Contributed Content |
| ----------| ----------| -------------------------------------------------------------------------------------------|
| 2022-10-27 | Dengke | Automatically generate smart prompt plug-in for resource codes in Bundle packages |
| 2022-09-01 | GaGa | Deployment guidance for automated document generation tools |
| 2022-08-04 | Bz | Fix the problem of UrlParse object parsing the address query parameter data error of Tencent Game Hall |
| 2022-06-02 | Mr. Feather | Fix the problem that the interface in the UI frame cannot be removed without destroying it; Fix the problem that when the interface is obtained from the cache in the UI frame, new parameters are passed and are not updated |
| 2022-04-15 | Hess | It is recommended to optimize all life cycle events of the ecs framework. When processing multiple entities, move the batch processing logic to the framework layer to reduce the amount of business code |
| 2021-10-13 | laret | Fix that the Dialog type UI cannot be triggered continuously |
| 2021-10-20 | dogegg | Support adding cc.Component to ecs entity objects |
| 2022-02-18 | Anonymous Friend | Fixed the problem of TimerManager time management object, when the game is minimized and switched to maximized, the timer does not trigger the completion event |

#### Online demo
[Full-stack solution for online games](https://store.cocos.com/app/detail/3814)

[Role Playing Game Solution -2D Character](https://store.cocos.com/app/detail/3675)

[Role Playing Game Solution -3D Character](https://store.cocos.com/app/detail/4139)

[Novice guide solution](https://store.cocos.com/app/detail/3653)
[Tiledmap map game solution](https://store.cocos.com/app/detail/4428)

[Open source framework oops-framework gitee](https://github.com/dgflash/oops-framework)

[Open source framework oops-framework github](https://github.com/dgflash/oops-framework)