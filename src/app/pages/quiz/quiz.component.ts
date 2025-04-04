import { Component, OnInit } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { QuestionComponent } from './components/question/question.component';
import { OptionsComponent } from './components/options/options.component';
import { ResultComponent } from './components/result/result.component';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { QuizzesService } from '../../services/quizzes.service';

@Component({
	selector: 'app-quiz',
	imports: [
		TitleComponent,
		QuestionComponent,
		OptionsComponent,
		ResultComponent,
		CommonModule,
	],
	templateUrl: './quiz.component.html',
	styleUrls: ['./quiz.component.css', './quiz.component.responsive.css'],
})
export class QuizComponent implements OnInit {
	finished: boolean = false;
	idQuiz: number = 0;
	constructor(
		private quizzesService: QuizzesService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.idQuiz = Number(this.route.snapshot.paramMap.get('id'));
		this.quizzesService.currentData.subscribe((data) => {
			this.finished = data.finished;
		});
	}
}
