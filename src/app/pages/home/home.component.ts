import { Component } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { OptionsComponent } from './components/options/options.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-home',
	imports: [TitleComponent, OptionsComponent, CommonModule, RouterLink],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css', './home.component.responsive.css'],
})
export class HomeComponent {
	constructor() {}
}
