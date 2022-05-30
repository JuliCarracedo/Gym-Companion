import React from 'react'
import { Link } from 'react-router-dom'

const Routines = () => {
    return (
        <div>
            <Link to="/routine">
                <section>
                    Routine 1
                </section>
            </Link>
            <Link to="/routine">
                <section>
                    Routine 2
                </section>
            </Link>
        </div>
    )
}

export default Routines