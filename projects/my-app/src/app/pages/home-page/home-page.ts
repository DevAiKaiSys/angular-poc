import { Component } from '@angular/core';
import { SingleRowSelection, MultiRowSelection, ExampleRowClickedEvent } from '@ag-grid-lib';

// กำหนด type ของ View เพื่อป้องกันการสะกดผิด
type ContentView = 'single' | 'multi' | 'events';

@Component({
  selector: 'app-home-page',
  imports: [SingleRowSelection, MultiRowSelection, ExampleRowClickedEvent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  // 1. ตัวแปรสำหรับจัดการการแสดงผล เริ่มต้นที่ 'single'
  currentView: ContentView = 'single';

  // 2. เมธอดสำหรับเปลี่ยน Content ที่แสดง
  setView(view: ContentView): void {
    this.currentView = view;
  }
}
