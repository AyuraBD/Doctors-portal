import React from 'react';
import './Footer.css';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer className="p-10 bg-neutral text-neutral-content">
            <div style={{
                background: `url(${footer})`,
                backgroundSize: 'cover',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat'
            }} className="footer py-16">
                <div>
                    <span className="footer-title">Services</span>
                    <a href=" " className="link link-hover">Design</a>
                    <a href=" " className="link link-hover">Marketing</a>
                    <a href=" " className="link link-hover">Advertisement</a>
                    <a href=" " className="link link-hover">Branding</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href=" " className="link link-hover">About us</a>
                    <a href=" " className="link link-hover">Contact</a>
                    <a href=" " className="link link-hover">Jobs</a>
                    <a href=" " className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href=" " className="link link-hover">Terms of use</a>
                    <a href=" " className="link link-hover">Privacy policy</a>
                    <a href=" " className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className="copyright">
                <div>
                    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;