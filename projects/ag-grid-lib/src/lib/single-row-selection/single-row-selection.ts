import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, RowSelectionOptions, GridState, GridReadyEvent, ClientSideRowModelModule, GridStateModule, ModuleRegistry, RowSelectionModule } from 'ag-grid-community';
import { IOlympicData } from '../interfaces';
import { AgGridAngular } from 'ag-grid-angular';

ModuleRegistry.registerModules([
  RowSelectionModule,
  GridStateModule,
  ClientSideRowModelModule,
  // ...(process.env.NODE_ENV !== "production" ? [ValidationModule] : []),
  ...([]),
]);

@Component({
  selector: 'lib-single-row-selection',
  imports: [AgGridAngular],
  templateUrl: './single-row-selection.html',
  styleUrl: './single-row-selection.css'
})
export class SingleRowSelection {
  columnDefs: ColDef[] = [
    { field: "athlete", minWidth: 150 },
    { field: "age", maxWidth: 90 },
    { field: "year", maxWidth: 90 },
    { field: "sport", minWidth: 150 },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
  ];
  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
  };
  rowSelection: RowSelectionOptions | "single" | "multiple" = {
    mode: "singleRow",
    checkboxes: false,
    enableClickSelection: true,
  };
  initialState: GridState = {
    rowSelection: ["2"],
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
