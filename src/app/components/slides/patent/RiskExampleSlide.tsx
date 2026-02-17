import { ShieldAlert, ShieldCheck, ShieldX, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

export function RiskExampleSlide() {
  const lowTraits = [
    'No tool write access',
    'No persistent memory',
    'Human approves all outputs',
    'Single-agent, no cross-system reach',
  ];

  const highTraits = [
    'Full database write access',
    'Persistent memory across sessions',
    'No human-in-the-loop',
    'Multi-agent communication enabled',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-6"
        >
          Same Vulnerability, Different Risk
        </motion.h1>

        {/* Vulnerability Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/50 border border-slate-700 rounded-xl py-3 px-6 text-center mb-8 flex items-center justify-center gap-3"
        >
          <ShieldAlert className="w-5 h-5 text-slate-400" />
          <span className="text-slate-300">
            Vulnerability: Prompt Injection via concatenated user input | Same CVSS: 8.1
          </span>
        </motion.div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Low Autonomy - Read-Only Chatbot */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/50 border-3 border-green-500 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-7 h-7 text-green-400" />
              <h2 className="text-2xl font-bold text-green-400">Read-Only Chatbot</h2>
            </div>
            <p className="text-sm font-bold text-green-400 mb-5">Autonomy Level: LOW</p>

            <div className="space-y-3 mb-6">
              {lowTraits.map((trait, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-slate-400">{trait}</span>
                </div>
              ))}
            </div>

            <div className="bg-green-500/30 rounded-full py-3 px-6 text-center">
              <span className="text-lg font-bold text-white">RISK: 4.1 — ALLOWED</span>
            </div>
          </motion.div>

          {/* High Autonomy - Database Write Agent */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900/50 border-3 border-red-500 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <ShieldX className="w-7 h-7 text-red-400" />
              <h2 className="text-2xl font-bold text-red-400">Database Write Agent</h2>
            </div>
            <p className="text-sm font-bold text-red-400 mb-5">Autonomy Level: HIGH</p>

            <div className="space-y-3 mb-6">
              {highTraits.map((trait, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span className="text-slate-400">{trait}</span>
                </div>
              ))}
            </div>

            <div className="bg-red-500/40 rounded-full py-3 px-6 text-center">
              <span className="text-lg font-bold text-white">RISK: 9.2 — BLOCKED</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-amber-500/15 border-2 border-amber-500 rounded-2xl p-6"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-xl font-bold text-white mb-2">
                Same vulnerability, same CVSS — fundamentally different real-world risk
              </p>
              <p className="text-sm text-slate-300">
                The Autonomy Index captures what static severity scores cannot — the agent&apos;s capacity for irreversible, unsupervised action
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
