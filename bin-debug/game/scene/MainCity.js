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
        // this.bg = GameUtil.createBitmapByName('MainCityBg', 'jpg')
        // this.addChild(this.bg)
        // let ratioW = GameUtil.getStageWidth() / this.bg.width;
        // let ratioH = GameUtil.getStageHeight() / this.bg.height;
        // let ratio = this.bg.width / this.bg.height;
        // if(ratioW > ratioH) {
        //     this.bg.width = GameUtil.getStageWidth();
        //     this.bg.width = this.bg.width / ratio;
        // } else {
        //     this.bg.height = GameUtil.getStageHeight();
        //     this.bg.width = this.bg.height * ratio
        // }
    };
    return MainCity;
}(BaseScene));
__reflect(MainCity.prototype, "MainCity");
//# sourceMappingURL=MainCity.js.map