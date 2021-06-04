
//% color="#ff0000" weight=47 icon="\uf1b0" block="呼噜猫暑期特训扩展板"
namespace HuLuMaoexpanding {
    export enum key_number{
        //% blockId="_0" block="0"
        _0=0,
        //% blockId="_1" block="1"
        _1=1,
        //% blockId="_2" block="2"
        _2,
        //% blockId="_3" block="3"
        _3,
        //% blockId="_4" block="4"
        _4,
        //% blockId="_5" block="5"
        _5,
        //% blockId="_6" block="6"
        _6,
        //% blockId="_7" block="7"
        _7,
        //% blockId="_8" block="8"
        _8,
        //% blockId="_9" block="9"
        _9,
        //% blockId="_F1" block="F1"
        _F1,
        //% blockId="_F2" block="F2"
        _F2,
    }
    export enum YuHuo{
        //% blockId="yu" block="与"
        yu = 1,
        //% blockId="huo" block="或"
        huo,
    }
    export enum move{
        //% blockId="zuo" block="左移"
        zuo = 1,
        //% blockId="you" block="右移"
        you,
    }
    // /**
    //  * 
    //  * @param index
    // */
    // //% blockId=HuLuMaoexpanding_Init block="初始化扩展板按键"
    // //% weight=100
    // //% blockGap=10
    // //% color="#ff0000"
    // //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    // export function Init(): void {

    // }
     /**
     * 判断指定按键是否按下
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Key_Key block="当按键|%index被按下"
    //% weight=99
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Key(index:key_number): boolean {
        let data;
       // let temp: boolean = false;
       data = pins.analogReadPin(AnalogPin.P0);
        if(data>1010) data=-1;
        else if (data<10) data=0;
        else if ((30<data)&&(data<120)) data=1;
        else if ((140<data)&&(data<230)) data=2;
        else if ((250<data)&&(data<320)) data=3;
        else if ((340<data)&&(data<410)) data=4;
        else if ((430<data)&&(data<500)) data=5;
        else if ((520<data)&&(data<590)) data=6;
        else if ((610<data)&&(data<680)) data=7;
        else if ((700<data)&&(data<770)) data=8;
        else if ((790<data)&&(data<860)) data=9;
        else if ((870<data)&&(data<950)) data=10;
        else if ((970<data)&&(data<1005)) data=11;
        if(data==index)
            return true;
        else 
            return false;
      //  return temp;
    }
    /**
     * 获取当前按键值
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Key_Key_get block="获取当前按键值,有按键按下将会获取到当前按键数字，没有则获取到-1"
    //% weight=98
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Key_get(): number {
        let data;
        // let temp: boolean = false;
        data = pins.analogReadPin(AnalogPin.P0);
         if(data>1010) data=-1;
         else if (data<10) data=0;
         else if ((30<data)&&(data<120)) data=1;
         else if ((140<data)&&(data<230)) data=2;
         else if ((250<data)&&(data<320)) data=3;
         else if ((340<data)&&(data<410)) data=4;
         else if ((430<data)&&(data<500)) data=5;
         else if ((520<data)&&(data<590)) data=6;
         else if ((610<data)&&(data<680)) data=7;
         else if ((700<data)&&(data<770)) data=8;
         else if ((790<data)&&(data<860)) data=9;
         else if ((870<data)&&(data<950)) data=10;
         else if ((970<data)&&(data<1005)) data=11;
         return data;
       //  return temp;
    }

        /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Key_logic1 block="将|%index和|%index1进行按位|%index2"
    //% weight=97
    //% blockGap=10
    //% index.min=0 index.max=255
    //% index1.min=0 index1.max=255
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function logic1(index:number,index1:number,index2:YuHuo): number {
        let length;
        switch(index2){
            case YuHuo.yu:length=(index&index1);break;
            case YuHuo.huo:length=(index|index1);break;
        }
        return length;
    }

        /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Key_logic2 block="将|%index进行按位取反"
    //% weight=96
    //% blockGap=10
    //% index.min=0 index.max=255
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function logic2(index:number): number {
        let length;
        length=(~index);
        return length;
    }

        /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Key_logic3 block="将|%index进行|%index1 |%index2"
    //% weight=95
    //% blockGap=10
    //% index.min=0 index.max=255
    //% index2.min=0 index2.max=255
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function logic3(index:number,index1:move,index2:number): number {
        let length;
        switch(index1){
            case move.zuo:length=index<<index2;break;
            case move.you:length=index>>index2;break;
        }
        return length;
    }

    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Key_math1 block="运算|%index的|%index1次方"
    //% weight=98
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function math1(index:number,index1:number): number {
        let length;
        length=Math.pow(index,index1);
        return length;
    }
}

