import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { fichaDeIdentificacion } from '../../constant/ficha-de-identificacion';
import { Field } from '../../interfaces/field.interface';

@Component({
  selector: 'form-home-page',
  standalone: false,
  templateUrl: './form-home-page.component.html',
  styleUrl: './form-home-page.component.css',
})
export class FormHomePageComponent {
  @ViewChild('formContainer', { read: ViewContainerRef })
  formContainer: ViewContainerRef | undefined;

  public formData: Field[] = fichaDeIdentificacion;
  public title: string = 'Ficha de identificación';
  public step: number = 1;

  // public constructor(private cdr: ChangeDetectorRef) {}

  // public ngAfterViewChecked(): void {
  //   this.renderForm();
  // }

  // private renderForm(): void {
  //   if (!this.formContainer) return;

  //   this.formContainer.clear();
  //   fichaDeIdentificacion.forEach((field) => {
  //     const { type, label, key } = field;

  //     const getComponent: { [key: string]: any } = {
  //       text: TextFieldComponent,
  //     };

  //     if (!getComponent[type])
  //       return console.error(`Component ${type} not found`);

  //     const componentRef: any = this.formContainer!.createComponent(
  //       getComponent[type]
  //     );
  //     componentRef.instance.key = key;
  //     componentRef.instance.label = label;
  //   });

  //   // this.cdr.detectChanges();
  // }
}
