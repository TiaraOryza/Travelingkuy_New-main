import React, { useState } from 'react';
import { Input, Select, Option, Button, Card, Typography, Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";

const FormBookingComponents = () => {
  const [checkin, setCheckin] = useState({ day: '', month: '', year: '' });
  const [checkout, setCheckout] = useState({ day: '', month: '', year: '' });

  const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => 1900 + i);

  const [checkinDayPopoverOpen, setCheckinDayPopoverOpen] = useState(false);
  const [checkinMonthPopoverOpen, setCheckinMonthPopoverOpen] = useState(false);
  const [checkinYearPopoverOpen, setCheckinYearPopoverOpen] = useState(false);
  const [checkoutDayPopoverOpen, setCheckoutDayPopoverOpen] = useState(false);
  const [checkoutMonthPopoverOpen, setCheckoutMonthPopoverOpen] = useState(false);
  const [checkoutYearPopoverOpen, setCheckoutYearPopoverOpen] = useState(false);

  const handleCheckinChange = (field, value) => {
    setCheckin({ ...checkin, [field]: value });
  };

  const handleCheckoutChange = (field, value) => {
    setCheckout({ ...checkout, [field]: value });
  };

  return (
    <div className="flex justify-center py-10 px-4">
      <Card className="w-full max-w-3xl p-8 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Form Booking</h2>

        <div className="grid grid-cols-1 gap-4 mb-6">
          <Typography variant="small" color="blue-gray" className="font-medium -mb-2 ml-1 text-base">Full Name</Typography>
          <Input label="Full Name" placeholder="Enter full name" />

          <Typography variant="small" color="blue-gray" className="font-medium -mb-2 ml-1 text-base">Your Email</Typography>
          <Input label="Email Address" placeholder="email address" />

          <Typography variant="small" color="blue-gray" className="font-medium -mb-2 ml-1 text-base">Phone Number</Typography>
          <Input label="Phone Number" placeholder="Enter phone number" />
        </div>

        <h3 className="text-lg font-medium mb-4">Details Booking</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Select label="Destinasi">
            <Option>Tanah Lot Temple</Option>
            <Option>Uluwatu Temple</Option>
            <Option>Besakih Temple</Option>
          </Select>
          <Select label="Villa">
            <Option>Villa Option 1</Option>
            <Option>Villa Option 2</Option>
            <Option>Villa Option 3</Option>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Select label="Vehicle and Driver">
            <Option>Vehicle capacity of 5 people</Option>
            <Option>Vehicle capacity of 7 people</Option>
            <Option>Vehicle capacity of 10 people</Option>
          </Select>
          <Select label="Guide">
            <Option>One professional guide will accompany the trip</Option>
            <Option>No guide</Option>
          </Select>
        </div>

        {/* Bagian Check-in dan Check-out */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <Typography variant="small" color="blue-gray" className="mb-2 font-medium text-base">Check-in Date</Typography>
            <div className="flex gap-3">
              <Popover open={checkinDayPopoverOpen} handler={setCheckinDayPopoverOpen} placement="bottom">
                <PopoverHandler>
                  <button className="w-full max-w-[70px] text-left px-3 py-2 border border-gray-300 rounded-lg">{checkin.day || 'Day'}</button>
                </PopoverHandler>
                <PopoverContent className="p-4 max-h-48 overflow-y-auto">
                  <div className="flex flex-col">
                    {days.map((day) => (
                      <button key={day} onClick={() => handleCheckinChange('day', day)} className="py-2 px-3 hover:bg-gray-100">{day}</button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>

              <Popover open={checkinMonthPopoverOpen} handler={setCheckinMonthPopoverOpen} placement="bottom">
                <PopoverHandler>
                  <button className="w-full max-w-[140px] text-left px-3 py-2 border border-gray-300 rounded-lg">{checkin.month || 'Month'}</button>
                </PopoverHandler>
                <PopoverContent className="p-4 max-h-48 overflow-y-auto">
                  <div className="flex flex-col">
                    {months.map((month) => (
                      <button key={month} onClick={() => handleCheckinChange('month', month)} className="py-2 px-3 hover:bg-gray-100">{month}</button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>

              <Popover open={checkinYearPopoverOpen} handler={setCheckinYearPopoverOpen} placement="bottom">
                <PopoverHandler>
                  <button className="w-full max-w-[90px] text-left px-3 py-2 border border-gray-300 rounded-lg">{checkin.year || 'Year'}</button>
                </PopoverHandler>
                <PopoverContent className="p-4 max-h-48 overflow-y-auto">
                  <div className="flex flex-col">
                    {years.map((year) => (
                      <button key={year} onClick={() => handleCheckinChange('year', year)} className="py-2 px-3 hover:bg-gray-100">{year}</button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Check-out */}
          <div>
            <Typography variant="small" color="blue-gray" className="mb-2 font-medium text-base">Check-out Date</Typography>
            <div className="flex gap-3">
              <Popover open={checkoutDayPopoverOpen} handler={setCheckoutDayPopoverOpen} placement="bottom">
                <PopoverHandler>
                  <button className="w-full max-w-[70px] text-left px-3 py-2 border border-gray-300 rounded-lg">{checkout.day || 'Day'}</button>
                </PopoverHandler>
                <PopoverContent className="p-4 max-h-48 overflow-y-auto">
                  <div className="flex flex-col">
                    {days.map((day) => (
                      <button key={day} onClick={() => handleCheckoutChange('day', day)} className="py-2 px-3 hover:bg-gray-100">{day}</button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>

              <Popover open={checkoutMonthPopoverOpen} handler={setCheckoutMonthPopoverOpen} placement="bottom">
                <PopoverHandler>
                  <button className="w-full max-w-[140px] text-left px-3 py-2 border border-gray-300 rounded-lg">{checkout.month || 'Month'}</button>
                </PopoverHandler>
                <PopoverContent className="p-4 max-h-48 overflow-y-auto">
                  <div className="flex flex-col">
                    {months.map((month) => (
                      <button key={month} onClick={() => handleCheckoutChange('month', month)} className="py-2 px-3 hover:bg-gray-100">{month}</button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>

              <Popover open={checkoutYearPopoverOpen} handler={setCheckoutYearPopoverOpen} placement="bottom">
                <PopoverHandler>
                  <button className="w-full max-w-[90px] text-left px-3 py-2 border border-gray-300 rounded-lg">{checkout.year || 'Year'}</button>
                </PopoverHandler>
                <PopoverContent className="p-4 max-h-48 overflow-y-auto">
                  <div className="flex flex-col">
                    {years.map((year) => (
                      <button key={year} onClick={() => handleCheckoutChange('year', year)} className="py-2 px-3 hover:bg-gray-100">{year}</button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Select label="Discount">
            <Option>5%</Option>
            <Option>10%</Option>
            <Option>15%</Option>
          </Select>
          <Input label="Price" placeholder="Enter total price" />
        </div>
        <Select label="Payment Method" className="mb-4">
          <Option>Credit Card</Option>
          <Option>Debit Card</Option>
          <Option>Paypal</Option>
        </Select>

        {/* Payment Method Button */}
        <div className="flex justify-center gap-36 mt-16">
          <Button color="red" className='font-poppins'>Cancel</Button>
          <Button className='bg-customOrage font-poppins'>Book Now</Button>
        </div>
      </Card>
    </div>
  );
};

export default FormBookingComponents;
