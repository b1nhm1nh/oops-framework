/*
 * @Author: dgflash
 * @Date: 2022-07-14 10:57:43
 * @LastEditors: dgflash
 * @LastEditTime: 2022-11-11 18:14:21
 */
import { Node, Vec3, _decorator, tween } from 'cc';
import { oops } from '../../../extensions/oops-plugin-framework/assets/core/Oops';
import { Root } from '../../../extensions/oops-plugin-framework/assets/core/Root';
import { PopViewParams } from '../../../extensions/oops-plugin-framework/assets/core/gui/layer/Defines';
import { UIConfigData, UIID } from '../../script/game/common/config/GameUIConfig';

const { ccclass, property } = _decorator;

/** 
 * Demonstration of various types of game window functions
 * 1. Main interface
 * 2. Interface switching
 * 3. Pop-up window
 * 4. Modal window
 * 5. Pop-up window data transmission method
 * 6. Pop-up window animation
 */
@ccclass('Main')
export class Main extends Root {
    protected initGui() {
        oops.res.loadDir("common");
        oops.gui.init(UIConfigData);
    }

    btnMainUI() {
        oops.gui.open(UIID.MainUI);
    }

    btnSwitch() {
        oops.gui.remove(UIID.MainUI);
        oops.gui.open(UIID.MainUI_Switch);
    }

    btnPop1() {
        oops.gui.open(UIID.Pop1, { param: "pop1" }, this.getPopCommonEffect());
    }

    btnPop2() {
        oops.gui.open(UIID.Pop2, { param: "pop2" }, this.getPopCommonEffect());
    }

    btnDialog() {
        var uic: PopViewParams = {
            onAdded: (node: Node, params: any) => {
                console.log("After the interface is added to the parent node");
            },
            onRemoved: (node: Node | null, params: any) => {
                console.log("After the interface is removed from the parent node");
            }
        }
        oops.gui.open(UIID.Dialog, { param: "Dialog" }, uic);
    }

    private getPopCommonEffect(callbacks?: PopViewParams) {
        let newCallbacks: PopViewParams = {
            // Node adding animation
            onAdded: (node, params) => {
                node.setScale(0.1, 0.1, 0.1);

                tween(node)
                    .to(0.2, { scale: new Vec3(1, 1, 1) })
                    .start();
            },
            // Node deletion animation
            onBeforeRemove: (node, next) => {
                tween(node)
                    .to(0.2, { scale: new Vec3(0.1, 0.1, 0.1) })
                    .call(next)
                    .start();
            },
        }

        if (callbacks) {
            if (callbacks && callbacks.onAdded) {
                let onAdded = callbacks.onAdded;
                callbacks.onAdded = (node: Node, params: any) => {
                    onAdded(node, params);
                    newCallbacks.onAdded && newCallbacks.onAdded(node, params);
                };
            }

            if (callbacks && callbacks.onBeforeRemove) {
                let onBeforeRemove = callbacks.onBeforeRemove;
                callbacks.onBeforeRemove = (node, params) => {
                    onBeforeRemove(node, params);
                    newCallbacks.onBeforeRemove && newCallbacks.onBeforeRemove(node, params);
                };
            }
            return callbacks;
        }
        return newCallbacks;
    }
}