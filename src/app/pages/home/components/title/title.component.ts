import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../services/shared.service';

@Component({
	selector: 'app-title',
	imports: [],
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.css', './title.component.responsive.css'],
})
export class TitleComponent implements OnInit {
	title: string = '';
	constructor(private sharedService: SharedService) {}
	ngOnInit(): void {
		this.sharedService.currentData.subscribe((data) => {
			this.title = data.title;
		});
	}
}
