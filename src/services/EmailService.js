class EmailService {

  async sendMail(params) {
    try {
      const body = this.createBody(params)
      const response = await fetch(`${process.env.REACT_APP_API_CONTROLLER}/send-mail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_API_MAIL_KEY}`
        },
        body: JSON.stringify(body)
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
    return {
      'nomeRemetente': params.fromName,
      'remetente': params.fromEmail,
      'nomeDestinatario': params.toName,
      'destinatario': params.toEmail,
      'titulo': params.subject,
      'mensagem': params.text
    }
  }
}

const emailService = new EmailService()

export default emailService
