import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='pt-4 pb-5 ps-5'>
            <div className="row">
                <div className="col-md-3">
                    <img src="https://templatekit.tokomoo.com/socialkit/wp-content/uploads/sites/58/2021/12/socialy-logo-white.png" alt="" height="50px" width="150px" />
                </div>
                <div className="col-md-6 ms-5 ps-5 pt-3">
                   <div className="d-flex">
                       <div className="nav-item me-4 text-decoration-none">
                            <Link className='text-decoration-none text-black'>Home</Link>
                       </div>
                       <div className="nav-item me-4 text-decoration-none">
                            <Link className='text-decoration-none text-black'>About</Link>
                       </div>
                       <div className="nav-item me-4 text-decoration-none">
                            <Link className='text-decoration-none text-black'>Services</Link>
                       </div>
                       <div className="nav-item me-4 text-decoration-none">
                            <Link className='text-decoration-none text-black'>Case Study</Link>
                       </div>
                       <div className="nav-item me-4 text-decoration-none">
                            <Link className='text-decoration-none text-black'>Pages</Link>
                       </div>
                       
                    </div> 
                      
                </div>
                <div className="col-md-2">
                    <button className=' primary-btn'>Contact Us</button>    
                </div> 
            </div>
        </div>
    );
};

export default Navbar;