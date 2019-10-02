"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lulu_1 = require("@ntegral/lulu");
function createLuluClient(options) {
    const client = new lulu_1.LuluService(options);
    return client;
}
exports.createLuluClient = createLuluClient;
