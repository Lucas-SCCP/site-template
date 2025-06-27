import {
  nameValidation,
  birthDateValidation,
  dateValidate,
  emailValidation,
  emailValidate,
  cpfValidation,
  cpfValidate,
  phoneValidation,
  phoneValidate,
} from '../utils/InputValidators'

describe('Validações utilitárias', () => {
  describe('nameValidation', () => {
    it('deve falhar se vazio', () => {
      expect(nameValidation('')).toEqual({ success: false, message: 'Campo obrigatório' })
    })
    it('deve falhar se muito curto', () => {
      expect(nameValidation('Jo')).toEqual({ success: false, message: 'Nome muito curto' })
    })
    it('deve falhar se muito longo', () => {
      expect(nameValidation('J'.repeat(51))).toEqual({
        success: false,
        message: 'Nome muito longo',
      })
    })
    it('deve passar para nome válido', () => {
      expect(nameValidation('João Silva')).toEqual({ success: true })
    })
  })

  describe('birthDateValidation', () => {
    it('deve falhar se vazio', () => {
      expect(birthDateValidation('')).toEqual({ success: false, message: 'Campo obrigatório' })
    })
    it('deve falhar para data inválida', () => {
      expect(birthDateValidation('99/99/9999')).toEqual({
        success: false,
        message: 'Data inválida',
      })
    })
    it('deve passar para data válida', () => {
      expect(birthDateValidation('01/01/2000')).toEqual({ success: true })
    })
  })

  describe('dateValidate', () => {
    it('deve validar formato correto', () => {
      expect(dateValidate('01/01/2000')).toBe(true)
    })
    it('deve falhar para formato incorreto', () => {
      expect(dateValidate('2000-01-01')).toBe(false)
    })
  })

  describe('emailValidation', () => {
    it('deve falhar se vazio', () => {
      expect(emailValidation('')).toEqual({ success: false, message: 'Campo obrigatório' })
    })
    it('deve falhar para email inválido', () => {
      expect(emailValidation('email@')).toEqual({ success: false, message: 'Email inválido' })
    })
    it('deve passar para email válido', () => {
      expect(emailValidation('teste@email.com')).toEqual({ success: true })
    })
  })

  describe('emailValidate', () => {
    it('deve validar email correto', () => {
      expect(emailValidate('teste@email.com')).toBe(true)
    })
    it('deve falhar para email incorreto', () => {
      expect(emailValidate('email@')).toBe(false)
    })
  })

  describe('cpfValidation', () => {
    it('deve falhar se vazio', () => {
      expect(cpfValidation('')).toEqual({ success: false, message: 'Campo obrigatório' })
    })
    it('deve falhar para cpf inválido', () => {
      expect(cpfValidation('123.456.789-00')).toEqual({ success: false, message: 'CPF inválido' })
    })
    it('deve passar para cpf válido', () => {
      expect(cpfValidation('529.982.247-25')).toEqual({ success: true })
    })
  })

  describe('cpfValidate', () => {
    it('deve validar cpf correto', () => {
      expect(cpfValidate('529.982.247-25')).toBe(true)
    })
    it('deve falhar para cpf incorreto', () => {
      expect(cpfValidate('123.456.789-00')).toBe(false)
    })
  })

  describe('phoneValidation', () => {
    it('deve falhar se vazio', () => {
      expect(phoneValidation('')).toEqual({ success: false, message: 'Campo obrigatório' })
    })
    it('deve falhar para telefone inválido', () => {
      expect(phoneValidation('12345')).toEqual({ success: false, message: 'Celular inválido' })
    })
    it('deve passar para telefone válido', () => {
      expect(phoneValidation('(14) 99999-9999')).toEqual({ success: true })
    })
  })

  describe('phoneValidate', () => {
    it('deve validar telefone correto', () => {
      expect(phoneValidate('(14) 99999-9999')).toBe(true)
    })
    it('deve falhar para telefone incorreto', () => {
      expect(phoneValidate('12345')).toBe(false)
    })
  })
})
