import { RefreshCw, ArrowRight, Zap, Search, AlertTriangle, Settings, Shield, BarChart3, TestTube } from 'lucide-react';
import { motion } from 'motion/react';

export function ClosedLoopSlide() {
  const loopSteps = [
    { icon: AlertTriangle, label: 'Runtime Incident', color: 'text-green-400', bg: 'bg-green-500/15', border: 'border-green-500/50' },
    { icon: TestTube, label: 'Adversarial Test Success', color: 'text-red-400', bg: 'bg-red-500/15', border: 'border-red-500/50' },
    { icon: Search, label: 'Exploit Validated', color: 'text-amber-400', bg: 'bg-amber-500/15', border: 'border-amber-500/50' },
    { icon: Settings, label: 'Rule Regeneration', color: 'text-cyan-400', bg: 'bg-cyan-500/15', border: 'border-cyan-500/50' },
    { icon: Shield, label: 'Policy Update', color: 'text-blue-400', bg: 'bg-blue-500/15', border: 'border-blue-500/50' },
    { icon: BarChart3, label: 'Re-score Risk', color: 'text-purple-400', bg: 'bg-purple-500/15', border: 'border-purple-500/50' },
    { icon: Zap, label: 'Re-test Automatically', color: 'text-green-400', bg: 'bg-green-500/15', border: 'border-green-500/50' },
  ];

  const regenerated = [
    { title: 'Static Analysis Rules', desc: 'Detection patterns evolve from confirmed runtime exploits', color: 'text-cyan-400', border: 'border-cyan-500/30' },
    { title: 'Dynamic Test Scenarios', desc: 'Attack simulations updated with newly discovered bypass methods', color: 'text-blue-400', border: 'border-blue-500/30' },
    { title: 'Agent Guardrail Constraints', desc: 'Prompt boundaries, tool restrictions, output filters auto-updated', color: 'text-green-400', border: 'border-green-500/30' },
    { title: 'Autonomy Scoring Thresholds', desc: 'Risk weights recalibrated from real-world incident impact data', color: 'text-amber-400', border: 'border-amber-500/30' },
    { title: 'CI/CD Policy Gate Thresholds', desc: 'Blocking and approval thresholds adjusted from enforcement outcomes', color: 'text-purple-400', border: 'border-purple-500/30' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-purple-500/20 rounded-lg py-2 px-6 text-center mb-6"
        >
          <span className="text-xs font-bold text-white tracking-widest">
            PATENT CORE #3: CLOSED-LOOP SELF-IMPROVING SECURITY ENGINE
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold text-white text-center mb-6"
        >
          Closed-Loop Self-Improving Security System
        </motion.h1>

        {/* 7-Step Loop Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-1 mb-3"
        >
          {loopSteps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`${step.bg} border-2 ${step.border} rounded-lg px-3 py-4 text-center min-w-[110px]`}>
                <div className="flex justify-center mb-2">
                  <step.icon className={`w-5 h-5 ${step.color}`} />
                </div>
                <span className={`text-xs font-bold ${step.color} leading-tight`}>
                  {step.label}
                </span>
              </div>
              {index < loopSteps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-cyan-400 mx-1 flex-shrink-0" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Feedback Loop Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-purple-500/10 border border-purple-500/50 rounded-lg py-2 px-6 text-center mb-6 flex items-center justify-center gap-3"
        >
          <RefreshCw className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-bold text-white">
            FEEDBACK LOOPS BACK — CONTINUOUS REGENERATION
          </span>
          <RefreshCw className="w-4 h-4 text-purple-400" />
        </motion.div>

        {/* Key Claim */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-amber-500/15 border-3 border-amber-500 rounded-xl py-4 px-6 text-center mb-6"
        >
          <span className="text-lg font-bold text-amber-400">
            KEY CLAIM: Runtime exploitability updates static analysis rules automatically
          </span>
        </motion.div>

        {/* What Gets Regenerated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-base font-bold text-white text-center mb-4">
            What Gets Regenerated Automatically:
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {regenerated.map((item, index) => (
              <div
                key={index}
                className={`bg-slate-900/50 border ${item.border} rounded-lg px-4 py-3 ${index === 4 ? 'col-span-2' : ''}`}
              >
                <span className={`text-sm font-bold ${item.color}`}>{item.title}:</span>
                <span className="text-xs text-slate-400 ml-2">{item.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-green-500/10 border border-green-500/50 rounded-xl py-4 px-6 text-center"
        >
          <p className="text-base font-bold text-green-400">
            Full automation — no manual rule updates, no human bottleneck — the loop is the invention
          </p>
        </motion.div>
      </div>
    </div>
  );
}
