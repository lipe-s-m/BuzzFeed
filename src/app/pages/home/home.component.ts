import { Component } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { OptionsComponent } from './components/options/options.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-home',
	imports: [TitleComponent, OptionsComponent, CommonModule],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css', './home.component.responsive.css'],
})
export class HomeComponent {
	constructor() {}
}
