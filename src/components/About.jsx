import React from "react"
// import Picture from "./IMG_8944.jpg"
import { MdFormatQuote } from "react-icons/md"
import './About.css'

function About() {
	return (
		<div className="aboutContainer">
			<div className="aboutHeader">
				{/*<img src={Picture} alt="mypic"></img>*/}
			</div>

			<div class="text-wrap-about">
				<p>
					This is work done by our group in order to fulfil the completion of the APP4035 course with Mr. Austin Sifuna
				</p>

				<blockquote>
					<MdFormatQuote />
					We are never so vulnerable as when we love, and never so hopelessly unhappy as when we lose the object of our love. Out of your vulnerabilities will come your strength.
					It is that we are never so defenseless against suffering as when we love, never so helplessly unhappy as when we have lost our loved object or its love.
					<MdFormatQuote />
				</blockquote>
			</div>
		</div>
	)
}

export default About