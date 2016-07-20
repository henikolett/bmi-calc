import { Component } from '@angular/core';
import { User } from './user';

import { BodyMassIndexPipe } from './bmi-pipe';

@Component({
  selector: 'my-app',
  template: `
	<h1>{{ title }}</h1>
	<h2>Hello {{ user.name }}!</h2>
	<div class="pure-g intro">
		<div class="pure-u-1 pure-u-md-1-3"><p>Plese, provide us with some sensitive information about yourself. Promise, we won't tell anyone!</p></div>
		<div class="pure-u-1 pure-u-md-1-3"><p>We just need to know your height & weight to give you an appropriate directive about your Body Mass Index (BMI).</p></div>
		<div class="pure-u-1 pure-u-md-1-3"><p>And your age, just to be sure.</p></div>
	</div>
	<div class="pure-g user-data">
		<div class="pure-u-1 pure-u-md-1-2">
			<form class="pure-form pure-form-stacked">
				<fieldset>
					<div class="pure-control-group">
						<label for="name">Name:</label>
						<input id="name" [(ngModel)]="user.name" placeholder="name">
					</div>
					<div class="pure-control-group">
						<label for="age">Age:</label>
						<input id="age" [(ngModel)]="user.age" placeholder="age">
					</div>
					<div class="pure-control-group">
						<label for="weight">Weight:</label>
						<input id="weight" [(ngModel)]="user.weight" placeholder="weight">
					</div>
					<div class="pure-control-group">
						<label for="height">Height:</label>
						<input id="height" [(ngModel)]="user.height" placeholder="height">
					</div>
					<div class="pure-controls">
						<label for="promise" class="pure-checkbox">
							<input type="checkbox" id="promise" > I promise I won't be offended by my results.
						</label>
					</div>
				</fieldset>
			</form>		
		</div>
		<div class="pure-u-1 pure-u-md-1-2">
			<h2>Here be your results</h2>
			<div class="results">
				<div>
					<label>You are </label> {{ user.age }} years old
				</div>
				<div>
					<label>Your height is </label> {{ user.height }} cm
				</div>
				<div>
					<label>Your weight is </label> {{ user.height }} kgs
				</div>
				<div class="bmi">
					<label>Your BMI: </label> {{ user.weight | bodyMassIndex: user.height }}
				</div>				
			</div>
		</div>		
	</div>
  `,
  pipes: [BodyMassIndexPipe]
})

export class AppComponent {
  title = 'SuperGood BMI Calculator';
  user : User = {
	id: 1,
	name: "Harry Herring",
	age: 28,
	height: 178,
	weight: 65,
	bmi: 2,
  };
}



