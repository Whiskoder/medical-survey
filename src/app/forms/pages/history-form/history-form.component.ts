import { Component, inject, OnInit } from '@angular/core';
import { DatasourceService } from '../../services/datasource.service';

@Component({
  selector: 'history-form',
  standalone: false,
  templateUrl: './history-form.component.html',
})
export class HistoryFormComponent implements OnInit {
  public datasourceService = inject(DatasourceService);

  ngOnInit() {
    this.datasourceService.connect().subscribe({
      next: () => {
        console.log('Connected to the database');
      },
      error: (error) => {
        console.error('Error connecting to the database:', error);
      },
    });
  }
}
