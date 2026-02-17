import { Shuffle, Wrench, Database, GitBranch, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

export function CoreProblemSlide() {
  const challenges = [
    {
      icon: Shuffle,
      title: 'Non-Deterministic Behavior',
      description: 'Outputs vary per inference — traditional testing assumes repeatable results',
      color: 'red',
      borderColor: 'border-red-500/50',
      bgColor: 'bg-red-500/10',
      textColor: 'text-red-400',
    },
    {
      icon: Wrench,
      title: 'Tool Autonomy',
      description: 'Agents invoke external tools with real-world side effects beyond developer control',
      color: 'amber',
      borderColor: 'border-amber-500/50',
      bgColor: 'bg-amber-500/10',
      textColor: 'text-amber-400',
    },
    {
      icon: Database,
      title: 'Memory Mutation',
      description: 'Persistent memory enables cross-session contamination and state poisoning',
      color: 'purple',
      borderColor: 'border-purple-500/50',
      bgColor: 'bg-purple-500/10',
      textColor: 'text-purple-400',
    },
    {
      icon: GitBranch,
      title: 'Multi-Turn Reasoning',
      description: 'Complex reasoning chains create emergent attack surfaces invisible to static analysis',
      color: 'blue',
      borderColor: 'border-blue-500/50',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-400',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 text-white">
            Traditional SSDLC Cannot Secure
            <br />
            Autonomous AI Systems
          </h1>
          <p className="text-lg text-red-400">
            Existing security models assume deterministic software behavior
          </p>
        </motion.div>

        {/* Challenge Cards - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className={`bg-slate-900/50 border-2 ${challenge.borderColor} rounded-2xl p-6 backdrop-blur-sm`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${challenge.bgColor} border ${challenge.borderColor}`}>
                  <challenge.icon className={`w-6 h-6 ${challenge.textColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold ${challenge.textColor} mb-2`}>
                    {challenge.title}
                  </h3>
                  <p className="text-slate-400">
                    {challenge.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Gap Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-red-500/10 border-2 border-red-500 rounded-2xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/50">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-red-400 mb-3 tracking-wider">
                THE CORE GAP
              </h3>
              <p className="text-xl text-white">
                No existing system dynamically links threat modeling, exploit validation,
                autonomy scoring, and CI/CD enforcement in a closed loop.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
