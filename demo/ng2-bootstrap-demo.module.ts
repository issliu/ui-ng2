import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { Ng2BootstrapModule } from '../components';

import {
    ButtonsDemoComponent
} from './components';

@NgModule({
    declarations: [
        ButtonsDemoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        Ng2BootstrapModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: []
})

export class Ng2BootstrapDemoModule {
}
