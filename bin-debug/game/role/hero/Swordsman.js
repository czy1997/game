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
var Swordsman = (function (_super) {
    __extends(Swordsman, _super);
    function Swordsman(stage) {
        var _this = _super.call(this) || this;
        _this._stage = stage;
        _this.init();
        return _this;
    }
    Object.defineProperty(Swordsman, "getPerson", {
        get: function () {
            if (!this.person) {
                this.person = new egret.MovieClip();
                this.person.movieClipData = GameUtil.createMovieClipByName('person').movieClipData;
            }
            return this.person;
        },
        enumerable: true,
        configurable: true
    });
    Swordsman.prototype.init = function () {
        this._stage.addChild(Swordsman.getPerson);
        Swordsman.getPerson.x = 0;
        Swordsman.getPerson.y = GameUtil.getStageHeight() / 3;
    };
    Swordsman.move = function () {
        var speedX = Math.sin(Rocker.hudu) * (Math.sqrt(Rocker.speed) > 150 ? 150 / 100 : (Math.sqrt(Rocker.speed) / 100));
        var speedY = Math.cos(Rocker.hudu) * (Math.sqrt(Rocker.speed) > 150 ? 150 / 100 : (Math.sqrt(Rocker.speed) / 100));
        // 判断人物是否在屏幕范围内
        if ((Swordsman.getPerson.x >= 0 && Swordsman.getPerson.x < GameUtil.getStageWidth() - Swordsman.getPerson.width)) {
            if (speedX >= 0 && speedY >= 0) {
                Swordsman.getPerson.x += speedX;
            }
            else if (speedX >= 0 && speedY < 0) {
                Swordsman.getPerson.x += speedX;
            }
            else if (speedX < 0 && speedY < 0) {
                Swordsman.getPerson.x += speedX;
            }
            else if (speedX < 0 && speedY >= 0) {
                Swordsman.getPerson.x += speedX;
            }
        }
        else {
            Swordsman.getPerson.x = Swordsman.getPerson.x > GameUtil.getStageWidth() / 2 ? GameUtil.getStageWidth() - Swordsman.getPerson.width - 1 : 1;
        }
        if (Swordsman.getPerson.y >= -Swordsman.getPerson.width && Swordsman.getPerson.y < GameUtil.getStageHeight() - Swordsman.getPerson.width) {
            if (speedX >= 0 && speedY >= 0) {
                Swordsman.getPerson.y -= speedY;
            }
            else if (speedX >= 0 && speedY < 0) {
                Swordsman.getPerson.y -= speedY;
            }
            else if (speedX < 0 && speedY < 0) {
                Swordsman.getPerson.y -= speedY;
            }
            else if (speedX < 0 && speedY >= 0) {
                Swordsman.getPerson.y -= speedY;
            }
        }
        else {
            Swordsman.getPerson.y = Swordsman.getPerson.y > GameUtil.getStageHeight() / 2 ? GameUtil.getStageHeight() - Swordsman.getPerson.height - 1 : 1;
        }
    };
    return Swordsman;
}(egret.Sprite));
__reflect(Swordsman.prototype, "Swordsman");
//# sourceMappingURL=Swordsman.js.map