import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { MediaDevicesService } from './core/services/media-devices.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'multi-theme';
  isDark = false;
  isXsDevice = false;
  constructor(
    @Inject(DOCUMENT) private doc: Document,
    public dialog: MatDialog,
    public mediaObserver: MediaObserver,
    private deviceService: MediaDevicesService

  ) {}
  private mediaSubscription!: Subscription;
  private activeMediaQuery: string = '';

  ngOnInit(): void {
    const getAlias = (MediaChange: MediaChange[]) => {
      return MediaChange[0].mqAlias;
    };
    this.mediaSubscription = this.mediaObserver
      .asObservable()
      .pipe()
      .subscribe((changes) => {
        this.isXsDevice = changes.some((change) => change.mqAlias === 'xs');
        this.deviceService._device$.next(this.isXsDevice);
        console.log(this.isXsDevice);
      });
  }

  ngOnDestroy(): void {
    this.mediaSubscription.unsubscribe();
  }
  // changeToggle($event: MatSlideToggleChange) {
  //   console.log($event);
  //   this.doc.body.classList.toggle('dark', $event.checked);
  // }
  // openAuth() {
  //   const dialogRef = this.dialog.open(LoginComponent, {
  //     disableClose: false,
  //     minHeight: '100vh',
  //     width: '100%',
  //   });
  // }
}
