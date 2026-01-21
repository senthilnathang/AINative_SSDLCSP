import { motion } from 'motion/react';
import { Shield, AlertTriangle, Database, FileCode, ArrowRight } from 'lucide-react';

export function ThreatModelingSlide() {
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
            <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/40">
              <Shield className="w-10 h-10 text-purple-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">
                Threat Modeling Core
              </h1>
              <p className="text-lg text-slate-400">
                Threagile + STRIDEGPT – Shift Security Left
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* Left: Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Database className="w-6 h-6 text-purple-400" />
              Inputs
            </h2>
            <div className="space-y-3">
              {[
                { title: 'C4 / Architecture Diagrams', desc: 'System structure and components' },
                { title: 'Data Flow Definitions', desc: 'How information moves through the system' },
                { title: 'Trust Boundaries', desc: 'Security zones and privilege levels' },
                { title: 'OpenAPI Specs', desc: 'API contracts and endpoints' },
                { title: 'Prompt Templates', desc: 'AI system instructions' },
                { title: 'AI Agent Workflows', desc: 'Autonomous decision paths' },
                { title: 'Tool Permissions', desc: 'Agent capabilities and access' },
                { title: 'Deployment Topology', desc: 'Infrastructure and cloud config' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 hover:border-purple-500/40 transition-colors"
                >
                  <div className="font-semibold text-white text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-slate-400">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Processing & Outputs */}
          <div className="space-y-8">
            {/* Processing Engine */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FileCode className="w-6 h-6 text-purple-400" />
                Threat Modeling Engine
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 border border-purple-500/50 rounded-xl p-6">
                  <h3 className="font-bold text-white mb-2">Threagile</h3>
                  <p className="text-sm text-slate-300 mb-3">
                    Architecture risk analysis with automated threat identification
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">
                      Risk Scoring
                    </span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">
                      Component Analysis
                    </span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">
                      Trust Zones
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/30 border border-blue-500/50 rounded-xl p-6">
                  <h3 className="font-bold text-white mb-2">STRIDEGPT</h3>
                  <p className="text-sm text-slate-300 mb-3">
                    LLM-powered threat reasoning for AI-specific attacks
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs">
                      STRIDE Classification
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs">
                      AI Threats
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs">
                      Attack Vectors
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Outputs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <ArrowRight className="w-6 h-6 text-cyan-400" />
                Outputs
              </h2>
              <div className="bg-slate-900/50 border border-cyan-500/40 rounded-xl p-6">
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-cyan-300 mb-2">Threat Graph</div>
                    <div className="text-sm text-slate-400">
                      Visual representation of components, flows, and attack surfaces
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-cyan-300 mb-2">STRIDE-Classified Threats</div>
                    <div className="text-sm text-slate-400">
                      Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-cyan-300 mb-2">AI-Specific Threats</div>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {[
                        'Prompt Injection',
                        'Jailbreaks',
                        'Model Extraction',
                        'Agent Tool Abuse',
                        'Memory Poisoning',
                        'Data Exfiltration',
                      ].map((threat, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2"
                        >
                          <AlertTriangle className="w-3 h-3" />
                          {threat}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-cyan-300 mb-2">Risk-Scored Findings</div>
                    <div className="text-sm text-slate-400">
                      CI/CD-ready reports with severity, likelihood, and remediation guidance
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/40 rounded-xl p-6 text-center"
        >
          <div className="text-lg font-semibold text-white mb-2">
            Security decisions driven by real threat models, not generic checklists
          </div>
          <div className="text-sm text-slate-400">
            Every downstream test and scan is anchored in architecture-specific threats
          </div>
        </motion.div>
      </div>
    </div>
  );
}
