import {
  nameValidation as nameValidationUtil,
  birthDateValidation as birthDateValidationUtil,
  dateValidate as dateValidateUtil,
  emailValidation as emailValidationUtil,
  emailValidate as emailValidateUtil,
  cpfValidation as cpfValidationUtil,
  cpfValidate as cpfValidateUtil,
  phoneValidation as phoneValidationUtil,
  phoneValidate as phoneValidateUtil
} from '../utils/InputValidators'

class InputValidateService {
  nameValidation(name) {
    return nameValidationUtil(name)
  }

  birthDateValidation(birthDate) {
    return birthDateValidationUtil(birthDate)
  }

  dateValidate(data) {
    return dateValidateUtil(data)
  }

  emailValidation(email) {
    return emailValidationUtil(email)
  }

  emailValidate(email) {
    return emailValidateUtil(email)
  }

  cpfValidation(cpf) {
    return cpfValidationUtil(cpf)
  }

  cpfValidate(cpf) {
    return cpfValidateUtil(cpf)
  }

  phoneValidation(phone) {
    return phoneValidationUtil(phone)
  }

  phoneValidate(cel) {
    return phoneValidateUtil(cel)
  }
}

const inputValidateService = new InputValidateService()

export default inputValidateService