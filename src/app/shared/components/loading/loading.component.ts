import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { loadingAnimations } from './loading-animation';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-s-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [
    loadingAnimations.transformBackdrop,
    loadingAnimations.transformContent
  ],
})
export class LoadingComponent implements OnDestroy {

  showLoading = false;
  loadingSubscription = Subscription.EMPTY;

  constructor(private loadingService: LoadingService) {
    this.loadingSubscription = this.loadingService.getLoading().subscribe(newStatus => this.showLoading = newStatus);
  }

  ngOnDestroy = () => this.loadingSubscription.unsubscribe();
}
