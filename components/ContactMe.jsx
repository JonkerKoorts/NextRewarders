/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ContactMeBlock = forwardRef(({ onSubmit }, ref) => {
  const [startDate, setStartDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <section ref={ref} className="bg-color-2 p-8 rounded-lg w-full">
      <h2 className="text-2xl font-bold mb-4 text-main">Contact Me</h2>
      <p className="font-thin mt-[-15px] mb-10 text-[13px]">
        I want to add my business
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-black mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border-2 border-main rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-black mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border-2 border-main rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-black mb-2">
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            className="w-full p-2 border-2 border-main rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bestTimeToCall" className="block text-black mb-2">
            Best Time to Call
          </label>
          <DatePicker
            id="bestTimeToCall"
            selected={startDate}
            onChange={handleDateChange}
            showTimeSelect
            dateFormat="Pp"
            className="w-full p-2 border-2 border-main rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-main text-color-2 font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
});

export default ContactMeBlock;
