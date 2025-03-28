import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-field',
  standalone: false,
  templateUrl: './field.component.html',
})
export class FormsFieldComponent {
  value: string = '';
  @Input() key: string = '';
  @Input() label: string = '';
}
