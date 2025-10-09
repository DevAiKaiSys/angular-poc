import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'lib-tab-group-custom-close-example',
  imports: [MatTabsModule, MatButtonModule, MatIconModule],
  templateUrl: './tab-group-custom-close-example.html',
  styleUrl: './tab-group-custom-close-example.css'
})
export class TabGroupCustomCloseExample {
  // สร้าง FormControl เพื่อจัดการกับ index ของแท็บที่ถูกเลือก
  selected = new FormControl(0);

  // Array สำหรับเก็บข้อมูลแท็บ (สามารถเพิ่ม/ลบได้)
  tabs = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

  // เมธอดสำหรับลบแท็บตาม index ที่ส่งเข้ามา
  removeTab(index: number) {
    // ลบแท็บออกจาก Array
    this.tabs.splice(index, 1);

    // ตรวจสอบและตั้งค่า index ของแท็บที่ถูกเลือกใหม่หลังจากการลบ
    // เช่น ถ้าลบแท็บแรก (index 0) ให้แท็บที่เคยเป็น index 1 มาเป็นที่เลือก (index 0) แทน
    // และถ้าลบแท็บสุดท้าย ให้ย้อนกลับไปที่แท็บก่อนหน้า
    if (this.selected.value === index) {
      // ถ้าแท็บที่กำลังเลือกถูกลบ ให้เลือกแท็บก่อนหน้า หรือเลือกแท็บใหม่ที่ index เดิม (ซึ่งตอนนี้คือแท็บถัดไป)
      this.selected.setValue(Math.min(index, this.tabs.length - 1));
    } else if (this.selected.value! > index) {
      // ถ้าแท็บที่เลือกอยู่มี index มากกว่าแท็บที่ถูกลบไป
      // ให้ลดค่า index ที่เลือกอยู่ลง 1 เพราะ Array สั้นลง
      this.selected.setValue(this.selected.value! - 1);
    }
  }
}
