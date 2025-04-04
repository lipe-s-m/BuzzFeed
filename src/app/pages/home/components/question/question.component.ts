import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SharedService } from '../../../../services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-question',
	imports: [CommonModule],
	templateUrl: './question.component.html',
	styleUrls: [
		'./question.component.css',
		'./question.component.responsive.css',
	],
})
export class QuestionComponent implements OnInit {
	questions: any = '';
	questionSelected: any = '';
	questionIndex: number = 0;
	questionMaxIndex: number = 0;
	constructor(private sharedService: SharedService) {}

	ngOnInit(): void {
		this.sharedService.currentData.subscribe((data) => {
			this.questions = data.questions;
			this.questionIndex = data.questionIndex;
			this.questionSelected = data.questions[this.questionIndex];
			this.questionMaxIndex = data.questionMaxIndex;
		});
	}
}
