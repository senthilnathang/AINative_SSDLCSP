import { motion } from 'motion/react';
import { Eye, Activity, Database, AlertTriangle, TrendingUp } from 'lucide-react';

export function IASTSlide() {
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
            <div className="p-3 rounded-xl bg-green-500/20 border border-green-500/40">
              <Eye className="w-10 h-10 text-green-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">
                IAST – DeVAIC
              </h1>
              <p className="text-lg text-slate-400">
                Runtime Intelligence & Instrumentation
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* Instrumentation Points */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Activity className="w-6 h-6 text-green-400" />
              Instrumentation Points
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-900/40 to-green-800/30 border border-green-500/40 rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Prompt → Model → Tool Flows</h3>
                <p className="text-sm text-slate-300 mb-4">
                  Track complete data lineage from user input through model processing to tool invocation
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-slate-900/50 border border-green-500/30 rounded-lg p-3 text-center">
                    <div className="text-xs text-green-300 font-semibold mb-1">Input</div>
                    <div className="text-xs text-slate-400">User prompts</div>
                  </div>
                  <div className="bg-slate-900/50 border border-green-500/30 rounded-lg p-3 text-center">
                    <div className="text-xs text-green-300 font-semibold mb-1">Processing</div>
                    <div className="text-xs text-slate-400">Model calls</div>
                  </div>
                  <div className="bg-slate-900/50 border border-green-500/30 rounded-lg p-3 text-center">
                    <div className="text-xs text-green-300 font-semibold mb-1">Action</div>
                    <div className="text-xs text-slate-400">Tool execution</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-green-500/30 rounded-xl p-6">
                <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5 text-green-400" />
                  Agent Decision Paths
                </h3>
                <p className="text-sm text-slate-400 mb-3">
                  Monitor autonomous agent reasoning and decision-making processes
                </p>
                <div className="space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Decision trees and branching logic
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Tool selection rationale
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Self-correction attempts
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-green-500/30 rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Memory Access & Mutation</h3>
                <p className="text-sm text-slate-400 mb-3">
                  Track how agents read, write, and modify shared memory and context
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs">
                    Read operations
                  </span>
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs">
                    Write operations
                  </span>
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs">
                    Context injection
                  </span>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-green-500/30 rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Sensitive Data Propagation</h3>
                <p className="text-sm text-slate-400">
                  Real-time tracking of PII, credentials, and sensitive information as it flows through the system
                </p>
              </div>
            </div>
          </motion.div>

          {/* Detection & Response */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-green-400" />
                Runtime Detection
              </h2>
              <div className="space-y-3">
                {[
                  {
                    title: 'Runtime Exploitability',
                    desc: 'Validate if static findings are actually exploitable in production',
                    severity: 'Critical',
                  },
                  {
                    title: 'Data Leakage',
                    desc: 'Detect unauthorized data exfiltration through model outputs or tool calls',
                    severity: 'Critical',
                  },
                  {
                    title: 'Cross-Agent Contamination',
                    desc: 'Identify when malicious data from one agent affects another',
                    severity: 'High',
                  },
                  {
                    title: 'Unsafe Autonomous Actions',
                    desc: 'Flag when agents attempt dangerous operations without approval',
                    severity: 'Critical',
                  },
                  {
                    title: 'Prompt Injection Success',
                    desc: 'Real-time detection of successful prompt manipulation attacks',
                    severity: 'Critical',
                  },
                  {
                    title: 'Guardrail Bypass',
                    desc: 'Monitor when security controls are circumvented',
                    severity: 'High',
                  },
                ].map((detection, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.08 }}
                    className="bg-slate-900/50 border-l-4 border-green-500 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-white text-sm">{detection.title}</h3>
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          detection.severity === 'Critical'
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-amber-500/20 text-amber-400'
                        }`}
                      >
                        {detection.severity}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{detection.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border border-green-500/40 rounded-xl p-6"
            >
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                Real-Time Response
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300 text-sm font-semibold">
                    Block
                  </div>
                  <span className="text-sm text-slate-400">Immediately halt dangerous operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm font-semibold">
                    Alert
                  </div>
                  <span className="text-sm text-slate-400">Notify security teams in real-time</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/40 text-green-300 text-sm font-semibold">
                    Log
                  </div>
                  <span className="text-sm text-slate-400">Capture evidence for analysis</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 border border-green-500/40 rounded-xl p-6 text-center"
        >
          <div className="text-lg font-semibold text-white mb-2">
            See what static analysis misses – validate exploitability in real production conditions
          </div>
          <div className="text-sm text-slate-400">
            DeVAIC bridges the gap between theoretical vulnerabilities and actual runtime risk
          </div>
        </motion.div>
      </div>
    </div>
  );
}
