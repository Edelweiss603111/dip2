export class MenuItem {
  constructor(public label: string,
              public route: string,
              public children: MenuItem[]) {
  }
}
