import { Injectable, OnInit } from "@angular/core";
import { CreateFormDto } from "../dtos/create-form.dto";
import { FormEntity } from "../entities/form.entity";
import { Observable } from "rxjs";
import { PaginationDto } from "../dtos/pagination.dto";

interface Electron {
  datasourceInit: () => Promise<boolean>;
  createForm: (createFormDto: CreateFormDto) => Promise<FormEntity | undefined>;
  getForms: (paginationDto: PaginationDto) => Promise<FormEntity[]>;
}

@Injectable({ providedIn: "root" })
export class FormService {
  public electron: Electron;

  constructor() {
    const w = window as any;
    this.electron = w.electron;
  }

  public datasourceInit(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      try {
        this.electron
          .datasourceInit()
          .then((response) => {
            observer.next(response);
            observer.complete();
          })
          .catch((error: any) => {
            observer.error(error);
          });
      } catch (error) {
        observer.error(error);
      }
    });
  }

  public createForm(
    formData: CreateFormDto
  ): Observable<FormEntity | undefined> {
    return new Observable<FormEntity | undefined>((observer) => {
      try {
        this.electron
          .createForm(formData)
          .then((response) => {
            observer.next(response);
            observer.complete();
          })
          .catch((error: any) => {
            observer.error(error);
          });
      } catch (error) {
        observer.error(error);
      }
    });
  }

  public getForms(): Observable<FormEntity[] | undefined> {
    return new Observable<FormEntity[] | undefined>((observer) => {
      try {
        this.electron
          .getForms({})
          .then((response) => {
            observer.next(response);
            observer.complete();
          })
          .catch((error: any) => {
            observer.error(error);
          });
      } catch (error) {
        observer.error(error);
      }
    });
  }
}
