import { Injectable } from '@angular/core';

export class Good {
    Name: string;
    RegistrationTime: string;
    IsAuthorize: boolean;
    Kind: string;
    Type: string;
    RenewalPeriodTime: number;
    TimeZone: number;
    CheckOnline: boolean;
    LastSettings: string;
    LastTariff: string;
    LastCommonLogs: string;
    LastUnloadPass: string;
    LastUnloadTransaction: string;
}

let KindsList: string[] = [
    "Kind1",
    "Kind2",
    "Kind3",
    "Контроллер",
    "Kind4",
    "Kind5",
    "Kind6",
    "Kind7",
    "Kind8",
    "Kind9",
    "Kind10",
    "Kind11",
    "Kind12",
    "Kind13",
    "Kind14",
    "Kind15",
    "Kind16",
    "Kind17",
    "Kind18",
    "Kind19"
];

let namesList: string[] = [
    "Ромашка",
    "Колесо1",
    "Колесо2",
    "Колесо3",
    "Колесо4",
    "Колесо5",
    "Колесо6",
    "Колесо7",
    "Колесо8",
    "Колесо9",
    "Рокета",
    "Депозит",
    "Сувенир",
    "Карта",
    "Карта золотая",
    "Лагерь альпинистов",
    "Пещера пиратов",
    "что-то",
    "Двойная ромашка",
    "Двойная ромашка по времени",
    "Карусель (онлайн)",
];

let TypesList: string[] = [
    "Type1",
    "Type2",
    "Arduino",
    "Type3",
    "Type4",
    "Type5",
    "Type6",
    "Type7"
];

let good: Good = {
    "Name": "Ромашка",
    "RegistrationTime": "2017.03.16 16:48",
    "IsAuthorize": true,
    "Kind": "Контроллер",
    "Type": "Arduino",
    "RenewalPeriodTime": 15,
    "TimeZone": 3,
    "CheckOnline": false,
    "LastSettings": "",
    "LastTariff": "",
    "LastCommonLogs": "",
    "LastUnloadPass": "",
    "LastUnloadTransaction": ""
    /*"LastSettings": "2018.03.16",
    "LastTariff": "2018.02.06",
    "LastCommonLogs": "2018.03.26",
    "LastUnloadPass": "2018.03.16",
    "LastUnloadTransaction": "2018.01.28"*/
};

@Injectable()
export class Service {
    getGood() {
        return good;
    }
    getNames() {
        return namesList;
    }
    getKindsList() {
        return KindsList;
    }
    getTypesList() {
        return TypesList;
    }
}