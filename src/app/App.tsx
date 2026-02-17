import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Home, Download, Loader2 } from 'lucide-react';
import { PatentTitleSlide } from '@/app/components/slides/patent/PatentTitleSlide';
import { CoreProblemSlide } from '@/app/components/slides/patent/CoreProblemSlide';
import { SystemArchitectureSlide } from '@/app/components/slides/patent/SystemArchitectureSlide';
import { AutonomyRiskSlide } from '@/app/components/slides/patent/AutonomyRiskSlide';
import { RiskExampleSlide } from '@/app/components/slides/patent/RiskExampleSlide';
import { ThreatToTestSlide } from '@/app/components/slides/patent/ThreatToTestSlide';
import { ClosedLoopSlide } from '@/app/components/slides/patent/ClosedLoopSlide';
import { PatentClaimsSlide } from '@/app/components/slides/patent/PatentClaimsSlide';
import { generatePatentPresentation } from '@/app/utils/generatePatentPptx';

const slides = [
  { component: PatentTitleSlide, title: 'Title' },
  { component: CoreProblemSlide, title: 'Core Problem' },
  { component: SystemArchitectureSlide, title: 'Architecture' },
  { component: AutonomyRiskSlide, title: 'Autonomy Risk' },
  { component: RiskExampleSlide, title: 'Risk Example' },
  { component: ThreatToTestSlide, title: 'Threat-to-Test' },
  { component: ClosedLoopSlide, title: 'Closed Loop' },
  { component: PatentClaimsSlide, title: 'Patent Claims' },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handlePatentDownload = async () => {
    if (isGenerating) return;

    setIsGenerating(true);

    try {
      await generatePatentPresentation();
    } catch (error) {
      console.error('Error generating patent presentation:', error);
      alert('Failed to generate patent presentation. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Generation Progress Overlay */}
      {isGenerating && (
        <div className="fixed inset-0 bg-slate-950/90 z-50 flex items-center justify-center">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-md w-full mx-4 text-center">
            <Loader2 className="w-12 h-12 text-purple-500 animate-spin mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Generating Presentation</h3>
            <p className="text-slate-400 mb-4">Creating your PowerPoint file...</p>
            <p className="text-sm text-slate-500">This will only take a moment</p>
          </div>
        </div>
      )}

      {/* Main Slide Area */}
      <div className="h-screen flex flex-col">
        <div className="flex-1 overflow-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <CurrentSlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left: Slide Counter */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => goToSlide(0)}
                className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
                title="Go to start"
                disabled={isGenerating}
              >
                <Home className="w-5 h-5" />
              </button>
              <span className="text-sm text-slate-400">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>

            {/* Center: Slide Dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isGenerating}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'w-8 bg-cyan-500'
                      : 'w-2 bg-slate-700 hover:bg-slate-600'
                  } ${isGenerating ? 'cursor-not-allowed' : ''}`}
                  title={slides[index].title}
                />
              ))}
            </div>

            {/* Right: Prev/Next/Download Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0 || isGenerating}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1 || isGenerating}
                className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={handlePatentDownload}
                disabled={isGenerating}
                className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                title="Download Patent PowerPoint"
              >
                {isGenerating ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
