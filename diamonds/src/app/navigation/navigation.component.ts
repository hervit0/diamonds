import { Component, OnInit, Input } from '@angular/core';
import { NavigationItem } from '../navigation-item';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input()
  public items: NavigationItem[];
  // it's a dictionary!
  private counter: { [name: string]: number } = {} as any;

  constructor() {
    this.items = [
      {
        title: "Home",
        routeLink: "/",
        action: () => this.updateCounter("Home")
      },
      {
        title: "Games",
        routeLink: "/game",
        action: this.updateCounter.bind(this, "Games")
      }
    ];
  }

  public getCount(key: string) {
    return this.counter[key] || 0;
  }

  doAction(item: NavigationItem) {
    item.action();
  }

  private updateCounter(key: string) {
    this.counter[key] = !this.counter[key] ? 1 : ++this.counter[key];
  }

  ngOnInit() {
  }

}
