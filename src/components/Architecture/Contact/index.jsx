import { useState, useEffect } from 'react'
import * as emailjs from 'emailjs-com'
import contact from '../../../data/architecture/contact.json'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [alert, setAlert] = useState({ show: false, message: '' })

  const showAlert = (message) => {
    setAlert({ show: true, message })
  }

  useEffect(() => {
    let timeoutId
    if (alert.show) {
      timeoutId = setTimeout(() => {
        setAlert({ show: false, message: '' })
      }, 7000)
    }
    return () => {
      clearTimeout(timeoutId)
    }
  }, [alert.show])

  const [errMessage, setErrMessage] = useState(null)

  const validateForm = (formValues) => {
    if (!formValues.name || !formValues.email || !formValues.message) {
      setErrMessage('Please fill in all fields !')
      return false
    }
    if (formValues.name.length < 5) {
      setErrMessage('Name must be at least 5 characters !')
      return false
    }
    if (formValues.message.length < 10) {
      setErrMessage('Message must be at least 5 characters !')
      return false
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
      setErrMessage('Email is invalid')
      return false
    }
    return true
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //= Validate Form
    if (!validateForm(formData)) return

    //= Clear Error Message
    setErrMessage('')

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: 'ridhosuhaebi01@gmail.com',
      message: formData.message,
    }

    emailjs
      .send(
        'service_dkaz7v5',
        'template_viej8dw',
        templateParams,
        'TzBeyK0h9A8CNoECI',
      )
      .then(
        (result) => {
          console.log(result.text)
          showAlert(
            'Yeay, successfully sent the message, We will reply to your message soon.',
          )
        },
        (error) => {
          console.log(error.text)
          showAlert('ups! something when wrong.')
        },
      )
  }

  return (
    <section
      className="contact sub-bg section-padding mt-80"
      data-scroll-index="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="cont mb-100">
              <h6 className="sub-title fw-200 yellow-green-color mb-30">
                Contact Now
              </h6>
              <h2>For more information !</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="cont-info md-mb50">
              <h6 className="mb-30 fw-700">{contact.title}</h6>
              <ul className="rest">
                <li className="mb-10">
                  <a href="#0">{contact.address}</a>
                </li>
                <li className="mb-10 underline">
                  <a href="#0">{contact.phone}</a>
                </li>
                <li>
                  <a href="#0">{contact.email}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <form id="contact-form" onSubmit={handleSubmit}>
              {alert.show && (
                <div className="alert-container">
                  <span>{alert.message}</span>
                </div>
              )}
              {errMessage && <div className="messages">{errMessage}</div>}
              <div className="controls row">
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required="required"
                      onChange={handleChange}
                      value={formData.name}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group mb-30">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      required="required"
                      onChange={handleChange}
                      value={formData.message}
                    ></textarea>
                  </div>
                </div>

                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="butn-dots"
                    onSubmit={handleSubmit}
                  >
                    <span>Let&lsquo;s Talk</span>
                    <span className="bord-round"></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
