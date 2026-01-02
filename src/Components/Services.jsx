import React from 'react'

const ServiceItem = () => {
  return (
    <article>
      <div>
        {/* Icon */}
      </div>
      <p>Basic subscription service</p>
    </article>
  );
};

const StepItem = ({ step, title, description }) => {
  return (
    <article>
      <div>{step}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  );  
};

const Services = () => {
  return (
    <>
      <div>
        <h2>Our Services</h2>
        <p>
          We are committed to providing quality health services
        </p>
      </div>

      <div>
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
      </div>

      <div>
        <h2>How it Works</h2>
        <p>
          Our process is simple and easy to follow
        </p>
      </div>

      <div>
        <StepItem
          step="1"
          title="Choose a Service"
          description="Select the service that suits your needs."
        />
        <StepItem
          step="2"
          title="Book Appointment"
          description="Schedule your appointment easily."
        />
        <StepItem
          step="3"
          title="Receive Care"
          description="Professional care delivered to you."
        />
        <StepItem
          step="4"
          title="Follow Up"
          description="Continuous support and follow-up."
        />
      </div>
    </>
  );
};

export default Services;

