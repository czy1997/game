var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var n;
(function (n) {
    var GameData = (function () {
        function GameData() {
        }
        GameData.scene = MainCity; // 场景
        return GameData;
    }());
    n.GameData = GameData;
    __reflect(GameData.prototype, "n.GameData");
})(n || (n = {}));
//# sourceMappingURL=GameData.js.map