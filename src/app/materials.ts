import {MatButtonModule, MatCheckboxModule, MatDatepickerModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule],
  exports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule],
})
export class MaterialModule { }