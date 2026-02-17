import { ArrowRight, AlertCircle, Brain, Crosshair, Shield, Key, Bug, Globe, MessageSquare, Wrench, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function ThreatToTestSlide() {
  const vectorInputs = [
    { icon: Crosshair, name: 'Attack Path', desc: 'Full exploitation chain from entry to impact', color: 'text-purple-400' },
    { icon: Shield, name: 'Target Asset', desc: 'Specific component, endpoint, or agent', color: 'text-purple-400' },
    { icon: Key, name: 'Required Access', desc: 'Authentication level and privileges needed', color: 'text-purple-400' },
    { icon: Bug, name: 'Exploit Pattern', desc: 'Classified attack technique and payload type', color: 'text-purple-400' },
  ];

  const testOutputs = [
    { icon: Globe, name: 'Browser-Based Attack Script', desc: 'End-to-end UI attack simulation', color: 'text-cyan-400', border: 'border-cyan-500/50' },
    { icon: MessageSquare, name: 'LLM Adversarial Test Case', desc: 'Jailbreak and injection validation', color: 'text-red-400', border: 'border-red-500/50' },
    { icon: Bug, name: 'API Fuzz Scenario', desc: 'Mutation-based API exploitation', color: 'text-blue-400', border: 'border-blue-500/50' },
    { icon: Wrench, name: 'Agent Tool Abuse Test', desc: 'Permission escalation validation', color: 'text-amber-400', border: 'border-amber-500/50' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-cyan-500/20 rounded-lg py-2 px-6 text-center mb-6"
        >
          <span className="text-xs font-bold text-white tracking-widest">
            PATENT CORE #2: AUTOMATED THREAT-TO-TEST TRANSFORMATION
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold text-white text-center mb-4"
        >
          Automated Threat Vector to
          <br />
          Executable Attack Translation
        </motion.h1>

        {/* Problem Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-red-500/10 border-2 border-red-500/50 rounded-xl py-3 px-6 text-center mb-8 flex items-center justify-center gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-400" />
          <span className="text-red-400 font-bold">
            Today: Threat modeling outputs documents — not executable security tests
          </span>
        </motion.div>

        {/* Left and Right Panels with Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-stretch gap-4 mb-6"
        >
          {/* Left: LLM Threat Reasoning */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="w-5 h-5 text-purple-400" />
              <h2 className="text-base font-bold text-purple-400">
                LLM Threat Reasoning Engine Outputs
              </h2>
            </div>
            <div className="space-y-3">
              {vectorInputs.map((v, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-purple-500/30 rounded-lg px-4 py-3 flex items-center gap-3"
                >
                  <v.icon className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-bold text-purple-400">{v.name}</span>
                    <span className="text-xs text-slate-400 ml-3">{v.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center px-2">
            <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg p-3">
              <ArrowRight className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          {/* Right: Test Outputs */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-cyan-400" />
              <h2 className="text-base font-bold text-cyan-400">
                Auto-Generated Test Outputs
              </h2>
            </div>
            <div className="space-y-3">
              {testOutputs.map((o, index) => (
                <div
                  key={index}
                  className={`bg-slate-900/50 border-2 ${o.border} rounded-lg px-4 py-3 flex items-center gap-3`}
                >
                  <o.icon className={`w-4 h-4 ${o.color} flex-shrink-0`} />
                  <div>
                    <span className={`text-sm font-bold ${o.color}`}>{o.name}</span>
                    <span className="text-xs text-slate-400 ml-3">{o.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pipeline Flow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-purple-500/15 border-2 border-purple-500/50 rounded-lg py-3 px-6 text-center mb-6"
        >
          <span className="text-sm font-bold text-white">
            Threat Vector &rarr; Structured Graph &rarr; Test Template &rarr; Executable Attack &rarr; Result Feedback
          </span>
        </motion.div>

        {/* Claimable Innovation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-green-500/10 border-2 border-green-500 rounded-xl p-6"
        >
          <h3 className="text-sm font-bold text-green-400 mb-2 tracking-wider">
            CLAIMABLE INNOVATION
          </h3>
          <p className="text-sm text-white">
            The system reasons about threats using LLM intelligence, then automatically generates executable
            attack simulations that validate real exploitability — a non-obvious automation beyond existing tooling.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
