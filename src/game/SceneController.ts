class SceneController {
    private _stage: egret.DisplayObjectContainer
    private MainCity: MainCity
    public static SceneController: SceneController

    constructor() {
        this.MainCity = new MainCity()
    }

    public static get instance () {
        if(!this.SceneController){
            this.SceneController = new SceneController()
        }
        return this.SceneController
    }

    public static set setStage(stage: egret.DisplayObjectContainer) {
        this.instance._stage = stage
    }

    public static mainCity() {
        let rocker = new Rocker(this.instance._stage)
        let person = new Swordsman(this.instance._stage)
        this.instance._stage.addChild(this.instance.MainCity)
    }
    
    public static changeScene(person:egret.MovieClip, door:egret.Bitmap, scene:egret.DisplayObjectContainer): any{
        //重新设置人物位置,防止无限检测位置
        person.x = 0
        person.y = GameUtil.getStageHeight() /2

        MainCity.bg.x = 0

        let stage = this.instance._stage
        let shp:egret.Shape = new egret.Shape()  // 黑色遮罩
        shp.graphics.beginFill(0x000000)
        shp.graphics.drawRect(0,0, GameUtil.getStageWidth(),GameUtil.getStageHeight())
        shp.graphics.endFill()
        shp.touchEnabled = true
        stage.addChild(shp)

        let _this = this
        egret.Tween
            .get(shp)
            .to({
                alpha: 0
            }, 2000, egret.Ease.sineIn)
            .call(() => {
                console.log('完成')
                stage.removeChild(shp)
            })
    }
}