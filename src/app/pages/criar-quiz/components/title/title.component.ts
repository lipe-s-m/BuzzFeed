import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'criar-quiz-title',
	imports: [],
	templateUrl: './title.component.html',
	styleUrl: './title.component.css',
})
export class CriarQuizTitleComponent {
	constructor(private router: Router) {}
	backToHome(): void {
		// this.quizzesService.resetarQuiz();
		this.router.navigate(['']);
	}
}
