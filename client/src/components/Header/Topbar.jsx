// Topbar.jsx
import React, { useEffect, useState } from 'react';

const links = window?.links || {};

const topbarItems = [
  { type: 'text', icon: 'fa-solid fa-phone-volume', text: links.phone ? links.phone.replace("tel", "") : "", href: links.phone },
  { type: 'text', icon: 'fa-solid fa-envelope', text: links.email, href: `mailto:${links.email}` },
  { type: 'social', icon: 'fa-brands fa-facebook', href: links.facebook || '#' },
  { type: 'social', icon: 'fa-brands fa-instagram', href: links.instagram || '#' },
  { type: 'social', icon: 'fa-brands fa-twitter', href: links.twitter || '#' },
  { type: 'social', icon: 'fa-brands fa-linkedin-in', href: links.linkedin || '#' },
];

export default function Topbar() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDate(now.toLocaleDateString());
      setCurrentTime(now.toLocaleTimeString());
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-green-500 text-white text-sm">
      <div className="flex justify-between items-center px-4 sm:px-8 lg:px-24 py-2">
        <div className="flex gap-4">
          <div className="flex items-center gap-1"><i className="fas fa-calendar-alt"></i> <span>{currentDate}</span></div>
          <div className="flex items-center gap-1"><i className="fas fa-clock"></i> <span>{currentTime}</span></div>
        </div>
        <div className="flex items-center gap-6">
          {topbarItems.filter(item => item.type === 'text').map((item, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <i className={item.icon}></i> <span>{item.text}</span>
            </div>
          ))}
          <div className="flex gap-3">
            {topbarItems.filter(item => item.type === 'social').map((item, idx) => (
              <a key={idx} href={item.href} target="_blank" rel="noreferrer"><i className={item.icon}></i></a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
