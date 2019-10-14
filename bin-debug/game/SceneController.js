var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneController = (function () {
    function SceneController() {
        this.MainCity = new MainCity();
    }
    Object.defineProperty(SceneController, "instance", {
        get: function () {
            if (!this.SceneController) {
                this.SceneController = new SceneController();
            }
            return this.SceneController;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SceneController, "setStage", {
        set: function (stage) {
            this.instance._stage = stage;
        },
        enumerable: true,
        configurable: true
    });
    SceneController.mainCity = function () {
        var rocker = new Rocker(this.instance._stage);
        var person = new Swordsman(this.instance._stage);
        this.instance._stage.addChild(this.instance.MainCity);
    };
    SceneController.changeScene = function (person, door, scene) {
        //重新设置人物位置,防止无限检测位置
        person.x = 0;
        person.y = GameUtil.getStageHeight() / 2;
        MainCity.bg.x = 0;
        var stage = this.instance._stage;
        var shp = new egret.Shape(); // 黑色遮罩
        shp.graphics.beginFill(0x000000);
        shp.graphics.drawRect(0, 0, GameUtil.getStageWidth(), GameUtil.getStageHeight());
        shp.graphics.endFill();
        shp.touchEnabled = true;
        stage.addChild(shp);
        var _this = this;
        egret.Tween
            .get(shp)
            .to({
            alpha: 0
        }, 2000, egret.Ease.sineIn)
            .call(function () {
            console.log('完成');
            stage.removeChild(shp);
        });
    };
    return SceneController;
}());
__reflect(SceneController.prototype, "SceneController");
//# sourceMappingURL=SceneController.js.map