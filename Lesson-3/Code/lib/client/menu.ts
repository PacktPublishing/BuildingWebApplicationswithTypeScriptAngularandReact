import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MenuItem } from "../shared/api";

@Component({
	selector: "notes-menu",
	template: `
		<button type="button" (click)="clickCreate()">New</button>
		<ul>
			<li *ngFor="let item of items">
				<a href="javascript:;" (click)="clickItem(item)">{{ item.title }}</a>
			</li>
		</ul>
		`
})
export class Menu {
	@Input() items: MenuItem[];

	@Output() create = new EventEmitter();

	@Output() open = new EventEmitter<string>();

	clickCreate() {
		this.create.emit(undefined);
	}
	clickItem(item: MenuItem) {
		this.open.emit(item.id);
	}
}
