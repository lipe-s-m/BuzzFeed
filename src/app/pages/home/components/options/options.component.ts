import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-options',
	imports: [CommonModule],
	templateUrl: './options.component.html',
	styleUrl: './options.component.css',
})
export class OptionsComponent implements OnInit {
	answers: string[] = [];
	options: any = '';
	questionIndex: number = 0;
	constructor(private sharedService: SharedService) {}

	ngOnInit(): void {
		this.sharedService.currentData.subscribe((data) => {
			this.questionIndex = data.questionIndex;
			this.options = data.questions[this.questionIndex].options;
		});
	}

	nextQuestion(answer: string): void {
		this.answers.push(answer);

		this.sharedService.updateData({
			questionIndex: ++this.questionIndex,
			answers: this.answers,
		});
	}
}
