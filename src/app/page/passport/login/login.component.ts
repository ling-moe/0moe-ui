import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../service/auth.service';
import {DA_SERVICE_TOKEN, ITokenService} from '@delon/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginFlag: boolean = false;
  activeTab: number = 1;
  form: FormGroup;

  constructor(
    fb: FormBuilder,
    private authService: AuthService,
    @Inject(DA_SERVICE_TOKEN)
    private tokenService: ITokenService,
    private router: Router) {
    this.form = fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  userLogin(e: Event) {
    e.preventDefault();
    this.authService.login(this.username, this.password).subscribe(auth => {
      this.tokenService.set({...auth, token: auth.access_token});
      this.router.navigateByUrl("/workspace")
    })
  }

  get username(): string{
    return this.form.controls.username.value;
  }

  get password(): string{
    return this.form.controls.password.value;
  }
}
