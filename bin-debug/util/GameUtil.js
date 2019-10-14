/**
 * 工具类
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameUtil = (function () {
    function GameUtil() {
    }
    /**
     * 获取舞台高度
     */
    GameUtil.getStageHeight = function () {
        return egret.MainContext.instance.stage.height;
    };
    /**
     * 获取舞台宽度
     */
    GameUtil.getStageWidth = function () {
        return egret.MainContext.instance.stage.width;
    };
    /**
     * 根据名称创建Bitmap对象
     */
    GameUtil.createBitmapByName = function (name, type) {
        if (type === void 0) { type = 'png'; }
        var bmp = new egret.Bitmap();
        var texture = RES.getRes(name + '_' + type);
        bmp.texture = texture;
        return bmp;
    };
    /**
     * 根据name创建一个MovieClip对象
     */
    GameUtil.createMovieClipByName = function (name) {
        var data_stay = RES.getRes(name + '_json');
        var texture_stay = RES.getRes(name + '_png');
        var mcFactory_stay = new egret.MovieClipDataFactory(data_stay, texture_stay);
        return new egret.MovieClip(mcFactory_stay.generateMovieClipData(name));
    };
    /**
     * 检测传送门碰撞事件
     */
    GameUtil.touchDoor = function (person, door, scene) {
        // console.log(GameUtil.getStageWidth())
        egret.Ticker.getInstance().register(function (dt) {
            if ((person.x - MainCity.bg.x) > door.x && (person.y + person.height < door.y + door.height + 20 && person.y + person.height > door.y + door.height - 20)) {
                SceneController.changeScene(person, door, scene);
            }
        }, this);
    };
    return GameUtil;
}());
__reflect(GameUtil.prototype, "GameUtil");
//# sourceMappingURL=GameUtil.js.map