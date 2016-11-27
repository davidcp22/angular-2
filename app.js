/**
 * Created by David-Sinapsis on 27/11/2016.
 */
import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';

import { Component, View, bootstrap } from 'angular2/angular2';
import { HelloComponent } from './hello.component';

@Component({
    selector: 'hello-app's
})
@View({
    directives: [HelloComponent],
    template: `
    <div>
      <hello-component></hello-component>
    </div>
  `
})
class HelloApp { }

bootstrap(HelloApp, []);