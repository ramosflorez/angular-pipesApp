import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'valeria';
  public nameUpper: string = 'VALERIA';
  public nameComplete: string = 'VaLeRiA rAMos';

}
