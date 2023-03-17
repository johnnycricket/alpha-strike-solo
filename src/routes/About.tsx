import React from 'react';
import { Link } from "react-router-dom"

export const About = () => {
    return (
        <div className="about">
            <section className="header">
                <sub>Alpha Strike Solo</sub>
                <h1>About</h1>
            </section>
            <nav>
                <Link className="back-link" data-testid="return-link" to="/">&lt; Dashboard</Link>
            </nav>
            <section className="content">
                <p>The Solo Alpha Strike free webapp is meant to help act as a dice driven AI to streamline solo play for Battletech&#39;s Alpha Strike. Depending on what you want need to do, you can roll targeting, movement, firing for your opponents in solo games.</p>

                <h2>1.1</h2>
                <sub>03/16/2023</sub>
                <ul>
                    <li>Added about page.</li>
                </ul>
                <h2>1.0 Details</h2>
                <sub>10/09/2022</sub>
                <ul>
                    <li>Movement added for light/medium, heavy/assault, missile/sniper, and melee units.</li>
                    <li>Targeting rules for melee and ranged added.</li>
                    <li>Heat rules added for determining how wild a pilot is with their heat.</li>
                    <li>Attack Dice section added. Can use d6 or d10 die. Can also use either Variable damage rules, or All or Nothing damage rules.</li>
                </ul>
            </section>
        </div>
    )
}

