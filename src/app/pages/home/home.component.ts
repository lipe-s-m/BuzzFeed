import { Component } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { QuestionComponent } from './components/question/question.component';
import { OptionsComponent } from './components/options/options.component';
import { ResultComponent } from './components/result/result.component';

@Component({
	selector: 'app-home',
	imports: [
		TitleComponent,
		QuestionComponent,
		OptionsComponent,
		ResultComponent,
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
})
export class HomeComponent {}
