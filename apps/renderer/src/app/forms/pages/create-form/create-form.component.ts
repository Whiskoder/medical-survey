import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import confetti from "canvas-confetti";

import { fichaDeIdentificacion } from "../../constant/ficha-de-identificacion";
import { FormData, Field } from "../../interfaces/field.interface";
import { antecedentesHeredofamiliares } from "../../constant/antecedentes-heredofamiliares";
import { antecedentesPersonalesNoPatologicos } from "../../constant/antecedentes-personales-no-patologicos";
import { antecedentesLaborales } from "../../constant/antecedentes-laborales";
import { antecedentesPersonalesPatologicos } from "../../constant/antecedentes-personales-patologicos";
import { FormService } from "../../services/form.service";

@Component({
  selector: "create-form",
  standalone: false,
  templateUrl: "./create-form.component.html",
})
export class CreateFormComponent {
  //TODO: refactor to get all form data
  public formData: { [key: number]: FormData } = {
    // 1: fichaDeIdentificacion,
    1: fichaDeIdentificacion,
    2: antecedentesHeredofamiliares,
    3: antecedentesPersonalesNoPatologicos,
    4: antecedentesLaborales,
    5: antecedentesPersonalesPatologicos,
  };
  public currentStep: number = 1;
  public formTotalSteps: number = Object.keys(this.formData).length;

  public fb: FormBuilder = inject(FormBuilder);
  public formGroup: FormGroup = this.fb.group(this.formControl);

  public formService = inject(FormService);

  public userResponse: Record<string, unknown> = {};

  constructor() {
    // this.celebrate();
  }

  private celebrate() {
    const duration = 3000;
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });

    setTimeout(() => confetti.reset(), duration);
  }

  public saveUserResponse() {
    this.userResponse = { ...this.userResponse, ...this.formGroup.value };
  }

  public test() {
    const formData = {
      name: "John",
      fatherName: "John",
      motherName: "John",
      sex: "male",
      civilState: "single",
      birthDate: new Date().getFullYear() - 20,
      placeOfBirth: "New York",
      schooling: "completeHighSchool",
      religion: "christian",
      address: "New York",
      phone: 123456789,
      emergencyContactName: "John",
      emergencyContactNumber: 123456789,
      bloodGroup: "A+",
    };

    this.formService.createForm(formData).subscribe((form) => {
      console.log(form);
    });
  }

  public onNext() {
    this.saveUserResponse();

    // const formData = {
    //   name: this.userResponse["name"] as string,
    //   fatherName: this.userResponse["fatherName"] as string,
    //   motherName: this.userResponse["motherName"] as string,
    //   sex: this.userResponse["sex"] as string,
    //   civilState: this.userResponse["civilState"] as string,
    //   birthDate: this.userResponse["birthDate"] as number,
    //   placeOfBirth: this.userResponse["placeOfBirth"] as string,
    //   schooling: this.userResponse["schooling"] as string,
    //   religion: this.userResponse["religion"] as string,
    //   address: this.userResponse["address"] as string,
    //   phone: this.userResponse["phone"] as number,
    //   emergencyContactName: this.userResponse["emergencyContactName"] as string,
    //   emergencyContactNumber: this.userResponse[
    //     "emergencyContactNumber"
    //   ] as number,
    //   bloodGroup: this.userResponse["bloodGroup"] as string,
    // };

    if (this.currentStep + 1 > this.formTotalSteps) {
      this.celebrate();
      return;
    }

    this.currentStep++;
    this.formGroup = this.fb.group(this.formControl);
  }

  public onPrevious() {
    this.saveUserResponse();
    if (this.currentStep - 1 === 0) return;

    this.currentStep--;
    this.formGroup = this.fb.group(this.formControl);
  }

  public getFormFieldClass(field: Field) {
    const columnSpan: Record<number, string> = {
      2: "col-span-2",
      3: "col-span-3",
      4: "col-span-4",
      6: "col-span-6",
    };

    const colSpan = columnSpan[field.cols];

    return {
      [colSpan]: field.cols > 0,
      "h-full": true,
    };
  }

  get currentForm(): FormData {
    return this.formData[this.currentStep];
  }

  get formControl() {
    const control: Record<string, unknown[]> = {};

    this.currentForm.fields.forEach(({ key, validators, type }) => {
      let value: unknown = type === "boolean" ? false : "";
      value = this.userResponse?.[key] ?? value;

      // const value = type === 'boolean' ? false : '';
      control[key] = [value, validators];
    });

    return control;
  }

  get formProgress(): number {
    return (this.currentStep - 1 * 100) / this.formTotalSteps;
  }
}
