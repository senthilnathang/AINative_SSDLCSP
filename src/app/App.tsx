import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { TitleSlide } from '@/app/components/slides/TitleSlide';
import { ProblemStatement } from '@/app/components/slides/ProblemStatement';
import { VisionSlide } from '@/app/components/slides/VisionSlide';
import { MasterArchitecture } from '@/app/components/slides/MasterArchitecture';
import { ThreatModelingSlide } from '@/app/components/slides/ThreatModelingSlide';
import { SASTSlide } from '@/app/components/slides/SASTSlide';
import { DASTSlide } from '@/app/components/slides/DASTSlide';
import { IASTSlide } from '@/app/components/slides/IASTSlide';
import { RedTeamingSlide } from '@/app/components/slides/RedTeamingSlide';
import { RiskEngineSlide } from '@/app/components/slides/RiskEngineSlide';
import { ContinuousLearningSlide } from '@/app/components/slides/ContinuousLearningSlide';
import { GovernanceSlide } from '@/app/components/slides/GovernanceSlide';
import { ValuePropositionSlide } from '@/app/components/slides/ValuePropositionSlide';

const slides = [
  { component: TitleSlide, title: 'Title' },
  { component: ProblemStatement, title: 'Problem Statement' },
  { component: VisionSlide, title: 'Vision' },
  { component: MasterArchitecture, title: 'Architecture' },
  { component: ThreatModelingSlide, title: 'Threat Modeling' },
  { component: SASTSlide, title: 'SAST' },
  { component: DASTSlide, title: 'DAST' },
  { component: IASTSlide, title: 'IAST' },
  { component: RedTeamingSlide, title: 'AI Red Teaming' },
  { component: RiskEngineSlide, title: 'Risk Engine' },
  { component: ContinuousLearningSlide, title: 'Continuous Learning' },
  { component: GovernanceSlide, title: 'Governance' },
  { component: ValuePropositionSlide, title: 'Value Proposition' },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Main Slide Area */}
      <div className="h-screen flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="flex-1 overflow-auto"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left: Slide Counter */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => goToSlide(0)}
                className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
                title="Go to start"
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
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'w-8 bg-cyan-500'
                      : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                  title={slides[index].title}
                />
              ))}
            </div>

            {/* Right: Prev/Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
