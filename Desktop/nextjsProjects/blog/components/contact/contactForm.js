import { useContext, useRef } from "react";
import styles from "./contactForm.module.css";
import NotificationContext from "../../utilities/NotificationContext";

export function ContactForm() {
  const notificationCtx = useContext(NotificationContext);
  const emailInput = useRef();
  const nameInput = useRef();
  const messageInput = useRef();
  const fromInput = useRef();
  const handleComment = (e) => {
    notificationCtx.showNotification({
      title: "comment",
      message: "Submmiting your comment",
      status: "pending",
    });
    const email = emailInput.current.value;
    const name = nameInput.current.value;
    const message = messageInput.current.value;
    e.preventDefault();
    try{
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email: email, name: name, message: message }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        notificationCtx.showNotification(res);
      });
    fromInput.current.reset();
    } catch (e) {
        notificationCtx.showNotification({
          title: "error",
          message: e.message || "Not able to add a comment , Try again later !!",
          status: "error",
        });
      }
  };
  return (
    <section className={styles.contact}>
      <h1>How can I help you ?</h1>
      <form className={styles.form} onSubmit={handleComment} ref={fromInput}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              ref={emailInput}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" id="name" required ref={nameInput} />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="messgae"
            name="message"
            rows={5}
            ref={messageInput}
            required
          />
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
