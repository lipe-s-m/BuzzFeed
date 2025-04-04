import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzesService } from '../../../../services/quizzes.service';
import { Router } from '@angular/router';

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
	quizzes: any[] = [];
	options: any = '';
	questionIndex: number = 0;
	constructor(
		private quizzesService: QuizzesService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.quizzesService.currentData.subscribe((data) => {
			this.quizzes = data.quizzes;
			console.log(this.quizzes);
		});
	}

	selectQuiz(id: number): void {
		this.router.navigate(['/quiz', id - 1]);
	}
}
