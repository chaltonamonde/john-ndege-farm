import React, { useState } from 'react';
import { GOOGLE_REVIEWS } from '../data/reviewsData';
import { 
  Star, 
  MapPin, 
  PenTool, 
  X, 
  ShieldCheck
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
    <section id="reviews" className="py-10 sm:py-16 bg-[#0f2015] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Brand Badge - Compact and Mobile Friendly */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6 mb-4 sm:mb-8 pb-3 sm:pb-6 border-b border-[#d4af37]/20">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1a3622] border border-[#d4af37]/40 text-[#f3cf65] text-[10px] font-bold uppercase tracking-wider mb-1">
              <Star className="w-3 h-3 text-[#d4af37] fill-[#d4af37]" />
              <span>Verified Customer Reviews</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              Client <span className="gold-gradient-text">Google Reviews</span>
            </h2>
            <p className="text-[11px] sm:text-xs text-gray-300 mt-0.5">
              Real, verified feedback from Kenyan dairy farmers & cowshed owners.
            </p>
          </div>

          {/* Rating Summary Card - Compact row on mobile */}
          <div className="flex items-center justify-between w-full sm:w-auto gap-3 bg-[#142a1b] p-2.5 sm:p-3.5 rounded-xl border border-[#d4af37]/35 shadow-md">
            <div className="flex items-center gap-2 pr-3 border-r border-[#d4af37]/25">
              <span className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">4.9</span>
              <div>
                <div className="flex text-[#d4af37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span className="text-[9px] text-gray-400 block mt-0.5">128 Ratings</span>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f3cf65] text-[#0c1810] font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 shadow-sm hover:scale-102 transition-all"
            >
              <PenTool className="w-3 h-3" />
              <span>Write Review</span>
            </button>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between text-[11px] text-gray-400 font-medium mb-2 px-1">
          <span className="flex items-center gap-1 text-[#f3cf65]">
            <span>⇄ Swipe reviews horizontally</span>
          </span>
          <span>{filtered.length} Reviews</span>
        </div>

        {/* Reviews Cards: Horizontal Swipeable on Mobile, Grid on Tablet/Desktop */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-3 sm:gap-6 pb-2 md:pb-0 no-scrollbar md:grid-cols-2 lg:grid-cols-3 -mx-4 px-4 sm:mx-0 sm:px-0">
          {filtered.map(rev => (
            <div
              key={rev.id}
              className="w-[80vw] max-w-[295px] sm:max-w-none md:w-auto shrink-0 snap-center green-card-glass rounded-2xl p-3.5 sm:p-5 border border-[#d4af37]/25 shadow-md flex flex-col justify-between hover:border-[#d4af37]/60 transition-all duration-300"
            >
              <div>
                {/* Author row */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full ${rev.avatarBg} text-white font-bold flex items-center justify-center text-xs shadow-sm`}>
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs sm:text-sm leading-tight">{rev.author}</h4>
                      <p className="text-[10px] text-gray-400 flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5 text-[#d4af37]" /> {rev.location}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex text-[#d4af37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Purchase Tag */}
                {rev.purchase && (
                  <div className="mb-2">
                    <span className="text-[9px] font-semibold px-2 py-0.5 rounded bg-[#102417] text-[#f3cf65] border border-[#d4af37]/30 inline-block line-clamp-1">
                      🏷️ {rev.purchase}
                    </span>
                  </div>
                )}

                {/* Review Text - Compact */}
                <p className="text-xs text-gray-200 leading-relaxed line-clamp-4 sm:line-clamp-none">
                  "{rev.text}"
                </p>
              </div>

              {/* Verified badge footer */}
              <div className="pt-2.5 mt-2.5 border-t border-[#d4af37]/15 flex items-center justify-between text-[10px] text-gray-400">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3 h-3" /> Verified Client
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
          <div className="bg-[#102417] border border-[#d4af37] rounded-2xl max-w-md w-full p-5 sm:p-7 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3.5 right-3.5 p-1.5 rounded-full bg-[#1a3622] text-gray-300 hover:text-white"
            >
              <X className="w-4 h-4 text-[#d4af37]" />
            </button>

            <h3 className="text-lg font-bold text-white font-['Outfit'] mb-0.5">
              Write a Review
            </h3>
            <p className="text-[11px] text-gray-300 mb-4">
              Share your experience with John Ndege Farm cattle, training, or cowshed constructions.
            </p>

            <form onSubmit={handleAddReview} className="space-y-3 text-xs">
              <div>
                <label className="text-gray-300 font-semibold block mb-1 text-[11px]">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Peter Karanja"
                  className="w-full px-3 py-2 rounded-xl bg-[#0c1810] border border-[#d4af37]/30 text-white text-xs focus:border-[#d4af37] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="text-gray-300 font-semibold block mb-1 text-[11px]">County / Town *</label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Limuru, Kiambu"
                    className="w-full px-3 py-2 rounded-xl bg-[#0c1810] border border-[#d4af37]/30 text-white text-xs focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-300 font-semibold block mb-1 text-[11px]">Service / Product</label>
                  <select
                    value={purchase}
                    onChange={(e) => setPurchase(e.target.value)}
                    className="w-full px-2 py-2 rounded-xl bg-[#0c1810] border border-[#d4af37]/30 text-white text-xs focus:border-[#d4af37] focus:outline-none"
                  >
                    <option value="Bought In-Calf Heifer">In-Calf Heifer</option>
                    <option value="Built Zero-Grazing Cowshed">Built Cowshed</option>
                    <option value="Dairy Masterclass Training">Masterclass Training</option>
                    <option value="1-on-1 Farm Consultation">Farm Advisory</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-gray-300 font-semibold block mb-1 text-[11px]">Your Rating</label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setRating(s)}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star className={`w-5 h-5 ${s <= rating ? 'text-[#d4af37] fill-[#d4af37]' : 'text-gray-600'}`} />
                    </button>
                  ))}
                  <span className="text-[#f3cf65] font-bold text-xs ml-2">{rating} / 5 Stars</span>
                </div>
              </div>

              <div>
                <label className="text-gray-300 font-semibold block mb-1 text-[11px]">Review Details *</label>
                <textarea
                  required
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share details on milk yield, cattle health, or cowshed durability..."
                  className="w-full p-2.5 rounded-xl bg-[#0c1810] border border-[#d4af37]/30 text-white text-xs focus:border-[#d4af37] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3cf65] to-[#d4af37] text-[#0c1810] font-black text-xs uppercase tracking-wider shadow-md hover:scale-102 transition-all"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
