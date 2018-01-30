import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { LoginForm } from "./login";
import { Menu } from "./menu";
import { NoteEditor } from "./note";

@NgModule({
	declarations: [AppComponent, LoginForm, Menu, NoteEditor],
	imports: [BrowserModule, HttpModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
