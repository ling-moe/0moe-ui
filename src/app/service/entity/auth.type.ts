export interface AuthToken {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
}

export interface User {
  userId: number;
  // 登录名
  username: string;
  // 真实姓名
  realName: string;
  // 语言， 默认中文
  language: string;
  // 当前角色
  currentRole: Role;
  // 角色List
  roleList?: Role[];
}

export interface Role {
  roleId: number;
  roleCode: string;
  roleName: string;
}
