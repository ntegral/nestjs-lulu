import { Test, TestingModule } from '@nestjs/testing';

import { LuluConfigOptions, LuluService } from '@ntegral/lulu';
import { Injectable } from '@nestjs/common';
import { InjectLulu } from './lulu.decorator';
import { LuluModule } from '../lulu.module';

describe('InjectS3', () => {

    let config: LuluConfigOptions = {
        client_key: '---lulu client key ---',
        client_secret: '---lulu client secret ---',
        environment: 'development'
    };

    let module: TestingModule;

    @Injectable()
    class InjectableService {
        public constructor(@InjectLulu() public readonly client: LuluService) {}
    }

    beforeEach(async () => {
        module = await Test.createTestingModule({
            imports: [LuluModule.forRoot(config)],
            providers: [InjectableService],
        }).compile();
    });

    describe('when decorating a class constructor parameter', () => {
        it('should inject the lulu client', () => {
            const testService = module.get(InjectableService);
            expect(testService).toHaveProperty('client');
            expect(testService.client).toBeInstanceOf(LuluService);
        });
    });
})