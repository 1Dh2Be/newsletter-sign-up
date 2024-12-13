import "./NewsLetter.css"
import { Field, Form, Formik } from 'formik';
import { IoMdCheckmark } from "react-icons/io";
import { useNavigate } from 'react-router';

function NewsLetter() {

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('Confirmation')
  }

  return (
    <div className='app'>
      <main className='main'>
        <section className='app__container'>
          <section className='left__section'>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className='benefits__list'>
              <li className='list__item'>
                <IoMdCheckmark color='#fff' className='check__icon' size="18px"/>
                <p>Product discovery and building what matters</p>
              </li>
              <li className='list__item'>
                <IoMdCheckmark color='#fff' className='check__icon' size="18px"/>
                <p>Measuring to ensure updates are a success</p>
              </li>
              <li className='list__item'>
                <IoMdCheckmark color='#fff' className='check__icon' size="18px"/>
                <p>And much more!</p>
              </li>
            </ul>

            <Formik initialValues={{ email: '' }}>
              <Form className='formik__form' onSubmit={handleSubmit}>
                <label className='formik__label' htmlFor="email">Email address</label>
                <Field className="formik__field" type="email" name="email" placeholder="email@company.com" />
                <button type="submit" className='signup__newsletter--btn'>
                  Subscribe to monthly newsletter
                </button>
              </Form>
            </Formik>
          </section>

          <aside className='right__section'>
            <picture>
              <source srcSet="src/assets/images/illustration-sign-up-mobile.svg" media="(max-width: 800px)" />
              <img src="src/assets/images/illustration-sign-up-desktop.svg" alt="Illustration of user signing up for a newsletter" />
            </picture>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default NewsLetter