import { useState } from "react";
import { MdCalendarToday, MdAccessTime, MdOutlineDescription } from "react-icons/md";
import FullCalendar from "components/calendar/FullCalendar";

const BookAppointment = () => {
  const [step, setStep] = useState("date");
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    reason: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Appointment Details:", formData);
    alert("Appointment successfully booked!");
  };

  return (
    <div className="min-h-screen flex flex-col space-y-6 px-4 py-6 lg:px-16 lg:py-12">
      {/* Step Buttons */}
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        {/* Date Button */}
        <button
          className={`flex items-center justify-between w-full p-6 bg-white shadow-lg rounded-xl hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 ${step === "date" ? "border-2 border-blue-600" : ""}`}
          onClick={() => setStep("date")}
        >
          <div className="flex items-center gap-4">
            <MdCalendarToday className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">Date</span>
          </div>
          <span className="text-lg text-gray-500">{formData.date || "Select"}</span>
        </button>

        {/* Time Button */}
        <button
          className={`flex items-center justify-between w-full p-6 bg-white shadow-lg rounded-xl hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 ${step === "time" ? "border-2 border-blue-600" : ""}`}
          onClick={() => setStep("time")}
        >
          <div className="flex items-center gap-4">
            <MdAccessTime className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">Time</span>
          </div>
          <span className="text-lg text-gray-500">{formData.time || "Select"}</span>
        </button>

        {/* Reason Button */}
        <button
          className={`flex items-center justify-between w-full p-6 bg-white shadow-lg rounded-xl hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 ${step === "reason" ? "border-2 border-blue-600" : ""}`}
          onClick={() => setStep("reason")}
        >
          <div className="flex items-center gap-4">
            <MdOutlineDescription className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">Reason</span>
          </div>
          <span className="text-lg text-gray-500">{formData.reason ? "Provided" : "Write"}</span>
        </button>
      </div>

      {/* Interactive Sections */}
      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 dark:text-gray-200 shadow-lg rounded-xl p-8">
        {step === "date" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Date</h2>
            <FullCalendar
              onSelect={(date) => handleInputChange("date", date)}
            />
          </div>
        )}
        {step === "time" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Time</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "4:00 PM"].map((time) => (
                <button
                  key={time}
                  className={`p-4 rounded-xl text-center shadow-md ${formData.time === time ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-800"}`}
                  onClick={() => handleInputChange("time", time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}
        {step === "reason" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Reason</h2>
            <textarea
              rows="4"
              placeholder="Describe your reason for the appointment"
              value={formData.reason}
              onChange={(e) => handleInputChange("reason", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-500"
            />
          </div>
        )}
      </div>

      {/* Always Visible Submit Button */}
      <div className="cursor-pointer flex justify-center mt-6">
        <button
          className={`px-8 py-4 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 cursor-pointer ${
            formData.date && formData.time && formData.reason ? "" : "opacity-50 cursor-not-allowed"
          }`}
          onClick={handleSubmit}
          disabled={!formData.date || !formData.time || !formData.reason}
        >
          Submit Appointment
        </button>
      </div>
    </div>
  );
};

export default BookAppointment;
