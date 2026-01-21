import { motion } from 'motion/react';
import { Lock, FileCheck, Shield, CheckCircle } from 'lucide-react';

export function GovernanceSlide() {
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
            <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/40">
              <Lock className="w-10 h-10 text-amber-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">
                Governance & Compliance
              </h1>
              <p className="text-lg text-slate-400">
                Audit-Ready by Design
              </p>
            </div>
          </div>
        </motion.div>

        {/* Compliance Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Compliance Mapping</h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                framework: 'OWASP ASVS',
                version: 'v4.0.3',
                coverage: '94%',
                description: 'Application Security Verification Standard',
                controls: ['Authentication', 'Access Control', 'Cryptography', 'Data Protection'],
              },
              {
                framework: 'OWASP Top 10 for LLMs',
                version: 'v1.1',
                coverage: '100%',
                description: 'AI-specific security risks',
                controls: ['Prompt Injection', 'Model Theft', 'Training Data Poisoning', 'Insecure Output'],
              },
              {
                framework: 'NIST AI RMF',
                version: 'v1.0',
                coverage: '87%',
                description: 'AI Risk Management Framework',
                controls: ['Govern', 'Map', 'Measure', 'Manage'],
              },
              {
                framework: 'ISO 27001',
                version: '2022',
                coverage: '91%',
                description: 'Information Security Management',
                controls: ['A.8: Asset Management', 'A.12: Operations Security', 'A.14: System Development'],
              },
              {
                framework: 'SOC 2 Type II',
                version: 'Trust Services',
                coverage: '96%',
                description: 'Service Organization Controls',
                controls: ['Security', 'Availability', 'Confidentiality', 'Processing Integrity'],
              },
              {
                framework: 'PCI DSS',
                version: 'v4.0',
                coverage: '89%',
                description: 'Payment Card Industry Standard',
                controls: ['Network Security', 'Data Protection', 'Access Control', 'Monitoring'],
              },
            ].map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-slate-900/50 border border-amber-500/30 rounded-xl p-6 hover:border-amber-500/60 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">{framework.framework}</h3>
                    <p className="text-xs text-slate-500">{framework.version}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-amber-400">{framework.coverage}</div>
                    <div className="text-xs text-slate-500">Coverage</div>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mb-4">{framework.description}</p>
                <div className="space-y-2">
                  {framework.controls.map((control, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      {control}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Policy as Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/40 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-500/20">
                <FileCheck className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Policy as Code</h2>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white mb-1">Version-Controlled Policies</div>
                  <div className="text-sm text-slate-400">
                    All security policies stored as code in Git with full audit trail
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white mb-1">Automated Enforcement</div>
                  <div className="text-sm text-slate-400">
                    Policies automatically applied at every pipeline stage
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white mb-1">Exception Management</div>
                  <div className="text-sm text-slate-400">
                    Tracked, approved, and time-limited policy exceptions
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/40 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-purple-500/20">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Audit Trails</h2>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white mb-1">Complete Evidence Chain</div>
                  <div className="text-sm text-slate-400">
                    Every scan, finding, decision, and action logged immutably
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white mb-1">Compliance Reports</div>
                  <div className="text-sm text-slate-400">
                    One-click generation of framework-specific audit reports
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white mb-1">Change Attribution</div>
                  <div className="text-sm text-slate-400">
                    Full traceability from code commit to production deployment
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Reporting Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-slate-900/50 border border-slate-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Executive Reporting Dashboard
          </h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/40 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">98.7%</div>
              <div className="text-sm text-slate-400 mb-1">Security Score</div>
              <div className="text-xs text-slate-500">↑ 2.3% this quarter</div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/40 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">12</div>
              <div className="text-sm text-slate-400 mb-1">Critical Issues</div>
              <div className="text-xs text-slate-500">↓ 18 from last month</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/40 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">4.2hrs</div>
              <div className="text-sm text-slate-400 mb-1">Mean Time to Fix</div>
              <div className="text-xs text-slate-500">↓ 67% improvement</div>
            </div>
            <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/20 border border-amber-500/40 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">100%</div>
              <div className="text-sm text-slate-400 mb-1">Compliance Rate</div>
              <div className="text-xs text-slate-500">All frameworks passing</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
