import React, { useState, useEffect } from 'react';
import { Calendar, Users, Clock, Flame, CheckCircle, Trash2, ShieldCheck, HelpCircle } from 'lucide-react';
import { Reservation } from '../types';

export default function ReservationSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:00');
  const [guests, setGuests] = useState(2);
  const [tablePreference, setTablePreference] = useState<'standard' | 'window' | 'chef-counter' | 'private-alcove'>('standard');
  const [specialRequest, setSpecialRequest] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [confirmedReservation, setConfirmedReservation] = useState<Reservation | null>(null);
  const [existingReservations, setExistingReservations] = useState<Reservation[]>([]);

  // Load existing reservations from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('velvet_flame_bookings');
    if (saved) {
      try {
        setExistingReservations(JSON.parse(saved));
      } catch (e) {
        console.error('Error parsing saved reservations', e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!name || !email || !phone || !date || !time) {
      setErrorMessage('Please fill out all required fields to secure your reservation.');
      return;
    }

    setIsLoading(true);

    // Simulate 2 seconds of high-end Michelin confirmation wait
    setTimeout(() => {
      const newReservation: Reservation = {
        id: `VF-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`,
        name,
        email,
        phone,
        date,
        time,
        guests,
        tablePreference,
        specialRequest,
        status: 'confirmed',
      };

      // Save to localStorage
      const updated = [newReservation, ...existingReservations];
      localStorage.setItem('velvet_flame_bookings', JSON.stringify(updated));
      setExistingReservations(updated);

      setConfirmedReservation(newReservation);
      setIsLoading(false);

      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
      setDate('');
      setTime('19:00');
      setGuests(2);
      setTablePreference('standard');
      setSpecialRequest('');
    }, 2000);
  };

  const handleCancelReservation = (id: string) => {
    const updated = existingReservations.filter((res) => res.id !== id);
    localStorage.setItem('velvet_flame_bookings', JSON.stringify(updated));
    setExistingReservations(updated);
  };

  const tableDescriptions = {
    standard: 'Main Imperial Hall — Surrounded by plush velvet and glowing chandeliers.',
    window: 'Water Gardens — Overlooking our private lotus water fountains and floating fire globes.',
    'chef-counter': 'Chef Vignesh\'s Counter — Front-row seat to our live oak-wood searing hearths.',
    'private-alcove': 'Private Alcove — Deeply intimate corner draped with rich heavy burgundy velvet.',
  };

  return (
    <section id="reservation" className="py-24 bg-burgundy-950 relative overflow-hidden border-t border-gold-500/10">
      {/* Absolute floating decorations */}
      <div className="absolute top-[10%] left-[-10%] w-[300px] h-[300px] bg-burgundy-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] bg-gold-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-xs text-gold-400 tracking-[0.3em] uppercase mb-3">SECURE A HEARTH</p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-gold-100 tracking-tight">
            Reserve Your <span className="italic text-gold-400 font-normal">Table</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-gold-100/60 max-w-xl mx-auto font-light leading-relaxed mt-4">
            Securing an evening at Velvet Flame guarantees an unforgettable culinary exploration. Due to limited seating at our Chef\'s Counter and Private Alcoves, early reservations are highly encouraged.
          </p>
          <div className="mt-4 flex justify-center items-center">
            <div className="h-[1px] w-12 bg-gold-500/35"></div>
            <div className="mx-3 text-gold-400 text-xs">◆</div>
            <div className="h-[1px] w-12 bg-gold-500/35"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Reservation Booking Form (Left / Middle) */}
          <div className="lg:col-span-8 bg-burgundy-900/10 border border-gold-500/10 p-6 md:p-10 rounded-xs shadow-2xl">
            {isLoading ? (
              /* Loading State */
              <div className="flex flex-col items-center justify-center py-20 space-y-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-2 border-gold-500/10 border-t-gold-500 animate-spin"></div>
                  <Flame className="w-6 h-6 text-gold-400 absolute inset-0 m-auto animate-pulse" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-serif text-lg text-gold-100 font-medium">Securing Your Royal Registry...</h3>
                  <p className="font-sans text-xs text-neutral-400 max-w-xs leading-relaxed">
                    Confirming seat availability, assigning your table preference, and notifying Chef Vignesh\'s culinary captains.
                  </p>
                </div>
              </div>
            ) : confirmedReservation ? (
              /* Success / Confirmation Ticket State */
              <div className="border border-gold-500/40 bg-burgundy-900/20 p-6 md:p-8 rounded-xs shadow-xl relative overflow-hidden">
                {/* Decorative background logo */}
                <div className="absolute right-4 bottom-2 opacity-5 text-gold-400">
                  <Flame className="w-48 h-48" />
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gold-500/20 pb-6 mb-6">
                  <div>
                    <span className="bg-gold-500/10 text-gold-400 border border-gold-500/30 text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-xs font-semibold">
                      IMPERIAL BOOKING SECURED
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-gold-100 mt-3">Welcome to Velvet Flame</h3>
                  </div>
                  <div className="mt-4 md:mt-0 text-left md:text-right">
                    <p className="font-sans text-[9px] text-neutral-400 uppercase tracking-widest">Confirmation Registry ID</p>
                    <p className="font-serif text-base font-bold text-gold-400">{confirmedReservation.id}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans text-xs mb-8">
                  <div>
                    <p className="text-neutral-400 uppercase tracking-wider mb-1">Patron Guest</p>
                    <p className="text-gold-200 font-medium text-sm">{confirmedReservation.name}</p>
                    <p className="text-neutral-500">{confirmedReservation.email} • {confirmedReservation.phone}</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 uppercase tracking-wider mb-1">Date & Arrival Time</p>
                    <p className="text-gold-200 font-medium text-sm">{confirmedReservation.date} @ {confirmedReservation.time}</p>
                    <p className="text-neutral-500">{confirmedReservation.guests} Royal Guests</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 uppercase tracking-wider mb-1">Dining Chamber Selection</p>
                    <p className="text-gold-200 font-medium text-sm uppercase tracking-wide">
                      {confirmedReservation.tablePreference.replace('-', ' ')}
                    </p>
                    <p className="text-neutral-500 leading-relaxed max-w-xs">{tableDescriptions[confirmedReservation.tablePreference]}</p>
                  </div>
                  {confirmedReservation.specialRequest && (
                    <div>
                      <p className="text-neutral-400 uppercase tracking-wider mb-1">Special Culinary Demands</p>
                      <p className="text-neutral-300 italic font-light">&ldquo;{confirmedReservation.specialRequest}&rdquo;</p>
                    </div>
                  )}
                </div>

                <div className="bg-burgundy-950 border border-gold-500/10 p-4 rounded-xs flex items-start space-x-3 text-xs text-neutral-300">
                  <ShieldCheck className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-gold-200 uppercase tracking-wider text-[10px]">Your Imperial Seal is Confirmed</p>
                    <p className="font-light leading-relaxed">
                      A copy of this portfolio-only booking has been saved to your browser local cache. Present this ticket screen or confirmation ID upon arrival to your host. We look forward to serving you!
                    </p>
                  </div>
                </div>

                <div className="flex justify-end mt-8 pt-4 border-t border-gold-500/10">
                  <button
                    onClick={() => setConfirmedReservation(null)}
                    className="bg-gold-500 hover:bg-gold-400 text-burgundy-950 font-sans font-semibold text-[10px] uppercase tracking-widest px-6 py-3 rounded-xs cursor-pointer transition-colors duration-300"
                  >
                    Reserve Another Table
                  </button>
                </div>
              </div>
            ) : (
              /* Reservation Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-widest text-gold-300 font-medium">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Lord Vignesh"
                      className="w-full bg-burgundy-950 border border-gold-500/15 focus:border-gold-500/60 rounded-xs p-3.5 text-xs text-gold-100 font-sans tracking-wide placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-widest text-gold-300 font-medium">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. guest@example.com"
                      className="w-full bg-burgundy-950 border border-gold-500/15 focus:border-gold-500/60 rounded-xs p-3.5 text-xs text-gold-100 font-sans tracking-wide placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-all duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-widest text-gold-300 font-medium">Your Contact Phone *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-burgundy-950 border border-gold-500/15 focus:border-gold-500/60 rounded-xs p-3.5 text-xs text-gold-100 font-sans tracking-wide placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-all duration-300"
                    />
                  </div>

                  {/* Guests */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-widest text-gold-300 font-medium">Number of Royal Guests *</label>
                    <div className="relative">
                      <Users className="absolute left-3.5 top-3.5 w-4 h-4 text-gold-400" />
                      <select
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value))}
                        className="w-full bg-burgundy-950 border border-gold-500/15 focus:border-gold-500/60 rounded-xs p-3.5 pl-10 text-xs text-gold-100 font-sans tracking-wide focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-all duration-300"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num} className="bg-burgundy-950 text-gold-100">
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-widest text-gold-300 font-medium">Preferred Date *</label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-gold-400" />
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-burgundy-950 border border-gold-500/15 focus:border-gold-500/60 rounded-xs p-3.5 pl-10 text-xs text-gold-100 font-sans tracking-wide focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-widest text-gold-300 font-medium">Arrival Hour *</label>
                    <div className="relative">
                      <Clock className="absolute left-3.5 top-3.5 w-4 h-4 text-gold-400" />
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-burgundy-950 border border-gold-500/15 focus:border-gold-500/60 rounded-xs p-3.5 pl-10 text-xs text-gold-100 font-sans tracking-wide focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-all duration-300"
                      >
                        {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'].map((t) => (
                          <option key={t} value={t} className="bg-burgundy-950 text-gold-100">
                            {t} PM
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Table Preference */}
                <div className="space-y-2 pt-2">
                  <label className="block text-xs uppercase tracking-widest text-gold-300 font-medium">Dining Chamber Preference *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { key: 'standard', label: 'Grand Imperial Hall' },
                      { key: 'window', label: 'Lotus Water Gardens' },
                      { key: 'chef-counter', 'label': 'Chef Vignesh\'s Counter' },
                      { key: 'private-alcove', label: 'Private Velvet Alcove' },
                    ].map((pref) => (
                      <button
                        key={pref.key}
                        type="button"
                        onClick={() => setTablePreference(pref.key as any)}
                        className={`text-left p-4 rounded-xs border text-xs font-sans tracking-wide transition-all duration-300 flex items-start space-x-3 cursor-pointer focus:outline-none ${
                          tablePreference === pref.key
                            ? 'bg-burgundy-800 border-gold-500 text-gold-100 shadow-md'
                            : 'bg-burgundy-950 border-gold-500/10 text-neutral-400 hover:text-gold-200 hover:border-gold-500/30'
                        }`}
                      >
                        <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center mt-0.5 ${
                          tablePreference === pref.key ? 'border-gold-400 bg-gold-400' : 'border-neutral-500'
                        }`}>
                          {tablePreference === pref.key && <div className="w-1.5 h-1.5 rounded-full bg-burgundy-950" />}
                        </div>
                        <div>
                          <p className="font-semibold uppercase tracking-wider text-[10px]">{pref.label}</p>
                          <p className="text-[10px] text-neutral-500 mt-1 font-light leading-snug truncate max-w-[200px]">
                            {tableDescriptions[pref.key as keyof typeof tableDescriptions]}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Special Request */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest text-gold-300 font-medium">Special Requests or Dietary Warnings</label>
                  <textarea
                    rows={3}
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    placeholder="e.g. Vegan preparation, celebrating golden anniversary, allergic to walnuts..."
                    className="w-full bg-burgundy-950 border border-gold-500/15 focus:border-gold-500/60 rounded-xs p-3.5 text-xs text-gold-100 font-sans tracking-wide placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Error Message */}
                {errorMessage && (
                  <div className="bg-red-950/40 border border-red-500/30 p-4 rounded-xs text-xs text-red-200">
                    {errorMessage}
                  </div>
                )}

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-burgundy-800 border border-gold-400 text-gold-400 py-4 text-xs uppercase tracking-[0.3em] font-bold hover:bg-gold-400 hover:text-burgundy-800 transition-colors duration-300 cursor-pointer"
                  >
                    Confirm Booking Spot
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Upcoming Bookings / Opening Hours (Right Column) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Opening Hours Card */}
            <div className="bg-burgundy-900/10 border border-gold-500/10 p-6 md:p-8 rounded-xs shadow-xl relative overflow-hidden">
              <h3 className="font-serif text-lg font-semibold text-gold-200 tracking-wide border-b border-gold-500/20 pb-4 mb-4 uppercase">
                Opening Hours
              </h3>
              <div className="space-y-4 font-sans text-xs">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-neutral-400">Monday - Thursday</span>
                  <span className="text-gold-100 font-medium">6:00 PM - 11:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-neutral-400">Friday - Saturday</span>
                  <span className="text-gold-100 font-medium">5:30 PM - Midnight</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-neutral-400">Sunday Gala Dinner</span>
                  <span className="text-gold-100 font-medium">5:00 PM - 11:00 PM</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-burgundy-950 border border-gold-500/5 rounded-xs space-y-1">
                <p className="font-serif italic text-[11px] text-gold-300 text-center">
                  &ldquo;Smart elegant dress code strictly requested for all chambers.&rdquo;
                </p>
              </div>
            </div>

            {/* Upcoming Bookings Listing (Reads and updates live!) */}
            <div className="bg-burgundy-900/10 border border-gold-500/10 p-6 md:p-8 rounded-xs shadow-xl relative overflow-hidden">
              <h3 className="font-serif text-lg font-semibold text-gold-200 tracking-wide border-b border-gold-500/20 pb-4 mb-4 uppercase">
                Your Bookings ({existingReservations.length})
              </h3>

              {existingReservations.length === 0 ? (
                <div className="py-6 text-center space-y-3">
                  <HelpCircle className="w-8 h-8 text-gold-500/30 mx-auto" />
                  <p className="font-sans text-xs text-neutral-400/80 font-light">
                    No active bookings found in this browser\'s local session cache.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1">
                  {existingReservations.map((res) => (
                    <div
                      key={res.id}
                      className="p-3.5 bg-burgundy-950 border border-gold-500/10 rounded-xs flex justify-between items-start space-x-3 hover:border-gold-500/30 transition-all duration-300"
                    >
                      <div className="font-sans text-xs space-y-1.5 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-gold-400">{res.id}</span>
                          <span className="text-[9px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-xs font-semibold uppercase">
                            ACTIVE
                          </span>
                        </div>
                        <p className="text-gold-100 font-medium truncate">{res.name}</p>
                        <p className="text-neutral-400 text-[10px]">
                          {res.date} @ {res.time} • {res.guests} Pax
                        </p>
                        <p className="text-gold-300/80 text-[10px] uppercase font-semibold tracking-wider">
                          {res.tablePreference.replace('-', ' ')}
                        </p>
                      </div>

                      {/* Cancel Button */}
                      <button
                        onClick={() => handleCancelReservation(res.id)}
                        className="text-neutral-500 hover:text-rose-400 p-1.5 bg-burgundy-900/30 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 rounded-xs transition-all duration-300 cursor-pointer"
                        title="Cancel this booking"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
