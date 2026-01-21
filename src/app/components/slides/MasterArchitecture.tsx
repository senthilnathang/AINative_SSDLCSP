import { motion } from 'motion/react';
import {
  Shield,
  Code,
  Zap,
  Eye,
  Skull,
  Brain,
  GitBranch,
  RefreshCw,
  Lock,
  ArrowRight,
  Activity,
  AlertTriangle,
} from 'lucide-react';

export function MasterArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 text-white">
            End-to-End AI-Native SSDLC Architecture
          </h1>
          <p className="text-lg text-slate-400">
            Left-to-right pipeline with continuous feedback loops
          </p>
        </motion.div>

        {/* Main Architecture Flow */}
        <div className="relative">
          {/* Top: SSDLC Phases */}
          <div className="flex items-start gap-3 mb-8">
            {/* Phase 1: Design/Threat Modeling */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-1 bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/40 rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">PHASE 1: DESIGN</h3>
                  <p className="text-xs text-purple-300">Threat Modeling – Shift Left</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="bg-slate-900/50 rounded-lg p-2 border border-purple-500/20">
                  <div className="text-xs font-semibold text-purple-300 mb-1">Threagile + STRIDEGPT</div>
                  <div className="text-xs text-slate-400">Architecture Analysis</div>
                </div>
              </div>

              <div className="text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-purple-400" />
                  <span>C4 Diagrams</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-purple-400" />
                  <span>Trust Boundaries</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-purple-400" />
                  <span>AI Agent Flows</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-purple-500/20">
                <div className="text-xs font-semibold text-purple-300 mb-1">Outputs:</div>
                <div className="text-xs text-slate-400">
                  Threat Graph, STRIDE threats, AI-specific risks
                </div>
              </div>
            </motion.div>

            <ArrowRight className="w-6 h-6 text-cyan-500 mt-12 flex-shrink-0" />

            {/* Phase 2: Build/SAST */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-1 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/40 rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/20">
                  <Code className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">PHASE 2: BUILD</h3>
                  <p className="text-xs text-cyan-300">SAST – CodeSecAI</p>
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <div className="bg-slate-900/50 rounded-lg p-2 border border-cyan-500/20">
                  <div className="text-xs font-semibold text-cyan-300 mb-1">Static Analysis</div>
                  <div className="text-xs text-slate-400">Code + AI + IaC</div>
                </div>
              </div>

              <div className="text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-cyan-400" />
                  <span>Source Code</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-cyan-400" />
                  <span>Prompt Templates</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-cyan-400" />
                  <span>Agent Schemas</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-cyan-500/20">
                <div className="text-xs font-semibold text-cyan-300 mb-1">Detection:</div>
                <div className="text-xs text-slate-400">
                  Threat-driven rules, cross-agent analysis
                </div>
              </div>
            </motion.div>

            <ArrowRight className="w-6 h-6 text-cyan-500 mt-12 flex-shrink-0" />

            {/* Phase 3: Test/DAST */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex-1 bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/40 rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">PHASE 3: TEST</h3>
                  <p className="text-xs text-blue-300">DAST – Vue.js + Playwright</p>
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <div className="bg-slate-900/50 rounded-lg p-2 border border-blue-500/20">
                  <div className="text-xs font-semibold text-blue-300 mb-1">Dynamic Testing</div>
                  <div className="text-xs text-slate-400">UI + API Fuzzing</div>
                </div>
              </div>

              <div className="text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-blue-400" />
                  <span>Workflow Testing</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-blue-400" />
                  <span>Auth Bypass</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-blue-400" />
                  <span>Prompt Injection</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-blue-500/20">
                <div className="text-xs font-semibold text-blue-300 mb-1">Testing:</div>
                <div className="text-xs text-slate-400">
                  Generated from STRIDEGPT threats
                </div>
              </div>
            </motion.div>

            <ArrowRight className="w-6 h-6 text-cyan-500 mt-12 flex-shrink-0" />

            {/* Phase 4: Runtime/IAST */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex-1 bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/40 rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <Eye className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">PHASE 4: RUNTIME</h3>
                  <p className="text-xs text-green-300">IAST – DeVAIC</p>
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <div className="bg-slate-900/50 rounded-lg p-2 border border-green-500/20">
                  <div className="text-xs font-semibold text-green-300 mb-1">Runtime Intelligence</div>
                  <div className="text-xs text-slate-400">Instrumentation</div>
                </div>
              </div>

              <div className="text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-green-400" />
                  <span>Agent Decisions</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-green-400" />
                  <span>Memory Access</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-green-400" />
                  <span>Tool Invocation</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-green-500/20">
                <div className="text-xs font-semibold text-green-300 mb-1">Detection:</div>
                <div className="text-xs text-slate-400">
                  Data leakage, unsafe actions
                </div>
              </div>
            </motion.div>

            <ArrowRight className="w-6 h-6 text-cyan-500 mt-12 flex-shrink-0" />

            {/* Phase 5: Red Teaming */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex-1 bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/40 rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-red-500/20">
                  <Skull className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">PHASE 5: ADVERSARIAL</h3>
                  <p className="text-xs text-red-300">AI Red Teaming</p>
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <div className="bg-slate-900/50 rounded-lg p-2 border border-red-500/20">
                  <div className="text-xs font-semibold text-red-300 mb-1">Attack Simulation</div>
                  <div className="text-xs text-slate-400">Continuous Probing</div>
                </div>
              </div>

              <div className="text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-red-400" />
                  <span>Promptfoo</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-red-400" />
                  <span>Garak</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-red-400" />
                  <span>Giskard</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-red-500/20">
                <div className="text-xs font-semibold text-red-300 mb-1">Testing:</div>
                <div className="text-xs text-slate-400">
                  Jailbreaks, bias, leakage
                </div>
              </div>
            </motion.div>
          </div>

          {/* Middle: Unified Risk Engine */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-amber-900/40 to-orange-900/40 border-2 border-amber-500/60 rounded-2xl p-6 mb-8 relative"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-amber-500 rounded-full text-xs font-bold text-slate-950">
              CENTRAL BRAIN
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/40">
                  <Brain className="w-8 h-8 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Unified Risk Engine & Policy Gates
                  </h3>
                  <p className="text-sm text-slate-300">
                    Risk = Impact × Likelihood × Exposure × AI Autonomy
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300 text-sm font-semibold">
                  Block Build
                </div>
                <div className="px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm font-semibold">
                  Require Approval
                </div>
                <div className="px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/40 text-green-300 text-sm font-semibold">
                  Auto-Mitigate
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom: Feedback Loop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/40 rounded-xl p-5 mb-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <RefreshCw className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">CONTINUOUS LEARNING LOOP</h3>
                  <p className="text-xs text-slate-400">
                    Runtime incidents → Red team success → False positives → New patterns
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Feeds back into:</span>
                <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">STRIDEGPT</div>
                <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">CodeSecAI</div>
                <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">DeVAIC</div>
                <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">Guardrails</div>
              </div>
            </div>
          </motion.div>

          {/* CI/CD & Governance */}
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-slate-900/50 border border-slate-700 rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <GitBranch className="w-5 h-5 text-cyan-400" />
                <h3 className="font-semibold text-white">CI/CD Integration</h3>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="px-3 py-1 rounded bg-slate-800 text-slate-300">Git</div>
                <ArrowRight className="w-3 h-3 text-slate-600" />
                <div className="px-3 py-1 rounded bg-slate-800 text-slate-300">Build</div>
                <ArrowRight className="w-3 h-3 text-slate-600" />
                <div className="px-3 py-1 rounded bg-slate-800 text-slate-300">Test</div>
                <ArrowRight className="w-3 h-3 text-slate-600" />
                <div className="px-3 py-1 rounded bg-slate-800 text-slate-300">Deploy</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-slate-900/50 border border-slate-700 rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <Lock className="w-5 h-5 text-amber-400" />
                <h3 className="font-semibold text-white">Compliance Mapping</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <div className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
                  OWASP ASVS
                </div>
                <div className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
                  OWASP LLM Top 10
                </div>
                <div className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
                  NIST AI RMF
                </div>
                <div className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
                  ISO 27001
                </div>
                <div className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
                  SOC 2
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
