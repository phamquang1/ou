import { Component, Input, OnInit } from '@angular/core';
import { MediaDevicesService } from 'src/app/core/services/media-devices.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.sass']
})
export class StoresComponent implements OnInit {
  isViewCart = false;
  @Input() isXsDevice = false;
  constructor(
    private deviceService: MediaDevicesService
  ) {
    this.deviceService.device$.subscribe(isXsDevice => {
      this.isXsDevice = isXsDevice;
    })
   }

  ngOnInit(): void {
  }
  toggleTheme($event: boolean) {
    console.log($event)
  }
  handleEdit() {
    this.isViewCart = !this.isViewCart;
  }


}
