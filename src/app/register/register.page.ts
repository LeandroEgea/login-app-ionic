import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
import { ModalController } from '@ionic/angular';
import { ErrormodalPage } from '../errormodal/errormodal.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user:User = new User

  constructor(
    private authService: AuthService, 
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async onRegister(){
    let user;
    try {
      const user = await this.authService.onRegister(this.user);
    
      if (user) {
        console.log('User created!!!');
        this.router.navigateByUrl('/');
      }
    } catch (error) {
      this.showModal(error.message)
    }
  }

  async showModal(message: string) {
    const modal = await this.modalController.create({
      component: ErrormodalPage,
      componentProps: {
        message: message
      }
    })
    await modal.present();
  }

}
