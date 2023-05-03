import {Component, EventEmitter, Input, Output} from '@angular/core';
import {deviceList} from "../model/devices";
import {deviceInterface} from "../model/devices-interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {
  @Input() deviceItem: deviceInterface;
  // lal 7ofoz
  @Output() onAddtoCart = new EventEmitter();

  addtoCart() {
    this.onAddtoCart.emit(this.deviceItem.name);
  }
  deviceDescription = deviceList;
  device: deviceInterface | undefined;

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.device = this.deviceDescription.find(d => d.id == Number(id));
  }

  showDeviceName(value: any) {
    alert(`The device : ${value} is added to the cart`);
  }
}
