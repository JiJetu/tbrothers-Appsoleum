import { Shield, Lock, FolderOpen, Users } from 'lucide-react';
import { IMAGES } from '../../assets';

export default function CapsulesSection() {
  return (
    <section className="py-24 bg-[#0A1929] text-white relative overflow-hidden">
      <div className="px-8 md:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#FF6B1A] font-medium tracking-widest">APPSO CAPSULES</span>
              <div className="h-px w-12 bg-[#FF6B1A]"></div>
            </div>

            <h2 className="text-2xl lg:text-3xl xl:text-5xl font-bold leading-tight">
              Where Memories<br />
              Become <span className="text-[#FF6B1A]">Legacy.</span>
            </h2>

            <p className="mt-6 text-lg text-gray-300 max-w-lg">
              Appso Capsules are your private legacy vault. Securely save videos, audio, photos, 
              stories, documents, and life moments that matter most — and keep them protected for generations to come.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#1E2A4D] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#FF6B1A]" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Private &amp; Secure</h4>
                  <p className="text-gray-400 mt-1 text-[15px]">End-to-end encryption ensures you only control your memories.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#1E2A4D] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-[#FF6B1A]" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Preserved Forever</h4>
                  <p className="text-gray-400 mt-1 text-[15px]">Your moments stay safe and untouched until you're ready.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#1E2A4D] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FolderOpen className="w-6 h-6 text-[#FF6B1A]" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Organized Your Way</h4>
                  <p className="text-gray-400 mt-1 text-[15px]">Create capsules for every chapter of life that matters to you.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#1E2A4D] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#FF6B1A]" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Built for Generations</h4>
                  <p className="text-gray-400 mt-1 text-[15px]">Pass down your legacy and keep your story alive for years to come.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Phone Composition */}
          <div className="relative flex justify-center">
            <div className="relative w-full">
              {/* Main Phone Image */}
              <img
                src={IMAGES.capsulesSection}
                alt="Appso Capsules Phone Preview"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}