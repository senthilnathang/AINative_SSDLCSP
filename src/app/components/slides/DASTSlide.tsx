import { motion } from 'motion/react';
import { Zap, Globe, Lock, Target, PlayCircle } from 'lucide-react';

export function DASTSlide() {
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
            <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/40">
              <Zap className="w-10 h-10 text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">
                DAST – Vue.js + Playwright
              </h1>
              <p className="text-lg text-slate-400">
                Dynamic Application Security Testing with Real Attacks
              </p>
            </div>
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-400" />
              Testing Capabilities
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Full UI Workflow Testing',
                  desc: 'End-to-end user journey simulation with real browser automation',
                  icon: Globe,
                },
                {
                  title: 'Business Logic Abuse',
                  desc: 'Test for logic flaws, race conditions, and workflow bypasses',
                  icon: Target,
                },
                {
                  title: 'API Fuzzing',
                  desc: 'Intelligent mutation of requests to discover edge cases',
                  icon: Zap,
                },
                {
                  title: 'Auth & Authorization Bypass',
                  desc: 'Privilege escalation and access control validation',
                  icon: Lock,
                },
              ].map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-slate-900/50 border border-blue-500/30 rounded-xl p-5 hover:border-blue-500/60 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <capability.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1 text-sm">{capability.title}</h3>
                      <p className="text-xs text-slate-400">{capability.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <PlayCircle className="w-6 h-6 text-blue-400" />
              AI-Specific Attack Scenarios
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Prompt Injection via UI',
                  desc: 'Inject malicious prompts through input fields, chat interfaces, and forms',
                  severity: 'Critical',
                },
                {
                  title: 'Tool Invocation Manipulation',
                  desc: 'Force agents to call unauthorized tools or leak tool schemas',
                  severity: 'High',
                },
                {
                  title: 'Context Window Overflow',
                  desc: 'Exhaust model context to bypass security guardrails',
                  severity: 'High',
                },
                {
                  title: 'Multi-Turn Jailbreaks',
                  desc: 'Progressive conversation manipulation to extract restricted information',
                  severity: 'Critical',
                },
              ].map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-slate-900/50 border border-blue-500/30 rounded-xl p-5"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-white text-sm">{scenario.title}</h3>
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        scenario.severity === 'Critical'
                          ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                          : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                      }`}
                    >
                      {scenario.severity}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{scenario.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Threat-Driven Test Generation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/50 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Threat-Driven Test Generation</h2>
          <p className="text-slate-300 mb-6">
            DAST test scenarios are automatically generated from STRIDEGPT threat outputs, ensuring every test validates a real architectural threat.
          </p>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-slate-900/50 border border-blue-500/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">1</div>
              <div className="text-xs text-slate-400">Threat identified</div>
            </div>
            <div className="bg-slate-900/50 border border-blue-500/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">2</div>
              <div className="text-xs text-slate-400">Test generated</div>
            </div>
            <div className="bg-slate-900/50 border border-blue-500/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">3</div>
              <div className="text-xs text-slate-400">Attack executed</div>
            </div>
            <div className="bg-slate-900/50 border border-blue-500/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">4</div>
              <div className="text-xs text-slate-400">Results validated</div>
            </div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <h3 className="font-bold text-white mb-4">Vue.js Testing Framework</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Component-level security testing
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                State manipulation validation
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Client-side security checks
              </li>
            </ul>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <h3 className="font-bold text-white mb-4">Playwright Automation</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Cross-browser attack simulation
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Network interception & modification
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Screenshot & video evidence capture
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
