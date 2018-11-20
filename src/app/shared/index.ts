import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EvenOddPipe } from './even-odd-pipe';

@NgModule({
  declarations: [EvenOddPipe],
  imports: [CommonModule],
  exports: [CommonModule, EvenOddPipe]
})
export class SharedModule {}
