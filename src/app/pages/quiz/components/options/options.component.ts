import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzesService } from '../../../../services/quizzes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-options',
	imports: [CommonModule],
	templateUrl: './options.component.html',
	styleUrls: [
		'./options.component.css',
		'./options.component.responsive.css',
	],
})
export class OptionsComponent implements OnInit {
	idQuiz: number = 0;
	answers: string[] = [];
	options: any = '';
	questionIndex: number = 0;
	constructor(
		private quizzesService: QuizzesService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.idQuiz = Number(this.route.snapshot.paramMap.get('id'));

		this.quizzesService.currentData.subscribe((data) => {
			this.questionIndex = data.questionIndex;
			this.options =
				data.quizzes[this.idQuiz].questions[this.questionIndex].options;
		});
	}

	nextQuestion(answer: string): void {
		this.answers.push(answer);

		this.quizzesService.updateData({
			questionIndex: ++this.questionIndex,
			answers: this.answers,
		});
	}
}
