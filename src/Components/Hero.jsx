import Button from "./Button";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        id="hero"
        className="w-full min-h-[92vh] bg-cover bg-center flex items-center px-10 animate-fade-in relative mt-20"
        style={{ backgroundImage: "url('/hero.jpg')", backgroundColor: "rgba(0, 0, 0, 0.5)", backgroundBlendMode: "overlay" }}
      >
        <div className="absolute inset-0"></div>
        <div className="max-w-7xl mx-auto w-full flex flex-col  items-center justify-evenly gap-10 relative z-10">
          <div className="max-w-xl animate-slide-up">
            <h1 className="text-green-900 text-4xl md:text-5xl font-extrabold leading-tight text-center">
              GET INSTANT HOME HEALTH CARE <br />
              SERVICES FROM TOP <br />
              PROFESSIONALS
            </h1>
            <p className="text-white text-center mt-4 text-lg">
              24/7 onsite supervision, home visits, individualized care plans, and trained staff serving Matteson and communities across Illinois.
            </p>
          </div>

          <div className="flex items-center justify-center animate-slide-up">
            <Button
              onClick={() => scrollToSection("contact-us")}
              text="Schedule an Appointment"
              className="bg-health-green hover:bg-green-500 text-white transform hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
