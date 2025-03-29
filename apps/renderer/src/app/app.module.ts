import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeng/themes';
import Lara from '@primeng/themes/lara/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const LaraIndigo = definePreset(Lara, {
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}',
    },
  },
});

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: LaraIndigo,
        options: {
          darkModeSelector: false || 'none',
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
