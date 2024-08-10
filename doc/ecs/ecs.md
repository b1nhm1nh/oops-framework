# Introduction
libs/ecs This is a Typescript language version of the Entity-Component-System framework.

# Instructions for use
Create entity
```Typescript
ecs.getEntity<ecs.Entity>(ecs.Entity);
```

## Components
Custom components must inherit ecs.Comp and need to use ecs.register to register the component.
```TypeScript
@ecs.register('Hello')
export class HelloComponent extends ecs.Comp {
    info: string;
    data: number;

    //This method will be called before the component is recycled.
    reset() {
        this.info = '';
        this.data = 0;
    }
}
```

##ecs.register function
-The component object can be obtained through ```entity.Hello```;
-Store the component's constructor in the ecs context, and assign a component id to this type of component.

## Entity
In order to take advantage of Typescript's type hinting mechanism, users need to inherit ecs.Entity themselves when using entities.
```TypeScript
ecs.register('HelloEntity')
export class HelloEntity extends ecs.Entity {
    Hello: HelloComponent; //The Hello here must be consistent with the parameters filled in ecs.register
}
```

-Manage sub-entities
```TypeScript
//Add subentity
entity.addChild(ecs.Entity);

//Remove child entities
entity.removeChild(ecs.Entity);
```

-Add components:
```TypeScript
entity.add(HelloComponent); //When adding a component, useless component objects will be obtained from the component cache pool first. If there is no component object, a new component object will be created.
```
-Add component objects: Note that the ecs system is not responsible for recycling externally created component objects, and users need to manage the declaration cycle of the component objects themselves.
```Typescript
let compObj = new HelloComponent();
entity.add(compObj)
```

-Remove components:
```TypeScript
entity.remove(HelloComponent); //The component object will be removed from the entity and placed in the component cache pool
```

-Deleting components but not deleting component objects: In actual development, components have many attributes. If they are deleted and then added later, restoring the attribute values ​​is a troublesome problem.
The remove method can delete a component, but it does not actually remove the component object from the entity, so that the component object will still be added the next time the component is re-added.
```Typescript
entity.remove(HelloComponent, false)
```

-Get component object
```TypeScript
entity.Hello; //See custom entity operations above

entity.get(HelloComponent);
```

-Determine whether you own the component:
```TypeScript
entity.has(HelloComponent);

!!entity.Hello;
```

-Destroy the entity:
```TypeScript
entity.destroy() //When destroying an entity, all components on the entity will be deleted first, and then the entity will be placed in the entity cache pool.
```

## Entity filtering
Four types of filtering capabilities are currently provided, but these four filtering capabilities can be combined to provide more powerful filtering capabilities.
-anyOf: used to describe entities containing any one of these components;
-allOf: used to describe entities that contain these components;
-onlyOf: used to describe entities that only contain these components; it is not recommended to use onlyOf unless it is a special case, because onlyOf will listen to the addition and deletion events of all components;
-excludeOf: means not including all components (and relationship);

How to use:

-Indicates having multiple components at the same time
```TypeScript
ecs.allOf(AComponent, BComponent, CComponent);
```
-means owning any component
```Typescript
ecs.anyOf(AComponent, BComponent);
```
-Indicates having some components and not containing some components
```Typescript
//Does not contain CComponent or DComponent
ecs.allOf(AComponent, BComponent).excludeOf(CComponent, DComponent);

//Do not include CComponent and DComponent at the same time
ecs.allOf(AComponent, BComponent).excludeOf(CComponent).excludeOf(DComponent);
```

### Directly query and obtain entities
```Typescript
ecs.query(ecs.allOf(Comp1, Comp2))
```

## System
-ecs.System: used to combine the System included in a certain function;
-ecs.RootSystem: System root;
-ecs.ComblockSystem: abstract class, combined System. By default, if the System has entities, the update method will be executed every frame;
-ecs.IEntityEnterSystem: Implement this interface to indicate the first entry of the entity of interest;
-ecs.IEntityRemoveSystem: Implement this interface to indicate the removal of entities of interest;
-ecs.ISystemFirstUpdate: Implementing this interface will execute firstUpdate before System executes update for the first time.
-ecs.ISystemUpdate: Implementing this interface will trigger the update method in System every frame

# how to use
1. Declare components
```TypeScript
@ecs.register('Node')
export class NodeComponent extends ecs.Comp {
    val: cc.Node = null;

    reset() {
        this.val = null;
    }
}

@ecs.reigster('Move')
export class MoveComponent extends ecs.Comp {
    heading: cc.Vec2 = cc.v2();
    speed: number = 0;

    reset() {
        this.heading.x = 0;
        this.heading.y = 0;
        this.speed = 0;
    }
}

@ecs.register('Transform')
export class TransformComponent extends ecs.Comp {
    position: cc.Vec2 = cc.v2();
    angle: number;
    reset() {
    
    }
}

export class AvatarEntity extends ecs.Entity {
    Node: NodeComponent;
    Move: MoveComponent;
    Transform: TransformComponent;
}
```

2. Create a system
```TypeScript
export class RoomSystem extends ecs.RootSystem {
    constructor() {
        super();
        this.add(new MoveSystem());
        this.add(new RenderSystem());
    }
}

export class MoveSystem extends ecs.ComblockSystem<AvatarEntity> implements ecs.IEntityEnterSystem, ecs.ISystemUpdate {
    init() {
    
    }

    filter(): ecs.IMatcher {
        return ecs.allOf(MoveComponent, TransformComponent);
    }
    //The first time an entity enters MoveSystem, it will enter this method.
    entityEnter(e: AvatarEntity) {
        e.Move.speed = 100;
    }
    
    //Updated every frame
    update(e: AvatarEntity) {
        let moveComp = e.Move; //e.get(MoveComponent);
        lel position = e.Transform.position;
        
        position.x += moveComp.heading.x *moveComp.speed *this.dt;
        position.y += moveComp.heading.y *moveComp.speed *this.dt;
        e.Transform.angle = cc.misc.lerp(e.Transform.angle, Math.atan2(moveComp.speed.y, moveComp.speed.x) *cc.macro.DEG, dt);
    }
}

export class RenderSystem extends ecs.ComblockSystem<AvatarEntity> implements ecs.IEntityEnterSystem, ecs.IEntityRemoveSystem, ecs.ISystemUpdate {
    filter(): ecs.IMatcher {
        return ecs.allOf(NodeComponent, TransformComponent);
    }
    
    //The entity will enter this method when entering the move system for the first time.
    entityEnter(e: AvatarEntity) {
        e.Node.val.active = true;
    }
    
    entityRemove(e: AvatarEntity) {
       
    }
    
    update(e: AvatarEntity) {
        e.Node.val.setPosition(e.Transform.position);
        e.Node.val.angle = e.Transform.angle;
    }
}
```

3、Drive ecs framework
```TypeScript
const { ccclass, property } = cc._decorator;
@ccclass
export class GameControllerBehaviour extends Component {
    rootSystem: RootSystem = null;

    onLoad() {
        this.rootSystem = new RootSystem();
        this.rootSystem.init();
    }
    createAvatar(node: cc.Node) {
        let entity = ecs.createEntityWithComps<AvatarEntity>(NodeComponent, TransformComponent, MoveComponent);
        entity.Node.val = node;
    }

    update(dt: number) {
        this.rootSystem.execute(dt);
    }
}

```

#Mixed with Cocos Creator components
## Create base class
```Typescript
import { Component, _decorator } from "cc";
import { ecs } from "../../../Libs/ECS";
const { ccclass, property } = _decorator;

@ccclass('CCComp')
export abstract class CCComp extends Component implements ecs.IComp {
    static tid: number = -1;
    static compName: string;

    canRecycle: boolean;
    ent:ecs.Entity;

    onLoad() {
        this.ent = ecs.createEntity();
        this.ent.add(this);
    }

    abstract reset(): void;
}
```

## Create the ecs component and give it the serialization function, so that the parameters can be modified on the "Property Inspector" of Cocos Creator
```Typescript
import { _decorator, toDegree, v3, Node, Vec3 } from "cc";
import { ecs } from "../../../Libs/ECS";
const { ccclass, property } = _decorator;

let outV3 = v3();
@ccclass('MovementComponent')
@ecs.register('Movement')
export class MovementComponent extends CCComp {
    pos: Vec3 = v3();
    angle: number = 0;
    speed: number = 0;

    @property
    acceleration: number = 0;

    @property
    private _maxSpeed: number = 0;
    @property
    set maxSpeed(val: number) {
        this._maxSpeed = val;
    }
    get maxSpeed() {
        return this._maxSpeed;
    }
    @property
    heading: Vec3 = v3();
    
    @property
    targetHeading: Vec3 = v3();

    reset() {

    }

    update(dt: number) {
        if(!Vec3.equals(this.heading, this.targetHeading, 0.01)) {
            Vec3.subtract(outV3, this.targetHeading, this.heading);
            outV3.multiplyScalar(0.025);
            this.heading.add(outV3);
            this.heading.normalize();
            this.angle = toDegree(Math.atan2(this.heading.y, this.heading.x)) -90;
    }
        
        this.speed = Math.min(this.speed + this.acceleration *dt, this._maxSpeed);

        this.pos.add3f(this.heading.x *this.speed *dt, this.heading.y *this.speed *dt, 0);
    }

    calcAngle() {
        this.angle = toDegree(Math.atan2(this.heading.y, this.heading.x)) -90;
        return this.angle;
    }
}

```

## Create components for Cocos Creator
```Typescript
import { Component, _decorator } from "cc";
const { ccclass, property } = _decorator;
@ccclass('Player')
@ecs.register('Player', false)
export class Player extends CCComp {
    @property({
        type: MovementComponent
    })
    movement: MovementComponent;

    onLoad() {
        super.onLoad();

        //Add MovementComponent component object
        this.ent.add(this.movement);
    }
}
```

# Debug
Add the following code
```TypeScript
windows['ecs'] = ecs;