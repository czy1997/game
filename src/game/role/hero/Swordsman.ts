class Swordsman extends egret.Sprite {
    private _stage:egret.DisplayObjectContainer
    private userName: string 
    private bloodValue: number
    public static person: egret.MovieClip
    constructor(stage:egret.DisplayObjectContainer) {
        super()
        this._stage = stage
        this.init()
    } 

    public static get getPerson() {
        if(!this.person) {
            this.person = new egret.MovieClip()
            this.person.zIndex = 98
            this.person.movieClipData = GameUtil.createMovieClipByName('person').movieClipData
        }
        return this.person
    }

    private init() {
        this._stage.addChild(Swordsman.getPerson)
        
        Swordsman.getPerson.x = 0
        Swordsman.getPerson.y = GameUtil.getStageHeight() / 3
    }

    public static move() {
        console.log(n.GameData.scene)
        let speedX = Math.sin(Rocker.hudu ) * (Math.sqrt(Rocker.speed) > 150 ?  150/100 : (Math.sqrt(Rocker.speed)/100 ))
        let speedY = Math.cos(Rocker.hudu) *  (Math.sqrt(Rocker.speed) > 150 ?  150/100 : (Math.sqrt(Rocker.speed)/100 ))
        // 判断人物是否在屏幕范围内
        if((Swordsman.getPerson.x >= 0  && Swordsman.getPerson.x < GameUtil.getStageWidth() - Swordsman.getPerson.width) ) {
            if( speedX >= 0 && speedY >=0) {
                Swordsman.getPerson.x += speedX
            } else if(speedX >= 0 && speedY < 0) {
                Swordsman.getPerson.x += speedX
            } else if(speedX < 0 && speedY < 0) {
                Swordsman.getPerson.x += speedX
            } else if(speedX < 0 && speedY >= 0) {
                Swordsman.getPerson.x += speedX
            }
        } else {
           Swordsman.getPerson.x = Swordsman.getPerson.x > GameUtil.getStageWidth() / 2 ?  GameUtil.getStageWidth() - Swordsman.getPerson.width  : 0
        }

        if(Swordsman.getPerson.y >= GameUtil.getStageHeight() / 2 - Swordsman.getPerson.height && Swordsman.getPerson.y < GameUtil.getStageHeight() - Swordsman.getPerson.height ) { 
            if( speedX >= 0 && speedY >=0) {
                Swordsman.getPerson.y -= speedY
            } else if(speedX >= 0 && speedY < 0) {
                Swordsman.getPerson.y -= speedY
            } else if(speedX < 0 && speedY < 0) {
                Swordsman.getPerson.y -= speedY
            } else if(speedX < 0 && speedY >= 0) {
                Swordsman.getPerson.y -= speedY
            }
            
        } else {
            Swordsman.getPerson.y = Swordsman.getPerson.y > GameUtil.getStageHeight() / 2 ?  GameUtil.getStageHeight() - Swordsman.getPerson.height  : GameUtil.getStageHeight() / 2 - Swordsman.getPerson.height  
        }
        
    }
}