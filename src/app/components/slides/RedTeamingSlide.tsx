import { motion } from 'motion/react';
import { Skull, Target, Flame, Shield, Zap } from 'lucide-react';

export function RedTeamingSlide() {
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
            <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40">
              <Skull className="w-10 h-10 text-red-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">
                AI Red Teaming
              </h1>
              <p className="text-lg text-slate-400">
                Adversarial Validation & Continuous Attack Simulation
              </p>
            </div>
          </div>
        </motion.div>

        {/* Concept Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-red-900/40 to-orange-900/40 border-2 border-red-500/60 rounded-2xl p-8 mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Flame className="w-8 h-8 text-red-400" />
              <h2 className="text-3xl font-bold text-white">Adversarial Attack Layer</h2>
              <Flame className="w-8 h-8 text-red-400" />
            </div>
            <p className="text-center text-lg text-slate-300 max-w-3xl mx-auto">
              A continuous red team that attacks your system from the outside and inside,
              probing for weaknesses before real adversaries do.
            </p>
          </div>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {/* Promptfoo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900/50 border border-red-500/40 rounded-xl p-6 hover:border-red-500/70 transition-all hover:scale-105"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-red-500/20">
                <Target className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Promptfoo</h3>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Prompt regression testing and systematic jailbreak validation
            </p>
            <div className="space-y-2">
              <div className="text-xs font-semibold text-red-300 mb-2">Capabilities:</div>
              {[
                'Jailbreak templates',
                'Prompt injection variants',
                'Output validation',
                'Regression detection',
                'LLM security benchmarks',
              ].map((capability, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                  <div className="w-1 h-1 rounded-full bg-red-400" />
                  {capability}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Garak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-900/50 border border-orange-500/40 rounded-xl p-6 hover:border-orange-500/70 transition-all hover:scale-105"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-500/20">
                <Zap className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Garak</h3>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Model vulnerability scanner for LLM-specific weaknesses
            </p>
            <div className="space-y-2">
              <div className="text-xs font-semibold text-orange-300 mb-2">Capabilities:</div>
              {[
                'Model extraction probes',
                'Hallucination testing',
                'Toxicity detection',
                'Encoding attacks',
                'Multi-language exploits',
              ].map((capability, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                  <div className="w-1 h-1 rounded-full bg-orange-400" />
                  {capability}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Giskard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-slate-900/50 border border-amber-500/40 rounded-xl p-6 hover:border-amber-500/70 transition-all hover:scale-105"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-amber-500/20">
                <Shield className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Giskard</h3>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Comprehensive AI quality and security validation
            </p>
            <div className="space-y-2">
              <div className="text-xs font-semibold text-amber-300 mb-2">Capabilities:</div>
              {[
                'Bias detection',
                'Robustness testing',
                'Data leakage checks',
                'Performance degradation',
                'Fairness metrics',
              ].map((capability, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                  <div className="w-1 h-1 rounded-full bg-amber-400" />
                  {capability}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Attack Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Attack Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                category: 'Prompt Attacks',
                attacks: ['Direct injection', 'Indirect injection', 'Context manipulation', 'System prompt leakage'],
              },
              {
                category: 'Model Exploitation',
                attacks: ['Jailbreaking', 'Model extraction', 'Membership inference', 'Backdoor triggers'],
              },
              {
                category: 'Agent Attacks',
                attacks: ['Tool abuse', 'Permission escalation', 'Memory poisoning', 'Multi-agent contamination'],
              },
              {
                category: 'Data & Privacy',
                attacks: ['PII extraction', 'Training data leakage', 'Context window attacks', 'Output censorship bypass'],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-5"
              >
                <h3 className="font-bold text-white mb-3">{category.category}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {category.attacks.map((attack, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs text-center"
                    >
                      {attack}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Continuous Validation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-red-900/30 to-purple-900/30 border border-red-500/40 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Continuous Adversarial Validation
          </h2>
          <p className="text-center text-slate-300 mb-6 max-w-3xl mx-auto">
            Red teaming runs continuously in production-like environments, adapting attack
            strategies based on system changes and emerging threat intelligence.
          </p>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-slate-900/50 border border-red-500/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-400 mb-1">24/7</div>
              <div className="text-xs text-slate-400">Continuous testing</div>
            </div>
            <div className="bg-slate-900/50 border border-red-500/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-400 mb-1">1000+</div>
              <div className="text-xs text-slate-400">Attack scenarios</div>
            </div>
            <div className="bg-slate-900/50 border border-red-500/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-400 mb-1">&lt;60s</div>
              <div className="text-xs text-slate-400">Detection time</div>
            </div>
            <div className="bg-slate-900/50 border border-red-500/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-400 mb-1">100%</div>
              <div className="text-xs text-slate-400">Coverage</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
