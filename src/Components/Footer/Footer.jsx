import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">

        <div className="izquierda">

            <p className='textFooter'>Seguinos en nuestras redes sociales:</p>

            <div className="pad">

                <span><a target="_blanck" href="http://youtube.com.ar"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" /></a></span>
                <span className="tapar">asd</span>

                <span><a target="_blanck" href="http://facebook.com.ar"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" /></a></span>
                <span className="tapar">asd</span>

                <span><a target="_blanck" href="http://twitter.com"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" /></a></span>
                <span className="tapar">asd</span>

                <span><a target="_blanck" href="http://github.com"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" /></a></span>
                <span className="tapar">as</span>

            </div>

        </div>

    </div>
  )
}
