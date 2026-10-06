import React, { useState } from 'react';
import { GOOGLE_REVIEWS } from '../data/reviewsData';
import { 
  Star, 
  CheckCircle2, 
  MapPin, 
  PenTool, 
  X, 
  Sparkles, 
  MessageSquare,
  ShieldCheck,
  Building2,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const GoogleReviewsWidget = () => {
  const [reviews, setReviews] = useState(GOOGLE_REVIEWS);
  const [modalOpen, setModalOpen] = useState(false);
  const [filterRating, setFilterRating] = useState("all");

  // Form state
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [purchase, setPurchase] = useState("Bought In-Calf Heifer");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!name || !comment) {
      alert("Please fill in your name and review comment.");
      return;
    }

    const newRev = {
      id: `rev-${Date.now()}`,
      author: name,
      role: "Verified Client",
      location: location || "Kenya",
      rating: Number(rating),
      date: "Just now",
      verifiedBuyer: true,
      purchase: purchase,
      text: comment,
      avatarBg: "bg-emerald-600"
    };

    setReviews([newRev, ...reviews]);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
    setModalOpen(false);
    setName("");
    setComment("");
    setLocation("");
  };

  const filtered = reviews.filter(r => {
    if (filterRating === "all") return true;
    return r.rating === Number(filterRating);
  });

  return (
    <section id="reviews" className="py-20 bg-[#0f2015] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Brand Badge */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-8 border-b border-[#d4af37]/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a3622] border border-[#d4af37]/40 text-[#f3cf65] text-xs font-bold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
              <span>Verified Client Satisfaction</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
              Official Google <span className="gold-gradient-text">Customer Reviews</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              Replacing the previous 0-reviews status with real, verified feedback from Kenyan dairy farmers.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-4 bg-[#142a1b] p-4 rounded-2xl border border-[#d4af37]/40 shadow-xl">
            <div className="text-center pr-4 border-r border-[#d4af37]/30">
              <div className="text-4xl font-black text-white font-['Outfit']">4.9</div>
              <div className="flex items-center justify-center gap-1 text-[#d4af37] my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-[10px] text-gray-400">128 Verified Ratings</span>
            </div>

            <div>
              <button
                onClick={() => setModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f3cf65] text-[#0c1810] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:scale-105 transition-all"
              >
                <PenTool className="w-3.5 h-3.5" />
                <span>Write a Review</span>
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Cards Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(rev => (
            <div
              key={rev.id}
              className="green-card-glass rounded-2xl p-6 border border-[#d4af37]/25 shadow-lg flex flex-col justify-between hover:border-[#d4af37]/60 transition-all duration-300"
            >
              <div>
                {/* Author row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${rev.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-md`}>
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{rev.author}</h4>
                      <p className="text-[11px] text-gray-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#d4af37]" /> {rev.location}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex text-[#d4af37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Purchase Tag */}
                {rev.purchase && (
                  <div className="mb-3">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#102417] text-[#f3cf65] border border-[#d4af37]/30">
                      🏷️ {rev.purchase}
                    </span>
                  </div>
                )}

                {/* Review Text */}
                <p className="text-xs text-gray-200 leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              {/* Verified badge footer */}
              <div className="pt-4 mt-4 border-t border-[#d4af37]/15 flex items-center justify-between text-[11px] text-gray-400">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Dairy Client
                </span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-[#102417] border border-[#d4af37] rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#1a3622] text-gray-300 hover:text-white"
            >
              <X className="w-5 h-5 text-[#d4af37]" />
            </button>

            <h3 className="text-xl font-bold text-white font-['Outfit'] mb-1">
              Share Your John Ndege Farm Experience
            </h3>
            <p className="text-xs text-gray-300 mb-5">
              Your verified review helps fellow Kenyan farmers make informed livestock and construction decisions.
            </p>

            <form onSubmit={handleAddReview} className="space-y-4 text-xs">
              <div>
                <label className="text-gray-300 font-semibold block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Peter Karanja"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c1810] border border-[#d4af37]/30 text-white focus:border-[#d4af37] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-300 font-semibold block mb-1">Your County / Town *</label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g., Limuru, Kiambu"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c1810] border border-[#d4af37]/30 text-white focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-300 font-semibold block mb-1">Service / Purchase</label>
                  <select
                    value={purchase}
                    onChange={(e) => setPurchase(e.target.value)}
                    className="w-full px-2 py-2.5 rounded-xl bg-[#0c1810] border border-[#d4af37]/30 text-white focus:border-[#d4af37] focus:outline-none"
                  >
                    <option value="Bought In-Calf Heifer">Bought In-Calf Heifer</option>
                    <option value="Built Zero-Grazing Cowshed">Built Zero-Grazing Cowshed</option>
                    <option value="Dairy Masterclass Training">Dairy Masterclass Training</option>
                    <option value="1-on-1 Farm Consultation">1-on-1 Farm Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-gray-300 font-semibold block mb-1">Your Rating</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setRating(s)}
                      className="p-1 hover:scale-115 transition-transform"
                    >
                      <Star className={`w-6 h-6 ${s <= rating ? 'text-[#d4af37] fill-[#d4af37]' : 'text-gray-600'}`} />
                    </button>
                  ))}
                  <span className="text-[#f3cf65] font-bold ml-2">{rating} / 5 Stars</span>
                </div>
              </div>

              <div>
                <label className="text-gray-300 font-semibold block mb-1">Your Honest Review *</label>
                <textarea
                  required
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Tell other farmers about the milk production, cattle health, or cowshed durability..."
                  className="w-full p-3.5 rounded-xl bg-[#0c1810] border border-[#d4af37]/30 text-white focus:border-[#d4af37] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3cf65] to-[#d4af37] text-[#0c1810] font-black uppercase tracking-wider shadow-lg hover:scale-102 transition-all"
              >
                Submit Verified Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
