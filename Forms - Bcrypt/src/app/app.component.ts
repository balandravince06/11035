import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 /*submit(form: NgForm){
  console.log(form.value);
  } */

@ViewChild("f") form: NgForm;

 defaultQuestion ='city';
 defaultGender ='female';
 submitted = false;

 user = {
   username: "",
   password: "",
   email: "",
   phone: "",
   secret: "",
   answer: "",
   gender: "",
   job: "",
   description: "",
   salary: "",
 }
 submit(){
  this.submitted = true;
   this.user.username = this.form.value.userData.username;
   this.user.password = this.form.value.userData.password;
   this.user.email = this.form.value.userData.email;
   this.user.phone = this.form.value.userData.phone;
   this.user.secret = this.form.value.otherInfo.secret;
   this.user.answer = this.form.value.otherInfo.answer;
   this.user.gender = this.form.value.otherInfo.gender;
   this.user.job = this.form.value.otherInfo.job;
   this.user.description = this.form.value.otherInfo.description;
   this.user.salary = this.form.value.otherInfo.salary;
   this.form.reset();
 }
}
