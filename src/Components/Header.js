import React, { useRef } from "react"

function Header({ setDate }){
    const years = [];
    const months = [];
    const days = [];
   
    const year = useRef(null);
    const month = useRef(null);
    const day = useRef(null);

    for(let i = 0; i < 23; i++){
        years.push(i + 2000)
    }
    for(let i = 0; i < 12; i++){
        months.push(i + 1)
    }
    for(let i = 0; i < 31; i++){
        days.push(i + 1)
    }
    
    function changeDate(){
        const newDate = `${year.current}-${month.current}-${day.current}`
        setDate(newDate);
    }

return (
    <header>
        <h1>NASA's Astronomy Picture of the Day</h1>
        {/* <div className="button-container">
            <button onClick={randomPic}>Get Random Pic</button>
            <button onClick={() => setReset(!reset)}>Reset to Today</button>
            <label for="dropdown">Select A Date</label>
            <select name="dropdown" id="dropdown" onChange={event => setDate(event.target.value) }>
                { archive.data.map((each, index) => <option key={index} value={each.date}>{each.date}</option>)}
            </select>
        </div> */}
        <label for="year">Select A Year</label>
        <select name="year" id="year" onChange={e => year.current = e.target.value}>
            { years.map((each, index) => <option key={index} value={each}>{each}</option>)}
        </select>
        <label for="month">Select A Month</label>
        <select name="month" id="month" onChange={e => month.current = e.target.value}>
            { months.map((each, index) => <option key={index} value={each}>{each}</option>)}
        </select>
        <label for="day">Select A Day</label>
        <select name="day" id="day" onChange={e => day.current = e.target.value}>
            { days.map((each, index) => <option key={index} value={each}>{each}</option>)}
        </select>
        <button onClick={() => changeDate()}>Get APOD</button>
    </header>
)
// { archive, setDate, reset, setReset, randomPic }
}


export default Header;