import { Component } from '@angular/core';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {

  Students: any[] = [];

  name : string = "";
  age : number = 0;
  phone : string = "";
  address : string = "";

  sendValues(){
    if (this.NameValidation && this.AgeValidation && this.address && this.PhoneValidation) {
      this.Students.push({ name: this.name, age: this.age, phone: this.phone, address: this.address });

      this.name = '';
      this.age = 0;
      this.phone = '';
      this.address = '';
      }
  }

  get NameValidation(){
    return this.name.length >=4;
  }

  get NameTouched(){
    return this.name != "";
  }

  get AgeValidation(){
    return this.age >= 10 && this.age <= 17
  }

  get AgeTouched(){
    return this.age != 0;
  }

  get PhoneValidation(){
    const regex = /^(010|011|012|015)\d{8}$/;
    return regex.test(this.phone);
  }

get PhoneTouched(){
    return this.phone != "";
  }

  removeStudent(index: number) {
    this.Students.splice(index, 1);
  }
}
