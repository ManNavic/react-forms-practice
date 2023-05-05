import { useState } from 'react'
import './App.css'

export default function App() {
  // TODO: Add your state fields here
  const [name, setName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ name, address, phone, email, complain, contact, isChecked })
  }
  const handleChangeName = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
  }
  const [address, setAddress] = useState('')
  const handleChangeAddress = (e) => {
    console.log(e.target.value)
    setAddress(e.target.value)
  }
  const [phone, setPhone] = useState('')
  const handleChangePhone = (e) => {
    console.log(e.target.value)
    setPhone(e.target.value)
  }
  const [email, setEmail] = useState('')
  const handleChangeEmail = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }
  const [complain, setComplain] = useState('')
  const handleChangeComplain = (e) => {
    console.log(e.target.value)
    setComplain(e.target.value)
  }
  const [contact, setContact] = useState()
  const handleChangeContact = (e) => {
    console.log(e.target.value)
    setContact(e.target.value)
  }
  const [isChecked, setIsChecked] = useState(false)
  const handleChangeChecked = (e) => {
    console.log(e.target.value)
    setIsChecked(e.target.checked)
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>{name}'s Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input
              type="text"
              name="name"
              required
              onChange={handleChangeName}
              value={name}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={address}
              onChange={handleChangeAddress}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={handleChangePhone}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              value={complain}
              onChange={handleChangeComplain}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                onChange={handleChangeContact}
                checked={contact === 'phone'}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                onChange={handleChangeContact}
                checked={contact === 'email'}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                onChange={handleChangeContact}
                checked={contact === 'post'}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                onChange={handleChangeContact}
                checked={contact === 'none'}
              />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={isChecked}
              onChange={handleChangeChecked}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  )
}
