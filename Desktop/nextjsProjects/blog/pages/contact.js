import { Fragment } from "react";
import { ContactForm } from "../components/contact/contactForm";
import Head from "next/head";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact's Page</title>
        <meta
          name="description"
          content="Contact page to get the feedback and to know what changes we can make to outr website. TO make other's people life easier."
        />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
