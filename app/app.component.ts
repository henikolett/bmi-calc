import { Component } from '@angular/core';
import { User } from './user';

import { BodyMassIndexPipe } from './bmi-pipe';

@Component({
  selector: 'my-app',
  template: `
	<div id="layout">
		<div id="main">
			<div class="header">
				<h1>{{ title }}</h1>
				<h2>Hello {{ user.name }}!</h2>
			</div>
			
			<div class="content">
				<div class="content-subhead intro">
					<p>Plese, provide us with some information about yourself. Promise, we won't tell anyone!
					We just need to know your age, height & weight to calculate your Body Mass Index (BMI).</p>
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
							</fieldset>
						</form>		
					</div>
					<div class="pure-u-1 pure-u-md-1-2">
						<h2>Here are your results</h2>
						<div class="results">
							<div>
								<label>You are </label> {{ user.age }} years old, {{ user.height }} cm tall and you weigh {{ user.weight }} kgs.
							</div>
							<div class="bmi">
								<label>Your BMI: </label> {{ user.weight | bodyMassIndex: user.height }}
							</div>				
						</div>
					</div>
				</div>
			</div>		
		</div>
	</div>
  `,
  pipes: [BodyMassIndexPipe]
})

export class AppComponent {
  title = 'Another BMI Calculator';
  user : User = {
	id: 1,
	name: "Harry Herring",
	age: 28,
	height: 185,
	weight: 70,
	bmi: 2,
  };
}



