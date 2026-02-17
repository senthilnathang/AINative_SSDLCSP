import { Award, ArrowRight, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export function PatentClaimsSlide() {
  const claims = [
    {
      num: 'CLAIM 1',
      title: 'A Closed-Loop AI-Native SSDLC System',
      desc: 'A method and system comprising continuous threat modeling, automated security testing, runtime exploit validation, and feedback-driven rule regeneration operating as a unified closed-loop pipeline for securing autonomous AI systems.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500',
      badgeBg: 'bg-cyan-500/30',
    },
    {
      num: 'CLAIM 2',
      title: 'An Autonomy-Weighted Dynamic Risk Engine',
      desc: 'A computational method for dynamically scoring security risk by incorporating an Autonomy Index — a composite of tool write access, irreversible action capability, memory persistence, human-in-the-loop presence, and cross-agent interaction scope — as a multiplicative risk factor.',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500',
      badgeBg: 'bg-amber-500/30',
    },
    {
      num: 'CLAIM 3',
      title: 'Threat-to-Test Automated Transformation',
      desc: 'A method comprising: parsing architectural representations, generating structured threat vectors via LLM-based reasoning, translating vectors into executable dynamic test cases (browser attacks, adversarial prompts, API fuzz, agent abuse tests), and updating the threat graph from runtime exploitability signals.',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500',
      badgeBg: 'bg-purple-500/30',
    },
  ];

  const diffs = [
    {
      old: 'Static severity scoring',
      new: 'Autonomy-weighted dynamic scoring',
      color: 'text-amber-400',
      border: 'border-amber-500/30',
    },
    {
      old: 'Manual threat modeling',
      new: 'LLM-generated structured threat graph',
      color: 'text-purple-400',
      border: 'border-purple-500/30',
    },
    {
      old: 'Post-deployment validation',
      new: 'Continuous exploitability-driven regeneration',
      color: 'text-green-400',
      border: 'border-green-500/30',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl font-bold text-white">
            Patent Claims & Differentiation
          </h1>
        </motion.div>

        {/* Three Claims */}
        <div className="space-y-4 mb-8">
          {claims.map((claim, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className={`${claim.bg} border-2 ${claim.border} rounded-2xl p-6`}
            >
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className={`${claim.badgeBg} rounded-lg px-3 py-1`}>
                    <span className="text-xs font-bold text-white">{claim.num}</span>
                  </div>
                  <Award className={`w-5 h-5 ${claim.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold ${claim.color} mb-2`}>
                    {claim.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {claim.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* vs. Traditional DevSecOps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-base font-bold text-slate-400 text-center mb-4">
            vs. Traditional DevSecOps
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {diffs.map((diff, index) => (
              <div
                key={index}
                className={`bg-slate-900/50 border ${diff.border} rounded-xl p-4`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-slate-500 line-through">{diff.old}</span>
                  <ArrowRight className="w-3 h-3 text-slate-500 flex-shrink-0" />
                </div>
                <p className={`text-sm font-bold ${diff.color}`}>{diff.new}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Filing Strategy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-cyan-500/15 border-3 border-cyan-500 rounded-xl py-4 px-6 text-center flex items-center justify-center gap-3"
        >
          <FileText className="w-5 h-5 text-cyan-400" />
          <span className="text-base font-bold text-white">
            Filing Strategy: Narrow claims on integration logic — the novelty is the closed-loop architecture
          </span>
        </motion.div>
      </div>
    </div>
  );
}
