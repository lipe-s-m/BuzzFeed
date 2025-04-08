import { Component, OnInit } from '@angular/core';
import { CriarQuizQuestionsComponent } from './components/questions/questions.component';
import { CriarQuizTitleComponent } from './components/title/title.component';
import { Router } from '@angular/router';
import { CriarQuizService } from '../../services/criar-quiz.service';
import { CommonModule } from '@angular/common';
import { ResultComponent } from '../quiz/components/result/result.component';
import { CriarResultComponent } from './components/result/result.component';

@Component({
	selector: 'app-criar-quiz',
	imports: [
		CriarQuizQuestionsComponent,
		CriarQuizTitleComponent,
		CommonModule,
		ResultComponent,
		CriarResultComponent,
	],
	templateUrl: './criar-quiz.component.html',
	styleUrl: './criar-quiz.component.css',
})
export class CriarQuizComponent implements OnInit {
	nameQuiz: string = '';
	questions: any = '';
	boolean: boolean = true;
	constructor(
		private router: Router,
		private criarQuizService: CriarQuizService
	) {}
	ngOnInit(): void {
		this.criarQuizService.currentData.subscribe((data) => {
			console.log(data);

			this.nameQuiz = data.nameQuiz;
			this.questions = data.questions;
		});
	}

	backToHome(): void {
		this.criarQuizService.resetQuiz();
		this.nameQuiz = '';
		this.questions = '';
		this.router.navigate(['']);
	}
}
