import {MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatIconModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatIconModule],
})
export class MaterialModule { }