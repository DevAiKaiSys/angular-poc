import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ClientSideRowModelModule, GridStateModule, ModuleRegistry, RowSelectionModule, RowDoubleClickedEvent, RowClickedEvent } from 'ag-grid-community';

ModuleRegistry.registerModules([
  RowSelectionModule,
  GridStateModule,
  ClientSideRowModelModule,
]);

@Component({
  selector: 'lib-example-row-clicked-event',
  imports: [AgGridAngular],
  templateUrl: './example-row-clicked-event.html',
  styleUrl: './example-row-clicked-event.css'
})
export class ExampleRowClickedEvent {
  columnDefs: ColDef[] = [
    { field: "athlete" }, { field: "age" }, { field: "year" }
  ];
  rowData: any[] = [
    { athlete: 'Usain Bolt', age: 30, year: 2016 },
    { athlete: 'Simone Biles', age: 23, year: 2020 },
    { athlete: 'Michael Phelps', age: 31, year: 2016 }
  ];
  popupMessage: string | null = null;

  onRowClicked(event: RowClickedEvent) {
    this.popupMessage = `Row Clicked: Athlete ${event.data.athlete}`;
    console.log('Row Clicked Event:', event);
  }

  onRowDoubleClicked(event: RowDoubleClickedEvent) {
    this.popupMessage = `Row DOUBLE Clicked: Athlete ${event.data.athlete} - Opening Detailed View...`;
    console.log('Row Double Clicked Event:', event);
  }
}
