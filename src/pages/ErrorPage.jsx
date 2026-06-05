
import { Home, ArrowLeft } from 'lucide-react';
import { IMAGES } from '../assets';

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-[#0A1428] flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Optional Illustration */}
        <div className="mb-10">
          <img 
            src={IMAGES.logo} 
            alt="Error" 
            className="mx-auto w-24 md:w-36 opacity-90"
          />
        </div>

        {/* Error Code */}
        <h1 className="text-[120px] md:text-[160px] font-bold leading-none text-white/10 tracking-tighter">
          404
        </h1>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white -mt-8 mb-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-white/60 text-lg md:text-xl max-w-md mx-auto mb-10">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center justify-center gap-3 bg-[#FF6B1A] hover:bg-[#FF8A3D] transition-all duration-300 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg shadow-[#FF6B1A]/30 hover:scale-105 active:scale-95"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </button>

          <button 
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-3 border border-white/30 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
}