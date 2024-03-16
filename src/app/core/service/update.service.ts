import { MatSnackBar } from '@angular/material';
import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  promptEvent: any;

  constructor(private appRef: ApplicationRef, private swUpdate: SwUpdate, private snackbar: MatSnackBar) {
    if (!this.swUpdate.isEnabled) {
      return;
    }

    this.swUpdate.available.subscribe(event => {
      this.promptUser();
    });

    this.swUpdate.activated.subscribe(event => {
      // ...
    });

    // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable));
    const everySixHours$ = interval(60 * 1000); // 6 * 60 * 60 * 1000
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

    everySixHoursOnceAppIsStable$.subscribe(() => this.swUpdate.checkForUpdate());

    // For more details visit
    // - https://developers.google.com/web/fundamentals/app-install-banners/
    // - https://angular.io/guide/service-worker-config
    // - https://www.youtube.com/watch?v=5YtNQJQu31Y
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }

  activateUpdate(): void {
    this.swUpdate.activateUpdate().then(() => document.location.reload());
  }

  installPWA(): void {
    this.promptEvent.prompt();
  }

  private promptUser(): void {
    const snack = this.snackbar.open('Atualização Disponível', 'Recarregar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 60000,
    });

    snack.onAction().subscribe(() => {
      document.location.reload();
    });

    setTimeout(() => {
      snack.dismiss();
    }, 60000);
  }
}
