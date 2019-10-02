import { LuluConfigOptions } from "@ntegral/lulu";
import { LULU_TOKEN, createLuluClient } from "../common";

export function createLuluProviders(options: LuluConfigOptions) {
    return {
        provide: LULU_TOKEN,
        useValue: createLuluClient(options)
    }
}