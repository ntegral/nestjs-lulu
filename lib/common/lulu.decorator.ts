import { Inject } from '@nestjs/common';
import { LULU_TOKEN } from "./lulu.constants";

export function InjectLulu() {
    return Inject(LULU_TOKEN);
}