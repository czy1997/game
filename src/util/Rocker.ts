class Rocker extends egret.Shape {
    private _stage: egret.DisplayObjectContainer  // 舞台
    private circle: egret.Shape  // 圆球
    private area: egret.Shape  // 摇杆中心圆球可活动的范围
    private radius: number = 90  // 摇杆可活动范围的半径
    private cover:egret.Shape  // 摇杆的可拖动范围（手指可拖动的范围）
    public static speed: number
    public static hudu:number
    private clock: egret.Timer
    private person: egret.MovieClip 
    private offsetX: number
    private offsetY: number
    constructor(stage: egret.DisplayObjectContainer) {
        super()
        console.log(1)
        this._stage = stage
        this.init()
    }

    private init() {
        this.createArea()
        this.createCircle()
    }

    public static get getSpeed() {
        return this.speed
    }

    public static set setSpeed(speed) {
        this.speed = speed
    }

    public static get getHudu() {
        return this.hudu
    }

    public static set setHudu(hudu) {
        this.hudu = hudu
    }

    private createArea() {
        this.area = new egret.Shape()
        this._stage.addChild(this.area)
        this.area.graphics.lineStyle(5, 0xDC143C)
        this.area.graphics.beginFill(0x000000)
        this.area.graphics.drawCircle(0,0, this.radius)
        this.area.graphics.endFill()
        this.area.x = GameUtil.getStageWidth() * 0.15
        this.area.y = GameUtil.getStageHeight() * 0.6
    }

    private createCircle() {
        this.circle = new egret.Shape()
        this._stage.addChild(this.circle)
        this.circle.graphics.beginFill(0xDC143C)
        this.circle.graphics.drawCircle(0, 0, 30)
        this.circle.graphics.endFill()
        this.circle.x = this.area.x
        this.circle.y = this.area.y

        this.cover = new egret.Shape()
        this._stage.addChild(this.cover)
        this.cover.graphics.beginFill(0x000, 0)
        this.cover.graphics.drawRect(0, 0, GameUtil.getStageWidth() / 2, GameUtil.getStageHeight())
        this.cover.graphics.endFill()
        this.cover.touchEnabled = true
        this.cover.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touch, this)
        this.cover.addEventListener(egret.TouchEvent.TOUCH_END, this.stopTouch, this)
        this.cover.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.stopTouch, this)
    }

    

    private touch(e:egret.TouchEvent):void {
        this.offsetX = e.stageX - this.circle.x
        this.offsetY = e.stageY - this.circle.y
        if(e.stageX - this.area.x >= 0) {
            Swordsman.getPerson.gotoAndPlay('right', -1)
        } else {
            Swordsman.getPerson.gotoAndPlay('left', -1)
        }
        this.cover.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.move, this)
        this.clock = new egret.Timer(0, 0)
        this.clock.addEventListener(egret.TimerEvent.TIMER,Swordsman.move,this )
        this.clock.start()
    }

    private stopTouch() {
        this.cover.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.move, this)
        this.circle.x = this.area.x
        this.circle.y = this.area.y
        Swordsman.getPerson.stop()
        this.clock.stop()
    }

    private move(e:egret.TouchEvent):void { 
        let x = e.stageX - this.area.x 
        let y = e.stageY - this.area.y
        let x2 = Math.pow(x, 2)
        let y2 = Math.pow(y, 2)
        Rocker.setSpeed = x2 + y2
        let angle = this.getCircleAngel([e.stageX ,e.stageY], [this.area.x, this.area.y])
        Rocker.setHudu = (2 * Math.PI / 360) *(angle); 
         if((x > -10 && x< 10) && (angle < 180 || angle > 360 )) {
            Swordsman.getPerson.gotoAndPlay('right', -1)
        } else if ((x > -10 && x < 10) && (angle >180 && angle <360 )) {
            Swordsman.getPerson.gotoAndPlay('left', -1)
        }
        if(Rocker.getSpeed <= Math.pow(this.radius,2)) {
            this.circle.x = e.stageX - this.offsetX 
            this.circle.y = e.stageY - this.offsetY
        }  else {
            let X, Y
            if((e.stageX > this.area.x && e.stageY > this.area.y) && (e.stageX < this.area.x && e.stageY < this.area.y)) {
                X  = this.area.x - Math.sin(Rocker.getHudu) * this.radius ;   
                Y   = this.area.y + Math.cos(Rocker.getHudu) * this.radius  ;
            } else {
                X = this.area.x + Math.sin(Rocker.getHudu) * this.radius ;   
                Y = this.area.y - Math.cos(Rocker.getHudu) * this.radius ;
            }
            this.circle.x = X
            this.circle.y = Y
        }
        
    }

    private getCircleAngel(point, dot) {
        let height = point[1]-dot[1],
            width = point[0]-dot[0]
        if(width == 0) {
            // 如果和y轴平行，角度为90或270
            return point[1] >= dot[1] ? 90 : 270;
        } else {
            let tan = Math.atan(height / width),
                angle = tan * 180 / Math.PI;
            
            //返回的角度多返回了90度
            return tan > 0 ? (point[0] > dot[0] ? angle +90 : angle + 270) : (point[0] > dot[0] ? angle + 450 : angle + 270);
        }
    }

}