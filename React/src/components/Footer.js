import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    const fontStyles = {
        fontFamily: 'Libre Franklin',
    };

    const smallerFontSize = {
        fontSize: '12px', // Adjust the font size as needed
    };

    return (
        <footer className="bg-black text-white py-8 text-base font-normal" style={fontStyles}> 
            <div className="flex flex-col md:flex-row justify-around mx-auto max-w-6xl md:flex-wrap">
                {/* Column 1: Address */}
                <div className="mb-6 lg:mb-0">
                    <h4 className="text-xl font-semibold mb-3" style={smallerFontSize}>ADDRESS</h4>
                    <p style={smallerFontSize}>
                        Suite 1503, Level 15<br />
                        447 Kent Street<br />
                        Sydney NSW 2000
                    </p>
                </div>

                {/* Column 3: Contact & Social */}
                <div className="mb-6 md:mb-0 md:order-3">
                    <h4 className="text-xl font-semibold mb-3" style={smallerFontSize}>CONTACT US</h4>
                    <p style={smallerFontSize}>Email: info@quantumlaw.com.au</p>
                    <p style={smallerFontSize}>Phone: (02) 8067 8726 (9am-5pm)</p>
                    <p style={smallerFontSize}>Mobile: 0452 394 784 (After Hours)</p>

                    <h4 className="text-xl font-semibold mt-6 mb-3" style={smallerFontSize}>FOLLOW US</h4>
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/company/qlg/" className="text-white hover:text-gray-400" target="_blank" >
                            <FontAwesomeIcon icon={faLinkedin} size="xl" />
                        </a>
                        <a href="https://www.instagram.com/quantumlaw.com.au/" className="text-white hover:text-gray-400" target="_blank" >
                            <FontAwesomeIcon icon={faInstagram} size="xl" />
                        </a>
                        <a href="https://www.facebook.com/quantumlawgroup" className="text-white hover:text-gray-400" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} size="xl" />
                        </a>
                    </div>
                </div>

                {/* Column 2: Pages */}
                <div className="mb-6 lg:mb-0">
                    <h4 className="text-xl font-semibold mb-3" style={smallerFontSize}>PAGES</h4>
                    <ul>
                        <li className="mb-2">
                            <a href="/what-we-do" className="text-white hover:text-gray-400" style={smallerFontSize}>
                                What We Do
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/how-we-operate" className="text-white hover:text-gray-400" style={smallerFontSize}>
                                How We Operate
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/our-story" className="text-white hover:text-gray-400" style={smallerFontSize}>
                                Our Story
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/our-founder" className="text-white hover:text-gray-400" style={smallerFontSize}>
                                Our Founder
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/contact-us" className="text-white hover:text-gray-400" style={smallerFontSize}>
                                Contact Us
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/privacy-policy" className="text-white hover:text-gray-400" style={smallerFontSize}>
                                Privacy Policy
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/terms-of-use" className="text-white hover:text-gray-400" style={smallerFontSize}>
                                Terms of Use
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
