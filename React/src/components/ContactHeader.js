import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function ContainerHeader() {
  return (
    <div className="bg-[#0077FF] text-white py-1">
      <div className="container mx-auto flex justify-between items-center">
        {/* Container 1 */}
        <div className="flex items-center space-x-3 justify-center md:justify-start">
          <div className="text-white font-montserrat ml-2"> {/* Added ml-2 for left margin */}
            <FontAwesomeIcon icon={faPhone} size="sm" />
          </div>
          <div>
            <p className="text-xs md:text-base font-montserrat text-semibold">
              (02) 8067 8726 (9am-5pm) 0452 394 784 (after hours)
            </p>
          </div>
        </div>

        {/* Container 2 (Clickable Email) */}
        <div className="flex items-center space-x-3">
          <div className="text-white hidden md:block font-montserrat">
            <FontAwesomeIcon icon={faEnvelope} size="sm" />
          </div>
          <div className="hidden md:block font-montserrat">
            <a
              href="mailto:info@quantumlaw.com.au"
              className="hidden md:block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-semibold">info@quantumlaw.com.au</span>
            </a>
            <p className="md:hidden">
              <a
                href="mailto:info@quantumlaw.com.au"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-semibold">info@quantumlaw.com.au</span>
              </a>
            </p>
          </div>
        </div>

        {/* Container 3 */}
        <div className="flex items-center space-x-3">
          <div className="text-white hidden lg:block font-montserrat mr-2"> {/* Added mr-2 for right margin */}
            <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" />
          </div>
          <div className="hidden lg:block font-montserrat">
            <p className="hidden lg:block">
              <a
                href="https://www.google.com/maps/place/Suite+1503,+Level+15%2F447+Kent+St,+Sydney+NSW+2000,+Australia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-semibold">Suite 1503, Level 15, 447 Kent Street, Sydney NSW 2000</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainerHeader;
