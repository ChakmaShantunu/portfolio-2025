import React from 'react';

const Logo = () => {
    return (
        <div className="flex items-center space-x-2 cursor-pointer select-none">
            {/* Circle with initials */}
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                SC
            </div>
            {/* Name */}
            {/* <div className="text-xl font-semibold text-primary tracking-wide">
                Shantunu Chakma
            </div> */}
        </div>
    );
};

export default Logo;
