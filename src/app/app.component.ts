import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  dynamicComponentContainer: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.dynamicComponentContainer = {} as ViewContainerRef;
  }
  ngOnInit(): void {}

  loadDynamicComponent() {
    const dynamicComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(ChildComponent);
    const dynamicComponentRef = dynamicComponentFactory.create(
      this.dynamicComponentContainer.parentInjector
    );
    this.dynamicComponentContainer.insert(dynamicComponentRef.hostView);
  }
  removeDynamicComponent() {
    this.dynamicComponentContainer.clear();
  }
}
