var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Rocker = (function (_super) {
    __extends(Rocker, _super);
    function Rocker(stage) {
        var _this = _super.call(this) || this;
        _this.radius = 90; // 摇杆可活动范围的半径
        console.log(1);
        _this._stage = stage;
        _this.init();
        return _this;
    }
    Rocker.prototype.init = function () {
        this.createArea();
        this.createCircle();
    };
    Object.defineProperty(Rocker, "getSpeed", {
        get: function () {
            return this.speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rocker, "setSpeed", {
        set: function (speed) {
            this.speed = speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rocker, "getHudu", {
        get: function () {
            return this.hudu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rocker, "setHudu", {
        set: function (hudu) {
            this.hudu = hudu;
        },
        enumerable: true,
        configurable: true
    });
    Rocker.prototype.createArea = function () {
        this.area = new egret.Shape();
        this._stage.addChild(this.area);
        this.area.graphics.lineStyle(5, 0xDC143C);
        this.area.graphics.beginFill(0x000000);
        this.area.graphics.drawCircle(0, 0, this.radius);
        this.area.graphics.endFill();
        this.area.x = GameUtil.getStageWidth() * 0.15;
        this.area.y = GameUtil.getStageHeight() * 0.6;
    };
    Rocker.prototype.createCircle = function () {
        this.circle = new egret.Shape();
        this._stage.addChild(this.circle);
        this.circle.graphics.beginFill(0xDC143C);
        this.circle.graphics.drawCircle(0, 0, 30);
        this.circle.graphics.endFill();
        this.circle.x = this.area.x;
        this.circle.y = this.area.y;
        this.cover = new egret.Shape();
        this._stage.addChild(this.cover);
        this.cover.graphics.beginFill(0x000, 0);
        this.cover.graphics.drawRect(0, 0, GameUtil.getStageWidth() / 2, GameUtil.getStageHeight());
        this.cover.graphics.endFill();
        this.cover.touchEnabled = true;
        this.cover.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touch, this);
        this.cover.addEventListener(egret.TouchEvent.TOUCH_END, this.stopTouch, this);
        this.cover.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.stopTouch, this);
    };
    Rocker.prototype.touch = function (e) {
        this.offsetX = e.stageX - this.circle.x;
        this.offsetY = e.stageY - this.circle.y;
        if (e.stageX - this.area.x >= 0) {
            Swordsman.getPerson.gotoAndPlay('right', -1);
        }
        else {
            Swordsman.getPerson.gotoAndPlay('left', -1);
        }
        this.cover.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.move, this);
        this.clock = new egret.Timer(0, 0);
        this.clock.addEventListener(egret.TimerEvent.TIMER, Swordsman.move, this);
        this.clock.start();
    };
    Rocker.prototype.stopTouch = function () {
        this.cover.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.move, this);
        this.circle.x = this.area.x;
        this.circle.y = this.area.y;
        Swordsman.getPerson.stop();
        this.clock.stop();
    };
    Rocker.prototype.move = function (e) {
        var x = e.stageX - this.area.x;
        var y = e.stageY - this.area.y;
        var x2 = Math.pow(x, 2);
        var y2 = Math.pow(y, 2);
        Rocker.setSpeed = x2 + y2;
        var angle = this.getCircleAngel([e.stageX, e.stageY], [this.area.x, this.area.y]);
        Rocker.setHudu = (2 * Math.PI / 360) * (angle);
        if ((x > -10 && x < 10) && (angle < 180 || angle > 360)) {
            Swordsman.getPerson.gotoAndPlay('right', -1);
        }
        else if ((x > -10 && x < 10) && (angle > 180 && angle < 360)) {
            Swordsman.getPerson.gotoAndPlay('left', -1);
        }
        if (Rocker.getSpeed <= Math.pow(this.radius, 2)) {
            this.circle.x = e.stageX - this.offsetX;
            this.circle.y = e.stageY - this.offsetY;
        }
        else {
            var X = void 0, Y = void 0;
            if ((e.stageX > this.area.x && e.stageY > this.area.y) && (e.stageX < this.area.x && e.stageY < this.area.y)) {
                X = this.area.x - Math.sin(Rocker.getHudu) * this.radius;
                Y = this.area.y + Math.cos(Rocker.getHudu) * this.radius;
            }
            else {
                X = this.area.x + Math.sin(Rocker.getHudu) * this.radius;
                Y = this.area.y - Math.cos(Rocker.getHudu) * this.radius;
            }
            this.circle.x = X;
            this.circle.y = Y;
        }
    };
    Rocker.prototype.getCircleAngel = function (point, dot) {
        var height = point[1] - dot[1], width = point[0] - dot[0];
        if (width == 0) {
            // 如果和y轴平行，角度为90或270
            return point[1] >= dot[1] ? 90 : 270;
        }
        else {
            var tan = Math.atan(height / width), angle = tan * 180 / Math.PI;
            //返回的角度多返回了90度
            return tan > 0 ? (point[0] > dot[0] ? angle + 90 : angle + 270) : (point[0] > dot[0] ? angle + 450 : angle + 270);
        }
    };
    return Rocker;
}(egret.Shape));
__reflect(Rocker.prototype, "Rocker");
//# sourceMappingURL=Rocker.js.map