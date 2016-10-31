import { ButtonsModule } from './buttons/buttons.module';
import { NgModule } from '@angular/core';

// 输出 Buttons 模块
import { ComponentsHelper } from './utils/components-helper.service';
@NgModule({
    exports: [ButtonsModule],
    providers: [{
        provide: ComponentsHelper, useClass: ComponentsHelper
    }]
})
export class Ng2BootstrapModule {
}
