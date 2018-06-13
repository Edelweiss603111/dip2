import { Injectable } from '@angular/core';


export class Point {
    ID: number;
    Name: string;
    Kind: string;
    RegistrationTime: any;
    IsAuthorize: boolean;
    Type: string;
    LastSettings: Date;
    LastTariff: Date;
    CheckOnline: boolean;
}

let points: Point[] = [{
    "ID": 1,
    "Name": "Колесо обозрения",
    "Kind": "Мобильный терминал",
    "RegistrationTime": "2017.04.16 16:48",
    "IsAuthorize": true,
    "Type": "нет",
    "CheckOnline": undefined,
    "LastSettings": undefined,
    "LastTariff": undefined
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.01.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.03.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.04.2018")
},{
    "ID": 7,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.05.2018")
},{
    "ID": 8,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.06.2018")
},{
    "ID": 9,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.07.2018")
},{
    "ID": 10,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.08.2018")
},{
    "ID": 11,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.09.2018")
},{
    "ID": 12,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.10.2018")
},{
    "ID": 13,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.11.2018")
},{
    "ID":14,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.12.2018")
},{
    "ID": 15,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.13.2018")
},{
    "ID": 16,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.14.2018")
},{
    "ID": 17,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.15.2018")
},{
    "ID": 18,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.16.2018")
},{
    "ID": 19,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.17.2018")
},{
    "ID": 20,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.18.2018")
},{
    "ID": 21,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.19.2018")
},{
    "ID": 22,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.20.2018")
},{
    "ID": 23,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.21.2018")
},{
    "ID": 24,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 25,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 26,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 27,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 28,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.01.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.03.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.04.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.05.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.06.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.07.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.08.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.09.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.10.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.11.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.12.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.13.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.14.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.15.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.16.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.17.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.18.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.19.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.20.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.21.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.01.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.03.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.04.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.05.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.06.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.07.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.08.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.09.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.10.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.11.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.12.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.13.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.14.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.15.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.16.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.17.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.18.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.19.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.20.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.21.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.01.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.03.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.04.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.05.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.06.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.07.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.08.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.09.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.10.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.11.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.12.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.13.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.14.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.15.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.16.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.17.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.18.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.19.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.20.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.21.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.01.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.03.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.04.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.05.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.06.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.07.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.08.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.09.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.10.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.11.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.12.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.13.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.14.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.15.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.16.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.17.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.18.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.19.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.20.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.21.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.01.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.03.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.04.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.05.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.06.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.07.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.08.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.09.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.10.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.11.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.12.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.13.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.14.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.15.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.16.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.17.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.18.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.19.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.20.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.21.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.01.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.03.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.04.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.05.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.06.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.07.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.08.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.09.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.10.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.11.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.12.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.13.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.14.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.15.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.16.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.17.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.18.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.19.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.20.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.21.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.01.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.03.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.04.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.05.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.06.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.07.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.08.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.09.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.10.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.11.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.12.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.13.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.14.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.15.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.16.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.17.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.18.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.19.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.20.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.21.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.01.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.03.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.04.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.05.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.06.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.07.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.08.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.09.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.10.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.11.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.12.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.13.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.14.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.15.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.16.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.17.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.18.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.19.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.20.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.21.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.01.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.03.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.04.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.05.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.06.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.07.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.08.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.09.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.10.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.11.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.12.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.13.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.14.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.15.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.16.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.17.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.18.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.19.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.20.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.21.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.01.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.03.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.04.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.05.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.06.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.07.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.08.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.09.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.10.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.11.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.12.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.13.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.14.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.15.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.16.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.17.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.18.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.19.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.20.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.21.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.01.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.03.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.04.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.05.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.06.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.07.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.08.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.09.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.10.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.11.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.12.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.13.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.14.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.15.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.16.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.17.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.18.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.19.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.20.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.21.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.01.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.03.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.04.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.05.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.06.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.07.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.08.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.09.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.10.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.11.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.12.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.13.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.14.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.15.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.16.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.17.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.18.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.19.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.20.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.21.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.01.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.03.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.04.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.05.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.06.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.07.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.08.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.09.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.10.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.11.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.12.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.13.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.14.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.15.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.16.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.17.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.18.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.19.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.20.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.21.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.01.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.03.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.04.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.05.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.06.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.07.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.08.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.09.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.10.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.11.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.12.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.13.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.14.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.15.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.16.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.17.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.18.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.19.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.20.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.21.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 6,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 2,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 3,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
},{
    "ID": 4,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
}, {
    "ID": 5,
    "Name": "Ромашка",
    "Kind": "Контроллер",
    "RegistrationTime": new Date("2017.03.16 16:48"),
    "IsAuthorize": true,
    "Type": "Arduino",
    "CheckOnline": false,
    "LastSettings": new Date("2018.03.16"),
    "LastTariff": new Date("06.02.2018")
}];

@Injectable()
export class Service {
    getPointList() {
        return points;
    }
}