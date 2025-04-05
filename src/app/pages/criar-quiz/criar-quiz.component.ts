import { Component } from '@angular/core';
import { CriarQuizQuestionsComponent } from './components/questions/questions.component';
import { CriarQuizTitleComponent } from './components/title/title.component';

@Component({
	selector: 'app-criar-quiz',
	imports: [CriarQuizQuestionsComponent, CriarQuizTitleComponent],
	templateUrl: './criar-quiz.component.html',
	styleUrl: './criar-quiz.component.css',
})
export class CriarQuizComponent {}
