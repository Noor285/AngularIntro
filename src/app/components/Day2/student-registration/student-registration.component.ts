import { Component } from '@angular/core';

interface Student {
  name: string;
  age: number;
  address: string;
  phone: string;
}

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {
  student: Student = {
    name: '',
    age: 10,
    address: '',
    phone: ''
  };
  registeredStudents: Student[] = [];


  onSubmit() {
    if (this.student.name && this.student.age && this.student.address && this.student.phone) {
      this.registeredStudents.push({ ...this.student });
      this.student.name = '';
      this.student.age = 10;
      this.student.address = '';
      this.student.phone = '';
    }
  }

  removeStudent(index: number) {
    this.registeredStudents.splice(index, 1);
  }
}
