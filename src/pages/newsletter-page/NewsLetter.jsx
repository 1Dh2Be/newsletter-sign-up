import "./NewsLetter.css"
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { IoMdCheckmark } from "react-icons/io";
import { useNavigate } from 'react-router';
import { validationSchema } from "../../schemas/Schema";
import { useEmail } from "./EmailContext";

function NewsLetter() {

  const { setEmail } = useEmail();

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setEmail(values.email);
    navigate('Confirmation');
  };


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

            <Formik
              initialValues={{ email: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({isValid, dirty, touched, errors}) => (
                <Form className='formik__form'>
                  <div className="input__text--content">
                    <label className='formik__label' htmlFor="email">Email address</label>
                    <ErrorMessage name="email" component="div" className="error__message"/>
                  </div>
                  <Field className={`formik__field ${touched.email && errors.email ? "error" : ""}`} type="email" name="email" placeholder="email@company.com"/>
                  <button type="submit" className='signup__newsletter--btn' disabled={!(dirty && isValid)}>
                    Subscribe to monthly newsletter
                  </button>
                </Form>
              )}
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