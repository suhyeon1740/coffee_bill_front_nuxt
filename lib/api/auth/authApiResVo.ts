export class LoginResVo {
  message?: string
  token?: string

  public static from(item: any): LoginResVo {
    const login = new LoginResVo()
    login.message = item.message
    login.token = item.token
    return login
  }
}

// TODO: SignupResVo
export class SignupResVo {
  message?: string
  token?: string

  public static from(item: any): SignupResVo {
    const login = new SignupResVo()
    login.message = item.message
    login.token = item.token
    return login
  }
}
