
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
    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Init block="初始化扩展板按键"
    //% weight=100
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Init(): void {
        pins.setPull(DigitalPin.P8, PinPullMode.PullDown)
        pins.setPull(DigitalPin.P9, PinPullMode.PullDown)
        pins.setPull(DigitalPin.P12, PinPullMode.PullDown)
        pins.setPull(DigitalPin.P13, PinPullMode.PullDown)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
     /**
     * 判断指定按键是否按下
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Key_Key block="当按键|%index被按下,|%support连按"
    //% weight=99
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Key(index:key_number): boolean {
        
        let temp: boolean = false;
        // if (index <= 3) {
        //     pins.digitalWritePin(DigitalPin.P14, 0)
        //     pins.digitalWritePin(DigitalPin.P15, 0)
        //     pins.digitalWritePin(DigitalPin.P16, 1)
        // } else if ((4 <= index) && (index <= 7)) {
        //     pins.digitalWritePin(DigitalPin.P14, 0)
        //     pins.digitalWritePin(DigitalPin.P15, 1)
        //     pins.digitalWritePin(DigitalPin.P16, 0)
        // } else if (8 <= index) {
        //     pins.digitalWritePin(DigitalPin.P14, 1)
        //     pins.digitalWritePin(DigitalPin.P15, 0)
        //     pins.digitalWritePin(DigitalPin.P16, 0)
        // }
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        switch (index) {
            case key_number._0 : if (pins.digitalReadPin(DigitalPin.P8) == 1) { temp = true } break;
            case key_number._1 : if (pins.digitalReadPin(DigitalPin.P9) == 1) { temp = true } break;
            case key_number._2 : if (pins.digitalReadPin(DigitalPin.P12) == 1) { temp = true } break;
            case key_number._3 : if (pins.digitalReadPin(DigitalPin.P13) == 1) { temp = true } break;
            // case key_number._0 | key_number._4 | key_number._8: if (pins.digitalReadPin(DigitalPin.P8) == 1) { temp = true } break;
            // case key_number._1 | key_number._5 | key_number._9: if (pins.digitalReadPin(DigitalPin.P9) == 1) { temp = true } break;
            // case key_number._2 | key_number._6 | key_number._F1: if (pins.digitalReadPin(DigitalPin.P12) == 1) { temp = true } break;
            // case key_number._3 | key_number._7 | key_number._F2: if (pins.digitalReadPin(DigitalPin.P13) == 1) { temp = true } break;
        }
        return temp;
    }
    /**
     * 获取当前按键值
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Key_Key_get block="获取当前按键值"
    //% weight=98
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Key_get(): number {
        let num;
        // basic.pause(10);
        // num=pins.i2cReadNumber(67, NumberFormat.UInt8LE);
        // num=num-1;
         return num;
    }
}
//% color="#ff0000" weight=46 icon="\uf1b0" block="呼噜猫扩展板逻辑类"
namespace HuLuMaoexpanding_logic {

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
    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoexpanding_logic_logic1 block="将|%index和|%index1进行按位|%index2"
    //% weight=100
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
    //% blockId=HuLuMaoexpanding_logic_logic2 block="将|%index进行按位取反"
    //% weight=99
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
    //% blockId=HuLuMaoexpanding_logic_logic3 block="将|%index进行|%index1 |%index2"
    //% weight=98
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
}

//% color="#ff0000" weight=45 icon="\uf1b0" block="呼噜猫扩展板数学类"
namespace HuLuMaoexpanding_math {
   /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoexpanding_math_math1 block="运算|%index的|%index1次方"
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
