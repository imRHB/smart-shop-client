import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddCommentIcon from '@mui/icons-material/AddComment';
import AddReactionIcon from '@mui/icons-material/AddReaction';

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
    const [allEvents, setAllEvents] = useState(events);

    const handleAddEvent = () => {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="">

            <div style={{backgroundColor:'white'}} className="row pt-3 pb-4">
                <h5 className="text-start ms-2">Please Add A Event <AddReactionIcon style={{color:'#003366', fontSize:'3rem'}}></AddReactionIcon> </h5>
                <div className="col-12 col-lg-3 col-md-3">
                  
                    <input type="text" placeholder="Add Event" style={{ width: "97%",  }} className="p-1 mt-2 ms-3" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
           
                   
                    </div>
                    <div className="col-12 col-lg-3 col-md-3">
                    <DatePicker placeholderText="Start Date"  className="p-1 mt-2 ms-1 w-100" selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                    </div>
                  
                  <div  className="col-12 col-lg-3 col-md-3 ">
                  <DatePicker className="p-1 mt-2 w-100" placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                 
                  </div>

                   <div className="col-12 col-lg-3 col-md-3">
                   <button className="btn btn-info text-light fw-bold mt-2 me-5 w-75" stlye={{ marginTop: "px" }} onClick={handleAddEvent}>
                     <AddCommentIcon></AddCommentIcon>   Add Event
                    </button>
                   </div>

                
            </div>
            <div className="row mt-5">
                <div className="col-12 col-lg-3 col-md-3 ">

                    <div className="m-1" style={{ backgroundColor: 'white', height: '550px' }}>
                      <h5 style={{borderBottom:'2px solid gray'}} className="pt-4">ALl Event List:</h5>
                      
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