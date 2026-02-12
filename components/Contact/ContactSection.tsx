import { glass } from "@/styles/glass";
import ContactLink from "@/components/Contact/ContactLink";

const ContactSection = () => {
  return (
    <div className="mt-80 flex flex-col items-center">
      <h1
        className="font-black text-7xl tracking-[-4] text-center m-0"
        style={{ transform: "scaleY(0.8)" }}
      >
        Ready to Build?
      </h1>
      <div className="w-[80%] flex flex-row">
        <div>
          <h1
            className="font-black text-7xl tracking-[-4] text-left m-0"
            style={{ transform: "scaleY(0.8)" }}
          >
            Let&apos;s Get in Touch
          </h1> 
          <ContactLink />
        </div>
        <div className={`${glass} w-full rounded-3xl`}></div>
      </div>
    </div>
  );
};

export default ContactSection;
