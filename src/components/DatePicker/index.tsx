"use client";
import React, { useState } from "react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

export default function DatePicker() {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(today);

  return (
    <DayPicker
      mode="single"
      required
      selected={selectedDay}
      onSelect={setSelectedDay}
      className="bg-white rounded-md p-2 shadow"
    />
  );
}
