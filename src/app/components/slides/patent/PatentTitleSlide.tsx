import { Shield, Brain, Lock, Zap, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

export function PatentTitleSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400" />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        {/* Icon Array */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30">
            <Shield className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30">
            <Brain className="w-8 h-8 text-purple-400" />
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30">
            <Lock className="w-8 h-8 text-blue-400" />
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30">
            <Zap className="w-8 h-8 text-amber-400" />
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30">
            <RefreshCw className="w-8 h-8 text-green-400" />
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Closed-Loop AI-Native
          <br />
          Threat-Driven SSDLC System
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl text-cyan-400 mb-4"
        >
          With Autonomy-Weighted Risk Scoring &
          <br />
          Automated Threat-to-Test Transformation
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-slate-400 italic mb-12"
        >
          A Security Operating System for Autonomous AI Systems
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {['Closed-Loop', 'AI-Native', 'Threat-Driven', 'Autonomy-Scored', 'Self-Improving'].map((feature, index) => (
            <div
              key={index}
              className="px-5 py-2 rounded-full bg-slate-800/50 border border-cyan-500/30 text-cyan-400 text-sm backdrop-blur-sm"
            >
              {feature}
            </div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-slate-800/50 rounded-lg py-3 px-6 inline-block"
        >
          <span className="text-slate-500 text-sm">
            Patent Filing Presentation | Defensible Invention Narrative
          </span>
        </motion.div>
      </div>
    </div>
  );
}
