import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CriarQuizService } from '../../../../services/criar-quiz.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
	selector: 'criar-quiz-title',
	imports: [FormsModule],
	templateUrl: './title.component.html',
	styleUrl: './title.component.css',
})
export class CriarQuizTitleComponent {
	@Input()
	nameQuiz: string = '';
	constructor(
		private router: Router,
		private criarQuizService: CriarQuizService
	) {}

	onSubmit(form: NgForm) {
		this.criarQuizService.updateData({ nameQuiz: form.value.nameQuiz });
	}
}
