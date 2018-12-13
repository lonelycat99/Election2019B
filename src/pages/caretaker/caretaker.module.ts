import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaretakerPage } from './caretaker';

@NgModule({
  declarations: [
    CaretakerPage,
  ],
  imports: [
    IonicPageModule.forChild(CaretakerPage),
  ],
})
export class CaretakerPageModule {}
export class SegmentPage {
  pet: string;
  constructor() {      
    this.pet = "puppies";
}
}
