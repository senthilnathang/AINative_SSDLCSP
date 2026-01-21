import { motion } from 'motion/react';
import { RefreshCw, TrendingUp, Database, Zap, GitBranch } from 'lucide-react';

export function ContinuousLearningSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex p-4 rounded-2xl bg-purple-500/20 border border-purple-500/40 mb-6">
            <RefreshCw className="w-12 h-12 text-purple-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Continuous Learning Loop
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Self-improving security that learns from every incident, attack, and false positive
          </p>
        </motion.div>

        {/* Circular Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/40 rounded-2xl p-12">
            {/* Center Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full p-8 border-4 border-purple-400/50 shadow-2xl shadow-purple-500/50">
              <div className="text-center">
                <RefreshCw className="w-12 h-12 text-white mx-auto mb-2" />
                <div className="text-white font-bold text-sm">Learning</div>
                <div className="text-white font-bold text-sm">Engine</div>
              </div>
            </div>

            {/* Feedback Sources (Outer Ring) */}
            <div className="grid grid-cols-4 gap-6">
              {[
                {
                  title: 'Runtime Incidents',
                  icon: Zap,
                  color: 'green',
                  items: ['Successful attacks', 'Blocked attempts', 'Anomalies', 'Policy violations'],
                },
                {
                  title: 'Red Team Success',
                  icon: TrendingUp,
                  color: 'red',
                  items: ['New jailbreaks', 'Bypass techniques', 'Attack patterns', 'Exploit chains'],
                },
                {
                  title: 'False Positives',
                  icon: Database,
                  color: 'amber',
                  items: ['Developer feedback', 'Suppression patterns', 'Context analysis', 'Noise reduction'],
                },
                {
                  title: 'Threat Intel',
                  icon: GitBranch,
                  color: 'blue',
                  items: ['CVE updates', 'OWASP advisories', 'Industry reports', 'Zero-days'],
                },
              ].map((source, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`bg-slate-900/70 border border-${source.color}-500/40 rounded-xl p-6 backdrop-blur-sm`}
                >
                  <div className={`inline-flex p-3 rounded-lg bg-${source.color}-500/20 mb-4`}>
                    <source.icon className={`w-6 h-6 text-${source.color}-400`} />
                  </div>
                  <h3 className="font-bold text-white mb-3 text-sm">{source.title}</h3>
                  <div className="space-y-1">
                    {source.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <div className={`w-1 h-1 rounded-full bg-${source.color}-400`} />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Learning Outputs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            What Gets Updated Automatically
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-900/50 border border-purple-500/40 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                STRIDEGPT Threat Reasoning
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 flex-shrink-0">→</span>
                  New attack vectors added to threat models
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 flex-shrink-0">→</span>
                  Risk scoring adjusted based on exploitability
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 flex-shrink-0">→</span>
                  Threat classification refinement
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-cyan-500/40 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                CodeSecAI Detection Rules
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 flex-shrink-0">→</span>
                  New patterns from successful exploits
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 flex-shrink-0">→</span>
                  False positive suppression rules
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 flex-shrink-0">→</span>
                  Context-aware detection improvements
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-green-500/40 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                DeVAIC Runtime Detection
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 flex-shrink-0">→</span>
                  Behavioral anomaly baselines updated
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 flex-shrink-0">→</span>
                  New attack signatures from incidents
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 flex-shrink-0">→</span>
                  Performance optimization from telemetry
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-blue-500/40 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                Agent Guardrails
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 flex-shrink-0">→</span>
                  Prompt hardening from injection attempts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 flex-shrink-0">→</span>
                  Tool permission adjustments
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 flex-shrink-0">→</span>
                  Output filtering improvements
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/40 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Learning Loop Impact
          </h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">-67%</div>
              <div className="text-sm text-slate-400">False positive rate</div>
              <div className="text-xs text-slate-500 mt-1">over 90 days</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">+42%</div>
              <div className="text-sm text-slate-400">New threat detection</div>
              <div className="text-xs text-slate-500 mt-1">vs baseline</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">89%</div>
              <div className="text-sm text-slate-400">Auto-remediation rate</div>
              <div className="text-xs text-slate-500 mt-1">without human input</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">3hrs</div>
              <div className="text-sm text-slate-400">Time to protection</div>
              <div className="text-xs text-slate-500 mt-1">for new exploits</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
