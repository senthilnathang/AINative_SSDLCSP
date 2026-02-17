import { X, PenTool, RotateCcw, Database, UserCheck, Network } from 'lucide-react';
import { motion } from 'motion/react';

export function AutonomyRiskSlide() {
  const factors = [
    {
      icon: PenTool,
      name: 'Tool Write Access',
      desc: 'Can the agent modify external systems?',
      color: 'text-red-400',
      bg: 'bg-red-500/10',
      border: 'border-red-500/50',
    },
    {
      icon: RotateCcw,
      name: 'Irreversible Action Capability',
      desc: 'Can actions be rolled back?',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/50',
    },
    {
      icon: Database,
      name: 'Memory Persistence',
      desc: 'Does the agent retain cross-session state?',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/50',
    },
    {
      icon: UserCheck,
      name: 'Human-in-the-Loop Presence',
      desc: 'Is human approval required?',
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      border: 'border-green-500/50',
    },
    {
      icon: Network,
      name: 'Cross-Agent Interaction Scope',
      desc: 'Can it influence other agents?',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/50',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-amber-500/20 rounded-lg py-2 px-6 text-center mb-6"
        >
          <span className="text-xs font-bold text-white tracking-widest">
            PATENT CORE #1: AUTONOMY-WEIGHTED RISK SCORING
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold text-white text-center mb-6"
        >
          Dynamic Risk Computation
          <br />
          for Autonomous AI Systems
        </motion.h1>

        {/* Traditional Formula - Crossed Out */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/50 border-2 border-dashed border-red-500/50 rounded-xl px-8 py-4 mb-4 flex items-center justify-between"
        >
          <div className="flex-1 text-center">
            <span className="text-slate-500 text-lg line-through">
              TRADITIONAL: Risk = Impact x Likelihood x Exposure
            </span>
            <span className="text-slate-500 text-lg ml-6">MISSING: AI Autonomy</span>
          </div>
          <div className="p-2 rounded-full bg-red-500/20 border border-red-500/50">
            <X className="w-6 h-6 text-red-400" />
          </div>
        </motion.div>

        {/* New Formula */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-amber-500/15 border-4 border-amber-500 rounded-xl px-8 py-5 mb-8 text-center"
        >
          <span className="text-2xl font-bold text-amber-400">
            Risk = Impact x Likelihood x Exposure x Autonomy Index
          </span>
        </motion.div>

        {/* Autonomy Index Factors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-lg font-bold text-white text-center mb-5">
            Autonomy Index = f(
          </h2>
          <div className="grid grid-cols-5 gap-4">
            {factors.map((factor, index) => (
              <div
                key={index}
                className={`${factor.bg} border-2 ${factor.border} rounded-xl p-4 text-center`}
              >
                <div className="flex justify-center mb-3">
                  <factor.icon className={`w-6 h-6 ${factor.color}`} />
                </div>
                <h3 className={`text-sm font-bold ${factor.color} mb-2 leading-tight`}>
                  {factor.name}
                </h3>
                <p className="text-xs text-slate-400">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>
          <h2 className="text-lg font-bold text-white text-center mt-2">)</h2>
        </motion.div>

        {/* Bottom Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-3"
        >
          <div className="bg-cyan-500/10 border-2 border-cyan-500/50 rounded-lg py-3 px-6 text-center">
            <p className="text-base font-bold text-white">
              Autonomy increases blast radius even if exploit probability is unchanged
            </p>
          </div>
          <div className="bg-green-500/10 border-2 border-green-500/50 rounded-lg py-3 px-6 text-center">
            <p className="text-sm font-bold text-green-400">
              CLAIMABLE INNOVATION — No current risk model incorporates autonomous agent capability into security scoring
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
