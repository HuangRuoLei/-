//% color="#ff0000" weight=50 icon="\uf1b0" block="呼噜猫扩展板通信确认"
namespace HuLuMaoexpanding_connection {
    /**
     * 调用此来建立MicroBit与光立方的通信
     * @param index
    */
    //% blockId=HuLuMaoexpanding_connection_con block="建立 MicroBit 与扩展板的通信"
    //% weight=100
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function con(): void {
        let length;
        for(let i=0;i<20;i++){
            basic.pause(10);
            length=pins.i2cReadNumber(66, NumberFormat.UInt8LE);
            if(length==55){
                basic.showIcon(IconNames.Yes);
                basic.pause(1000);
                basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `);
                break;
            }
            else{
                basic.showIcon(IconNames.No);
            }
        }
    }
}
//% color="#ff0000" weight=49 icon="\uf1b0" block="呼噜猫扩展板传感器类"
namespace HuLuMaoexpanding {

    export enum ultrasonicState{
        //% blockId="OFF" block="关闭"
        Off = 0,
        //% blockId="Open" block="开启"
        Open = 1
    }
    export enum DisplayChine{
        //% blockId="nian" block="年"
        nian = 0,
        //% blockId="yue" block="月"
        yue = 1,
        //% blockId="ri" block="日"
        ri,
        //% blockId="xing" block="星"
        xing,
        //% blockId="qi" block="期"
        qi,
        //% blockId="miao" block="秒"
        miao,
        //% blockId="shi" block="时"
        shi,
        //% blockId="fen" block="分"
        fen,
        //% blockId="dian" block="电"
        dian,
        //% blockId="zi" block="子"
        zi,
        //% blockId="zhong" block="钟"
        zhong,
        //% blockId="hu" block="呼"
        hu,
        //% blockId="lu" block="噜"
        lu,
        //% blockId="mao" block="猫"
        mao,
        //% blockId="ji" block="机"
        ji,
        //% blockId="qi1" block="器"
        qi1,
        //% blockId="ren" block="人"
        ren,
        //% blockId="bian" block="编"
        bian,
        //% blockId="cheng" block="程"
        cheng

    }
    export enum DisplayEnglish{
        a = 0, b, c, d, e, f, g, h, i, j,
        k, l, m, n, o, p, q, r, s, t,
        u, v, w, x, y, z, A, B, C, D,
        E, F, G, H, I, J, K, L, M, N,
        O, P, Q, R, S, T, U, V, W, X, Y, Z
    }
    export enum DisplayChar{
        //% blockId="_gan" block="! 感叹号"
        _gan=0,
        //% blockId="_shuang" block="“ 双引号"
        _shuang,
        //% blockId="_jin" block="# 井号"
        _jin,
        //% blockId="_mei" block="$ 美元符号"
        _mei,
        //% blockId="_bai" block="% 百分号"
        _bai,
        //% blockId="_he" block="& 和符号"
        _he,
        //% blockId="_kaidan" block="' 开单引号"
        _kaidan,
        //% blockId="_bidan" block="' 关单引号"
        _bidan,
        //% blockId="_kai" block="( 开括号"
        _kai,
        //% blockId="_guan" block=") 关括号"
        _guan,
        //% blockId="_xing" block="* 星号"
        _xing,
        //% blockId="_jia" block="+ 加号"
        _jia,
        //% blockId="_dou" block=", 逗号"
        _dou,
        //% blockId="_jian" block="- 减号"
        _jian,
        //% blockId="_ju" block=". 句号"
        _ju,
        //% blockId="_xie" block="/ 斜杠"
        _xie,
        //% blockId="_xie" block="/ 反斜杠"
        _fanxie,
        //% blockId="_mao" block=": 冒号"
        _mao,
        //% blockId="_fen" block="; 分号"
        _fen,
        //% blockId="_xiao" block="< 小于号"
        _xiao,
        //% blockId="_deng" block="= 等于号"
        _deng,
        //% blockId="_da" block="> 大于号"
        _da,
        //% blockId="_wen" block="? 问号"
        _wen,
        //% blockId="_dian" block="@ 电子邮件符号"
        _dian,
        //% blockId="_kaifang" block="[ 开方括号"
        _kaifang,
        //% blockId="_bifang" block="] 闭方括号"
        _bifang,
        //% blockId="_tuo" block="^ 乘方符号"
        _tuo,
        //% blockId="_xia" block="_ 下划线"
        _xia,
        //% blockId="_kaihua" block="{ 开花括号"
        _kaihua,
        //% blockId="_cui" block="| 垂直线"
        _cui,
        //% blockId="_bihua" block="} 闭花括号"
        _bihua,
        //% blockId="_bo" block="~ 波浪号"
        _bo
    }
    export enum Y{
        //% blockId="_0" block="0"
        _0= 0,
        //% blockId="_2" block="2"
        _2,
        //% blockId="_4" block="4"
        _4,
        //% blockId="_6" block="6"
        _6
    }
    
    export enum X{
        //% blockId="_0" block="0"
        _0 = 0,
        //% blockId="_8" block="8"
        _8,
        //% blockId="_16" block="16"
        _16,
        //% blockId="_24" block="24"
        _24,
        //% blockId="_32" block="32"
        _32,
        //% blockId="_40" block="40"
        _40,
        //% blockId="_48" block="48"
        _48,
        //% blockId="_56" block="56"
        _56,
        //% blockId="_64" block="64"
        _64,
        //% blockId="_72" block="72"
        _72,
        //% blockId="_80" block="80"
        _80,
        //% blockId="_88" block="88"
        _88,
        //% blockId="_96" block="96"
        _96,
        //% blockId="_104" block="104"
        _104,
        //% blockId="_112" block="112"
        _112,
        //% blockId="_120" block="120"
        _120
    }
    export enum X1{
        //% blockId="_0" block="0"
        _0 = 0,
        //% blockId="_8" block="8"
        _8,
        //% blockId="_16" block="16"
        _16,
        //% blockId="_24" block="24"
        _24,
        //% blockId="_32" block="32"
        _32,
        //% blockId="_40" block="40"
        _40,
        //% blockId="_48" block="48"
        _48,
        //% blockId="_56" block="56"
        _56,
        //% blockId="_64" block="64"
        _64,
        //% blockId="_72" block="72"
        _72,
        //% blockId="_80" block="80"
        _80,
        //% blockId="_88" block="88"
        _88,
        //% blockId="_96" block="96"
        _96,
        //% blockId="_104" block="104"
        _104,
        //% blockId="_112" block="112"
        _112,
    }
    export enum X2{
        //% blockId="_8" block="8"
        _8,
        //% blockId="_16" block="16"
        _16,
        //% blockId="_24" block="24"
        _24,
        //% blockId="_32" block="32"
        _32,
        //% blockId="_40" block="40"
        _40,
        //% blockId="_48" block="48"
        _48,
        //% blockId="_56" block="56"
        _56,
        //% blockId="_64" block="64"
        _64,
        //% blockId="_72" block="72"
        _72,
        //% blockId="_80" block="80"
        _80,
        //% blockId="_88" block="88"
        _88,
        //% blockId="_96" block="96"
        _96,
        //% blockId="_104" block="104"
        _104,
        //% blockId="_112" block="112"
        _112,
        //% blockId="_120" block="120"
        _120,
        //% blockId="_128" block="128"
        _128
    }
    export enum FollowColour{
        //% blockId="black" block="黑线"
        black,
        //% blockId="white" block="白线"
        white
    }
    export function IICWrite(value:number,value1:number) {
        
        pins.i2cWriteNumber(value, value1, NumberFormat.UInt8LE);
    }
    export function IICWriteBuf3(value: number, value1: number, value2: number) {
        let buf = pins.createBuffer(2);
        buf[0] = value1;
        buf[1] = value2;
        
        pins.i2cWriteBuffer(value, buf);
    }
    export function IICWriteBuf(value: number, value1: number, value2: number, value3: number, value4: number) {
        let buf = pins.createBuffer(4);
        buf[0] = value1;
        buf[1] = value2;
        buf[2] = value3;
        buf[3] = value4;
        
        pins.i2cWriteBuffer(value, buf);
    }
    function SPIWrite(value: number) {
        pins.spiPins(DigitalPin.P0, DigitalPin.P1, DigitalPin.P2);
        pins.spiFormat(8, 3);
        pins.spiFrequency(100000);
        pins.spiWrite(value);
    }
    /**
     * 选择以打开或关闭扩展板超声波测量距离的功能（有效距离2cm~200cm）
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Chao_Sheng_Bo block="超声波测距系统|%index"
    //% weight=112
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Chao_Sheng_Bo(index: ultrasonicState):void {
        basic.pause(10);
        switch (index) {
            case ultrasonicState.Off: IICWrite(65, 1); break;
            case ultrasonicState.Open: IICWrite(65, 2); break;
        }
    }

    /**
     * 调用此将返回超声波的所测到的距离（有效距离2cm~200cm）
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Read_Chao_Sheng_Bo block="读取超声波测到的距离(cm)"
    //% weight=111
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Read_Chao_Sheng_Bo(): number {
        let length;
        basic.pause(10);
        pins.i2cReadNumber(65, NumberFormat.UInt8LE);
        basic.pause(100);
        length=pins.i2cReadNumber(65, NumberFormat.UInt8LE);
        return length;
    }
    /**
     * 调用此将返回火焰传感器测到的火焰数据,数据越小,离火焰越近
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Flame block="读取火焰传感器返回的数据,数据越小,离火焰越近"
    //% weight=110
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Flame():number {
        let length;
        basic.pause(10);
        length = pins.analogReadPin(AnalogPin.P1);
        return length;
    }
    /**
     * 调用此将返回光敏电阻返回的亮度值
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Photoresistor block="读取光敏电阻测到的亮度，最高亮度值不超过1023"
    //% weight=109
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Photoresistor(): number {
        let data;
        data=pins.analogReadPin(AnalogPin.P2);
       // data=data*3.18/10;
        return Math.round(data);
    }
    /**
     * 调用此将返回热敏电阻返回的温度值
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Thermistor block="读取热敏电阻测到的热度，最高热度值不超过1023"
    //% weight=108
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Thermistor(): number {
        let data;
        data=pins.analogReadPin(AnalogPin.P2);
      //  data=data*3.18/10;
        return Math.round(data);
    }
    /**
     * 选择以打开小车循迹传感器功能
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Follow block="巡线传感器检测到 |%index1"
    //% weight=99
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Follow(index1:FollowColour):boolean {
        let temp: boolean = false;
        let temp1;
        basic.pause(10);
        switch(index1){
            case FollowColour.black:if(pins.digitalReadPin(DigitalPin.P7)==1)temp1=1;else temp1=0;break;    /*检测到黑线返回1*/    
            case FollowColour.white:if(pins.digitalReadPin(DigitalPin.P7)==0)temp1=1;else temp1=0;break;    /*检测到白线返回0*/   
        }
    
        if(temp1==1)
            temp=true;
        else
            temp=false;
        return temp;
    }
    /**
     * 选择以打开小车人体红外传感器功能
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Bodycheck block="当人体传感器检测到人体或者活物时"
    //% weight=98
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Bodycheck():boolean {
        let temp: boolean = false;
       // let temp1;
        basic.pause(10);
      //  temp1=pins.i2cReadNumber(72, NumberFormat.UInt8LE);
       // if(temp1==1)
      //      temp=true;
      //  else
      //      temp=false;

      /*
        if (pins.digitalReadPin(DigitalPin.P3) == 1) {
            temp = true;
        }
        else {
            temp=false;
        } */
        if(pins.digitalReadPin(DigitalPin.P3)){
            
            temp=false;
        }
        else{
            temp=true;
        }
        return temp;
    }
    /**
     * 选择以打开小车水滴传感器功能
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Rain block="当水滴传感器检测到水滴时"
    //% weight=97
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Rain():boolean {
        let temp: boolean = false;
     //   let temp1;
        basic.pause(10);
        /*
        if (pins.digitalReadPin(DigitalPin.P3) == 0) {
            temp = true;
        }
        else {
            temp=false;
        } */
        if(pins.digitalReadPin(DigitalPin.P5)){
            temp=true;
        }
        else{
            temp=false;
        }
     //   temp1=pins.i2cReadNumber(73, NumberFormat.UInt8LE);
     //   if(temp1==1)
     //       temp=true;
     //   else
     //       temp=false;
        return temp;
    }
    /**
     * 选择以打开小车气体传感器功能，可检测一氧化碳,烟雾，可燃气体等
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Gas block="当气体传感器检测到目标气体时"
    //% weight=96
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Gas():boolean {
        let temp: boolean = false;
      //  let temp1;
        basic.pause(10);
        if(pins.digitalReadPin(DigitalPin.P4)){
            temp=true;
        }
        else{
            temp=false;
        }
        /*
        if (pins.digitalReadPin(DigitalPin.P3) == 0) {
            temp = true;
        }
        else {
            temp=false;
        }*/
      //  temp1=pins.i2cReadNumber(74, NumberFormat.UInt8LE);
       // if(temp1==1)
       //     temp=true;
       // else
       //     temp=false;
        return temp;
    }

     /**
     * 选择以打开声音传感器功能
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Voice block="当声音传感器检测到有声音产生时"
    //% weight=95
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Voice():boolean {
        let temp: boolean = false;
        /*
        if(input.pinIsPressed(TouchPin.P1)){
            temp=false;
        }
        else{
            temp=true;
        }*/
        let data;
        data=pins.analogReadPin(AnalogPin.P6);
        if(data>150){
            temp = true;
        }
        else{
            temp=false;
        } 
        /*
        if (pins.digitalReadPin(DigitalPin.P3) == 0) {
            temp = true;
        }
        else {
            temp = false;
        }*/
        return temp;
    }
    /**
     * 调用此将返回声音传感器测到的声音数据,数据越小,声音越强
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Voice_data block="读取声音传感器返回的数据,数据越小,声音越强"
    //% weight=94
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Vioce_data():number {
        let length;
        basic.pause(10);
        length = pins.analogReadPin(AnalogPin.P6);
        return length;
    }
 

}
//% color="#ff0000" weight=48 icon="\uf1b0" block="呼噜猫扩展板显示类"
namespace HuLuMaoexpandingDisplay{

    /**
    * 选择以清除小车显示屏所有区域的内容
    * @param index
   */
   //% blockId=HuLuMaoexpandingDisplay_OLEDCleanALL block="清空显示屏所有内容"
   //% weight=95
   //% blockGap=10
   //% color="#ff0000"
   //% name.fieldEditor="gridpicker" name.fieldOptions.columns=20
   export function OLEDCleanALL():void {
       basic.pause(10);
       let buf1=pins.createBuffer(3);
       buf1[0]=1;
       buf1[1]=0;
       buf1[2]=0;
       pins.i2cWriteBuffer(73, buf1);
   }

   /**
    * 选择以清除小车显示屏指定区域的内容
    * @param index
   */
   //% blockId=HuLuMaoexpandingDisplay_OLEDClean block="清除第|%index行|从|%index2到|%index3|处内容"
   //% weight=94
   //% blockGap=10
   //% color="#ff0000"
   //% name.fieldEditor="gridpicker" name.fieldOptions.columns=20
   export function OLEDClean(index:HuLuMaoexpanding.Y,index1:HuLuMaoexpanding.X,index2:HuLuMaoexpanding.X2):void{
       let buf1=pins.createBuffer(3);
       basic.pause(10);
       switch(index){
           case HuLuMaoexpanding.Y._0: buf1[0]=0; break;
           case HuLuMaoexpanding.Y._2: buf1[0]=2; break;
           case HuLuMaoexpanding.Y._4: buf1[0]=4; break;
           case HuLuMaoexpanding.Y._6: buf1[0]=6; break;
       }
       switch(index1){
           case HuLuMaoexpanding.X._0:  buf1[1]=0; break;
           case HuLuMaoexpanding.X._8:  buf1[1]=8; break;
           case HuLuMaoexpanding.X._16: buf1[1]=16; break;
           case HuLuMaoexpanding.X._24: buf1[1]=24; break;
           case HuLuMaoexpanding.X._32: buf1[1]=32; break;
           case HuLuMaoexpanding.X._40: buf1[1]=40; break;
           case HuLuMaoexpanding.X._48: buf1[1]=48; break;
           case HuLuMaoexpanding.X._56: buf1[1]=56; break;
           case HuLuMaoexpanding.X._64: buf1[1]=64; break;
           case HuLuMaoexpanding.X._72: buf1[1]=72; break;
           case HuLuMaoexpanding.X._80: buf1[1]=80; break;
           case HuLuMaoexpanding.X._88: buf1[1]=88; break;
           case HuLuMaoexpanding.X._96: buf1[1]=96; break;
           case HuLuMaoexpanding.X._104: buf1[1]=104; break;
           case HuLuMaoexpanding.X._112: buf1[1]=112; break;
           case HuLuMaoexpanding.X._120: buf1[1]=120; break;
       }
       switch(index2){
           case HuLuMaoexpanding.X2._8:  buf1[2]=8; break;
           case HuLuMaoexpanding.X2._16: buf1[2]=16; break;
           case HuLuMaoexpanding.X2._24: buf1[2]=24; break;
           case HuLuMaoexpanding.X2._32: buf1[2]=32; break;
           case HuLuMaoexpanding.X2._40: buf1[2]=40; break;
           case HuLuMaoexpanding.X2._48: buf1[2]=48; break;
           case HuLuMaoexpanding.X2._56: buf1[2]=56; break;
           case HuLuMaoexpanding.X2._64: buf1[2]=64; break;
           case HuLuMaoexpanding.X2._72: buf1[2]=72; break;
           case HuLuMaoexpanding.X2._80: buf1[2]=80; break;
           case HuLuMaoexpanding.X2._88: buf1[2]=88; break;
           case HuLuMaoexpanding.X2._96: buf1[2]=96; break;
           case HuLuMaoexpanding.X2._104: buf1[2]=104; break;
           case HuLuMaoexpanding.X2._112: buf1[2]=112; break;
           case HuLuMaoexpanding.X2._120: buf1[2]=120; break;
           case HuLuMaoexpanding.X2._128:  buf1[2]=128; break;
       }
       pins.i2cWriteBuffer(73, buf1);
       basic.pause(10);
   }

   /**
    * 选择以打开小车显示屏显示中文功能
    * @param index
   */
   //% blockId=HuLuMaoexpandingDisplay_OLEDShowChine block="显示中文|在第%index2行|第%index3处|显示%index1"
   //% weight=93
   //% blockGap=10
   //% color="#ff0000"
   //% name.fieldEditor="gridpicker" name.fieldOptions.columns=20
   export function OLEDShowChine(index2:HuLuMaoexpanding.Y,index3:HuLuMaoexpanding.X1,index1:HuLuMaoexpanding.DisplayChine):void {
       let buf1 = pins.createBuffer(3);
       basic.pause(10);
       switch (index2) {
           case HuLuMaoexpanding.Y._0: buf1[0]=0; break;
           case HuLuMaoexpanding.Y._2: buf1[0]=2; break;
           case HuLuMaoexpanding.Y._4: buf1[0]=4; break;
           case HuLuMaoexpanding.Y._6: buf1[0]=6; break;
       }
       switch (index3) {
           case HuLuMaoexpanding.X1._0:  buf1[1]=0; break;
           case HuLuMaoexpanding.X1._8:  buf1[1]=8; break;
           case HuLuMaoexpanding.X1._16: buf1[1]=16; break;
           case HuLuMaoexpanding.X1._24: buf1[1]=24; break;
           case HuLuMaoexpanding.X1._32: buf1[1]=32; break;
           case HuLuMaoexpanding.X1._40: buf1[1]=40; break;
           case HuLuMaoexpanding.X1._48: buf1[1]=48; break;
           case HuLuMaoexpanding.X1._56: buf1[1]=56; break;
           case HuLuMaoexpanding.X1._64: buf1[1]=64; break;
           case HuLuMaoexpanding.X1._72: buf1[1]=72; break;
           case HuLuMaoexpanding.X1._80: buf1[1]=80; break;
           case HuLuMaoexpanding.X1._88: buf1[1]=88; break;
           case HuLuMaoexpanding.X1._96: buf1[1]=96; break;
           case HuLuMaoexpanding.X1._104: buf1[1]=104; break;
           case HuLuMaoexpanding.X1._112: buf1[1]=112; break;
       }

       switch (index1) {
           case HuLuMaoexpanding.DisplayChine.nian: buf1[2]=0; break;
           case HuLuMaoexpanding.DisplayChine.yue: buf1[2]=1; break;
           case HuLuMaoexpanding.DisplayChine.ri: buf1[2]=2; break;
           case HuLuMaoexpanding.DisplayChine.xing: buf1[2]=3; break;
           case HuLuMaoexpanding.DisplayChine.qi: buf1[2]=4; break;
           case HuLuMaoexpanding.DisplayChine.miao: buf1[2]=5; break;
           case HuLuMaoexpanding.DisplayChine.shi: buf1[2]=6; break;
           case HuLuMaoexpanding.DisplayChine.fen: buf1[2]=7; break;
           case HuLuMaoexpanding.DisplayChine.dian: buf1[2]=8; break;
           case HuLuMaoexpanding.DisplayChine.zi: buf1[2]=9; break;
           case HuLuMaoexpanding.DisplayChine.zhong: buf1[2]=10; break;

           case HuLuMaoexpanding.DisplayChine.hu: buf1[2]=11; break;
           case HuLuMaoexpanding.DisplayChine.lu: buf1[2]=12; break;
           case HuLuMaoexpanding.DisplayChine.mao: buf1[2]=13; break;
           case HuLuMaoexpanding.DisplayChine.ji: buf1[2]=14; break;
           case HuLuMaoexpanding.DisplayChine.qi: buf1[2]=15; break;
           case HuLuMaoexpanding.DisplayChine.ren: buf1[2]=16; break;
           case HuLuMaoexpanding.DisplayChine.bian: buf1[2]=17; break;
           case HuLuMaoexpanding.DisplayChine.cheng: buf1[2]=18; break;
       }
       pins.i2cWriteBuffer(69, buf1);
   }
   /**
    * 选择以打开小车显示屏显示字母功能
    * @param index
   */
   //% blockId=HuLuMaoexpandingDisplay_OLEDShowEnglish block="显示字母|在第%index1行|第%index2处|显示%index3"
   //% weight=92
   //% blockGap=10
   //% color="#ff0000"
   //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
   export function OLEDShowEnglish(index1:HuLuMaoexpanding.Y,index2:HuLuMaoexpanding.X,index3:HuLuMaoexpanding.DisplayEnglish):void {
       let buf1 = pins.createBuffer(3);
       basic.pause(10);
       switch (index1) {
           case HuLuMaoexpanding.Y._0: buf1[0]=0; break;
           case HuLuMaoexpanding.Y._2: buf1[0]=2; break;
           case HuLuMaoexpanding.Y._4: buf1[0]=4; break;
           case HuLuMaoexpanding.Y._6: buf1[0]=6; break;
       }
       switch (index2) {
           case HuLuMaoexpanding.X._0:  buf1[1]=0; break;
           case HuLuMaoexpanding.X._8:  buf1[1]=8; break;
           case HuLuMaoexpanding.X._16: buf1[1]=16; break;
           case HuLuMaoexpanding.X._24: buf1[1]=24; break;
           case HuLuMaoexpanding.X._32: buf1[1]=32; break;
           case HuLuMaoexpanding.X._40: buf1[1]=40; break;
           case HuLuMaoexpanding.X._48: buf1[1]=48; break;
           case HuLuMaoexpanding.X._56: buf1[1]=56; break;
           case HuLuMaoexpanding.X._64: buf1[1]=64; break;
           case HuLuMaoexpanding.X._72: buf1[1]=72; break;
           case HuLuMaoexpanding.X._80: buf1[1]=80; break;
           case HuLuMaoexpanding.X._88: buf1[1]=88; break;
           case HuLuMaoexpanding.X._96: buf1[1]=96; break;
           case HuLuMaoexpanding.X._104: buf1[1]=104; break;
           case HuLuMaoexpanding.X._112: buf1[1]=112; break;
           case HuLuMaoexpanding.X._120: buf1[1]=120; break;
       }
       switch (index3) {
           case HuLuMaoexpanding.DisplayEnglish.a: buf1[2]=97; break;
           case HuLuMaoexpanding.DisplayEnglish.b: buf1[2]=98; break;
           case HuLuMaoexpanding.DisplayEnglish.c: buf1[2]=99; break;
           case HuLuMaoexpanding.DisplayEnglish.d: buf1[2]=100; break;
           case HuLuMaoexpanding.DisplayEnglish.e: buf1[2]=101; break;
           case HuLuMaoexpanding.DisplayEnglish.f: buf1[2]=102; break;
           case HuLuMaoexpanding.DisplayEnglish.g: buf1[2]=103; break;
           case HuLuMaoexpanding.DisplayEnglish.h: buf1[2]=104; break;
           case HuLuMaoexpanding.DisplayEnglish.i: buf1[2]=105; break;
           case HuLuMaoexpanding.DisplayEnglish.j: buf1[2]=106; break;
           case HuLuMaoexpanding.DisplayEnglish.k: buf1[2]=107; break;
           case HuLuMaoexpanding.DisplayEnglish.l: buf1[2]=108; break;
           case HuLuMaoexpanding.DisplayEnglish.m: buf1[2]=109; break;
           case HuLuMaoexpanding.DisplayEnglish.n: buf1[2]=110; break;
           case HuLuMaoexpanding.DisplayEnglish.o: buf1[2]=111; break;
           case HuLuMaoexpanding.DisplayEnglish.p: buf1[2]=112; break;
           case HuLuMaoexpanding.DisplayEnglish.q: buf1[2]=113; break;
           case HuLuMaoexpanding.DisplayEnglish.r: buf1[2]=114; break;
           case HuLuMaoexpanding.DisplayEnglish.s: buf1[2]=115; break;
           case HuLuMaoexpanding.DisplayEnglish.t: buf1[2]=116; break;
           case HuLuMaoexpanding.DisplayEnglish.u: buf1[2]=117; break;
           case HuLuMaoexpanding.DisplayEnglish.v: buf1[2]=118; break;
           case HuLuMaoexpanding.DisplayEnglish.w: buf1[2]=119; break;
           case HuLuMaoexpanding.DisplayEnglish.x: buf1[2]=120; break;
           case HuLuMaoexpanding.DisplayEnglish.y: buf1[2]=121; break;
           case HuLuMaoexpanding.DisplayEnglish.z: buf1[2]=122; break;

           case HuLuMaoexpanding.DisplayEnglish.A: buf1[2]=65; break;
           case HuLuMaoexpanding.DisplayEnglish.B: buf1[2]=66; break;
           case HuLuMaoexpanding.DisplayEnglish.C: buf1[2]=67; break;
           case HuLuMaoexpanding.DisplayEnglish.D: buf1[2]=68; break;
           case HuLuMaoexpanding.DisplayEnglish.E: buf1[2]=69; break;
           case HuLuMaoexpanding.DisplayEnglish.F: buf1[2]=70; break;
           case HuLuMaoexpanding.DisplayEnglish.G: buf1[2]=71; break;
           case HuLuMaoexpanding.DisplayEnglish.H: buf1[2]=72; break;
           case HuLuMaoexpanding.DisplayEnglish.I: buf1[2]=73; break;
           case HuLuMaoexpanding.DisplayEnglish.J: buf1[2]=74; break;
           case HuLuMaoexpanding.DisplayEnglish.K: buf1[2]=75; break;
           case HuLuMaoexpanding.DisplayEnglish.L: buf1[2]=76; break;
           case HuLuMaoexpanding.DisplayEnglish.M: buf1[2]=77; break;
           case HuLuMaoexpanding.DisplayEnglish.N: buf1[2]=78; break;
           case HuLuMaoexpanding.DisplayEnglish.O: buf1[2]=79; break;
           case HuLuMaoexpanding.DisplayEnglish.P: buf1[2]=80; break;
           case HuLuMaoexpanding.DisplayEnglish.Q: buf1[2]=81; break;
           case HuLuMaoexpanding.DisplayEnglish.R: buf1[2]=82; break;
           case HuLuMaoexpanding.DisplayEnglish.S: buf1[2]=83; break;
           case HuLuMaoexpanding.DisplayEnglish.T: buf1[2]=84; break;
           case HuLuMaoexpanding.DisplayEnglish.U: buf1[2]=85; break;
           case HuLuMaoexpanding.DisplayEnglish.V: buf1[2]=86; break;
           case HuLuMaoexpanding.DisplayEnglish.W: buf1[2]=87; break;
           case HuLuMaoexpanding.DisplayEnglish.X: buf1[2]=88; break;
           case HuLuMaoexpanding.DisplayEnglish.Y: buf1[2]=89; break;
           case HuLuMaoexpanding.DisplayEnglish.Z: buf1[2]=90; break;
       }
       pins.i2cWriteBuffer(70, buf1);
       
   }
   /**
    * 选择以打开小车显示屏显示数字功能,输入的数字范围-32767~32767
    * @param index
   */
   //% blockId=HuLuMaoexpandingDisplay_OLEDShowNumber block="显示数字|在第%index2行|第%index3|处|显示%index1"
   //% weight=91
   //% blockGap=10
   //% index1.min=-32767 index1.max=32767
   //% color="#ff0000"
   //% name.fieldEditor="gridpicker" name.fieldOptions.columns=20
   export function OLEDShowNumber(index2:HuLuMaoexpanding.Y,index3:HuLuMaoexpanding.X,index1:number):void {
       let buf1 = pins.createBuffer(2);
       //let buf;
       basic.pause(10);
       switch (index2) {
           case HuLuMaoexpanding.Y._0: buf1[0]=0; break;
           case HuLuMaoexpanding.Y._2: buf1[0]=2; break;
           case HuLuMaoexpanding.Y._4: buf1[0]=4; break;
           case HuLuMaoexpanding.Y._6: buf1[0]=6; break;
       }
       switch (index3) {
           case HuLuMaoexpanding.X._0:  buf1[1]=0; break;
           case HuLuMaoexpanding.X._8:  buf1[1]=8; break;
           case HuLuMaoexpanding.X._16: buf1[1]=16; break;
           case HuLuMaoexpanding.X._24: buf1[1]=24; break;
           case HuLuMaoexpanding.X._32: buf1[1]=32; break;
           case HuLuMaoexpanding.X._40: buf1[1]=40; break;
           case HuLuMaoexpanding.X._48: buf1[1]=48; break;
           case HuLuMaoexpanding.X._56: buf1[1]=56; break;
           case HuLuMaoexpanding.X._64: buf1[1]=64; break;
           case HuLuMaoexpanding.X._72: buf1[1]=72; break;
           case HuLuMaoexpanding.X._80: buf1[1]=80; break;
           case HuLuMaoexpanding.X._88: buf1[1]=88; break;
           case HuLuMaoexpanding.X._96: buf1[1]=96; break;
           case HuLuMaoexpanding.X._104: buf1[1]=104; break;
           case HuLuMaoexpanding.X._112: buf1[1]=112; break;
           case HuLuMaoexpanding.X._120: buf1[1]=120; break;
       }
      // buf=index1;
       pins.i2cWriteBuffer(71,buf1);
       basic.pause(7);
       pins.i2cWriteNumber(71, index1, NumberFormat.UInt16LE);
   }

   /**
    * 选择以打开小车显示屏显示字符功能
    * @param index
   */
   //% blockId=HuLuMaoexpandingDisplay_OLEDShowChar block="显示字符|在第%index2行|第%index3处|显示 %index1"
   //% weight=90
   //% blockGap=10
   //% color="#ff0000"
   //% name.fieldEditor="gridpicker" name.fieldOptions.columns=20
   export function OLEDShowChar(index2:HuLuMaoexpanding.Y,index3:HuLuMaoexpanding.X,index1:HuLuMaoexpanding.DisplayChar):void {
       let buf1 = pins.createBuffer(3);
       basic.pause(10);
       switch (index2) {
           case HuLuMaoexpanding.Y._0: buf1[0]=0; break;
           case HuLuMaoexpanding.Y._2: buf1[0]=2; break;
           case HuLuMaoexpanding.Y._4: buf1[0]=4; break;
           case HuLuMaoexpanding.Y._6: buf1[0]=6; break;
       }
       switch (index3) {
           case HuLuMaoexpanding.X._0:  buf1[1]=0; break;
           case HuLuMaoexpanding.X._8:  buf1[1]=8; break;
           case HuLuMaoexpanding.X._16: buf1[1]=16; break;
           case HuLuMaoexpanding.X._24: buf1[1]=24; break;
           case HuLuMaoexpanding.X._32: buf1[1]=32; break;
           case HuLuMaoexpanding.X._40: buf1[1]=40; break;
           case HuLuMaoexpanding.X._48: buf1[1]=48; break;
           case HuLuMaoexpanding.X._56: buf1[1]=56; break;
           case HuLuMaoexpanding.X._64: buf1[1]=64; break;
           case HuLuMaoexpanding.X._72: buf1[1]=72; break;
           case HuLuMaoexpanding.X._80: buf1[1]=80; break;
           case HuLuMaoexpanding.X._88: buf1[1]=88; break;
           case HuLuMaoexpanding.X._96: buf1[1]=96; break;
           case HuLuMaoexpanding.X._104: buf1[1]=104; break;
           case HuLuMaoexpanding.X._112: buf1[1]=112; break;
           case HuLuMaoexpanding.X._120: buf1[1]=120; break;
       }

       switch (index1) {
           case HuLuMaoexpanding.DisplayChar._gan:buf1[2]=33;break;
           case HuLuMaoexpanding.DisplayChar._shuang:buf1[2]=34;break;
           case HuLuMaoexpanding.DisplayChar._jin:buf1[2]=35;break;
           case HuLuMaoexpanding.DisplayChar._mei:buf1[2]=36;break;
           case HuLuMaoexpanding.DisplayChar._bai:buf1[2]=37;break;
           case HuLuMaoexpanding.DisplayChar._he:buf1[2]=38;break;
           case HuLuMaoexpanding.DisplayChar._kaidan:buf1[2]=96;break;
           case HuLuMaoexpanding.DisplayChar._bidan:buf1[2]=39;break;
           case HuLuMaoexpanding.DisplayChar._kai:buf1[2]=40;break;
           case HuLuMaoexpanding.DisplayChar._guan:buf1[2]=41;break;
           case HuLuMaoexpanding.DisplayChar._xing:buf1[2]=42;break;
           case HuLuMaoexpanding.DisplayChar._jia:buf1[2]=43;break;
           case HuLuMaoexpanding.DisplayChar._dou:buf1[2]=44;break;
           case HuLuMaoexpanding.DisplayChar._jian:buf1[2]=45;break;
           case HuLuMaoexpanding.DisplayChar._ju:buf1[2]=46;break;
           case HuLuMaoexpanding.DisplayChar._xie:buf1[2]=47;break;
           case HuLuMaoexpanding.DisplayChar._mao:buf1[2]=58;break;
           case HuLuMaoexpanding.DisplayChar._fen:buf1[2]=59;break;
           case HuLuMaoexpanding.DisplayChar._xiao:buf1[2]=60;break;
           case HuLuMaoexpanding.DisplayChar._deng:buf1[2]=61;break;
           case HuLuMaoexpanding.DisplayChar._da:buf1[2]=62;break;
           case HuLuMaoexpanding.DisplayChar._wen:buf1[2]=63;break;
           case HuLuMaoexpanding.DisplayChar._dian:buf1[2]=64;break;
           case HuLuMaoexpanding.DisplayChar._kaifang:buf1[2]=91;break;
           case HuLuMaoexpanding.DisplayChar._fanxie:buf1[2]=92;break;
           case HuLuMaoexpanding.DisplayChar._bifang:buf1[2]=93;break;
           case HuLuMaoexpanding.DisplayChar._tuo:buf1[2]=94;break;
           case HuLuMaoexpanding.DisplayChar._xia:buf1[2]=95;break;
           case HuLuMaoexpanding.DisplayChar._kaihua:buf1[2]=123;break;
           case HuLuMaoexpanding.DisplayChar._cui:buf1[2]=124;break;
           case HuLuMaoexpanding.DisplayChar._bihua:buf1[2]=125;break;
           case HuLuMaoexpanding.DisplayChar._bo:buf1[2]=126;break;
       }
       pins.i2cWriteBuffer(72, buf1);
   }
   
}
//% color="#ff0000" weight=47 icon="\uf1b0" block="呼噜猫扩展板按键类"
namespace HuLuMaoexpanding_Key {
    export enum key_number{
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
        _8
    }
     /**
     * 判断指定按键是否按下
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Key_Key block="当按键|%index被按下"
    //% weight=100
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Key(index:key_number): boolean {
        let temp: boolean = false;
        let num;
        basic.pause(10);
        num=pins.i2cReadNumber(67, NumberFormat.UInt8LE);
        if(num==index){
            temp=true;
        }
        else{
            temp=false;
        }
        return temp;
    }
    /**
     * 获取当前按键值
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Key_Key_get block="获取当前按键值"
    //% weight=99
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Key_get(): number {
        let num;
        basic.pause(10);
        num=pins.i2cReadNumber(67, NumberFormat.UInt8LE);
        return num;
    }
    /**
     * 判断组合按键是否按下,若选择两个相同的按键则无效
     * @param index
    */
    //% blockId=HuLuMaoexpanding_Key_Key1 block="当按键|%index + 按键|%index1被按下"
    //% weight=98
    //% blockGap=10
    //% color="#ff0000"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Key1(index:key_number,index1:key_number): boolean {
        let temp: boolean = false;
        let num;
        let key_1,key_2;
        key_1=index;
        key_2=index1;
        key_1=(key_1<<4)+key_2;
        pins.i2cWriteNumber(68, key_1, NumberFormat.UInt8LE);
        basic.pause(10);
        num=pins.i2cReadNumber(68, NumberFormat.UInt8LE);
        if(num==key_1){
            temp=true;
        }
        else{
            temp=false;
        }
        return temp;
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
