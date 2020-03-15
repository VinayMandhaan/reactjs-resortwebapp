import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import Services from "../components/Services"
import FeaturedRoom from "../components/FeaturedRoom"

const Home = () => {
    return (
        <div>
            <Hero>
                <Banner title="luxurious rooms" subtitle="The lux rooms starting at $299">
                    <Link className="btn-primary" to="/rooms">
                        our rooms
                    </Link>
                 </Banner>
            </Hero>
            <Services/>
            <FeaturedRoom/>
        </div>
    )
}

export default Home
