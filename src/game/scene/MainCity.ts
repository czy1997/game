class MainCity extends BaseScene {
    private bg: egret.Bitmap
    constructor() {
        super()
        this.initMap()
        this.sortableChildren = true
    }

    private initMap() {
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
    
    }
}