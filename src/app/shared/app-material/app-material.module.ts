import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatFormFieldModule
  ]
})
export class AppMaterialModule { }
