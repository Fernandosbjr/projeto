import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent, PoNotificationService, PoDialogService } from '@portinari/portinari-ui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userLogin: string;
  userPassword: string;
  email: any;

  onClick() {
    alert('Logado!');
  }

  primaryAction: PoModalAction = {
    label: 'Confirm',
    action: () => {
      this.confirmAction();
    }
  };

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  constructor(private poNotification: PoNotificationService, private poAlert: PoDialogService) { }

  openModal() {
    this.poModal.open();
  }

  private cleanForm() {
    this.userLogin = '';
    this.userPassword = '';
  }

  private confirmAction() {
    if (this.userLogin && this.userPassword) {
      this.poNotification.success(`Discount successfully applied to user ${this.userLogin}!`);

      this.poModal.close();
      this.cleanForm();
      alert('Logado!');
      
    }else{this.poModal.close(), alert('Logado!')} 
  }

  openDialog() {
    this.poAlert.alert({
      title: 'Senha enviada com sucesso!',
      message: `Por favor , resgatar a senha no e-mail : ${this.getNameEmail()}COM.BR `
    });
  }

  private getNameEmail() {
    const index = this.email.indexOf('com');

    return this.email.substr(0, index).toLocaleUpperCase();
  }

}