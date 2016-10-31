import { AfterContentInit, Component, ViewContainerRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

let w: any = window;

let template = require('./demo.template.html');

@Component({
    selector: 'demo',
    template
})

export class DemoComponent implements AfterContentInit {
    private viewContainerRef: ViewContainerRef;

    public constructor(viewContainerRef: ViewContainerRef, private router: Router) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }

    public ngAfterContentInit(): any {
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                if (typeof PR !== 'undefined') {
                    // google code-prettify
                    setTimeout(PR.prettyPrint, 50);
                }
            }
        });
    }
}
