import { Component, EventEmitter, Input, Output } from '@angular/core';
import { deviceInterface } from '../model/devices-interface';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.css'],
})
export class DeviceItemComponent {
  @Input() deviceItem: deviceInterface;


}
