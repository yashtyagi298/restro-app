import React, { useState } from 'react';
import { FaUtensils, FaCoffee, FaHamburger, FaIceCream, FaConciergeBell, FaThList } from 'react-icons/fa';
import WhatsAppButton from './WhatsAppButton';
import AnnouncementBar from './AnnouncementBar';

const Menu = () => {
  const [activeSection, setActiveSection] = useState('Thali');

  const sections = {
    Thali: [
      { category: "Normal Thali", items: [{ name: "4 Roti + 2 Sabji + 1 bowl Rice + Dal + Salad", price: 79 }] },
      { category: "Sweets Thali", items: [{ name: "4 Roti + 2 Sabji + 1 Bowl Fried Rice + Mix Dal + Salad", price: 99 }] },
      { category: "Super Thali", items: [{ name: "2 Roti + 2 Kachori + 2 sabji + 1 Bowl Zira Rice + Tadka Dal + Salad + Sweets", price: 149 }] },
      { category: "Maharaja Thali", items: [{ name: "2 Butter Roti + 2 Kachori + 2 Sabji + 2 bhujia veg + 1 bowl pulav Rice + Tadka Special Dal + 2 Sweets + Salad", price: 199 }] },
    ],
    Tiffin: [
        { name: "Monday: 4 Kachori + Aalu Gobi + Bhujia + Salad + Sweets (Rice Optional)" },
        { name: "Tuesday: Roti + Matar Paneer + Bhujia + Salad" },
        { name: "Wednesday: Paratha + Dahi + 2 Chutneys + Salad" },
        { name: "Thursday: Roti + Rajma + Bhujia + Salad" },
        { name: "Friday: Litti + Chokha + Chutney + Salad + Sweets" },
        { name: "Saturday: Roti + Chana Masala Veg + Raita + Salad" },
        { name: "Sunday: Puri + Optional Sabji + Bhujia + Salad + Sweets" },
      ],
      Breakfast: [
        { name: "Phoa", price: 65 },
        { name: "Paratha (aalu/pyaz/paneer)", price: "50/75/99" },
        { name: "Sandwich", price: 65 },
        { name: "Paneer Sandwich", price: 85 },
        { name: "Kachori (2 Pics)", price: 50 },
        { name: "Pav Bhaji", price: 75 },
        { name: "Puri Sabji (4 Pics)", price: 50 },
        { name: "Litti Chokha (4 Pics)", price: 60 },
      ],
   
   
    Lunch: [
      { name: "Roti (Per Pic)", price: 8 },
      { name: "Rice", price: 75 },
      { name: "Zira Rice", price: 85 },
      { name: "Veg Fried Rice", price: 120 },
      { name: "Paneer Fried Rice", price: 150 },
      { name: "Pullaw", price: 140 },
      { name: "Special Pullaw", price: 200 },
      { name: "Tadka Dal", price: 120 },
      { name: "Mix Dal", price: 150 },
      { name: "Normal Dal", price: 100 },
      { name: "Fried Dal", price: 130 },
      { name: "Dal Makhni", price: 150 },
      { name: "Kadhi Bari", price: 120 },
      { name: "Sabji (Optional)", price: 120 },
      { name: "Rajma Rice", price: 140 },
      { name: "Chole Rice", price: 140 },
      { name: "Kadhi Rice", price: 140 },
    ],
    Dinner: [
      { name: "Roti", price: 8 },
      { name: "Butter Roti", price: 10 },
      { name: "Paratha (aalu/pyaz/paneer)", price: "50/75/99" },
      { name: "Mattar Paneer", price: 160 },
      { name: "Sahi Paneer", price: 150 },
      { name: "Kadhai Paneer", price: 150 },
      { name: "Mushroom Veg", price: 120 },
      { name: "Rajma Veg", price: 120 },
      { name: "Chole Veg", price: 120 },
    ],
    
    Thali: [
        { category: "Normal Thali", items: [{ name: "4 Roti + 2 Sabji + 1 bowl Rice + Dal + Salad", price: 79 }] },
        { category: "Sweets Thali", items: [{ name: "4 Roti + 2 Sabji + 1 Bowl Fried Rice + Mix Dal + Salad", price: 99 }] },
        { category: "Super Thali", items: [{ name: "2 Roti + 2 Kachori + 2 sabji + 1 Bowl Zira Rice + Tadka Dal + Salad + Sweets", price: 149 }] },
        { category: "Maharaja Thali", items: [{ name: "2 Butter Roti + 2 Kachori + 2 Sabji + 2 bhujia veg + 1 bowl pulav Rice + Tadka Special Dal + 2 Sweets + Salad", price: 199 }] },
      ],
    Snacks: [
        { name: "Chai Simple", price: 59 },
        { name: "Adrak Chai", price: 69 },
        { name: "Elaichi Chai", price: 79 },
        { name: "Masala Chai", price: 99 },
        { name: "Bhaji (2 Pic)", price: 50 },
        { name: "Samosa (Per Pic)", price: 20 },
        { name: "Bread Pakoda (2 Pic)", price: 60 },
        { name: "Paneer Pakoda (100gm)", price: 80 },
        { name: "Aalu Pakoda (100gm)", price: 65 },
        { name: "Pyaz Pakoda (100gm)", price: 65 },
        { name: "Dhokla", price: 99 },
        { name: "Sprout's Salad", price: 99 },
        { name: "Mixed Salad", price: 110 },
      ],
    Sweets: [
      { name: "Gulab Jamun (2 Pics)", price: 50 },
      { name: "Gajar Halwa (100gm)", price: 60 },
      { name: "Kheer", price: 65 },
      { name: "Sewai", price: 65 },
      { name: "Pumpkin Kheer", price: 99 },
      { name: "Special Kheer", price: 150 },
    ],
    Chinese: [
      { name: "Momos (12 Pics)", price: 85 },
      { name: "Paneer Momos (12 Pics)", price: 100 },
      { name: "Spring Roll (2 Pics)", price: 75 },
      { name: "Veg Roll", price: 65 },
      { name: "Paneer Roll", price: 85 },
      { name: "Potato Chilli", price: 99 },
      { name: "Paneer Chilli", price: 140 },
      { name: "Mushroom Chilli", price: 130 },
      { name: "Manchurian", price: 140 },
    ],
   
  };

  const sectionIcons = {
    Thali: <FaThList />,
    Snacks: <FaConciergeBell />,
    Breakfast: <FaCoffee />,
    Lunch: <FaUtensils />,
    Dinner: <FaHamburger />,
    Sweets: <FaIceCream />,
    Chinese: <FaHamburger />,
    Tiffin: <FaUtensils />,
  };

  return (
    <div>
        <AnnouncementBar text="For any service, Feel free to contact us on WhatsApp!"/>
    <div className="max-w-screen-lg mx-auto px-4 py-2 ">
        
      <h1 className="text-4xl font-extrabold text-center mb-6 text-primary font-inter">Our Menu</h1>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 ">
        {Object.keys(sections).map((section, index) => (
          <button
            key={index}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              activeSection === section
                ? 'bg-primary text-white'
                : 'bg-black text-white'
            } hover:opacity-90 transition-all`}
            onClick={() => setActiveSection(section)}
          >
            {sectionIcons[section]} {section}
          </button>
        ))}
      </div>

      {/* Render Active Section */}
      <div>
        {sections[activeSection] && (
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black">{activeSection}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections[activeSection].map((item, index) => (
                <div
                  key={index}
                  className="p-4 border border-black rounded-lg shadow-md hover:shadow-lg transition-all"
                  style={{ backgroundColor: '#E7FAFE' }}
                >
                  <h3 className="text-xl font-bold mb-2 text-black">{item.category || item.name}</h3>
                  <ul className="list-disc pl-5">
                    {(item.items || [item]).map((subItem, i) => (
                      <li key={i} className="text-black">
                        {subItem.name} - <span className="font-semibold text-primary">₹{subItem.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
      <WhatsAppButton/>
    </div>
    </div>
  );
};

export default Menu;
