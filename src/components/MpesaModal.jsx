import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Smartphone, 
  ShieldCheck, 
  Coins, 
  ArrowRight, 
  Copy, 
  Check, 
  MessageCircle, 
  Clock 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const MpesaModal = ({ isOpen, onClose, reservationData, currency }) => {
  if (!isOpen || !reservationData) return null;

  const [phoneNumber, setPhoneNumber] = useState(reservationData.customerPhone || "");
  const [stkStatus, setStkStatus] = useState("idle"); // idle, processing, success
  const [copiedTill, setCopiedTill] = useState(false);

  const tillNumber = "8472910";
  const businessName = "JOHN NDEGE FARM LTD";

  const handleCopyTill = () => {
    navigator.clipboard.writeText(tillNumber);
    setCopiedTill(true);
    setTimeout(() => setCopiedTill(false), 2000);
  };

  const handleTriggerStk = (e) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 9) {
      alert("Please enter a valid Safaricom phone number (e.g. 0712 345 678)");
      return;
    }

    setStkStatus("processing");

    // Simulate Safaricom STK Push response after 3 seconds
    setTimeout(() => {
      setStkStatus("success");
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    }, 3000);
  };

  const formattedAmount = currency === 'USD' && reservationData.amountUSD
    ? `$${reservationData.amountUSD}`
    : `KES ${Number(reservationData.amountKES || 10000).toLocaleString()}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-[#102417] border-2 border-[#d4af37] rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#1a3622] text-gray-300 hover:text-white border border-[#d4af37]/30"
        >
          <X className="w-5 h-5 text-[#d4af37]" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl shadow-lg shrink-0">
            M
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Lipa Na M-Pesa Express</span>
            </div>
            <h3 className="text-xl font-black text-white font-['Outfit']">
              Reserve with Official M-Pesa Till
            </h3>
          </div>
        </div>

        {/* Item & Price Summary */}
        <div className="bg-[#0c1810] p-4 rounded-2xl border border-[#d4af37]/30 mb-6">
          <div className="flex justify-between items-center text-xs text-gray-300 mb-1">
            <span>Reservation Item:</span>
            <strong className="text-white text-right max-w-[240px] truncate">{reservationData.title}</strong>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-[#d4af37]/20">
            <span className="text-xs text-[#d4af37] font-semibold">Deposit / Payment Due:</span>
            <span className="text-2xl font-black text-emerald-400 font-['Outfit']">
              {formattedAmount}
            </span>
          </div>
        </div>

        {/* STATE 1: IDLE / FORM */}
        {stkStatus === "idle" && (
          <div className="space-y-6">
            
            {/* Automatic STK Push Section */}
            <form onSubmit={handleTriggerStk} className="space-y-3">
              <label className="text-xs font-bold text-gray-200 block">
                Option 1: Send STK Push Prompt to Your Phone
              </label>
              <div className="flex gap-2">
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="e.g., 0712 345 678"
                  className="flex-1 px-3.5 py-3 rounded-xl bg-[#0c1810] border border-[#d4af37]/30 text-white text-xs focus:border-[#d4af37] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-102 transition-all flex items-center gap-1.5 shrink-0"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Prompt Phone</span>
                </button>
              </div>
              <p className="text-[11px] text-gray-400">
                You will receive a pop-up on your Safaricom phone asking for your M-Pesa PIN.
              </p>
            </form>

            <div className="relative flex items-center justify-center my-4">
              <div className="border-t border-[#d4af37]/20 w-full" />
              <span className="bg-[#102417] px-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest shrink-0">
                OR PAY MANUALLY
              </span>
              <div className="border-t border-[#d4af37]/20 w-full" />
            </div>

            {/* Manual Buy Goods Details */}
            <div className="bg-[#142a1b] p-4 rounded-2xl border border-[#d4af37]/25 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Buy Goods Till Number:</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-base font-extrabold text-[#f3cf65]">{tillNumber}</span>
                  <button
                    onClick={handleCopyTill}
                    className="p-1 rounded bg-[#0c1810] text-gray-300 hover:text-white border border-[#d4af37]/30"
                    title="Copy Till Number"
                  >
                    {copiedTill ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Business Name:</span>
                <strong className="text-white font-semibold">{businessName}</strong>
              </div>

              <ol className="list-decimal list-inside space-y-1 text-gray-300 text-[11px] pt-2 border-t border-[#d4af37]/15">
                <li>Go to <strong>M-PESA</strong> menu on your phone</li>
                <li>Select <strong>Lipa na M-PESA</strong> → <strong>Buy Goods and Services</strong></li>
                <li>Enter Till Number: <strong className="text-[#f3cf65]">{tillNumber}</strong></li>
                <li>Enter Amount: <strong className="text-emerald-400">{formattedAmount}</strong></li>
                <li>Enter PIN and confirm transaction to <strong>{businessName}</strong></li>
              </ol>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Safaricom Merchant Account</span>
            </div>

          </div>
        )}

        {/* STATE 2: PROCESSING SIMULATION */}
        {stkStatus === "processing" && (
          <div className="text-center py-8 space-y-4 animate-in fade-in">
            <div className="w-16 h-16 rounded-full border-4 border-[#d4af37] border-t-transparent animate-spin mx-auto" />
            <h4 className="text-lg font-bold text-white">Prompt Sent to {phoneNumber}!</h4>
            <p className="text-xs text-gray-300 max-w-sm mx-auto">
              Please check your phone screen and enter your M-Pesa PIN to complete the reservation of <strong>{reservationData.title}</strong>.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-[#f3cf65]">
              <Clock className="w-4 h-4 animate-pulse" />
              <span>Awaiting Safaricom confirmation...</span>
            </div>
          </div>
        )}

        {/* STATE 3: SUCCESS */}
        {stkStatus === "success" && (
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h4 className="text-2xl font-black text-white font-['Outfit']">
              Reservation Confirmed!
            </h4>

            <p className="text-xs text-gray-200 max-w-sm mx-auto">
              Thank you! We received your deposit of <strong className="text-emerald-400">{formattedAmount}</strong> for <strong>{reservationData.title}</strong>.
            </p>

            <div className="p-3 bg-[#0c1810] rounded-xl border border-[#d4af37]/30 text-xs text-gray-300">
              Transaction Code: <strong className="text-[#f3cf65] font-mono">QKL{Math.floor(100000 + Math.random() * 900000)}Y</strong>
            </div>

            <a
              href={`https://wa.me/254722000123?text=${encodeURIComponent(
                `Hello John Ndege Farm, I have completed the M-Pesa reservation for ${reservationData.title}. Amount: ${formattedAmount}. Please send me the official receipt and farm visiting pass.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Notify Farm Manager on WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              className="text-xs text-gray-400 hover:text-white underline block mx-auto pt-2"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
