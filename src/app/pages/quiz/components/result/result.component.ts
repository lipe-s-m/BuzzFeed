import { Component, OnInit } from '@angular/core';
import { QuizzesService } from '../../../../services/quizzes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'quiz-result',
	imports: [],
	templateUrl: './result.component.html',
	styleUrls: ['./result.component.css', './result.component.responsive.css'],
})
export class ResultComponent implements OnInit {
	answers: string[] = [];
	questions: any;
	result: any;
	idQuiz: number = 0;
	constructor(
		private quizzesService: QuizzesService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.idQuiz = Number(this.route.snapshot.paramMap.get('id'));
		this.quizzesService.currentData.subscribe((data) => {
			this.answers = data.answers;
			this.questions = data.quizzes[this.idQuiz].questions;
			this.result = data.quizzes[this.idQuiz].results;
			console.log(data);

			if (data.finished) {
				this.calcularResultado();
			}
		});
	}
	calcularResultado(): string {
		let totalAnswers = {
			countA: {
				id: 0,
				count: 0,
			},
			countB: {
				id: 1,
				count: 0,
			},
			countC: {
				id: 2,
				count: 0,
			},
			countD: {
				id: 3,
				count: 0,
			},
			countE: {
				id: 4,
				count: 0,
			},
		};

		this.answers.forEach((answer) => {
			if (answer === 'A') totalAnswers.countA.count += 1;
			if (answer === 'B') totalAnswers.countB.count += 1;
			if (answer === 'C') totalAnswers.countC.count += 1;
			if (answer === 'D') totalAnswers.countD.count += 1;
			if (answer === 'E') totalAnswers.countE.count += 1;
		});
		const result = Object.values(totalAnswers).reduce((maior, atual) => {
			return atual.count > maior.count ? atual : maior;
		});

		return this.result[result.id].result_text;
	}
}
