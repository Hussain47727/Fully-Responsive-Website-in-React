import React from 'react'
import './Testimonials.css'
import next_btn from '../../assets/next-icon.png'
import back_btn from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <img src={next_btn} alt=""  className='next-btn'/>
        <img src={back_btn} alt=""  className='back-btn'/>
      {/* <div className="slider">

      </div> */}
    </div>
  )
}

export default Testimonials
