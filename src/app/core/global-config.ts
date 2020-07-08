import {AlainAuthConfig} from '@delon/util/src/config/auth/auth.type';
import {AlainConfig} from '@delon/util/src/config/config.types';
import {NzConfig} from 'ng-zorro-antd';
import {NotificationConfig} from 'ng-zorro-antd/core/config/config';
import {CoreConstant} from './Constant/core-constant';

const authConfig: AlainAuthConfig = {
  login_url: CoreConstant.LOGIN_ROUTER,
  token_send_key: 'Authorization',
  token_send_template: '${token_type} ${access_token}',
  token_exp_offset: 3600,
  ignores: [
    /\/auth\/oauth\/token/
  ]
};

const notificationConfig: NotificationConfig = {
  nzPlacement: 'bottomRight'
}

export const alainConfig: AlainConfig = {auth: authConfig};

export const nzConfig: NzConfig = {
  notification: notificationConfig
}
