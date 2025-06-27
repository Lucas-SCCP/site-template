class EmailService {
  async sendMail(params) {
    try {
      const body = this.createBody(params)
      const response = await fetch(`${process.env.REACT_APP_API_CONTROLLER}/send-mail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_MAIL_KEY}`,
        },
        body: JSON.stringify(body),
      })

      if (!response.ok) {
        throw new Error(response.status)
      }

      return true
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error)
      throw new Error(error)
    }
  }

  createBody(params) {
    const firstName = params.find((e) => e.name === 'firstNameInput')
    const lastName = params.find((e) => e.name === 'lastNameInput')
    const birthDate = params.find((e) => e.name === 'birthDateField')
    const document = params.find((e) => e.name === 'documentField')
    const email = params.find((e) => e.name === 'emailField')
    const phone = params.find((e) => e.name === 'phoneField')
    return {
      senderName: '[Site] CT Clean Foods',
      sender: 'contato@nois.dev.br',
      recipientName: 'CT Clean Foods',
      recipient: 'lucas.2601@gmail.com',
      title: 'Mensagem enviada pelo formulário do site',
      message: `Nome: ${firstName.value} ${lastName.value}\nData de Nascimento: ${birthDate.value}\nCPF: ${document.value}\nE-mail: ${email.value}\nCelular: ${phone.value}`,
    }
  }
}

const emailService = new EmailService()

export default emailService
