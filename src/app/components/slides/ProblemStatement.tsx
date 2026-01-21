import { AlertTriangle, X, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function ProblemStatement() {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Traditional SSDLC Blind to AI Threats',
      description: 'Conventional security tools miss prompt injection, jailbreaks, agent abuse, and model extraction attacks.',
      impact: 'Critical',
    },
    {
      icon: X,
      title: 'Siloed Security Tools',
      description: 'SAST, DAST, and IAST operate independently without threat-driven coordination or AI context.',
      impact: 'High',
    },
    {
      icon: TrendingUp,
      title: 'Reactive Security Posture',
      description: 'Security validated only after deployment, with no continuous learning from runtime incidents or adversarial testing.',
      impact: 'High',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-white">
            The AI Security Gap
          </h1>
          <p className="text-xl text-slate-400">
            Why traditional SSDLC fails for AI-powered systems
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="space-y-6 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm hover:border-red-500/50 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                  <problem.icon className="w-8 h-8 text-red-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-semibold text-white">
                      {problem.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm">
                      {problem.impact} Impact
                    </span>
                  </div>
                  <p className="text-lg text-slate-300">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-6"
        >
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">73%</div>
            <div className="text-slate-400">
              of AI applications lack proper security testing
            </div>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">$4.5M</div>
            <div className="text-slate-400">
              Average cost of an AI security breach
            </div>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">45 days</div>
            <div className="text-slate-400">
              Average time to detect AI-specific vulnerabilities
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
