import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSource } from 'typeorm';

@Injectable({ providedIn: 'root' })
export class DatasourceService {
  // public datasource: DataSource | undefined;

  constructor() {}

  connect(): Observable<void> {
    return new Observable((observer) => {
      try {
        const datasource = new DataSource({
          type: 'sqlite',
          database: 'database.db',
          synchronize: true,
          logging: false,
          entities: [],
        });

        // Initialize the datasource asynchronously
        datasource
          .initialize()
          .then(() => {
            observer.next(); // Emits success signal
            observer.complete(); // Completes the observable
          })
          .catch((error) => {
            observer.error(error); // Emits error signal
          });
      } catch (e) {
        observer.error(e); // Emits error signal in case of any unexpected issue
      }
    });
  }
}
