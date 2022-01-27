import { MediaDevicesService } from './../../core/services/media-devices.service';
import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-toolbar-header',
  templateUrl: './toolbar-header.component.html',
  styleUrls: ['./toolbar-header.component.sass']
})
export class ToolbarHeaderComponent implements OnInit {
  @Input() isXsDevice: boolean = false;
  @Output() toggleTheme = new EventEmitter<boolean>();
  isDark = false;
  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private mediaDevicesService: MediaDevicesService
  ) { 
    
  }

  ngOnInit(): void {
    this.mediaDevicesService.isDark$.subscribe(isDark => {
      this.isDark = isDark;
      isDark ? this.doc.body.classList.add('dark') : this.doc.body.classList.remove('dark')
      localStorage.setItem('dark', JSON.stringify(isDark));
    })
  }
  onToggle() {
    this.toggleTheme.emit(true);
  }
  changeToggle($event: MatSlideToggleChange) {
    const isDark = $event.checked;
    this.mediaDevicesService._isDark$.next(isDark);   
  }

}
