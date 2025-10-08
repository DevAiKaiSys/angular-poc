import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  ClientSideRowModelModule,
  ColDef,
  GridReadyEvent,
  ModuleRegistry,
  RowSelectionModule,
  RowSelectionOptions,
} from "ag-grid-community";
import { IOlympicData } from '../interfaces';

ModuleRegistry.registerModules([
  RowSelectionModule,
  ClientSideRowModelModule,
  // ...(process.env.NODE_ENV !== "production" ? [ValidationModule] : []),
  ...([]),
]);

@Component({
  selector: 'lib-multi-row-selection',
  imports: [AgGridAngular],
  templateUrl: './multi-row-selection.html',
  styleUrl: './multi-row-selection.css'
})
export class MultiRowSelection {
  columnDefs: ColDef[] = [
    { field: "athlete" },
    { field: "sport" },
    { field: "year", maxWidth: 120 },
  ];
  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
  };
  rowSelection: RowSelectionOptions | "single" | "multiple" = {
    mode: "multiRow",
    checkboxes: false,
    headerCheckbox: false,
    enableClickSelection: true,
  };
  rowData!: IOlympicData[];

  constructor(private http: HttpClient) { }

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.http
      .get<
        IOlympicData[]
      >("https://www.ag-grid.com/example-assets/small-olympic-winners.json")
      .subscribe((data) => (this.rowData = data));
  }
}
