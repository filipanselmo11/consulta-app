import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(private route: Router) {}

  mainPage() {
    this.route.navigateByUrl('main');
  }

  cadastroPage() {
    this.route.navigateByUrl('cadastro');
  }
}
