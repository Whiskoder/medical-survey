import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'form-fab',
  standalone: false,
  template: `<p-button
    *ngIf="hasScroll"
    class="fixed bottom-5 right-5"
    [icon]="icon"
    [outlined]="true"
    severity="primary"
    [rounded]="true"
    (onClick)="windowScrollTo()"
  ></p-button>`,
})
export class FabComponent {
  public currentPosition: 'bottom' | 'top' = 'bottom';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollPosition = window.scrollY;
    const scrollHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const maxScroll = scrollHeight - windowHeight;

    scrollPosition >= maxScroll - 100
      ? (this.currentPosition = 'top')
      : (this.currentPosition = 'bottom');
  }

  windowScrollTo() {
    this.currentPosition === 'bottom'
      ? window.scrollTo(0, document.body.scrollHeight)
      : window.scrollTo(0, 0);
  }

  get hasScroll(): boolean {
    return document.body.scrollHeight > window.innerHeight;
  }

  get icon(): string {
    return this.currentPosition === 'bottom'
      ? 'pi pi-arrow-down'
      : 'pi pi-arrow-up';
  }
}
