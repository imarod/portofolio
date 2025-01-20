import React from 'react'
import PropTypes from 'prop-types'

const TabNavigation = ({ activeTab, setActiveTab }) => {
    const getButtonClass = (tabName) => {
        return `px-10 py-6 text-md font-bold ${activeTab === tabName
            ? 'text-[#5C27D4] text-lg '
            : 'text-[#5C27D4] hover:text-[#7B51DB]'
        }`;
    };

    const tabs = ['Home', 'About', 'Resume', 'Projects'];

    return (
        <div className='flex justify-between' style={{ background: 'white' }}>
           
            <div className='flex-1 flex justify-start '>
                {/* Kolom kedua, isi sesuai kebutuhan */}
                <div className='px-16 py-6'>
                    <h1>hsjahjshjah</h1>
                </div>
            </div>
            <div className='flex-1 flex justify-between'>
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={getButtonClass(tab)}
                        onClick={() => setActiveTab(tab)}>
                        {tab}
                    </button>
                ))}
            </div>
            <div className='flex-1 flex justify-end '>
                {/* Kolom kedua, isi sesuai kebutuhan */}
                <div className='px-16 py-6'>
                    <h1>hsjahjshjah</h1>
                </div>
            </div>
        </div>
    );
}


TabNavigation.propTypes = {
    activeTab: PropTypes.string.isRequired,
    setActiveTab: PropTypes.func.isRequired,
};

export default TabNavigation;
