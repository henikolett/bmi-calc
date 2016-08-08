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
        this.title = 'Another BMI Calculator';
        this.user = {
            id: 1,
            name: "Harry Herring",
            age: 28,
            height: 185,
            weight: 70,
            bmi: 2,
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t<div id=\"layout\">\n\t\t<div id=\"main\">\n\t\t\t<div class=\"header\">\n\t\t\t\t<h1>{{ title }}</h1>\n\t\t\t\t<h2>Hello {{ user.name }}!</h2>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"content\">\n\t\t\t\t<div class=\"content-subhead intro\">\n\t\t\t\t\t<p>Plese, provide us with some information about yourself. Promise, we won't tell anyone!\n\t\t\t\t\tWe just need to know your age, height & weight to calculate your Body Mass Index (BMI).</p>\n\t\t\t\t</div>\t\n\t\t\t\t<div class=\"pure-g user-data\">\n\t\t\t\t\t<div class=\"pure-u-1 pure-u-md-1-2\">\n\t\t\t\t\t\t<form class=\"pure-form pure-form-stacked\">\n\t\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t\t<div class=\"pure-control-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"name\">Name:</label>\n\t\t\t\t\t\t\t\t\t<input id=\"name\" [(ngModel)]=\"user.name\" placeholder=\"name\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"pure-control-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"age\">Age:</label>\n\t\t\t\t\t\t\t\t\t<input id=\"age\" [(ngModel)]=\"user.age\" placeholder=\"age\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"pure-control-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"weight\">Weight:</label>\n\t\t\t\t\t\t\t\t\t<input id=\"weight\" [(ngModel)]=\"user.weight\" placeholder=\"weight\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"pure-control-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"height\">Height:</label>\n\t\t\t\t\t\t\t\t\t<input id=\"height\" [(ngModel)]=\"user.height\" placeholder=\"height\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t</form>\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pure-u-1 pure-u-md-1-2\">\n\t\t\t\t\t\t<h2>Here are your results</h2>\n\t\t\t\t\t\t<div class=\"results\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<label>You are </label> {{ user.age }} years old, {{ user.height }} cm tall and you weigh {{ user.weight }} kgs.\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"bmi\">\n\t\t\t\t\t\t\t\t<label>Your BMI: </label> {{ user.weight | bodyMassIndex: user.height }}\n\t\t\t\t\t\t\t</div>\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\n\t\t</div>\n\t</div>\n  ",
            pipes: [bmi_pipe_1.BodyMassIndexPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map