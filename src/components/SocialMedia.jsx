import React from 'react'

function SocialMedia() {
  return (
    <div className='socials'>
        <p className='social-text'>Follow the team!</p>
        <a href='https://www.facebook.com/ohiostatefb/'>
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" className='facebook'/>
        </a>
        <a href='https://www.instagram.com/ohiostatefb/?hl=en'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" className='instagram' />
        </a>
        <a href='https://twitter.com/OhioStAthletics'>
          <img src="https://seeklogo.com/images/T/twitter-x-logo-577BCAE525-seeklogo.com.png?v=638258088190000000" className='twitter'/>
        </a>
    </div>
  )
}

export default SocialMedia