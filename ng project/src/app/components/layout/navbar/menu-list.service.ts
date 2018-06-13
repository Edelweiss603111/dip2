import {MenuItem} from './menu-item.model';

export class MenuList {
  menu: MenuItem[] = [
    new MenuItem('Настройки объекта', '0', []),
    new MenuItem('Пользователи инсталляции', '0', []),
    new MenuItem('Организации', '0', [
      new MenuItem('Пользователи организаций', '0', []),
      new MenuItem('Пользователи', '0', [])
    ]),
    new MenuItem('Кассы', '0', [
      new MenuItem('Процессинги', '0', []),
      new MenuItem('Товары', '0', []),
      new MenuItem('Принтеры', '0', [])])
  ];

  getMenu(){
    return Array.from(this.menu);
  }
}
