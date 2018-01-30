import { Component, Input } from '@angular/core';

@Component({
  selector: "about-page",
  template: `
    <h2>About</h2>
    This widget shows the weather forecast of
    <a [href]="'https://maps.google.com/?q=' + encodedLocation">
      {{ location }}
    </a>.
    <input [(ngModel)]="location" />
    The next 24 hours are shown under 'Today' and the forecast        of 24-48 hours ahead under 'Tomorrow'.
    <br />
    <a *ngIf="collapsed" href="javascript:;" (click)="show()">Show
    more</a>

    <div *ngIf="!collapsed">
    The forecast uses data from <a
    href="http://openweathermap.org">Open Weather Map</a>.
      <br />

      <a href="javascript:;" (click)="hide()">Hide</a>
    </div>
  `
})

export class AboutComponent {
  @Input()
  location: string = "Utrecht";
  collapsed = true;

  show() {
    this.collapsed = false;
  }

  hide() {
    this.collapsed = true;
  }

  get encodedLocation() {
    return encodeURIComponent(this.location);
  }
}
