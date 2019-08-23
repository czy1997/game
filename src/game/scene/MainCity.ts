class MainCity extends BaseScene {
    private bg: egret.DisplayObjectContainer  //背景容器
    private floor: egret.Bitmap  // 地板
    private sky: egret.Bitmap  // 天空
    constructor() {
        super()
        this.initMap()
        this.sortableChildren = true
    }

    private initMap() {
        this.bg = new egret.DisplayObjectContainer()
        this.addChild(this.bg)
        this.bg.width = 2000
        this.bg.height

        this.sky = GameUtil.createBitmapByName('sky')
        this.sky.height = GameUtil.getStageHeight()
        this.sky.fillMode = egret.BitmapFillMode.REPEAT;
        this.sky.y = 0
        this.sky.x =0
        this.sky.zIndex = 0
        this.bg.addChild(this.sky)

        this.floor = GameUtil.createBitmapByName('mcB1')
        this.floor.fillMode = egret.BitmapFillMode.REPEAT;
        this.floor.width = this.bg.width
        this.floor.height = this.bg.height / 2
        this.floor.y = this.bg.height /2
        this.floor.zIndex = 1
        this.bg.addChild(this.floor)
    
    }
}