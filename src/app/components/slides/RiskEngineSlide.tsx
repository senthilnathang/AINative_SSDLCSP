import { motion } from 'motion/react';
import { Brain, Scale, TrendingUp, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export function RiskEngineSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/40">
              <Brain className="w-10 h-10 text-amber-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">
                Unified Risk Engine
              </h1>
              <p className="text-lg text-slate-400">
                Business-Driven Security Decisions
              </p>
            </div>
          </div>
        </motion.div>

        {/* Risk Formula */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 border-2 border-amber-500/60 rounded-2xl p-10 mb-12 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Risk Calculation Formula</h2>
          <div className="text-4xl font-bold text-amber-400 mb-6">
            Risk = Impact × Likelihood × Exposure × AI Autonomy
          </div>
          <p className="text-slate-300 max-w-3xl mx-auto">
            A multi-dimensional risk model that considers not just traditional vulnerability factors,
            but also the unique characteristics of AI systems and their autonomy level.
          </p>
        </motion.div>

        {/* Risk Factors */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          {[
            {
              factor: 'Impact',
              icon: AlertCircle,
              color: 'red',
              description: 'Business and data impact of exploitation',
              metrics: ['Data sensitivity', 'System criticality', 'Compliance impact', 'Reputation risk'],
            },
            {
              factor: 'Likelihood',
              icon: TrendingUp,
              color: 'amber',
              description: 'Probability of successful exploitation',
              metrics: ['Attack complexity', 'Exploit availability', 'Authentication required', 'Skill level'],
            },
            {
              factor: 'Exposure',
              icon: Scale,
              color: 'blue',
              description: 'Attack surface and accessibility',
              metrics: ['Internet-facing', 'User access', 'API exposure', 'Network position'],
            },
            {
              factor: 'AI Autonomy',
              icon: Brain,
              color: 'purple',
              description: 'Level of autonomous decision-making',
              metrics: ['Tool permissions', 'Human-in-loop', 'Action scope', 'Self-modification'],
            },
          ].map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`bg-slate-900/50 border border-${factor.color}-500/40 rounded-xl p-6 hover:border-${factor.color}-500/70 transition-all`}
            >
              <div className={`inline-flex p-3 rounded-xl bg-${factor.color}-500/20 mb-4`}>
                <factor.icon className={`w-6 h-6 text-${factor.color}-400`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{factor.factor}</h3>
              <p className="text-sm text-slate-400 mb-4">{factor.description}</p>
              <div className="space-y-1">
                {factor.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                    <div className={`w-1 h-1 rounded-full bg-${factor.color}-400`} />
                    {metric}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Policy Gates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Automated Policy Gates</h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-red-900/40 to-red-800/30 border border-red-500/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-400" />
                <h3 className="font-bold text-white text-lg">Block Build</h3>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                Immediately halt pipeline for critical risks
              </p>
              <div className="space-y-2">
                <div className="text-xs text-red-300">Triggers:</div>
                <div className="text-xs text-slate-500">• Risk Score &gt; 9.0</div>
                <div className="text-xs text-slate-500">• Critical with high autonomy</div>
                <div className="text-xs text-slate-500">• Public data exposure</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-900/40 to-amber-800/30 border border-amber-500/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-8 h-8 text-amber-400" />
                <h3 className="font-bold text-white text-lg">Require Approval</h3>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                Human review before deployment
              </p>
              <div className="space-y-2">
                <div className="text-xs text-amber-300">Triggers:</div>
                <div className="text-xs text-slate-500">• Risk Score 7.0-9.0</div>
                <div className="text-xs text-slate-500">• New attack patterns</div>
                <div className="text-xs text-slate-500">• Compliance violations</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/30 border border-blue-500/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
                <h3 className="font-bold text-white text-lg">Auto-Mitigate</h3>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                Apply automatic fixes and continue
              </p>
              <div className="space-y-2">
                <div className="text-xs text-blue-300">Triggers:</div>
                <div className="text-xs text-slate-500">• Risk Score 4.0-7.0</div>
                <div className="text-xs text-slate-500">• Known remediation</div>
                <div className="text-xs text-slate-500">• Low impact issues</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-green-800/30 border border-green-500/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h3 className="font-bold text-white text-lg">Accept Risk</h3>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                Log and monitor with no action
              </p>
              <div className="space-y-2">
                <div className="text-xs text-green-300">Triggers:</div>
                <div className="text-xs text-slate-500">• Risk Score &lt; 4.0</div>
                <div className="text-xs text-slate-500">• False positive likely</div>
                <div className="text-xs text-slate-500">• Compensating controls</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Risk Scoring Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-slate-900/50 border border-slate-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Example Risk Calculation</h2>
          <div className="grid grid-cols-5 gap-4 items-center">
            <div className="col-span-4 space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-slate-400">Impact:</div>
                <div className="flex-1 bg-slate-800 rounded-full h-3 overflow-hidden">
                  <div className="bg-red-500 h-full" style={{ width: '90%' }}></div>
                </div>
                <div className="w-16 text-right text-sm text-white font-semibold">9/10</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-slate-400">Likelihood:</div>
                <div className="flex-1 bg-slate-800 rounded-full h-3 overflow-hidden">
                  <div className="bg-amber-500 h-full" style={{ width: '70%' }}></div>
                </div>
                <div className="w-16 text-right text-sm text-white font-semibold">7/10</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-slate-400">Exposure:</div>
                <div className="flex-1 bg-slate-800 rounded-full h-3 overflow-hidden">
                  <div className="bg-blue-500 h-full" style={{ width: '80%' }}></div>
                </div>
                <div className="w-16 text-right text-sm text-white font-semibold">8/10</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-slate-400">AI Autonomy:</div>
                <div className="flex-1 bg-slate-800 rounded-full h-3 overflow-hidden">
                  <div className="bg-purple-500 h-full" style={{ width: '95%' }}></div>
                </div>
                <div className="w-16 text-right text-sm text-white font-semibold">9.5/10</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-900/50 to-red-800/40 border-2 border-red-500/60 rounded-xl p-6 text-center">
              <div className="text-xs text-red-300 mb-2">Final Risk Score</div>
              <div className="text-4xl font-bold text-red-400">9.2</div>
              <div className="text-xs text-slate-400 mt-2">CRITICAL</div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-white mb-1">Automated Action: Block Build</div>
                <div className="text-sm text-slate-400">
                  Prompt injection vulnerability in autonomous agent with write access to production database
                </div>
              </div>
              <div className="px-6 py-3 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300 font-bold">
                ✋ BLOCKED
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
