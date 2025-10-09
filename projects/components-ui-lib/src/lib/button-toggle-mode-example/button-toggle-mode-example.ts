import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'lib-button-toggle-mode-example',
  imports: [MatButtonToggleModule, MatCheckboxModule],
  templateUrl: './button-toggle-mode-example.html',
  styleUrl: './button-toggle-mode-example.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonToggleModeExample {
  hideSingleSelectionIndicator = signal(false);
  hideMultipleSelectionIndicator = signal(false);

  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update(value => !value);
  }

  toggleMultipleSelectionIndicator() {
    this.hideMultipleSelectionIndicator.update(value => !value);
  }
}
