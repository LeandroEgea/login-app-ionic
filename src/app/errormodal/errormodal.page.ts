import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-errormodal',
  templateUrl: './errormodal.page.html',
  styleUrls: ['./errormodal.page.scss'],
})
export class ErrormodalPage implements OnInit {
  @Input() message: string
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async onClose(){
    await this.modalController.dismiss();
  }

}
