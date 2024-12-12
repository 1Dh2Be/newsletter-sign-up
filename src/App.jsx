import { Field, Form, Formik } from 'formik';
import './App.css'
import { VscCheck } from "react-icons/vsc";

function App() {
  return (
    <div className='app'>
      <main className='main'>
        <section className='app__container'>
          <section className='left__section'>
            <h1>Stay updated!</h1>
            <p>Join 60,000 product managers receiving monthly updates on:</p>
            <ul>
              <li>
                <VscCheck />
                <p>Product discovery and building what matters</p>
              </li>
              <li>
                <VscCheck />
                <p>Measuring to ensure updates are a success</p>
              </li>
              <li>
                <VscCheck />
                <p>And much more!</p>
              </li>
            </ul>

            <Formik initialValues={{ email: '' }}>
              <Form>
                <label htmlFor="email">Email address</label>
                <Field type="email" name="email" placeholder="email@company.com" />
                <button type="submit" className='signin__newsletter--btn'>
                  Subscribe to monthly newsletter
                </button>
              </Form>
            </Formik>
          </section>

          <aside className='right__section'>
            <picture>
              <source srcSet="src/assets/images/illustration-sign-up-mobile.svg" media="(max-width: 450px)" />
              <img src="src/assets/images/illustration-sign-up-desktop.svg" alt="Illustration of user signing up for a newsletter" />
            </picture>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default App;
