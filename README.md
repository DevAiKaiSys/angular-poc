# Angular Multiple Projects

## ⚙️ Setup Library Project

### 1. Peer Dependencies

กำหนด `peerDependencies` ในไฟล์ `package.json` ของไลบรารี เพื่อให้แน่ใจว่าโปรเจกต์ที่นำไลบรารีไปใช้มีแพ็กเกจที่จำเป็นติดตั้งอยู่

```json
// projects/components-ui-lib/package.json

"peerDependencies": {
  "@angular/common": "^20",
  "@angular/core": "^20",
  // add require dependencies here
  "@angular/material": "^20"
},
```

### 2. TypeScript Path Mapping

ตั้งค่า `paths` ใน `tsconfig.json` เพื่อให้สามารถ import ไลบรารีได้สะดวกขึ้น โดยเฉพาะระหว่างการพัฒนาที่ไม่ต้อง build ทุกครั้ง

```json
// tsconfig.json

"compilerOptions": {
  "paths": {
    // code original ต้อง build ก่อนใช้ (สำหรับ Production/CI)
    "components-ui-lib": [
      "./dist/components-ui-lib"
    ],
    // set path ให้ใช้ได้เลยไม่ต้อง build ก่อน (สำหรับ Local Development)
    "@components-ui-lib": [
      "./projects/components-ui-lib/src/public-api.ts"
    ]
  },
  ...
}
```

### most use

[Migration to Control Flow syntax](https://angular.dev/reference/migrations/control-flow)

```
ng generate @angular/core:control-flow
```

[Testing in continuous integration](https://angular.dev/guide/testing#testing-in-continuous-integration)

```
ng test --no-watch --no-progress --browsers=ChromeHeadless
```

## 📚 Reference

[Multiple projects](https://angular.dev/reference/configs/file-structure#multiple-projects)

[Angular Material Components](https://material.angular.dev/components/categories)