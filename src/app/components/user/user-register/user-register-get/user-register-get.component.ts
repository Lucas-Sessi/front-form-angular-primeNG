import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-register-get',
  templateUrl: './user-register-get.component.html',
  styleUrl: './user-register-get.component.css'
})
export class UserRegisterGetComponent implements OnInit {
  formGroup!: FormGroup
  sexoSelect: any[] = []

  ngOnInit(): void {
      this.formGroup = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
        confirmPassword: new FormControl(''),
        phoneNumber: new FormControl(''),
        name: new FormControl(''),
        lastName: new FormControl(''),
        cpf: new FormControl(''),
        dataNascimento: new FormControl(''),
        sexo: new FormControl(''),
      })

      this.sexoSelect = [
        { name: 'Masculino', code: 'M' },
        { name: 'Feminino', code: 'F' },
        { name: 'Outro', code: 'O' },
      ]
  }

  submitForm() {
    console.log(this.formGroup.value)
  }
}
