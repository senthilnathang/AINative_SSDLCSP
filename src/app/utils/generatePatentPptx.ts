import PptxGenJS from 'pptxgenjs';

const colors = {
  bg: '0f172a',
  bgAlt: '1e293b',
  cyan: '22d3ee',
  purple: 'a855f7',
  blue: '3b82f6',
  green: '22c55e',
  red: 'ef4444',
  amber: 'f59e0b',
  orange: 'f97316',
  white: 'ffffff',
  slate300: 'cbd5e1',
  slate400: '94a3b8',
  slate500: '64748b',
};

export async function generatePatentPresentation(): Promise<void> {
  const pptx = new PptxGenJS();

  pptx.author = 'AI-Native SSDLC Security Platform';
  pptx.title = 'Closed-Loop AI-Native Threat-Driven SSDLC System — Patent Filing';
  pptx.subject = 'Patent Filing Presentation';

  pptx.defineLayout({ name: 'LAYOUT_16x9', width: 13.33, height: 7.5 });
  pptx.layout = 'LAYOUT_16x9';

  createSlide1_Title(pptx);
  createSlide2_CoreProblem(pptx);
  createSlide3_SystemArchitecture(pptx);
  createSlide4_AutonomyWeightedRisk(pptx);
  createSlide5_RiskExample(pptx);
  createSlide6_ThreatToTest(pptx);
  createSlide7_ClosedLoopEngine(pptx);
  createSlide8_PatentClaims(pptx);

  await pptx.writeFile({ fileName: 'Patent-Optimized-SSDLC-Platform.pptx' });
}

// ─── Slide 1: Title ─────────────────────────────────────────────────────────

function createSlide1_Title(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addShape('rect', { x: 0, y: 0, w: 13.33, h: 0.06, fill: { color: colors.cyan } });

  // Main title
  slide.addText('Closed-Loop AI-Native\nThreat-Driven SSDLC System', {
    x: 0.5, y: 1.5, w: 12.33, h: 1.8,
    fontSize: 46, fontFace: 'Arial', bold: true, color: colors.white, align: 'center',
  });

  // Subtitle
  slide.addText('With Autonomy-Weighted Risk Scoring &\nAutomated Threat-to-Test Transformation', {
    x: 0.5, y: 3.5, w: 12.33, h: 0.9,
    fontSize: 24, color: colors.cyan, align: 'center',
  });

  // Tagline
  slide.addText('A Security Operating System for Autonomous AI Systems', {
    x: 0.5, y: 4.7, w: 12.33, h: 0.5,
    fontSize: 18, color: colors.slate400, align: 'center', italic: true,
  });

  // Feature pills
  const features = ['Closed-Loop', 'AI-Native', 'Threat-Driven', 'Autonomy-Scored', 'Self-Improving'];
  features.forEach((f, i) => {
    slide.addShape('roundRect', {
      x: 1.2 + i * 2.2, y: 5.8, w: 2, h: 0.5,
      fill: { color: colors.bgAlt },
      line: { color: colors.cyan, width: 1 },
    });
    slide.addText(f, {
      x: 1.2 + i * 2.2, y: 5.8, w: 2, h: 0.5,
      fontSize: 11, color: colors.cyan, align: 'center', valign: 'middle',
    });
  });

  slide.addShape('rect', { x: 0, y: 7.1, w: 13.33, h: 0.4, fill: { color: colors.bgAlt } });
  slide.addText('Patent Filing Presentation  |  Defensible Invention Narrative', {
    x: 0, y: 7.1, w: 13.33, h: 0.4,
    fontSize: 10, color: colors.slate500, align: 'center', valign: 'middle',
  });
}

// ─── Slide 2: The Core Technical Problem ────────────────────────────────────

function createSlide2_CoreProblem(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addText('Traditional SSDLC Cannot Secure\nAutonomous AI Systems', {
    x: 0.5, y: 0.3, w: 12.33, h: 1.0,
    fontSize: 34, bold: true, color: colors.white, align: 'center',
  });

  slide.addText('Existing security models assume deterministic software behavior', {
    x: 0.5, y: 1.3, w: 12.33, h: 0.45,
    fontSize: 16, color: colors.red, align: 'center',
  });

  const challenges = [
    { title: 'Non-Deterministic Behavior', desc: 'Outputs vary per inference — traditional testing assumes repeatable results', color: colors.red },
    { title: 'Tool Autonomy', desc: 'Agents invoke external tools with real-world side effects beyond developer control', color: colors.amber },
    { title: 'Memory Mutation', desc: 'Persistent memory enables cross-session contamination and state poisoning', color: colors.purple },
    { title: 'Multi-Turn Reasoning', desc: 'Complex reasoning chains create emergent attack surfaces invisible to static analysis', color: colors.blue },
  ];

  challenges.forEach((c, i) => {
    const x = (i % 2) * 6.2 + 0.5;
    const y = Math.floor(i / 2) * 1.5 + 2.0;
    slide.addShape('rect', {
      x: x, y: y, w: 6, h: 1.3,
      fill: { color: colors.bgAlt },
      line: { color: c.color, width: 2 },
    });
    slide.addText(c.title, {
      x: x + 0.2, y: y + 0.15, w: 5.6, h: 0.4,
      fontSize: 16, bold: true, color: c.color,
    });
    slide.addText(c.desc, {
      x: x + 0.2, y: y + 0.6, w: 5.6, h: 0.5,
      fontSize: 12, color: colors.slate400,
    });
  });

  // Core gap
  slide.addShape('rect', {
    x: 0.5, y: 5.5, w: 12.33, h: 1.5,
    fill: { color: colors.red, transparency: 80 },
    line: { color: colors.red, width: 3 },
  });
  slide.addText('THE CORE GAP', {
    x: 0.7, y: 5.6, w: 4, h: 0.35,
    fontSize: 12, bold: true, color: colors.red,
  });
  slide.addText('No existing system dynamically links threat modeling, exploit validation,\nautonomy scoring, and CI/CD enforcement in a closed loop.', {
    x: 0.7, y: 6.05, w: 11.8, h: 0.8,
    fontSize: 18, color: colors.white, align: 'center',
  });
}

// ─── Slide 3: System Architecture (Core Patent Diagram) ─────────────────────

function createSlide3_SystemArchitecture(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addText('Closed-Loop Threat-Driven AI Security Engine', {
    x: 0.5, y: 0.2, w: 12.33, h: 0.7,
    fontSize: 32, bold: true, color: colors.white, align: 'center',
  });
  slide.addText('Core Patent System Architecture', {
    x: 0.5, y: 0.85, w: 12.33, h: 0.35,
    fontSize: 14, color: colors.cyan, align: 'center', italic: true,
  });

  // Architecture flow
  const steps = [
    { label: 'Architecture\nInputs', color: colors.slate400 },
    { label: 'LLM-Based\nThreat\nReasoning', color: colors.purple },
    { label: 'Structured\nThreat Graph', color: colors.blue },
    { label: 'Automated\nTest Case\nGeneration', color: colors.cyan },
    { label: 'Runtime\nExploitability\nValidation', color: colors.green },
    { label: 'Autonomy-\nWeighted\nRisk Engine', color: colors.amber },
    { label: 'CI/CD\nPolicy Gate', color: colors.red },
    { label: 'Learning\nFeedback\nLoop', color: colors.purple },
  ];

  steps.forEach((s, i) => {
    const x = 0.3 + i * 1.6;
    slide.addShape('rect', {
      x: x, y: 1.5, w: 1.4, h: 1.8,
      fill: { color: s.color, transparency: 75 },
      line: { color: s.color, width: 2 },
    });
    slide.addText(s.label, {
      x: x, y: 1.65, w: 1.4, h: 1.5,
      fontSize: 9, bold: true, color: colors.white, align: 'center', valign: 'middle',
    });
    if (i < steps.length - 1) {
      slide.addText('\u2192', {
        x: x + 1.4, y: 2.1, w: 0.2, h: 0.5,
        fontSize: 16, color: colors.cyan,
      });
    }
  });

  // Feedback loop bar
  slide.addShape('rect', {
    x: 0.3, y: 3.6, w: 12.73, h: 0.55,
    fill: { color: colors.purple, transparency: 80 },
    line: { color: colors.purple, width: 2 },
  });
  slide.addText('CONTINUOUS FEEDBACK LOOP: Runtime signals regenerate threat models, rules, and test cases', {
    x: 0.3, y: 3.65, w: 12.73, h: 0.45,
    fontSize: 12, bold: true, color: colors.white, align: 'center', valign: 'middle',
  });

  // Key innovations
  slide.addText('KEY INNOVATIONS', {
    x: 0.5, y: 4.4, w: 12.33, h: 0.4,
    fontSize: 16, bold: true, color: colors.cyan, align: 'center',
  });

  const innovations = [
    { title: 'Threat outputs automatically generate executable dynamic test scenarios', color: colors.cyan },
    { title: 'Runtime exploitability signals modify static analysis rules', color: colors.green },
    { title: 'Adversarial testing results auto-update agent guardrails', color: colors.red },
    { title: 'AI Autonomy Index dynamically weights risk computation', color: colors.amber },
  ];

  innovations.forEach((inn, i) => {
    const x = (i % 2) * 6.2 + 0.5;
    const y = Math.floor(i / 2) * 0.7 + 4.9;
    slide.addShape('rect', {
      x: x, y: y, w: 6, h: 0.55,
      fill: { color: colors.bgAlt },
      line: { color: inn.color, width: 1 },
    });
    slide.addText(inn.title, {
      x: x + 0.15, y: y, w: 5.7, h: 0.55,
      fontSize: 11, color: inn.color, valign: 'middle',
    });
  });

  // Bottom
  slide.addShape('rect', { x: 0.5, y: 6.5, w: 12.33, h: 0.7, fill: { color: colors.cyan, transparency: 85 } });
  slide.addText('The novelty is in the closed-loop integration logic — not the individual components', {
    x: 0.5, y: 6.55, w: 12.33, h: 0.6,
    fontSize: 15, bold: true, color: colors.white, align: 'center',
  });
}

// ─── Slide 4: Autonomy-Weighted Risk Scoring (Patent Core #1) ──────────────

function createSlide4_AutonomyWeightedRisk(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addShape('rect', { x: 0, y: 0, w: 13.33, h: 0.35, fill: { color: colors.amber, transparency: 70 } });
  slide.addText('PATENT CORE #1: AUTONOMY-WEIGHTED RISK SCORING', {
    x: 0.5, y: 0, w: 12.33, h: 0.35,
    fontSize: 10, bold: true, color: colors.white, align: 'center', valign: 'middle',
  });

  slide.addText('Dynamic Risk Computation\nfor Autonomous AI Systems', {
    x: 0.5, y: 0.5, w: 12.33, h: 0.9,
    fontSize: 32, bold: true, color: colors.white, align: 'center',
  });

  // Traditional model (crossed out)
  slide.addShape('rect', {
    x: 1, y: 1.6, w: 11.33, h: 0.7,
    fill: { color: colors.bgAlt },
    line: { color: colors.red, width: 2, dashType: 'dash' },
  });
  slide.addText('TRADITIONAL:  Risk = Impact x Likelihood x Exposure        MISSING: AI Autonomy', {
    x: 1.2, y: 1.65, w: 10.93, h: 0.6,
    fontSize: 16, color: colors.slate400, align: 'center',
  });
  slide.addText('X', { x: 11.8, y: 1.55, w: 0.5, h: 0.5, fontSize: 26, bold: true, color: colors.red });

  // New formula
  slide.addShape('rect', {
    x: 0.8, y: 2.5, w: 11.73, h: 1.0,
    fill: { color: colors.amber, transparency: 70 },
    line: { color: colors.amber, width: 4 },
  });
  slide.addText('Risk = Impact x Likelihood x Exposure x Autonomy Index', {
    x: 0.8, y: 2.6, w: 11.73, h: 0.8,
    fontSize: 28, bold: true, color: colors.amber, align: 'center',
  });

  // Autonomy Index factors
  slide.addText('Autonomy Index = f(', {
    x: 0.5, y: 3.75, w: 12.33, h: 0.4,
    fontSize: 18, bold: true, color: colors.white, align: 'center',
  });

  const factors = [
    { name: 'Tool Write\nAccess', desc: 'Can the agent modify external systems?', color: colors.red },
    { name: 'Irreversible\nAction Capability', desc: 'Can actions be rolled back?', color: colors.amber },
    { name: 'Memory\nPersistence', desc: 'Does the agent retain cross-session state?', color: colors.purple },
    { name: 'Human-in-the-\nLoop Presence', desc: 'Is human approval required?', color: colors.green },
    { name: 'Cross-Agent\nInteraction Scope', desc: 'Can it influence other agents?', color: colors.blue },
  ];

  factors.forEach((f, i) => {
    const x = 0.3 + i * 2.55;
    slide.addShape('rect', {
      x: x, y: 4.25, w: 2.4, h: 1.4,
      fill: { color: colors.bgAlt },
      line: { color: f.color, width: 2 },
    });
    slide.addText(f.name, {
      x: x + 0.1, y: 4.3, w: 2.2, h: 0.55,
      fontSize: 11, bold: true, color: f.color, align: 'center',
    });
    slide.addText(f.desc, {
      x: x + 0.1, y: 4.9, w: 2.2, h: 0.6,
      fontSize: 8, color: colors.slate400, align: 'center',
    });
  });

  slide.addText(')', { x: 12.5, y: 3.75, w: 0.5, h: 0.4, fontSize: 18, bold: true, color: colors.white });

  // Bottom insight
  slide.addShape('rect', {
    x: 0.5, y: 5.9, w: 12.33, h: 0.6,
    fill: { color: colors.cyan, transparency: 80 },
    line: { color: colors.cyan, width: 2 },
  });
  slide.addText('Autonomy increases blast radius even if exploit probability is unchanged', {
    x: 0.5, y: 5.95, w: 12.33, h: 0.5,
    fontSize: 16, bold: true, color: colors.white, align: 'center',
  });

  slide.addShape('rect', {
    x: 1, y: 6.7, w: 11.33, h: 0.55,
    fill: { color: colors.green, transparency: 80 },
    line: { color: colors.green, width: 2 },
  });
  slide.addText('CLAIMABLE INNOVATION — No current risk model incorporates autonomous agent capability into security scoring', {
    x: 1.2, y: 6.75, w: 10.93, h: 0.45,
    fontSize: 12, bold: true, color: colors.green, align: 'center',
  });
}

// ─── Slide 5: Same Vulnerability, Different Risk ────────────────────────────

function createSlide5_RiskExample(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addText('Same Vulnerability, Different Risk', {
    x: 0.5, y: 0.3, w: 12.33, h: 0.7,
    fontSize: 34, bold: true, color: colors.white, align: 'center',
  });

  // Scenario
  slide.addShape('rect', {
    x: 1, y: 1.2, w: 11.33, h: 0.6,
    fill: { color: colors.bgAlt },
    line: { color: colors.slate500, width: 1 },
  });
  slide.addText('Vulnerability: Prompt Injection via concatenated user input  |  Same CVSS: 8.1', {
    x: 1.2, y: 1.25, w: 10.93, h: 0.5,
    fontSize: 14, color: colors.slate300, align: 'center',
  });

  // Low autonomy
  slide.addShape('rect', {
    x: 0.5, y: 2.1, w: 6, h: 3.2,
    fill: { color: colors.bgAlt },
    line: { color: colors.green, width: 3 },
  });
  slide.addText('Read-Only Chatbot', {
    x: 0.7, y: 2.2, w: 5.6, h: 0.5,
    fontSize: 22, bold: true, color: colors.green,
  });
  slide.addText('Autonomy Level: LOW', {
    x: 0.7, y: 2.7, w: 5.6, h: 0.3,
    fontSize: 13, bold: true, color: colors.green,
  });
  const lowTraits = ['No tool write access', 'No persistent memory', 'Human approves all outputs', 'Single-agent, no cross-system reach'];
  lowTraits.forEach((t, i) => {
    slide.addText('  ' + t, { x: 0.7, y: 3.15 + i * 0.35, w: 5.6, h: 0.3, fontSize: 12, color: colors.slate400 });
  });
  slide.addShape('roundRect', { x: 2, y: 4.65, w: 3, h: 0.5, fill: { color: colors.green, transparency: 60 } });
  slide.addText('RISK: 4.1 — ALLOWED', { x: 2, y: 4.65, w: 3, h: 0.5, fontSize: 14, bold: true, color: colors.white, align: 'center', valign: 'middle' });

  // High autonomy
  slide.addShape('rect', {
    x: 6.83, y: 2.1, w: 6, h: 3.2,
    fill: { color: colors.bgAlt },
    line: { color: colors.red, width: 3 },
  });
  slide.addText('Database Write Agent', {
    x: 7.03, y: 2.2, w: 5.6, h: 0.5,
    fontSize: 22, bold: true, color: colors.red,
  });
  slide.addText('Autonomy Level: HIGH', {
    x: 7.03, y: 2.7, w: 5.6, h: 0.3,
    fontSize: 13, bold: true, color: colors.red,
  });
  const highTraits = ['Full database write access', 'Persistent memory across sessions', 'No human-in-the-loop', 'Multi-agent communication enabled'];
  highTraits.forEach((t, i) => {
    slide.addText('  ' + t, { x: 7.03, y: 3.15 + i * 0.35, w: 5.6, h: 0.3, fontSize: 12, color: colors.slate400 });
  });
  slide.addShape('roundRect', { x: 8.33, y: 4.65, w: 3, h: 0.5, fill: { color: colors.red, transparency: 50 } });
  slide.addText('RISK: 9.2 — BLOCKED', { x: 8.33, y: 4.65, w: 3, h: 0.5, fontSize: 14, bold: true, color: colors.white, align: 'center', valign: 'middle' });

  // Bottom
  slide.addShape('rect', {
    x: 0.5, y: 5.7, w: 12.33, h: 1.4,
    fill: { color: colors.amber, transparency: 75 },
    line: { color: colors.amber, width: 3 },
  });
  slide.addText('Same vulnerability, same CVSS — fundamentally different real-world risk', {
    x: 0.5, y: 5.85, w: 12.33, h: 0.5,
    fontSize: 20, bold: true, color: colors.white, align: 'center',
  });
  slide.addText('The Autonomy Index captures what static severity scores cannot — the agent\'s capacity for irreversible, unsupervised action', {
    x: 0.5, y: 6.4, w: 12.33, h: 0.5,
    fontSize: 13, color: colors.slate300, align: 'center',
  });
}

// ─── Slide 6: Threat-to-Test Transformation (Patent Core #2) ────────────────

function createSlide6_ThreatToTest(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addShape('rect', { x: 0, y: 0, w: 13.33, h: 0.35, fill: { color: colors.cyan, transparency: 70 } });
  slide.addText('PATENT CORE #2: AUTOMATED THREAT-TO-TEST TRANSFORMATION', {
    x: 0.5, y: 0, w: 12.33, h: 0.35,
    fontSize: 10, bold: true, color: colors.white, align: 'center', valign: 'middle',
  });

  slide.addText('Automated Threat Vector to\nExecutable Attack Translation', {
    x: 0.5, y: 0.5, w: 12.33, h: 0.9,
    fontSize: 32, bold: true, color: colors.white, align: 'center',
  });

  // Problem statement
  slide.addShape('rect', {
    x: 1, y: 1.5, w: 11.33, h: 0.6,
    fill: { color: colors.red, transparency: 80 },
    line: { color: colors.red, width: 2 },
  });
  slide.addText('Today: Threat modeling outputs documents — not executable security tests', {
    x: 1.2, y: 1.55, w: 10.93, h: 0.5,
    fontSize: 15, bold: true, color: colors.red, align: 'center',
  });

  // Left: LLM Threat Reasoning generates structured vectors
  slide.addText('LLM Threat Reasoning Engine Outputs', {
    x: 0.5, y: 2.3, w: 6, h: 0.4,
    fontSize: 14, bold: true, color: colors.purple,
  });

  const vectors = [
    { name: 'Attack Path', desc: 'Full exploitation chain from entry to impact' },
    { name: 'Target Asset', desc: 'Specific component, endpoint, or agent' },
    { name: 'Required Access', desc: 'Authentication level and privileges needed' },
    { name: 'Exploit Pattern', desc: 'Classified attack technique and payload type' },
  ];

  vectors.forEach((v, i) => {
    const y = 2.8 + i * 0.6;
    slide.addShape('rect', {
      x: 0.5, y: y, w: 5.8, h: 0.5,
      fill: { color: colors.bgAlt },
      line: { color: colors.purple, width: 1 },
    });
    slide.addText(v.name, { x: 0.7, y: y + 0.05, w: 1.8, h: 0.2, fontSize: 11, bold: true, color: colors.purple });
    slide.addText(v.desc, { x: 2.6, y: y + 0.05, w: 3.5, h: 0.4, fontSize: 9, color: colors.slate400, valign: 'middle' });
  });

  // Arrow
  slide.addShape('rect', { x: 6.4, y: 3.1, w: 0.5, h: 1.5, fill: { color: colors.cyan, transparency: 60 } });
  slide.addText('\u2192', { x: 6.4, y: 3.5, w: 0.5, h: 0.7, fontSize: 24, color: colors.white, align: 'center' });

  // Right: Transformation outputs
  slide.addText('Auto-Generated Test Outputs', {
    x: 7.0, y: 2.3, w: 6, h: 0.4,
    fontSize: 14, bold: true, color: colors.cyan,
  });

  const outputs = [
    { name: 'Browser-Based Attack Script', desc: 'End-to-end UI attack simulation', color: colors.cyan },
    { name: 'LLM Adversarial Test Case', desc: 'Jailbreak and injection validation', color: colors.red },
    { name: 'API Fuzz Scenario', desc: 'Mutation-based API exploitation', color: colors.blue },
    { name: 'Agent Tool Abuse Test', desc: 'Permission escalation validation', color: colors.amber },
  ];

  outputs.forEach((o, i) => {
    const y = 2.8 + i * 0.6;
    slide.addShape('rect', {
      x: 7.0, y: y, w: 5.83, h: 0.5,
      fill: { color: colors.bgAlt },
      line: { color: o.color, width: 2 },
    });
    slide.addText(o.name, { x: 7.2, y: y + 0.05, w: 3, h: 0.2, fontSize: 11, bold: true, color: o.color });
    slide.addText(o.desc, { x: 10.2, y: y + 0.05, w: 2.4, h: 0.4, fontSize: 9, color: colors.slate400, valign: 'middle' });
  });

  // Pipeline
  slide.addShape('rect', {
    x: 0.5, y: 5.2, w: 12.33, h: 0.55,
    fill: { color: colors.purple, transparency: 75 },
    line: { color: colors.purple, width: 2 },
  });
  slide.addText('Threat Vector  \u2192  Structured Graph  \u2192  Test Template  \u2192  Executable Attack  \u2192  Result Feedback', {
    x: 0.5, y: 5.25, w: 12.33, h: 0.45,
    fontSize: 13, bold: true, color: colors.white, align: 'center',
  });

  // Novelty
  slide.addShape('rect', {
    x: 0.5, y: 6.0, w: 12.33, h: 1.2,
    fill: { color: colors.green, transparency: 85 },
    line: { color: colors.green, width: 3 },
  });
  slide.addText('CLAIMABLE INNOVATION', {
    x: 0.7, y: 6.05, w: 4, h: 0.3,
    fontSize: 11, bold: true, color: colors.green,
  });
  slide.addText('The system reasons about threats using LLM intelligence, then automatically generates executable\nattack simulations that validate real exploitability — a non-obvious automation beyond existing tooling.', {
    x: 0.7, y: 6.4, w: 11.8, h: 0.65,
    fontSize: 12, color: colors.white,
  });
}

// ─── Slide 7: Closed-Loop Learning Engine (Patent Core #3) ──────────────────

function createSlide7_ClosedLoopEngine(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addShape('rect', { x: 0, y: 0, w: 13.33, h: 0.35, fill: { color: colors.purple, transparency: 70 } });
  slide.addText('PATENT CORE #3: CLOSED-LOOP SELF-IMPROVING SECURITY ENGINE', {
    x: 0.5, y: 0, w: 12.33, h: 0.35,
    fontSize: 10, bold: true, color: colors.white, align: 'center', valign: 'middle',
  });

  slide.addText('Closed-Loop Self-Improving Security System', {
    x: 0.5, y: 0.5, w: 12.33, h: 0.7,
    fontSize: 30, bold: true, color: colors.white, align: 'center',
  });

  // Loop flow
  const loopSteps = [
    { label: 'Runtime\nIncident', color: colors.green },
    { label: 'Adversarial\nTest Success', color: colors.red },
    { label: 'Exploit\nValidated', color: colors.amber },
    { label: 'Rule\nRegeneration', color: colors.cyan },
    { label: 'Policy\nUpdate', color: colors.blue },
    { label: 'Re-score\nRisk', color: colors.purple },
    { label: 'Re-test\nAutomatically', color: colors.green },
  ];

  loopSteps.forEach((s, i) => {
    const x = 0.3 + i * 1.85;
    slide.addShape('rect', {
      x: x, y: 1.4, w: 1.65, h: 1.1,
      fill: { color: s.color, transparency: 70 },
      line: { color: s.color, width: 2 },
    });
    slide.addText(s.label, {
      x: x, y: 1.45, w: 1.65, h: 1.0,
      fontSize: 10, bold: true, color: colors.white, align: 'center', valign: 'middle',
    });
    if (i < loopSteps.length - 1) {
      slide.addText('\u2192', { x: x + 1.65, y: 1.65, w: 0.2, h: 0.5, fontSize: 16, color: colors.cyan });
    }
  });

  // Loop-back
  slide.addShape('rect', { x: 0.3, y: 2.7, w: 12.73, h: 0.4, fill: { color: colors.purple, transparency: 80 } });
  slide.addText('\u2190  FEEDBACK LOOPS BACK — CONTINUOUS REGENERATION  \u2190', {
    x: 0.3, y: 2.7, w: 12.73, h: 0.4,
    fontSize: 11, bold: true, color: colors.white, align: 'center', valign: 'middle',
  });

  // Key claim
  slide.addShape('rect', {
    x: 1, y: 3.3, w: 11.33, h: 0.6,
    fill: { color: colors.amber, transparency: 75 },
    line: { color: colors.amber, width: 3 },
  });
  slide.addText('KEY CLAIM: Runtime exploitability updates static analysis rules automatically', {
    x: 1, y: 3.35, w: 11.33, h: 0.5,
    fontSize: 18, bold: true, color: colors.amber, align: 'center',
  });

  // What gets regenerated
  slide.addText('What Gets Regenerated Automatically:', {
    x: 0.5, y: 4.1, w: 12.33, h: 0.35,
    fontSize: 15, bold: true, color: colors.white, align: 'center',
  });

  const regenerated = [
    { title: 'Static Analysis Rules', desc: 'Detection patterns evolve from confirmed runtime exploits', color: colors.cyan },
    { title: 'Dynamic Test Scenarios', desc: 'Attack simulations updated with newly discovered bypass methods', color: colors.blue },
    { title: 'Agent Guardrail Constraints', desc: 'Prompt boundaries, tool restrictions, output filters auto-updated', color: colors.green },
    { title: 'Autonomy Scoring Thresholds', desc: 'Risk weights recalibrated from real-world incident impact data', color: colors.amber },
    { title: 'CI/CD Policy Gate Thresholds', desc: 'Blocking and approval thresholds adjusted from enforcement outcomes', color: colors.purple },
  ];

  regenerated.forEach((r, i) => {
    const isLeft = i % 2 === 0;
    const x = isLeft ? 0.5 : 6.83;
    const row = Math.floor(i / 2);
    const y = 4.55 + row * 0.7;
    const w = i === 4 ? 12.33 : 6.0;

    slide.addShape('rect', {
      x: i === 4 ? 0.5 : x, y: y, w: w, h: 0.55,
      fill: { color: colors.bgAlt },
      line: { color: r.color, width: 1 },
    });
    slide.addText(r.title + ':', {
      x: (i === 4 ? 0.5 : x) + 0.15, y: y + 0.05, w: 2.8, h: 0.45,
      fontSize: 11, bold: true, color: r.color, valign: 'middle',
    });
    slide.addText(r.desc, {
      x: (i === 4 ? 0.5 : x) + 3, y: y + 0.05, w: w - 3.3, h: 0.45,
      fontSize: 10, color: colors.slate400, valign: 'middle',
    });
  });

  // Bottom
  slide.addShape('rect', {
    x: 0.5, y: 6.7, w: 12.33, h: 0.55,
    fill: { color: colors.green, transparency: 85 },
  });
  slide.addText('Full automation — no manual rule updates, no human bottleneck — the loop is the invention', {
    x: 0.5, y: 6.75, w: 12.33, h: 0.45,
    fontSize: 14, bold: true, color: colors.green, align: 'center',
  });
}

// ─── Slide 8: Patent Claims & Differentiation ───────────────────────────────

function createSlide8_PatentClaims(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addText('Patent Claims & Differentiation', {
    x: 0.5, y: 0.2, w: 12.33, h: 0.6,
    fontSize: 34, bold: true, color: colors.white, align: 'center',
  });

  // Three claims
  const claims = [
    {
      num: 'CLAIM 1',
      title: 'A Closed-Loop AI-Native SSDLC System',
      desc: 'A method and system comprising continuous threat modeling, automated security testing, runtime exploit validation, and feedback-driven rule regeneration operating as a unified closed-loop pipeline for securing autonomous AI systems.',
      color: colors.cyan,
    },
    {
      num: 'CLAIM 2',
      title: 'An Autonomy-Weighted Dynamic Risk Engine',
      desc: 'A computational method for dynamically scoring security risk by incorporating an Autonomy Index — a composite of tool write access, irreversible action capability, memory persistence, human-in-the-loop presence, and cross-agent interaction scope — as a multiplicative risk factor.',
      color: colors.amber,
    },
    {
      num: 'CLAIM 3',
      title: 'Threat-to-Test Automated Transformation',
      desc: 'A method comprising: parsing architectural representations, generating structured threat vectors via LLM-based reasoning, translating vectors into executable dynamic test cases (browser attacks, adversarial prompts, API fuzz, agent abuse tests), and updating the threat graph from runtime exploitability signals.',
      color: colors.purple,
    },
  ];

  claims.forEach((c, i) => {
    const y = 1.0 + i * 1.45;
    slide.addShape('rect', {
      x: 0.5, y: y, w: 12.33, h: 1.3,
      fill: { color: colors.bgAlt },
      line: { color: c.color, width: 3 },
    });
    slide.addShape('roundRect', { x: 0.7, y: y + 0.1, w: 1.4, h: 0.35, fill: { color: c.color, transparency: 50 } });
    slide.addText(c.num, { x: 0.7, y: y + 0.1, w: 1.4, h: 0.35, fontSize: 10, bold: true, color: colors.white, align: 'center', valign: 'middle' });
    slide.addText(c.title, { x: 2.3, y: y + 0.05, w: 10, h: 0.4, fontSize: 18, bold: true, color: c.color });
    slide.addText(c.desc, { x: 0.7, y: y + 0.5, w: 11.8, h: 0.7, fontSize: 11, color: colors.slate300 });
  });

  // Key differentiators (compact)
  slide.addText('vs. Traditional DevSecOps', {
    x: 0.5, y: 5.4, w: 12.33, h: 0.35,
    fontSize: 14, bold: true, color: colors.slate400, align: 'center',
  });

  const diffs = [
    { old: 'Static severity scoring', new: 'Autonomy-weighted dynamic scoring', color: colors.amber },
    { old: 'Manual threat modeling', new: 'LLM-generated structured threat graph', color: colors.purple },
    { old: 'Post-deployment validation', new: 'Continuous exploitability-driven regeneration', color: colors.green },
  ];

  diffs.forEach((d, i) => {
    const x = 0.5 + i * 4.2;
    slide.addShape('rect', { x: x, y: 5.8, w: 4, h: 0.7, fill: { color: colors.bgAlt }, line: { color: d.color, width: 1 } });
    slide.addText(d.old + '  \u2192', { x: x + 0.1, y: 5.83, w: 3.8, h: 0.3, fontSize: 9, color: colors.slate500 });
    slide.addText(d.new, { x: x + 0.1, y: 6.13, w: 3.8, h: 0.3, fontSize: 10, bold: true, color: d.color });
  });

  // Filing strategy
  slide.addShape('rect', {
    x: 0.5, y: 6.7, w: 12.33, h: 0.6,
    fill: { color: colors.cyan, transparency: 70 },
    line: { color: colors.cyan, width: 3 },
  });
  slide.addText('Filing Strategy: Narrow claims on integration logic — the novelty is the closed-loop architecture', {
    x: 0.5, y: 6.75, w: 12.33, h: 0.5,
    fontSize: 15, bold: true, color: colors.white, align: 'center',
  });
}
