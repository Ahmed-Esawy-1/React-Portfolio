import "./contact.css";
import Lottie from "lottie-react";
import doneAnimation from "../../animations/done.json";
import contactAnimation from "../../animations/contact.json";
import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";
export const Contact = () => {
  const [state, handleSubmit] = useForm("mrbypvrv");
  const animRef = useRef(null);

  return (
    <section className="contact">
      <div className="content">
        <h2>
          <i className="icon-envelope"></i>
          Contact Us
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          tempore nulla assumenda cumque eaque perspiciatis facere sit fugiat et
          enim velit, magni consequuntur? Dignissimos eaque suscipit odio atque
          culpa mollitia.
        </p>
        <form className="" action="" onSubmit={handleSubmit}>
          <div className="input-box">
            <label htmlFor="email">Your Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your Email"
              autoComplete="off"
            />
          </div>
          <ValidationError
            className="form-validate"
            prefix="Eessage"
            field="email"
            errors={state.errors}
          />
          <div className="input-box">
            <label htmlFor="message">Your Message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
            ></textarea>
          </div>
          <ValidationError
            className="form-validate"
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <input type="submit" value="Send" disabled={state.submitting} />
        </form>
        {state.succeeded && (
          <div style={{ display: "flex" }}>
            <Lottie
              style={{ height: "45px" }}
              loop={false}
              animationData={doneAnimation}
            />
            <p>Your message has been sent successfully 👌</p>
          </div>
        )}
      </div>
      <div>
        <Lottie
          lottieRef={animRef}
          className="animation"
          animationData={contactAnimation}
          onDOMLoaded={() => {
            animRef.current.setSpeed(.2);
          }}
        />
      </div>
    </section>
  );
};
