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
/*
* Calculate Body Mass Index
* Weight divided by height in meters square
* Usage:
*  weight | bodyMassIndex:height
* Example:
*  {{ 68 | bodyMassIndex:180 }}
*  formats to 21 (rounded)
*/
var BodyMassIndexPipe = (function () {
    function BodyMassIndexPipe() {
    }
    BodyMassIndexPipe.prototype.transform = function (weight, height) {
        var hei = parseFloat(height);
        return Math.round(weight / ((hei / 100) * (hei / 100)));
    };
    BodyMassIndexPipe = __decorate([
        core_1.Pipe({ name: 'bodyMassIndex' }), 
        __metadata('design:paramtypes', [])
    ], BodyMassIndexPipe);
    return BodyMassIndexPipe;
}());
exports.BodyMassIndexPipe = BodyMassIndexPipe;
//# sourceMappingURL=bmi-pipe.js.map