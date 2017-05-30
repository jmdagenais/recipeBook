import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() featureSelected: EventEmitter<string> = new EventEmitter();

    onSelect(feature: string) {
      this.featureSelected.emit(feature);
    }
}
