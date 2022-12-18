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
