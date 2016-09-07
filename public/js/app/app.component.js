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
//import { FormsModule } from '@angular/forms';
var AppComponent = (function () {
    function AppComponent() {
        this.user = {
            first_name: 'Mike',
            last_name: 'Hueppi',
            email: 'mike.hueppi@hsr.ch'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <div class=\"row\">\n            <section >\n                <input [(ngModel)]=\"user.email\">\n            </section>\n        </div>\n        <div>\n            <section>\n                <article class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                        {{user.email}}\n                    </div>\n                    <footer class=\"panel-footer\">\n                        <div class=\"user\">\n                            {{user.first_name}}\n                            {{user.last_name}}\n                            {{user.email}}\n                        </div>\n                        <div class=\"config\">\n                            <a href=\"#\">Edit</a>\n                            <a href=\"#\">Delete</a>\n                        </div>\n                    </footer>\n                </article>\n            </section>\n        </div>\n   ",
            styles: ["\n        .user {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config {\n            display: inline-block;\n            text-align: right;\n            font-size: 12px;\n            width: 19%;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map