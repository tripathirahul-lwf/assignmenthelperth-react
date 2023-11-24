import React from 'react'
import './thankyou.css'
import thnakyou from '../img/thankyou.png'

const Thankyou = () => {
    return (
        <>
            <section className="thank">
                <div className="thankyou_img">
                    <img src={thnakyou} alt="thanyou" loading='lazy' />
                </div>
                <p className='text-center thank_text'>We have received you message.We'll reach you out immediately.</p>
                <div className="text-center mb-4">
                    <div className="button">
                        <a href="#" className="btn">GO TO HOMEPAGE</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Thankyou
