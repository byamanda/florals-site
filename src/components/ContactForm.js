import React from "react"
import PropTypes from "prop-types"

import { Form } from "./Form"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      _replyto: "",
      subject: "",
      message: "",
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const { value, name } = e.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <Form method="POST" action={`https://formspree.io/${this.props.email}`}>
        <Form.Info>
          Curious about a piece of artwork? Want to commission a painting? Chat
          about your favorite coffee shop or adventure spot? Shoot me an e-mail!
          I would love to hear from you!
          <br />
          <br />
          With love, adventure, and creativity,
          <br />
          Amanda
        </Form.Info>

        <Form.Group>
          <Form.Label htmlFor="contact-name">Full Name</Form.Label>
          <Form.Input
            value={this.state.name}
            onChange={this.handleInputChange}
            type="text"
            name="name"
            id="contact-name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="contact-email">Email Address</Form.Label>
          <Form.Input
            value={this.state.email}
            onChange={this.handleInputChange}
            type="email"
            name="_replyto"
            id="contact-email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="contact-subject">Subject</Form.Label>
          <Form.Input
            value={this.state.subject}
            onChange={this.handleInputChange}
            type="text"
            name="subject"
            id="contact-subject"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="contact-message">Message</Form.Label>
          <Form.TextArea
            value={this.state.message}
            onChange={this.handleInputChange}
            rows="10"
            name="message"
            id="contact-message"
          />
        </Form.Group>

        <Form.Input
          type="hidden"
          name="_subject"
          value="New Message from byamanda.design!"
          readonly
        />
        <Form.Input type="hidden" name="_gotcha" readonly />

        <Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

ContactForm.propTypes = {
  email: PropTypes.string.isRequired,
}

export default ContactForm
