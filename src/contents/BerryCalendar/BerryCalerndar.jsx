import React from 'react';
import {data} from '../../data/BerryCallendarData';
import Calendar from 'reactjs-availability-calendar';

const BerryCalerndar = () => {
  function coloring(data){
    let dayElements = document.querySelectorAll('.day');
    let monthElements = document.querySelectorAll('.month');
    
    data.forEach((el) => {
      let days = [];
      let fullDateFrom = new Date(el.from.month + "/" + el.from.day + "/" + el.from.year);
      let fullDateTo = new Date(el.to.month + "/" + el.to.day + "/" + el.to.year);

      for(let i=fullDateFrom; i<=fullDateTo; i=new Date(i.setDate(i.getDate() + 1))){
        days.push(i.toDateString())
      }
      console.log(days)
    });
    }
    coloring(data);
  return (
    <div className='container my-5'>
        <Calendar bookings={[]} showControls={false} showNumberOfMonths={2} showCurrentYear={false} showKey={false}/>
    </div>
  )
}

export default BerryCalerndar