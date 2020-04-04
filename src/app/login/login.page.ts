import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
import { ModalController } from '@ionic/angular';
import { ErrormodalPage } from '../errormodal/errormodal.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:User = new User
  
  constructor(
    private authService: AuthService, 
    private router: Router, 
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async onLogin(){
    let user;
    try {
      user = await this.authService.onLogin(this.user);

      if (user) {
        console.log('User logged!');
        this.router.navigateByUrl('/home');
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