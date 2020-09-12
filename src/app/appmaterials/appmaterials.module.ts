import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
const appmaterials = [MatToolbarModule,MatButtonModule,MatSidenavModule,MatDividerModule]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    appmaterials
  ],
  exports : [appmaterials]
})
export class AppmaterialsModule { }
