import { Injectable } from '@angular/core';

export class GoodsTreeHierarchical {
    ID?: number;
    Name: string;
    CashdeskSell?: boolean;
    IsFrequent?: boolean;
    Hotkey?: string;
    items?: GoodsTreeHierarchical[];
}

let goodsTreeHierarchical: GoodsTreeHierarchical[] = [{
    "ID": 1,
    "Name": "Билеты",
    "items": [{
        "Name": "Ромашка",
        "CashdeskSell": true,
        "IsFrequent": false,
        "Hotkey": "A"
    },{
        "Name": "Колесо",
        "CashdeskSell": true,
        "IsFrequent": true,
        "Hotkey": ""
    },{
        "Name": "Рокета",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "B"
    },{
        "Name": "Лагерь альпинистов",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "С"
    },{
        "Name": "Пещера пиратов",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "D"
    }]
},{
    "ID": 2,
    "Name": "Счета",
    "items": [{
        "Name": "Депозит",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "E"
    },{
        "Name": "Админский депозит",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": ""
    },{
        "Name": "Онлайн-депозит",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "F"
    },{
        "Name": "Колесо1",
        "CashdeskSell": true,
        "IsFrequent": true,
        "Hotkey": ""
    },{
        "Name": "Рокета1",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "B"
    },{
        "Name": "Лагерь альпинистов1",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "С"
    },{
        "Name": "Пещера пиратов1",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "D"
    },{
        "Name": "Колесо2",
        "CashdeskSell": true,
        "IsFrequent": true,
        "Hotkey": ""
    },{
        "Name": "Рокета2",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "B"
    },{
        "Name": "Лагерь альпинистов2",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "С"
    },{
        "Name": "Пещера пиратов2",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "D"
    },{
        "Name": "Колесо3",
        "CashdeskSell": true,
        "IsFrequent": true,
        "Hotkey": ""
    },{
        "Name": "Рокета3",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "B"
    },{
        "Name": "Лагерь альпинистов3",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "С"
    },{
        "Name": "Пещера пиратов3",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "D"
    },{
        "Name": "Колесо4",
        "CashdeskSell": true,
        "IsFrequent": true,
        "Hotkey": ""
    },{
        "Name": "Рокета4",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "B"
    },{
        "Name": "Лагерь альпинистов4",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "С"
    },{
        "Name": "Пещера пиратов4",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "D"
    },{
        "Name": "Колесо5",
        "CashdeskSell": true,
        "IsFrequent": true,
        "Hotkey": ""
    },{
        "Name": "Рокета5",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "B"
    },{
        "Name": "Лагерь альпинистов5",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "С"
    },{
        "Name": "Пещера пиратов5",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "D"
    },{
        "Name": "Колесо6",
        "CashdeskSell": true,
        "IsFrequent": true,
        "Hotkey": ""
    },{
        "Name": "Рокета6",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "B"
    },{
        "Name": "Лагерь альпинистов6",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "С"
    },{
        "Name": "Пещера пиратов6",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "D"
    },{
        "Name": "Колесо7",
        "CashdeskSell": true,
        "IsFrequent": true,
        "Hotkey": ""
    },{
        "Name": "Рокета7",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "B"
    },{
        "Name": "Лагерь альпинистов7",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "С"
    },{
        "Name": "Пещера пиратов7",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "D"
    },{
        "Name": "Колесо8",
        "CashdeskSell": true,
        "IsFrequent": true,
        "Hotkey": ""
    },{
        "Name": "Рокета8",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "B"
    },{
        "Name": "Лагерь альпинистов8",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "С"
    },{
        "Name": "Пещера пиратов8",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "D"
    },{
        "Name": "Колесо",
        "CashdeskSell": true,
        "IsFrequent": true,
        "Hotkey": ""
    },{
        "Name": "Рокета",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "B"
    },{
        "Name": "Лагерь альпинистов",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "С"
    },{
        "Name": "Пещера пиратов",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "D"
    },{
        "Name": "Колесо",
        "CashdeskSell": true,
        "IsFrequent": true,
        "Hotkey": ""
    },{
        "Name": "Рокета",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "B"
    },{
        "Name": "Лагерь альпинистов",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "С"
    },{
        "Name": "Пещера пиратов",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "D"
    },{
        "Name": "Колесо",
        "CashdeskSell": true,
        "IsFrequent": true,
        "Hotkey": ""
    },{
        "Name": "Рокета",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "B"
    },{
        "Name": "Лагерь альпинистов",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "С"
    },{
        "Name": "Пещера пиратов",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "D"
    }]
},{
    "ID": 3,
    "Name": "Категория Прочее",
    "items": [{
        "Name": "Сувенир",
        "CashdeskSell": true,
        "IsFrequent": false,
        "Hotkey": "F1"
    }]
},{
    "ID": 4,
    "Name": "Категория Карты",
    "items": [{
        "Name": "Рокета",
        "CashdeskSell": true,
        "IsFrequent": false,
        "Hotkey": "F2"
    },{
        "Name": "Лагерь альпинистов",
        "CashdeskSell": true,
        "IsFrequent": true,
        "Hotkey": "F3"
    },{
        "Name": "Пещера пиратов",
        "CashdeskSell": false,
        "IsFrequent": false,
        "Hotkey": "F4"
    },{
        "Name": "Пещера пиратов",
        "CashdeskSell": true,
        "IsFrequent": true,
        "Hotkey": "F4"
    }]
}, {
    "Name": "Generated Card",
    "CashdeskSell": true,
    "IsFrequent": false,
    "Hotkey": ""
}, {
    "Name": "что-то",
    "CashdeskSell": true,
    "IsFrequent": false,
    "Hotkey": ""
}];
// GOODS-TREE-HIERARCHICAL-START

@Injectable()
export class Service {
    getGoodsTreeHierarchical() {
        return goodsTreeHierarchical;
    }
    
}