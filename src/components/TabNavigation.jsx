import React from 'react'

const TabNavigation = ({ activeTab, setActiveTab }) => {
    return (
       
            <div className='flex border-b border-gray-300'>
                <button
                    className={`px-4 py-2 text-sm font-medium ${activeTab === 'Home'
                        ? 'bg-gray-200 text-gray-900 border-b-2 border-blue-500'
                        : 'bg-hite text-gray-600 hover:text-gray-900'
                        }`}
                    onClick={() => setActiveTab('Home')}>
                    Home
                </button>
                <button
                    className={`px-4 py-2 text-sm font-medium ${activeTab === 'About'
                            ? 'bg-gray-200 text-gray-900 border-b-2 border-blue-500'
                            : 'bg-white text-gray-600 hover:text-gray-900'
                        }`}
                    onClick={() => setActiveTab('About')}
                >
                    About
                </button>
                <button
                    className={`px-4 py-2 text-sm font-medium ${activeTab === 'Resume'
                            ? 'bg-gray-200 text-gray-900 border-b-2 border-blue-500'
                            : 'bg-white text-gray-600 hover:text-gray-900'
                        }`}
                    onClick={() => setActiveTab('Resume')}
                >
                    Contact
                </button>
                <button
                    className={`px-4 py-2 text-sm font-medium ${activeTab === 'Projects'
                            ? 'bg-gray-200 text-gray-900 border-b-2 border-blue-500'
                            : 'bg-white text-gray-600 hover:text-gray-900'
                        }`}
                    onClick={() => setActiveTab('Projects')}
                >
                    Contact
                </button>


            </div>
       

    )
}



export default TabNavigation;