import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddCommentIcon from '@mui/icons-material/AddComment';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Swal from "sweetalert2";
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';

import { useForm } from "react-hook-form";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];
const EventCalender = () => {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState([]);

// get event
useEffect(() => {
    fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data =>{ 
            setAllEvents(data);
            
        })

}, [allEvents])


    const handleAddEvent = (e) => {
        e.preventDefault();
        // setAllEvents([...allEvents, newEvent]);
        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newEvent)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'Your Event Added Successfully. Thank You!',

                    )

                }

                console.log(data);
            })
    }
    console.log(allEvents);



    return (
        <div className="mt-5">

            <div style={{ backgroundColor: 'white' }} className="pt-3 bg-light pb-4">
                <h5 className="text-start ms-2">Please Add A Event <EventAvailableIcon style={{ color: '#003366', fontSize: '3rem' }}></EventAvailableIcon> </h5>
                <form >
                    <div className="row">
                        <div className="col-12 col-lg-3 col-md-3">

                            <input  type="text" placeholder="Add Event" style={{ width: "97%", }} className="p-1 mt-1 ms-3" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />


                        </div>
                        <div className="col-12 col-lg-3 col-md-3">
                            <DatePicker placeholderText="Start Date" className="p-1 mt-1 ms-1 w-100" selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                        </div>

                        <div className="col-12 col-lg-3 col-md-3 ">
                            <DatePicker  className="p-1 mt-1 w-100" placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />

                        </div>

                        <div className="col-12 col-lg-3 col-md-3 ">
                            <button style={{backgroundColor:'#003366'}} type="submit" className="btn text-light fw-bold mt-1 me-5 w-75" onClick={handleAddEvent}>
                                <AddCommentIcon></AddCommentIcon>   Add Event
                            </button>
                        </div>
                    </div>


                </form>
            </div>

            <div className="row mt-5">
                <div className="col-12 col-lg-3 col-md-3 ">

                    <div className="m-1" style={{ backgroundColor: 'white', height: '' }}>
                        <h5 style={{ borderBottom: '2px solid gray' }} className="pt-4">ALl Event List:</h5>
                        <div className="pb-3">
                        {
                            allEvents?.map(event=>
                                <h6 style={{color:'white', backgroundColor:"#4682B4"}}  className="mt-2 me-3 ms-2  p-1 border rounded"><FiberSmartRecordIcon style={{color:'#FFA500'}} ></FiberSmartRecordIcon>  {event?.title}</h6>

                                )
                        }
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-9 col-md-9">
                    <div style={{ backgroundColor: 'white' }} className="p-1" >
                        <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "20px" }} />
                    </div>
                </div>
            </div>



        </div>
    );
}

export default EventCalender;