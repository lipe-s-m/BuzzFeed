import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../services/shared.service';
import { QuizzesService } from '../../../../services/quizzes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-title',
	imports: [],
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.css', './title.component.responsive.css'],
})
export class TitleComponent implements OnInit {
	title: string = '';
	idQuiz: number = 0;
	constructor(
		private quizzesService: QuizzesService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.idQuiz = Number(this.route.snapshot.paramMap.get('id'));
		this.quizzesService.currentData.subscribe((data) => {
			this.title = data.quizzes[this.idQuiz].title;
		});
	}
}
