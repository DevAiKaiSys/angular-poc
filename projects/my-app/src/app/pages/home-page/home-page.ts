import { Component } from '@angular/core';
import { ButtonOverviewExample, MatButtonModule, MatDividerModule, ButtonToggleModeExample, TabGroupDynamicExample, TabGroupCustomCloseExample } from '@components-ui-lib'

// ----------------------------------------------------
// เพิ่ม Interface เพื่อกำหนดประเภทข้อมูล (Type Definitions)
// ----------------------------------------------------
interface SubComponentOption {
  label: string;
  key: string;
  selector: string;
}

interface SubComponentsMap {
  // Index Signature: บอก TypeScript ว่าสามารถใช้ string เป็น key เพื่อเข้าถึง SubComponentOption[] ได้
  [key: string]: SubComponentOption[];
}
// ----------------------------------------------------

@Component({
  selector: 'app-home-page',
  imports: [ButtonOverviewExample, MatButtonModule, MatDividerModule, ButtonToggleModeExample, TabGroupDynamicExample, TabGroupCustomCloseExample],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {
  // สถานะปัจจุบัน: เก็บว่าผู้ใช้เลือกอะไร
  selectedComponentType: string = 'buttons'; // เริ่มต้นที่ 'buttons'
  selectedSubComponent: string = 'basicButton'; // เริ่มต้นที่ 'basicButton'

  // โครงสร้างข้อมูลสำหรับ Row 1: ตัวเลือกคอมโพเนนต์หลัก
  componentTypes = [
    { label: 'Buttons', key: 'buttons' },
    { label: 'Tabs', key: 'tabs' }
  ];

  // โครงสร้างข้อมูลสำหรับ Row 2: ตัวเลือกย่อยตามประเภทหลัก
  subComponentsMap: SubComponentsMap = {
    'buttons': [
      { label: 'Basic Button', key: 'basicButton', selector: 'app-basic-button-example' },
      { label: 'Toggle Button', key: 'toggleButton', selector: 'app-toggle-button-example' }
    ],
    'tabs': [
      { label: 'Dynamic Tab', key: 'dynamicTab', selector: 'app-dynamic-tab-example' },
      { label: 'TabGroup Custom', key: 'customTabGroup', selector: 'app-custom-tab-group-example' }
    ]
  };

  /**
   * เมธอดสำหรับเปลี่ยนประเภทคอมโพเนนต์หลัก (Row 1)
   * เมื่อเปลี่ยนประเภทหลัก ให้รีเซ็ตตัวเลือกรองไปที่รายการแรกของประเภทใหม่
   */
  selectComponentType(typeKey: string): void {
    this.selectedComponentType = typeKey;
    // ตั้งค่าตัวเลือกรองเป็นตัวเลือกแรกของกลุ่มนั้นๆ
    const firstSubComponent = this.subComponentsMap[typeKey][0];
    if (firstSubComponent) {
      this.selectedSubComponent = firstSubComponent.key;
    }
  }

  /**
   * เมธอดสำหรับเปลี่ยนตัวเลือกย่อย (Row 2)
   */
  selectSubComponent(subKey: string): void {
    this.selectedSubComponent = subKey;
  }

  /**
   * เมธอดช่วยสำหรับดึง selector (ชื่อแท็ก) ของคอมโพเนนต์ที่ควรแสดง
   */
  getCurrentComponentSelector(): string {
    const subComponents = this.subComponentsMap[this.selectedComponentType];
    const selected = subComponents.find(c => c.key === this.selectedSubComponent);
    return selected ? selected.selector : '';
  }
}
