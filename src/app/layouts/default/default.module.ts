import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppmaterialsModule} from '../../appmaterials/appmaterials.module'
import {SharedModule} from '../../shared/shared.module'
import { RouterModule } from '@angular/router';
import {DefaultComponent} from '../default/default.component'
@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    AppmaterialsModule,
    RouterModule,
    SharedModule
  ]
})
export class DefaultModule { }
