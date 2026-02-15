import ContactLink from "@/components/Contact/ContactLink";
import ContactForm from "./ContactForm";
import { useTheme } from "@/context/ThemeContext";
import Button from "../Button";
import RevealWrapper from "../RevealWrapper";

const ContactSection = () => {
  const { currentTheme, setTheme } = useTheme();
  return (
    <div id="contact" className="mt-80 flex flex-col items-center pb-20">
      <h1
        className="font-black text-5xl lg:text-7xl tracking-[-4] text-center m-0"
        style={{ transform: "scaleY(0.8)" }}
      >
        {currentTheme === "dark"
          ? "Ready to Build?"
          : "Ready for the Attention?"}
      </h1>
      <h1
        className="lg:hidden block font-black text-4xl tracking-[-3] text-left m-0"
        style={{ transform: "scaleY(0.8)" }}
      >
        Let&apos;s Get in Touch
      </h1>
      <RevealWrapper>
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-4 pt-18">
          <Button
            className="group"
            onClick={() => setTheme("dark")}
            variant={currentTheme === "light" ? "secondary" : "primary"}
          >
            I&apos;m looking for a developer &nbsp;
            <span className="hidden group-hover:inline">🔋</span>
            <span className="inline group-hover:hidden">🪫</span>
          </Button>
          <Button
            className="group"
            onClick={() => setTheme("light")}
            variant={currentTheme === "dark" ? "secondary" : "primary"}
          >
            I&apos;m looking for a creative &nbsp;
            <span className="hidden group-hover:inline">📸</span>
            <span className="inline group-hover:hidden">📷</span>
          </Button>
        </div>
      </RevealWrapper>
      <div className="w-[80%] mt-20 flex lg:flex-row flex-col-reverse gap-10">
        <div>
          <h1
            className="hidden lg:block font-black text-7xl tracking-[-4] text-left m-0"
            style={{ transform: "scaleY(0.8)" }}
          >
            Let&apos;s Get in Touch
          </h1>
          <div className="flex flex-col gap-6 mt-8 basis-2/5">
            <ContactLink title="Phone" text="+64 027 531 4977" isPhone />
            <ContactLink title="Email" text="camerinoandre@gmail.com" />
            {currentTheme === "dark" ? (
              <ContactLink
                title="Linkedin"
                text="https://www.linkedin.com/in/andre-camerino-3504912a4/"
                isLink
              />
            ) : (
              <ContactLink
                title="Tiktok"
                text="https://www.tiktok.com/@andrecamerino?_r=1&_t=ZS-93snsifz7Fl"
                isLink
              />
            )}
            {currentTheme === "dark" ? (
              <ContactLink
                title="Github"
                text="https://github.com/andrecamerino"
                isLink
              />
            ) : (
              <ContactLink
                title="Instagram"
                text="https://www.instagram.com/andrecamerino_?igsh=ZXgzN3R1MW83bGVz&utm_source=qr"
                isLink
              />
            )}
          </div>
        </div>
        <RevealWrapper>
          <div className="basis-3/5">
            <ContactForm />
          </div>
        </RevealWrapper>
      </div>
    </div>
  );
};

export default ContactSection;
