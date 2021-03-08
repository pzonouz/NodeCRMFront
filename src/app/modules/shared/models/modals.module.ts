import { NgModule } from '@angular/core';

export class Contact {
  id: number;
  email: string;
  firstName: String;
  lastName: String;
  address: String;
  phoneNumber: string;
  // image: String;
}
export class Task {
  id: number;
  name: string;
  description: string;
}


@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class ModelsModule {}
