import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-md fixed-top navbar-shrink py-3" id="mainNav">
        <div class="container"><a class="navbar-brand d-flex align-items-center" href="/"><span>Brand</span></a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item"><a class="nav-link active" href="/index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="/features.html">Features</a></li>
                    <li class="nav-item"><a class="nav-link" href="/integrations.html">Integrations</a></li>
                    <li class="nav-item"><a class="nav-link" href="/pricing.html">Pricing</a></li>
                    <li class="nav-item"><a class="nav-link" href="/contacts.html">Contacts</a></li>
                </ul><a class="btn btn-primary shadow" role="button" href="signup.html">Sign up</a>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;