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
    
}