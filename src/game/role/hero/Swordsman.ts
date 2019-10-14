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
        let speedX = Math.sin(Rocker.hudu ) *Rocker.speed
        let speedY = Math.cos(Rocker.hudu) * Rocker.speed 
        // 判断人物是否在屏幕范围内
        if((Swordsman.getPerson.x >= 0  && Swordsman.getPerson.x < (GameUtil.getStageWidth() - Swordsman.getPerson.width )) ) {
            // 判断人物在屏幕中间的时候,背景是否大于屏幕宽度，如果大于就让背景移动，人物不懂
            if(Swordsman.getPerson.x <= (GameUtil.getStageWidth()/2 + Swordsman.getPerson.width) && Swordsman.getPerson.x >= (GameUtil.getStageWidth()/2 -Swordsman.getPerson.width)) {
                // 判断人物走动方向，并且根据背景的坐标和宽度确定是否还可以移动背景
                if(speedX >= 0 && (MainCity.bg.x + MainCity.bg.width) >=  GameUtil.getStageWidth()) {
                    MainCity.bg.x -=speedX
                } else if(speedX < 0 && (MainCity.bg.x + 10) <= 0) {
                    MainCity.bg.x -=speedX
                } else {
                    if( speedX >= 0 && speedY >=0) {
                        Swordsman.getPerson.x += speedX
                    } else if(speedX >= 0 && speedY < 0) {
                        Swordsman.getPerson.x += speedX
                    } else if(speedX < 0 && speedY < 0) {
                        Swordsman.getPerson.x += speedX
                    } else if(speedX < 0 && speedY >= 0) {
                        Swordsman.getPerson.x += speedX
                    }
                }
                
            } else {
                if( speedX >= 0 && speedY >=0) {
                    Swordsman.getPerson.x += speedX
                } else if(speedX >= 0 && speedY < 0) {
                    Swordsman.getPerson.x += speedX
                } else if(speedX < 0 && speedY < 0) {
                    Swordsman.getPerson.x += speedX
                } else if(speedX < 0 && speedY >= 0) {
                    Swordsman.getPerson.x += speedX
                }
            }
            
        } else {
           Swordsman.getPerson.x = Swordsman.getPerson.x > GameUtil.getStageWidth() / 2 ?  (GameUtil.getStageWidth() - Swordsman.getPerson.width) -1  : 0
        }

        if(Swordsman.getPerson.y >= GameUtil.getStageHeight() / 2 - Swordsman.getPerson.height && Swordsman.getPerson.y <= GameUtil.getStageHeight() - Swordsman.getPerson.height ) { 
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
            Swordsman.getPerson.y = Swordsman.getPerson.y > GameUtil.getStageHeight() / 2 ?  GameUtil.getStageHeight() - Swordsman.getPerson.height   : GameUtil.getStageHeight() / 2 - Swordsman.getPerson.height   
        }
        
    }
}