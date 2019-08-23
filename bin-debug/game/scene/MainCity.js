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
var MainCity = (function (_super) {
    __extends(MainCity, _super);
    function MainCity() {
        var _this = _super.call(this) || this;
        _this.initMap();
        _this.sortableChildren = true;
        return _this;
    }
    MainCity.prototype.initMap = function () {
        this.bg = new egret.DisplayObjectContainer();
        this.addChild(this.bg);
        this.bg.width = 2000;
        this.sky = GameUtil.createBitmapByName('sky');
        this.sky.height = GameUtil.getStageHeight();
        this.sky.fillMode = egret.BitmapFillMode.REPEAT;
        this.sky.y = 0;
        this.sky.x = 0;
        this.sky.zIndex = 0;
        this.bg.addChild(this.sky);
        this.floor = GameUtil.createBitmapByName('mcB1');
        this.floor.fillMode = egret.BitmapFillMode.REPEAT;
        this.floor.height = GameUtil.getStageHeight() / 2;
        this.floor.y = GameUtil.getStageHeight() / 2;
        this.floor.zIndex = 1;
        this.bg.addChild(this.floor);
    };
    return MainCity;
}(BaseScene));
__reflect(MainCity.prototype, "MainCity");
//# sourceMappingURL=MainCity.js.map