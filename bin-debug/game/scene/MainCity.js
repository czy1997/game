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
    Object.defineProperty(MainCity, "instanceBg", {
        get: function () {
            if (!this.bg) {
                this.bg = new egret.DisplayObjectContainer();
            }
            return this.bg;
        },
        enumerable: true,
        configurable: true
    });
    MainCity.prototype.initMap = function () {
        this.addChild(MainCity.instanceBg);
        MainCity.instanceBg.width = 800;
        MainCity.instanceBg.mask = new egret.Rectangle(0, 0, MainCity.instanceBg.width, GameUtil.getStageHeight());
        this.sky = GameUtil.createBitmapByName('sky');
        this.sky.width = MainCity.instanceBg.width;
        this.sky.height = GameUtil.getStageHeight();
        this.sky.fillMode = egret.BitmapFillMode.REPEAT;
        this.sky.y = 0;
        this.sky.x = 0;
        this.sky.zIndex = 0;
        MainCity.instanceBg.addChild(this.sky);
        this.wall = GameUtil.createBitmapByName('MainCityWall');
        MainCity.instanceBg.addChild(this.wall);
        this.wall.height = GameUtil.getStageHeight() / 2;
        this.wall.y = 0;
        this.wall.x = 0;
        this.wall.zIndex = 1;
        this.floor = GameUtil.createBitmapByName('mcB1');
        MainCity.instanceBg.addChild(this.floor);
        this.floor.fillMode = egret.BitmapFillMode.REPEAT;
        this.floor.width = MainCity.instanceBg.width;
        this.floor.height = MainCity.instanceBg.height / 2;
        this.floor.y = MainCity.instanceBg.height / 2;
        this.floor.zIndex = 2;
        this.door = GameUtil.createBitmapByName('MainCityDoor');
        MainCity.instanceBg.addChild(this.door);
        this.door.y = GameUtil.getStageHeight() / 4;
        this.door.width = 100;
        this.door.height = 150;
        this.door.x = MainCity.instanceBg.width - this.door.width;
        this.door.zIndex = 3;
        GameUtil.touchDoor(Swordsman.getPerson, this.door, this);
    };
    return MainCity;
}(BaseScene));
__reflect(MainCity.prototype, "MainCity");
//# sourceMappingURL=MainCity.js.map