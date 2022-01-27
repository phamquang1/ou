import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaDevicesService {

  _device$ = new BehaviorSubject<boolean>(false);
  _isDark$ = new BehaviorSubject<boolean>(localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark') || 'false'): false);

  constructor() { }
  get device$() {
    return this._device$.asObservable();
  }
  get isDark$() {
    return this._isDark$.asObservable()
  }
}
