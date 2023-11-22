import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  readonly loadingSubject = new Subject<boolean>();

  getLoading = (): Observable<boolean> => this.loadingSubject.asObservable();

  show = () => this.loadingSubject.next(true)

  hide = () => this.loadingSubject.next(false)
}
