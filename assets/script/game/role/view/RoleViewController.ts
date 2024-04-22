/*
 * @Author: dgflash
 * @Date: 2021-11-18 17:42:59
 * @LastEditors: dgflash
 * @LastEditTime: 2022-06-14 17:57:33
 */

import { Component, EventTouch, Node, UITransform, v3, _decorator } from "cc";
import { oops } from "../../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { Role } from "../Role";

const { ccclass, property } = _decorator;

/** Character resource loading */
@ccclass('RoleViewController')
export class RoleViewController extends Component {
    /** role object */
    role: Role = null!;

    onLoad() {
        oops.gui.game.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    private onTouchEnd(event: EventTouch) {
        // Note: The character movement control code in RPG games should be designed so that the map module listens for touch events. 
        // Because the test code has only one role, in order to simplify and reduce the amount of demo code, it only expresses programming ideas.
        var uit = this.node.parent!.getComponent(UITransform)!;
        var x = event.getUILocation().x - uit.contentSize.width / 2;
        var y = event.getUILocation().y - uit.contentSize.height / 2;
        this.role.move(v3(x, y));

        if (x < this.role.RoleView.node.position.x)
            this.role.RoleView.animator.left();
        else
            this.role.RoleView.animator.right();
    }

    onDestroy() {
        oops.gui.game.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }
}