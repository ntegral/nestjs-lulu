"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
function createLuluProviders(options) {
    return {
        provide: common_1.LULU_TOKEN,
        useValue: common_1.createLuluClient(options)
    };
}
exports.createLuluProviders = createLuluProviders;
