/**
 * 工具类
 */

class GameUtil{
    /**
     * 获取舞台高度
     */
    public static getStageHeight():number {
        return egret.MainContext.instance.stage.height
    }

    /**
     * 获取舞台宽度
     */
    public static getStageWidth():number {
        return egret.MainContext.instance.stage.width
    }

    /**
     * 根据名称创建Bitmap对象
     */
    public static createBitmapByName(name:string, type:string = 'png'):egret.Bitmap{
        let bmp = new egret.Bitmap();
        let texture:egret.Texture = RES.getRes(name + '_' + type);
        bmp.texture = texture;
        return bmp
    }

    /**
     * 根据name创建一个MovieClip对象
     */
    public static createMovieClipByName(name:string):egret.MovieClip{
        let data_stay:any = RES.getRes(name+'_json');
        let texture_stay:egret.Texture  = RES.getRes(name + '_png')
        let mcFactory_stay:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data_stay, texture_stay)
        return new egret.MovieClip(mcFactory_stay.generateMovieClipData(name))
    }

    /**
     * 检测传送门碰撞事件
     */
    public static touchDoor(person:egret.MovieClip, door:egret.Bitmap, scene:egret.DisplayObjectContainer):any {
        // console.log(GameUtil.getStageWidth())
        egret.Ticker.getInstance().register(function(dt){
            if((person.x - MainCity.bg.x) > door.x && (person.y + person.height < door.y + door.height + 20 && person.y + person.height > door.y + door.height -20)) {
                SceneController.changeScene(person,door,scene)
            }
        }, this)
    }
}