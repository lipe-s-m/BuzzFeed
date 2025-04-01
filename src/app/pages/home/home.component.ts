import { Component, OnInit } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { QuestionComponent } from './components/question/question.component';
import { OptionsComponent } from './components/options/options.component';
import { ResultComponent } from './components/result/result.component';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../services/shared.service';

@Component({
	selector: 'app-home',
	imports: [
		TitleComponent,
		QuestionComponent,
		OptionsComponent,
		ResultComponent,
		CommonModule,
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
	finished: boolean = false;
	constructor(private sharedService: SharedService) {}

	ngOnInit(): void {
		this.sharedService.currentData.subscribe((data) => {
			this.finished = data.finished;
		});
	}
}
