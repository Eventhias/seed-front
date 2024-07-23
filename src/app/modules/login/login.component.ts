import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

    private auth =  inject(AuthService)

    login() {
        this.auth.loginWithRedirect();
      }
    
      logout() {
        this.auth.logout({ logoutParams: {  } });
      }
 }
