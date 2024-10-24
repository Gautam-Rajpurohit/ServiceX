import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import dayjs from 'dayjs';

export const Schedule = ({ selectDate, setDisplay }) => {
    const [close, setClose] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        subject: "Appointment Confirmed",
        message: `Your Appointment is Scheduled on ${selectDate.format("YYYY-MM-DD")}`, // Use dayjs to format the date
    });
    
    const [displayData, setDisplayData] = useState({
        dayDate: selectDate.format("YYYY-MM-DD"), // Format the selected date
        diagnose: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setDisplayData({ ...displayData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response1 = await fetch("http://localhost:8000/api/mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const result1 = await response1.json();
            console.log("Success", result1);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {close && (
                <section className='flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
                    <div>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[360px] mx-auto p-4 bg-white rounded shadow-lg">
                            <button
                                type="button"
                                onClick={() => {
                                    setClose(false);
                                    setDisplay(false);
                                }}
                                className="self-end text-gray-600 hover:text-gray-800"
                            >
                                <CloseIcon />
                            </button>
                            <span className="text-lg font-semibold mb-2">{selectDate.format("YYYY-MM-DD")}</span> {/* Format the date */}
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                name="diagnose"
                                value={displayData.diagnose}
                                onChange={handleInputChange2}
                                placeholder="Diagnose"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-500"
                            >
                                CONFIRM
                            </Button>
                        </form>
                    </div>
                </section>
            )}
        </>
    );
};