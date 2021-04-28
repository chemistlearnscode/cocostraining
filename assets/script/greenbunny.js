// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        objname:"Green",
        _timer:0,
    },

    zoomIn(dt){
        this.node.scaleX += 1.5*dt;
    },

    zoomOut(dt){
        this.node.scaleX -= 15*dt;
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        this._timer += dt;
        if(this._timer>=1){
            this.zoomIn(dt);
            if(this.node.scaleX===1.5){
                this.zoomOut(dt);
            }
        }
        if(this._timer>=2){
            // this.zoomIn(dt);
            this.zoomIn(dt);
            if(this.node.scaleX===1.5){
                this.zoomOut(dt);
            }
            this._timer=0;
        }
        
    },
});
