/*
 * @Author: dgflash
 * @Date: 2022-07-14 10:57:43
 * @LastEditors: dgflash
 * @LastEditTime: 2023-01-19 15:27:17
 */
import { _decorator } from 'cc';
import { Root } from '../../../extensions/oops-plugin-framework/assets/core/Root';
import { BehaviorTree, BTreeNode, Decorator, Sequence, Task } from '../../../extensions/oops-plugin-framework/assets/libs/behavior-tree';
import { Timer } from '../../../extensions/oops-plugin-framework/assets/core/common/timer/Timer';

const { ccclass, property } = _decorator;

/** 
 * behavioral demonstration
 * Function description: A character moves forward, stops if it encounters an enemy, and continues moving if there is no enemy.
 */
@ccclass('Main')
export class Main extends Root {
    /** character position*/
    role_pos: number = 0;
    /** enemy position*/
    enemy_pos: number = 3;

    private bt: BehaviorTree = null!;
    private timer: Timer = new Timer(1);

    start() {
        var btns: Array<BTreeNode> = [];
        btns.push(new RoleMoveTask());
        btns.push(new IsSeeEnemy(new RoleMoveStopTask()));

        // Expressed here, the role move task node first processes the character movement one step, 
        // and the is see enemy node verifies whether it encounters the enemy. 
        // If so, the task node hanging below is see enemy processes the prompt of encountering the enemy.
        this.bt = new BehaviorTree(new Sequence(btns));
    }

    update(dt: number) {
        if (this.timer.update(dt)) {
            this.bt.setObject(this)
            this.bt.run();
        }
    }
}

/** Demonstrates control movement, passing the main object that needs to be processed to the behavior tree through the concept of the behavior tree blackboard, 
 * and moving one step every second.*/
class RoleMoveTask extends Task {
    run(obj?: Main): void {
        if (obj) {
            obj.role_pos++;
            console.log(`The character is currently moving [${obj.role_pos}] step`);
        }
        this.success();
    }
}

/** The decorator is a conditional statement that can only be attached to other nodes and defines whether the attached node is executed. 
 * Here, after verifying that the enemy position is equal to it, it means that the condition verification is successful and subsequent tasks continue to be executed. 
 * If it fails, the processing flow of the behavior tree ends.*/
class IsSeeEnemy extends Decorator {
    run(blackboard: Main) {
        if (blackboard.role_pos >= blackboard.enemy_pos) {
            super.run(blackboard);
            this.success();         // Call this method to express the result that the verification logic is true on behalf of this node, 
                                    // and subsequent nodes can be executed.
        }
        else {
            this.fail();            // Calling this method represents the result that the verification logic of this node is false, 
                                    // and subsequent nodes cannot be executed.
        }
    }
}

/** Players perform their own action logic. This type of logic generally only costs costs and is a definite process. */
class RoleMoveStopTask extends Task {
    run(blackboard: Main): void {
        console.log(`The character is currently stopped moving`);
        blackboard.enabled = false;             // No longer triggers behavior tree processing logic
        this.success();
    }
}