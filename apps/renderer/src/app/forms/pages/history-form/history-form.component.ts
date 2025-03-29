import { Component, inject, OnInit } from "@angular/core";
import { FormService } from "../../services/form.service";
import { switchMap } from "rxjs";

@Component({
  selector: "history-form",
  standalone: false,
  templateUrl: "./history-form.component.html",
})
export class HistoryFormComponent implements OnInit {
  public databaseService = inject(FormService);

  ngOnInit(): void {
    this.databaseService
      .datasourceInit()
      .pipe(switchMap(() => this.databaseService.getForms()))
      .subscribe((forms) => {
        if (!forms) return;
        console.log(forms);
      });
  }
}
