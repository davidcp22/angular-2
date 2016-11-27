import { Component, View } from 'angular2/angular2';

@Component({
    selector: 'hello-component'
})
@View({
    template: `<p>{{ message }}</p>`
})
export class HelloComponent {
    constructor() {
        this.message = "enfasis 3  david castaño apliacion , Angular 2!";
    }
}