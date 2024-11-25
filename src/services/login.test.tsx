import { Login } from './Login'

describe('Login', () => {

    const mockAlert = jest.fn()

    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
       Login()
       expect(mockAlert).toHaveBeenCalledWith('Bem vindo!')
    })

})