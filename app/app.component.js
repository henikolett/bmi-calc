"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var bmi_pipe_1 = require('./bmi-pipe');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'SuperGood BMI Calculator';
        this.user = {
            id: 1,
            name: "Harry Herring",
            age: 28,
            height: 178,
            weight: 65,
            bmi: 2,
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t<h1>{{ title }}</h1>\n\t<h2>Hello {{ user.name }}!</h2>\n\t<div class=\"pure-g intro\">\n\t\t<div class=\"pure-u-1 pure-u-md-1-3\"><p>Plese, provide us with some sensitive information about yourself. Promise, we won't tell anyone!</p></div>\n\t\t<div class=\"pure-u-1 pure-u-md-1-3\"><p>We just need to know your height & weight to give you an appropriate directive about your Body Mass Index (BMI).</p></div>\n\t\t<div class=\"pure-u-1 pure-u-md-1-3\"><p>And your age, just to be sure.</p></div>\n\t</div>\n\t<div class=\"pure-g user-data\">\n\t\t<div class=\"pure-u-1 pure-u-md-1-2\">\n\t\t\t<form class=\"pure-form pure-form-stacked\">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<div class=\"pure-control-group\">\n\t\t\t\t\t\t<label for=\"name\">Name:</label>\n\t\t\t\t\t\t<input id=\"name\" [(ngModel)]=\"user.name\" placeholder=\"name\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pure-control-group\">\n\t\t\t\t\t\t<label for=\"age\">Age:</label>\n\t\t\t\t\t\t<input id=\"age\" [(ngModel)]=\"user.age\" placeholder=\"age\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pure-control-group\">\n\t\t\t\t\t\t<label for=\"weight\">Weight:</label>\n\t\t\t\t\t\t<input id=\"weight\" [(ngModel)]=\"user.weight\" placeholder=\"weight\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pure-control-group\">\n\t\t\t\t\t\t<label for=\"height\">Height:</label>\n\t\t\t\t\t\t<input id=\"height\" [(ngModel)]=\"user.height\" placeholder=\"height\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pure-controls\">\n\t\t\t\t\t\t<label for=\"promise\" class=\"pure-checkbox\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"promise\" > I promise I won't be offended by my results.\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\t\t\t</form>\t\t\n\t\t</div>\n\t\t<div class=\"pure-u-1 pure-u-md-1-2\">\n\t\t\t<h2>Here be your results</h2>\n\t\t\t<div class=\"results\">\n\t\t\t\t<div>\n\t\t\t\t\t<label>You are </label> {{ user.age }} years old\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<label>Your height is </label> {{ user.height }} cm\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<label>Your weight is </label> {{ user.height }} kgs\n\t\t\t\t</div>\n\t\t\t\t<div class=\"bmi\">\n\t\t\t\t\t<label>Your BMI: </label> {{ user.weight | bodyMassIndex: user.height }}\n\t\t\t\t</div>\t\t\t\t\n\t\t\t</div>\n\t\t</div>\t\t\n\t</div>\n  ",
            pipes: [bmi_pipe_1.BodyMassIndexPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map