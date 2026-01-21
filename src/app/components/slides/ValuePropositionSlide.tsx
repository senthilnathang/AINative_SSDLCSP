import { motion } from 'motion/react';
import { Rocket, DollarSign, Clock, Users, TrendingUp, Shield } from 'lucide-react';

export function ValuePropositionSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 mb-6">
            <Rocket className="w-12 h-12 text-cyan-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Value Proposition
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Secure AI at Scale – From Development to Production
          </p>
        </motion.div>

        {/* Key Benefits */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: DollarSign,
              title: 'Cost Reduction',
              value: '73%',
              description: 'Lower security remediation costs',
              color: 'green',
              metrics: [
                'Fewer production incidents',
                'Automated vulnerability fixes',
                'Reduced manual security reviews',
              ],
            },
            {
              icon: Clock,
              title: 'Time to Market',
              value: '5x',
              description: 'Faster secure deployments',
              color: 'blue',
              metrics: [
                'Automated security gates',
                'Real-time threat feedback',
                'Parallel scanning pipelines',
              ],
            },
            {
              icon: Shield,
              title: 'Risk Reduction',
              value: '91%',
              description: 'Fewer critical vulnerabilities',
              color: 'purple',
              metrics: [
                'Proactive threat detection',
                'AI-specific security controls',
                'Continuous validation',
              ],
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              className={`bg-gradient-to-br from-${benefit.color}-900/40 to-${benefit.color}-800/30 border border-${benefit.color}-500/50 rounded-2xl p-8 hover:scale-105 transition-transform`}
            >
              <div className={`inline-flex p-4 rounded-xl bg-${benefit.color}-500/20 mb-6`}>
                <benefit.icon className={`w-10 h-10 text-${benefit.color}-400`} />
              </div>
              <div className={`text-5xl font-bold text-${benefit.color}-400 mb-2`}>
                {benefit.value}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-slate-400 mb-4">{benefit.description}</p>
              <div className="space-y-2">
                {benefit.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${benefit.color}-400`} />
                    {metric}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 border border-slate-700 rounded-2xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Typical Enterprise ROI (500+ Developers)
          </h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">$2.3M</div>
              <div className="text-sm text-slate-400 mb-1">Annual Security Costs</div>
              <div className="text-xs text-slate-500">Before platform</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">$680K</div>
              <div className="text-sm text-slate-400 mb-1">Annual Platform Cost</div>
              <div className="text-xs text-slate-500">Including implementation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">$1.6M</div>
              <div className="text-sm text-slate-400 mb-1">Annual Savings</div>
              <div className="text-xs text-slate-500">Net benefit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">5.2 mo</div>
              <div className="text-sm text-slate-400 mb-1">Payback Period</div>
              <div className="text-xs text-slate-500">Break-even point</div>
            </div>
          </div>
        </motion.div>

        {/* What Makes It Different */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            What Makes This Different
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-900/50 border-l-4 border-red-500 rounded-lg p-6">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-red-400 text-2xl">✗</span>
                Traditional SSDLC Tools
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  Point solutions working in silos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  Generic rules, high false positives
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  Blind to AI-specific threats
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  Manual processes and reviews
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  Static security posture
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  Reactive incident response
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border-l-4 border-green-500 rounded-lg p-6">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-green-400 text-2xl">✓</span>
                AI-Native Security Platform
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  Unified platform with shared intelligence
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  Threat-driven, context-aware detection
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  Purpose-built for LLMs and agents
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  Automated policy enforcement
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  Self-improving through continuous learning
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  Proactive adversarial validation
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Target Audience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="grid grid-cols-3 gap-6 mb-12"
        >
          {[
            {
              icon: Users,
              role: 'CISOs',
              benefit: 'Comprehensive risk visibility and compliance automation',
            },
            {
              icon: TrendingUp,
              role: 'CTOs',
              benefit: 'Accelerated AI adoption without compromising security',
            },
            {
              icon: Shield,
              role: 'Security Engineers',
              benefit: 'Powerful tools that scale with engineering velocity',
            },
          ].map((audience, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center"
            >
              <div className="inline-flex p-4 rounded-xl bg-cyan-500/20 mb-4">
                <audience.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{audience.role}</h3>
              <p className="text-sm text-slate-400">{audience.benefit}</p>
            </div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border-2 border-cyan-500/60 rounded-2xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Not a Scanner. A Security Operating System.
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              The only platform that unifies threat modeling, static/dynamic analysis,
              runtime intelligence, and adversarial testing for AI-powered applications.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="px-6 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-semibold">
                AI-Native
              </div>
              <div className="px-6 py-2 rounded-lg bg-purple-500/20 border border-purple-500/40 text-purple-300 font-semibold">
                Threat-Driven
              </div>
              <div className="px-6 py-2 rounded-lg bg-green-500/20 border border-green-500/40 text-green-300 font-semibold">
                Continuously Learning
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
