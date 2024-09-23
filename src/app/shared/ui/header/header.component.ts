import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive, RouterLinkActive],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

}
