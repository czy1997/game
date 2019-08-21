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
    return SceneController;
}());
__reflect(SceneController.prototype, "SceneController");
//# sourceMappingURL=SceneController.js.map