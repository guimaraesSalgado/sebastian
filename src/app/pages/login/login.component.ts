import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('accessForm', { static: true }) accessForm: any;

  constructor() { }

  ngOnInit() {
  }

  doSearch() {
    console.log(this.accessForm.form.value)
  }

}
