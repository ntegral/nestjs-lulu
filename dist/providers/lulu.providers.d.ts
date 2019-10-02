import { LuluConfigOptions } from "@ntegral/lulu";
export declare function createLuluProviders(options: LuluConfigOptions): {
    provide: string;
    useValue: import("@ntegral/lulu").LuluService;
};
