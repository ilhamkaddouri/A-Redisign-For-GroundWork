import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
const appmaterials = [MatToolbarModule,MatButtonModule,MatSidenavModule]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    appmaterials
  ],
  exports : [appmaterials]
})
export class AppmaterialsModule { }
