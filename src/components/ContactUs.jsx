import BreadCrumb from "./BreadCrumb";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact-us" },
  ];
  return (
    <div>
      <BreadCrumb
        title="Phenom Claim"
        description="Read through today's discovery."
        breadcrumbItems={breadcrumbItems}
      />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
