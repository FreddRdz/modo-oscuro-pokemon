import React, { useRef } from "react";
import "../styles/contact.css";

export const Contacto = () => {
  const handleSubmit = (e) => {
    objetoInput.fullName = inputFullName.current.value;
    objetoInput.emal = inputEmail.current.value;
    objetoInput.message = inputMessage.current.value;
    objetoInput.Checkbox = inputCheckbox.current.value;
    e.preventDefault();
    console.log(objetoInput);
  };

  let inputFullName = useRef();
  let inputEmail = useRef();
  let inputMessage = useRef();
  let inputCheckbox = useRef();

  const objetoInput = {};

  return (
    <div className='contact-container'>
      <form className='contact-form' onSubmit={handleSubmit}>
        <label>Nombre completo:</label>
        <input
          type='text'
          ref={inputFullName}
          required
          name='fullName'
          className='input-form'
        />

        <label>
          <p>Email</p>
          <input
            type='email'
            ref={inputEmail}
            required
            className='input-form'
          />
        </label>

        <label>
          <p>Telefono</p>
          <input type='tel' className='input-form' />
        </label>

        <label>
          <p>Mensaje</p>
          <textarea className='input-form' ref={inputMessage} />
        </label>

        <label className='checkbox'>
          <input type='checkbox' required ref={inputCheckbox} />
          <p>Acepto terminos y condiciones</p>
        </label>

        <div className='form-button'>
          <input type='submit' />
        </div>
      </form>
    </div>
  );
};
