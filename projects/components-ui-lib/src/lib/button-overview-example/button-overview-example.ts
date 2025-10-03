import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-button-overview-example',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './button-overview-example.html',
  styleUrl: './button-overview-example.css'
})
export class ButtonOverviewExample {

}
