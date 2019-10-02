"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LuluModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const lulu_core_module_1 = require("./lulu-core.module");
let LuluModule = LuluModule_1 = class LuluModule {
    static forRoot(options) {
        return {
            module: LuluModule_1,
            imports: [lulu_core_module_1.LuluCoreModule.forRoot(options)]
        };
    }
    static forRootAsync(options) {
        return {
            module: LuluModule_1,
            imports: [lulu_core_module_1.LuluCoreModule.forRootAsync(options)]
        };
    }
};
LuluModule = LuluModule_1 = __decorate([
    common_1.Module({})
], LuluModule);
exports.LuluModule = LuluModule;
