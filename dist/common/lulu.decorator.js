"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const lulu_constants_1 = require("./lulu.constants");
function InjectLulu() {
    return common_1.Inject(lulu_constants_1.LULU_TOKEN);
}
exports.InjectLulu = InjectLulu;
