import { DefaultLayout } from '@layouts/DefaultLayout';

function Contact() {
  return <div>Contact</div>;
}

Contact.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Contact;
