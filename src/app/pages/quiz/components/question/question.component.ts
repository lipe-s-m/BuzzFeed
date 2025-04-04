import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../services/shared.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuizzesService } from '../../../../services/quizzes.service';

@Component({
	selector: 'quiz-question',
	imports: [CommonModule],
	templateUrl: './question.component.html',
	styleUrls: [
		'./question.component.css',
		'./question.component.responsive.css',
	],
})
export class QuestionComponent implements OnInit {
	idQuiz: number = 0;
	questions: any = '';
	questionSelected: any = '';
	questionIndex: number = 0;
	questionMaxIndex: number = 0;
	constructor(
		private quizzesService: QuizzesService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.idQuiz = Number(this.route.snapshot.paramMap.get('id'));

		this.quizzesService.currentData.subscribe((data) => {
			this.questions = data.quizzes[this.idQuiz].questions;

			this.questionIndex = data.questionIndex;

			this.questionSelected =
				data.quizzes[this.idQuiz].questions[this.questionIndex];

			this.questionMaxIndex = data.quizzes[this.idQuiz].questions.length;
		});
	}
}
