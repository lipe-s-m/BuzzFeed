import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CriarQuizService } from '../../../../services/criar-quiz.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'criar-quiz-questions',
	imports: [FormsModule, CommonModule],
	templateUrl: './questions.component.html',
	styleUrl: './questions.component.css',
})
export class CriarQuizQuestionsComponent implements OnInit {
	@Input()
	titleQuestion: string = '';

	idQuestion: number = 0;
	idOption: number = 1;
	questions: [
		{
			idQuestion: number;
			titleQuestion: string;
			options: [{ idOption: number; content: string; alias: string }];
		}
	] = [
		{
			idQuestion: this.idQuestion,
			titleQuestion: '',
			options: [{ idOption: this.idOption, content: '', alias: '' }],
		},
	];

	@ViewChild('myForm') form!: NgForm;

	constructor(
		private router: Router,
		private criarQuizService: CriarQuizService
	) {}
	ngOnInit(): void {
		console.log(this.questions[this.idQuestion].options);
	}
	addOption(): void {
		console.log(this.questions[this.idQuestion].options[this.idOption - 1]);

		if (
			this.questions[this.idQuestion].options[this.idOption - 1].content
				.length === 0 ||
			this.questions[this.idQuestion].options[this.idOption - 1].alias
				.length === 0
		) {
			alert('Preencha todos os campos das opções');
			return;
		}
		this.idOption += 1;
		this.questions[this.idQuestion].options.push({
			idOption: this.idOption,
			content: '',
			alias: '',
		});
		console.log(this.questions[this.idQuestion].options);
	}
	addQuestion(): void {
		if (this.titleQuestion.length === 0) {
			console.log(this.titleQuestion.length);
			console.log(this.questions[this.questions.length - 1]);

			alert('Insira o título da questão');
			return;
		}
		if (this.questions[this.idQuestion].options.length <= 1) {
			alert('Adicione pelo menos uma opção');
			return;
		}
		this.questions[this.idQuestion].options.pop();
		//salva questao atual
		this.questions[this.idQuestion] = {
			idQuestion: this.idQuestion,
			titleQuestion: this.titleQuestion,
			options: this.questions[this.idQuestion].options,
		};

		//add nova questao em branco
		this.idQuestion += 1;
		this.idOption = 1;
		this.titleQuestion = '';
		this.questions.push({
			idQuestion: this.idQuestion,
			titleQuestion: '',
			options: [{ idOption: this.idOption, content: '', alias: '' }],
		});
		this.form.reset();
		console.log(this.questions);
	}

	onSubmit(form: NgForm) {
		this.criarQuizService.updateData({ nameQuiz: form.value.nameQuiz });
	}
	nextSession() {
		if (this.questions.length <= 1) {
			alert('Adicione pelo menos 1 Questão!');
			return;
		}
		this.criarQuizService.updateData({ questions: this.questions });
		this.criarQuizService.currentData.subscribe((data) => {
			console.log(data);
		});
	}
}
