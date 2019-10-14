class MainCity extends BaseScene {
    public static bg: egret.DisplayObjectContainer  //背景容器
    private floor: egret.Bitmap  // 地板
    private sky: egret.Bitmap  // 天空
    private wall: egret.Bitmap  // 墙
    private door: egret.Bitmap  // 门
    constructor() {
        super()
        this.initMap()
        this.sortableChildren = true
    }

    public static get instanceBg () {
        if(!this.bg){
            this.bg = new egret.DisplayObjectContainer()
           
        }
        return this.bg
    }

    private initMap() {
        this.addChild(MainCity.instanceBg)
        MainCity.instanceBg.width = 800
        MainCity.instanceBg.mask = new egret.Rectangle(0,0,MainCity.instanceBg.width, GameUtil.getStageHeight())

        this.sky = GameUtil.createBitmapByName('sky')
        this.sky.width = MainCity.instanceBg.width
        this.sky.height = GameUtil.getStageHeight()
        this.sky.fillMode = egret.BitmapFillMode.REPEAT;
        this.sky.y = 0
        this.sky.x =0
        this.sky.zIndex = 0
        MainCity.instanceBg.addChild(this.sky)

        this.wall = GameUtil.createBitmapByName('MainCityWall')
        MainCity.instanceBg.addChild(this.wall)
        this.wall.height = GameUtil.getStageHeight() /2
        this.wall.y = 0
        this.wall.x = 0
        this.wall.zIndex = 1

        this.floor = GameUtil.createBitmapByName('mcB1')
        MainCity.instanceBg.addChild(this.floor)
        this.floor.fillMode = egret.BitmapFillMode.REPEAT;
        this.floor.width = MainCity.instanceBg.width
        this.floor.height = MainCity.instanceBg.height / 2
        this.floor.y = MainCity.instanceBg.height /2
        this.floor.zIndex = 2
        
        this.door = GameUtil.createBitmapByName('MainCityDoor')
        MainCity.instanceBg.addChild(this.door)
        this.door.y =  GameUtil.getStageHeight() /4
        this.door.width = 100
        this.door.height = 150
        this.door.x =  MainCity.instanceBg.width - this.door.width
        this.door.zIndex = 3
        GameUtil.touchDoor(Swordsman.getPerson, this.door, this)
    }
}