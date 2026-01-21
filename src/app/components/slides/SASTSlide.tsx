import { motion } from 'motion/react';
import { Code, FileCode, GitBranch, Shield, CheckCircle2, XCircle } from 'lucide-react';

export function SASTSlide() {
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
            <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/40">
              <Code className="w-10 h-10 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">
                SAST – CodeSecAI
              </h1>
              <p className="text-lg text-slate-400">
                Static Analysis for Code, AI, and Infrastructure
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          {/* Coverage Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-2"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Coverage Areas</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: FileCode,
                  title: 'Application Source Code',
                  desc: 'Deep analysis of business logic, data flows, and security patterns',
                  items: ['Injection flaws', 'Auth bypass', 'Crypto issues', 'Data leakage'],
                },
                {
                  icon: Code,
                  title: 'Prompt Templates & Instructions',
                  desc: 'AI system instruction validation and injection detection',
                  items: ['Prompt injection', 'Context leakage', 'Instruction hijacking', 'Output manipulation'],
                },
                {
                  icon: GitBranch,
                  title: 'Tool Schemas & Agent Graphs',
                  desc: 'Agent permission and capability analysis',
                  items: ['Over-privileged tools', 'Unsafe autonomy', 'Permission escalation', 'Tool chaining risks'],
                },
                {
                  icon: Shield,
                  title: 'Infrastructure-as-Code',
                  desc: 'Cloud configuration and deployment security',
                  items: ['Misconfigurations', 'Exposed secrets', 'Network policies', 'IAM violations'],
                },
              ].map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/60 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-cyan-500/20">
                      <area.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="font-bold text-white text-sm">{area.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 mb-3">{area.desc}</p>
                  <div className="space-y-1">
                    {area.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                        <div className="w-1 h-1 rounded-full bg-cyan-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Key Capabilities</h2>
            <div className="space-y-3">
              {[
                'Threat-model-driven rules',
                'Cross-file analysis',
                'Cross-agent analysis',
                'AI-aware detection',
                'Semantic code understanding',
                'Context-aware scanning',
                'Custom rule engine',
                'CI/CD integration',
              ].map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-slate-900/50 border border-slate-800 rounded-lg p-3 hover:border-cyan-500/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-sm text-slate-300">{capability}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Threat-Driven Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/40 rounded-xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Threat-Driven SAST Rules</h2>
          <p className="text-slate-300 mb-6">
            Unlike generic SAST tools, CodeSecAI dynamically generates scan rules based on threats identified by STRIDEGPT, ensuring every scan is relevant to your architecture.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-900/50 border border-cyan-500/30 rounded-lg p-4">
              <div className="text-cyan-400 font-bold mb-2">Input</div>
              <div className="text-sm text-slate-400">STRIDEGPT threat model</div>
            </div>
            <div className="bg-slate-900/50 border border-cyan-500/30 rounded-lg p-4">
              <div className="text-cyan-400 font-bold mb-2">Processing</div>
              <div className="text-sm text-slate-400">Generate targeted rules</div>
            </div>
            <div className="bg-slate-900/50 border border-cyan-500/30 rounded-lg p-4">
              <div className="text-cyan-400 font-bold mb-2">Output</div>
              <div className="text-sm text-slate-400">Architecture-specific findings</div>
            </div>
          </div>
        </motion.div>

        {/* Example Findings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Example Findings</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/50 border-l-4 border-red-500 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-4 h-4 text-red-400" />
                <span className="font-bold text-red-400 text-sm">CRITICAL</span>
              </div>
              <div className="text-white font-semibold mb-1 text-sm">
                Prompt Injection in Agent Tool
              </div>
              <div className="text-xs text-slate-400 mb-2">
                User input directly concatenated into system prompt without sanitization
              </div>
              <div className="text-xs text-slate-500">
                File: agent_executor.py:142
              </div>
            </div>

            <div className="bg-slate-900/50 border-l-4 border-amber-500 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-4 h-4 text-amber-400" />
                <span className="font-bold text-amber-400 text-sm">HIGH</span>
              </div>
              <div className="text-white font-semibold mb-1 text-sm">
                Over-Privileged Agent Tool
              </div>
              <div className="text-xs text-slate-400 mb-2">
                Agent has write access to production database without approval workflow
              </div>
              <div className="text-xs text-slate-500">
                File: tool_permissions.yaml:28
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
