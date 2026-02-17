import { ArrowRight, RefreshCw, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

export function SystemArchitectureSlide() {
  const steps = [
    { label: 'Architecture Inputs', color: 'text-slate-400', bg: 'bg-slate-400/10', border: 'border-slate-400/50' },
    { label: 'LLM-Based Threat Reasoning', color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/50' },
    { label: 'Structured Threat Graph', color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/50' },
    { label: 'Automated Test Case Generation', color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/50' },
    { label: 'Runtime Exploitability Validation', color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/50' },
    { label: 'Autonomy-Weighted Risk Engine', color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/50' },
    { label: 'CI/CD Policy Gate', color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/50' },
    { label: 'Learning Feedback Loop', color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/50' },
  ];

  const innovations = [
    { text: 'Threat outputs automatically generate executable dynamic test scenarios', color: 'text-cyan-400', border: 'border-cyan-500/30' },
    { text: 'Runtime exploitability signals modify static analysis rules', color: 'text-green-400', border: 'border-green-500/30' },
    { text: 'Adversarial testing results auto-update agent guardrails', color: 'text-red-400', border: 'border-red-500/30' },
    { text: 'AI Autonomy Index dynamically weights risk computation', color: 'text-amber-400', border: 'border-amber-500/30' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-2 text-center"
        >
          <h1 className="text-4xl font-bold mb-2 text-white">
            Closed-Loop Threat-Driven AI Security Engine
          </h1>
          <p className="text-lg text-cyan-400 italic">
            Core Patent System Architecture
          </p>
        </motion.div>

        {/* Architecture Flow - Horizontal Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-stretch gap-1 mb-4 mt-6"
        >
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`${step.bg} border ${step.border} rounded-lg px-3 py-4 min-w-[120px] text-center flex items-center justify-center`}>
                <span className={`text-xs font-bold ${step.color} leading-tight`}>
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-cyan-400 mx-1 flex-shrink-0" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Feedback Loop Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-purple-500/10 border-2 border-purple-500/50 rounded-lg py-3 px-6 text-center mb-8 flex items-center justify-center gap-3"
        >
          <RefreshCw className="w-5 h-5 text-purple-400" />
          <span className="text-sm font-bold text-white">
            CONTINUOUS FEEDBACK LOOP: Runtime signals regenerate threat models, rules, and test cases
          </span>
          <RefreshCw className="w-5 h-5 text-purple-400" />
        </motion.div>

        {/* Key Innovations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-bold text-cyan-400 tracking-wider">KEY INNOVATIONS</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {innovations.map((inn, index) => (
              <div
                key={index}
                className={`bg-slate-900/50 border ${inn.border} rounded-lg px-5 py-3`}
              >
                <span className={`text-sm ${inn.color}`}>{inn.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl py-4 px-6 text-center"
        >
          <p className="text-lg font-bold text-white">
            The novelty is in the closed-loop integration logic — not the individual components
          </p>
        </motion.div>
      </div>
    </div>
  );
}
