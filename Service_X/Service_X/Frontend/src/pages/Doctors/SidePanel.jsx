import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidePanel = ({ ticketPrice, timeSlots }) => {
  const location = useLocation();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
        Rs {ticketPrice} 
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available Slots:
        </p>

        <ul className="mt-3">
          {timeSlots && timeSlots.length > 0 ? (
            timeSlots.map((slot, index) => (
              <li
                key={index}
                className="flex items-center justify-between mb-2"
              >
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {daysOfWeek[index % daysOfWeek.length]}
                </p>
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {slot}
                </p>
              </li>
            ))
          ) : (
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              No slots available
            </p>
          )}
        </ul>
      </div>
          <Link to={`${location.pathname}/calender`}>
            <button className="btn px-2 w-full rounded-md">Book Appointment</button>
          </Link>
    </div>
  );
};

export default SidePanel;
