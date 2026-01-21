import { Target, Shield, Zap, Brain, GitBranch, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

export function VisionSlide() {
  const pillars = [
    {
      icon: Target,
      title: 'Threat-Driven',
      description: 'Security decisions anchored in real threat models, not generic checklists',
      color: 'cyan',
    },
    {
      icon: Brain,
      title: 'AI-Native',
      description: 'Purpose-built to secure LLMs, agents, and autonomous AI systems',
      color: 'purple',
    },
    {
      icon: GitBranch,
      title: 'DevSecOps First',
      description: 'Seamlessly integrated into CI/CD pipelines with policy gates',
      color: 'blue',
    },
    {
      icon: RefreshCw,
      title: 'Continuously Learning',
      description: 'Self-improving through runtime feedback and adversarial validation',
      color: 'green',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Shield className="w-12 h-12 text-cyan-400" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Vision
          </h1>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
            A Security Operating System that shifts security left, operates continuously, and evolves with every deployment
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-500/50 transition-all hover:scale-105"
            >
              <div
                className={`inline-flex p-4 rounded-xl bg-${pillar.color}-500/10 border border-${pillar.color}-500/30 mb-6`}
              >
                <pillar.icon className={`w-10 h-10 text-${pillar.color}-400`} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-lg text-slate-400">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Value Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-cyan-500/30 rounded-2xl p-10 text-center"
        >
          <Zap className="w-12 h-12 text-amber-400 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-white mb-4">
            Not a Scanner. A Security Operating System.
          </h3>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Unifying threat modeling, static/dynamic analysis, runtime intelligence, and adversarial testing into a single, intelligent platform that learns and adapts.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
