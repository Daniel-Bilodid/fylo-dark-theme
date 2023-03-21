import React from 'react'
import './form.scss'






const Form = () => {
  return (
    <section className="container" id="get-started">
        <h2 className='started-h2'>
            Get early access today
        </h2>
        <p>
            it only takes a minutes to sign up and our free starter tier is extremely generous. If you have any
            questions, our support team would be happy to help you.
        </p>
        
        <div className="get-started__wrapper">
        <input type="input" className='get-started__input' placeholder='email@example.com' required />
        <button className='get-started__btn' type='submit' >Get Started For Free</button>
        </div>
    </section>
  )
}

export default Form