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
      <div className="slider">
          <ul>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Waqar Abbas</h3>
                    <span>Technity, Gilgit</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Educity was one
                  of the best decisions I've ever made. The supportive
                  community, state-of-the-art facilities, and commitment to 
                  acadmic excellence have truly exceeded my expectation.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Waqar Abbas</h3>
                    <span>Technity, Gilgit</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Educity was one
                  of the best decisions I've ever made. The supportive
                  community, state-of-the-art facilities, and commitment to 
                  acadmic excellence have truly exceeded my expectation.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Waqar Abbas</h3>
                    <span>Technity, Gilgit</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Educity was one
                  of the best decisions I've ever made. The supportive
                  community, state-of-the-art facilities, and commitment to 
                  acadmic excellence have truly exceeded my expectation.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Waqar Abbas</h3>
                    <span>Technity, Gilgit</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Educity was one
                  of the best decisions I've ever made. The supportive
                  community, state-of-the-art facilities, and commitment to 
                  acadmic excellence have truly exceeded my expectation.
                </p>
              </div>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Testimonials
