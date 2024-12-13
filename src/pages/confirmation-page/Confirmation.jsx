import { useNavigate } from "react-router";
import "./Confirmation.css"
import { IoMdCheckmark } from "react-icons/io";


export default function Confirmation() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className='app'>
        <main className='main__confirmation'>
            <div className='main__container'>
              <section className="confirmation__message">
                <IoMdCheckmark color='#fff' className='check__icon--confirmation' size="18px"/>
                <h1 className="confirmation__message--h1">Thanks for subscribing!</h1>
                <p>
                    A confirmation mail has been sent to <span className="email__user">USER</span>.
                    Please open it and click the button inside to confirm your subscription
                </p>
              </section>

              <section className="btn">
                <button className="dismiss__message--btn" onClick={handleClick}>Dismiss message</button>
              </section>
            </div>
        </main>
    </div>
  )
}
