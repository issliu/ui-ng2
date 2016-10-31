import { RouterModule, Routes } from '@angular/router';

import { ButtonsSectionComponent } from './components/buttons-section';

export const routes:Routes = [
    {
        path: 'buttons',
        data: ['Buttons'],
        component: ButtonsSectionComponent
    }, {
        path: '**',
        redirectTo: '/'
    }
];

export const routing = RouterModule.forRoot(routes, {useHash: true});
