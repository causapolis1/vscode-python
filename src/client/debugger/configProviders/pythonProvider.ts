// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

'use strict';

import { inject, injectable } from 'inversify';
import { IServiceContainer } from '../../ioc/types';
import { BaseConfigurationProvider, PythonDebugConfiguration } from './baseProvider';

@injectable()
export class PythonDebugConfigurationProvider extends BaseConfigurationProvider {
    constructor(@inject(IServiceContainer) serviceContainer: IServiceContainer) {
        super('python', serviceContainer);
    }
    protected provideDefaults(debugConfiguration: PythonDebugConfiguration): void {
        debugConfiguration.stopOnEntry = true;
        debugConfiguration.debugOptions = [
            'RedirectOutput'
        ];
    }
}
