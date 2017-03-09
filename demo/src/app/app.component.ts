import { Component } from '@angular/core';
import { Latinize } from '../../../index';

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
	input = 'crème brûlée';
	output;

	constructor(
		public latinize: Latinize
	) {

		this.inputChanged(); // init

	}

	inputChanged() {

		this.output = this.latinize.convert(this.input)

	}

}
