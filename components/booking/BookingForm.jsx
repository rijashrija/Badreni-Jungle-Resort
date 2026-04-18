"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Users, Home, Mail, Phone, User, Send } from "lucide-react";
import Image from "next/image";

const BookingForm = ({ roomsData }) => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    roomId: roomsData?.[0]?.id || "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const selectedRoom = roomsData?.find((r) => r.id === parseInt(formData.roomId));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Inquiry Submitted:", formData);
    alert("Thank you for your inquiry! Our team will contact you shortly to confirm your booking.");
  };

  return (
    <section className="w-full bg-gray-50 py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* LEFT: THE FORM */}
        <div className="flex-1 bg-white p-8 md:p-12 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-cormorant font-bold text-gray-800 mb-8 border-b pb-4">
            Reservation Details
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* DATES & GUESTS ROW */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                  <Calendar size={14} className="text-[#6b705c]" /> Check-In
                </label>
                <input
                  type="date"
                  name="checkIn"
                  required
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full border-b border-gray-200 focus:border-[#6b705c] py-3 outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                  <Calendar size={14} className="text-[#6b705c]" /> Check-Out
                </label>
                <input
                  type="date"
                  name="checkOut"
                  required
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full border-b border-gray-200 focus:border-[#6b705c] py-3 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                  <Users size={14} className="text-[#6b705c]" /> Adults
                </label>
                <select
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  className="w-full border-b border-gray-200 focus:border-[#6b705c] py-3 outline-none transition-colors bg-transparent"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Adult' : 'Adults'}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                  <Users size={14} className="text-[#6b705c]" /> Children
                </label>
                <select
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  className="w-full border-b border-gray-200 focus:border-[#6b705c] py-3 outline-none transition-colors bg-transparent"
                >
                  {[0, 1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Child' : 'Children'}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* ROOM SELECTION */}
            <div className="space-y-2 pt-4">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                <Home size={14} className="text-[#6b705c]" /> Preferred Accommodation
              </label>
              <select
                name="roomId"
                value={formData.roomId}
                onChange={handleChange}
                className="w-full border-b border-gray-200 focus:border-[#6b705c] py-3 outline-none transition-colors bg-transparent"
              >
                {roomsData?.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.title} - {room.price}
                  </option>
                ))}
              </select>
            </div>

            <div className="border-t border-gray-100 pt-8 mt-12">
              <h3 className="text-xl font-cormorant font-bold text-gray-800 mb-6">
                Your Contact Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                    <User size={14} className="text-[#6b705c]" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b border-gray-200 focus:border-[#6b705c] py-3 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                    <Mail size={14} className="text-[#6b705c]" /> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-gray-200 focus:border-[#6b705c] py-3 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-1 gap-8 mt-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                    <Phone size={14} className="text-[#6b705c]" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+1 (234) 567-890"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b border-gray-200 focus:border-[#6b705c] py-3 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2 mt-8">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                  Special Requests / Notes
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-100 bg-gray-50 p-4 focus:ring-1 focus:ring-[#6b705c] outline-none transition-all rounded"
                  placeholder="Tell us about any specific requirements or questions..."
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#6b705c] text-white py-5 px-8 font-bold uppercase tracking-widest hover:bg-[#5a6e3a] transition-all duration-300 flex items-center justify-center gap-3 mt-12"
            >
              Confirm Booking Inquiry <Send size={18} />
            </button>
            <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest mt-4">
              * This is a non-binding reservation inquiry.
            </p>
          </form>
        </div>

        {/* RIGHT: SUMMARY SIDEBAR */}
        <div className="lg:w-[400px] space-y-8">
          <div className="bg-white p-8 shadow-sm border border-gray-100 sticky top-32">
            <h3 className="text-2xl font-cormorant font-bold text-gray-800 mb-6 border-b pb-4">
              Stay Summary
            </h3>
            
            {selectedRoom && (
              <div className="space-y-6">
                <div className="relative h-[200px] w-full overflow-hidden rounded">
                  <Image 
                    src={selectedRoom.images[0]} 
                    alt={selectedRoom.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase text-gray-400 font-bold tracking-widest mb-1">Accommodation</p>
                    <p className="text-lg font-bold text-[#6b705c]">{selectedRoom.title}</p>
                  </div>
                  
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <p className="text-sm text-gray-600">Price Base</p>
                    <p className="text-sm font-bold">{selectedRoom.price}</p>
                  </div>
                  
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <p className="text-sm text-gray-600">Plan</p>
                    <p className="text-sm font-bold">{selectedRoom.plan}</p>
                  </div>

                  <div className="pt-6">
                    <p className="text-[11px] text-gray-500 italic leading-relaxed">
                      "Experience the tranquility of Chitwan at Badreni Jungle Resort. Your sanctuary awaits."
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {!selectedRoom && (
              <p className="text-gray-500 italic">Please select a room to see details.</p>
            )}
          </div>
          
          {/* Help Card */}
          <div className="bg-[#6b705c] p-8 text-white">
            <h4 className="font-bold mb-4 uppercase tracking-widest text-sm">Need Help?</h4>
            <p className="text-sm opacity-90 leading-relaxed mb-6">
              Our reservation desk is available 24/7 to assist you with your booking or any special arrangements.
            </p>
            <p className="text-lg font-bold">+977-1234567890</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookingForm;
