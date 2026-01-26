import PptxGenJS from 'pptxgenjs';

// Color palette matching the app theme
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

export async function generatePresentation(): Promise<void> {
  const pptx = new PptxGenJS();

  // Set presentation properties
  pptx.author = 'AI-Native SSDLC Security Platform';
  pptx.title = 'AI-Native Threat-Driven SSDLC Security Platform';
  pptx.subject = 'Security Platform Presentation';

  // Set 16:9 layout
  pptx.defineLayout({ name: 'LAYOUT_16x9', width: 13.33, height: 7.5 });
  pptx.layout = 'LAYOUT_16x9';

  // Create all slides
  createSlide1_Title(pptx);
  createSlide2_Problem(pptx);
  createSlide3_Vision(pptx);
  createSlide4_Architecture(pptx);
  createSlide5_ThreatModeling(pptx);
  createSlide6_SAST(pptx);
  createSlide7_DAST(pptx);
  createSlide8_IAST(pptx);
  createSlide9_RedTeaming(pptx);
  createSlide10_RiskEngine(pptx);
  createSlide11_ContinuousLearning(pptx);
  createSlide12_Governance(pptx);
  createSlide13_ValueProposition(pptx);

  // Save
  await pptx.writeFile({ fileName: 'AI-Native-SSDLC-Security-Platform.pptx' });
}

function createSlide1_Title(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  // Icon boxes
  const iconColors = [colors.cyan, colors.purple, colors.blue, colors.amber];
  iconColors.forEach((color, i) => {
    slide.addShape('rect', {
      x: 4.2 + i * 1.3, y: 1.5, w: 1, h: 1,
      fill: { color: color, transparency: 80 },
      line: { color: color, width: 2 },
    });
    slide.addText(['Shield', 'Brain', 'Lock', 'Zap'][i], {
      x: 4.2 + i * 1.3, y: 1.7, w: 1, h: 0.6,
      fontSize: 10, color: color, align: 'center',
    });
  });

  // Main title
  slide.addText('AI-Native Threat-Driven\nSSDLC Security Platform', {
    x: 0.5, y: 2.8, w: 12.33, h: 1.5,
    fontSize: 44, fontFace: 'Arial', bold: true, color: colors.white, align: 'center',
  });

  // Tagline
  slide.addText('Continuous Security for Code, Cloud, and AI Systems', {
    x: 0.5, y: 4.4, w: 12.33, h: 0.5,
    fontSize: 22, color: colors.slate300, align: 'center',
  });

  // Feature pills
  const features = ['Threat Modeling', 'SAST', 'DAST', 'IAST', 'AI Red Teaming', 'Learning'];
  features.forEach((f, i) => {
    slide.addShape('roundRect', {
      x: 1.5 + i * 1.8, y: 5.2, w: 1.6, h: 0.45,
      fill: { color: colors.bgAlt },
      line: { color: colors.slate500, width: 1 },
    });
    slide.addText(f, {
      x: 1.5 + i * 1.8, y: 5.2, w: 1.6, h: 0.45,
      fontSize: 10, color: colors.slate300, align: 'center', valign: 'middle',
    });
  });

  // Bottom text
  slide.addText('Enterprise-Grade Security Operating System for Modern Development', {
    x: 0.5, y: 6.5, w: 12.33, h: 0.5,
    fontSize: 14, color: colors.slate500, align: 'center',
  });
}

function createSlide2_Problem(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addText('The AI Security Gap', {
    x: 0.5, y: 0.4, w: 12, h: 0.8,
    fontSize: 40, bold: true, color: colors.white,
  });
  slide.addText('Why traditional SSDLC fails for AI-powered systems', {
    x: 0.5, y: 1.1, w: 12, h: 0.5,
    fontSize: 18, color: colors.slate400,
  });

  // Problems
  const problems = [
    { title: 'Traditional SSDLC Blind to AI Threats', desc: 'Conventional tools miss prompt injection, jailbreaks, agent abuse, and model extraction attacks', impact: 'Critical' },
    { title: 'Siloed Security Tools', desc: 'SAST, DAST, and IAST operate independently without threat-driven coordination or AI context', impact: 'High' },
    { title: 'Reactive Security Posture', desc: 'Security validated only after deployment, with no continuous learning from runtime incidents', impact: 'High' },
  ];

  problems.forEach((p, i) => {
    const y = 1.8 + i * 1.2;
    slide.addShape('rect', {
      x: 0.5, y: y, w: 9, h: 1,
      fill: { color: colors.bgAlt },
      line: { color: colors.red, width: 2, transparency: 50 },
    });
    slide.addText(p.title, {
      x: 0.7, y: y + 0.1, w: 7, h: 0.4,
      fontSize: 16, bold: true, color: colors.white,
    });
    slide.addText(p.impact, {
      x: 7.8, y: y + 0.15, w: 1.5, h: 0.3,
      fontSize: 10, color: colors.red, align: 'center',
      fill: { color: colors.red, transparency: 80 },
    });
    slide.addText(p.desc, {
      x: 0.7, y: y + 0.55, w: 8, h: 0.4,
      fontSize: 12, color: colors.slate300,
    });
  });

  // Stats
  const stats = [
    { value: '73%', desc: 'of AI apps lack security testing', color: colors.red },
    { value: '$4.5M', desc: 'Average AI breach cost', color: colors.amber },
    { value: '45 days', desc: 'To detect AI vulnerabilities', color: colors.purple },
  ];

  stats.forEach((s, i) => {
    const x = 0.5 + i * 4.3;
    slide.addShape('rect', {
      x: x, y: 5.5, w: 4, h: 1.5,
      fill: { color: colors.bgAlt },
      line: { color: colors.slate500, width: 1 },
    });
    slide.addText(s.value, {
      x: x, y: 5.6, w: 4, h: 0.8,
      fontSize: 32, bold: true, color: s.color, align: 'center',
    });
    slide.addText(s.desc, {
      x: x, y: 6.4, w: 4, h: 0.5,
      fontSize: 11, color: colors.slate400, align: 'center',
    });
  });
}

function createSlide3_Vision(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addText('Our Vision', {
    x: 0.5, y: 0.4, w: 12.33, h: 0.8,
    fontSize: 40, bold: true, color: colors.cyan, align: 'center',
  });
  slide.addText('A Security Operating System that shifts security left, operates continuously, and evolves with every deployment', {
    x: 1, y: 1.2, w: 11.33, h: 0.6,
    fontSize: 16, color: colors.slate300, align: 'center',
  });

  // Four pillars
  const pillars = [
    { title: 'Threat-Driven', desc: 'Security decisions anchored in real threat models, not generic checklists', color: colors.cyan },
    { title: 'AI-Native', desc: 'Purpose-built to secure LLMs, agents, and autonomous AI systems', color: colors.purple },
    { title: 'DevSecOps First', desc: 'Seamlessly integrated into CI/CD pipelines with policy gates', color: colors.blue },
    { title: 'Continuously Learning', desc: 'Self-improving through runtime feedback and adversarial validation', color: colors.green },
  ];

  pillars.forEach((p, i) => {
    const x = (i % 2) * 6.2 + 0.5;
    const y = Math.floor(i / 2) * 1.7 + 2;
    slide.addShape('rect', {
      x: x, y: y, w: 6, h: 1.5,
      fill: { color: colors.bgAlt },
      line: { color: p.color, width: 2 },
    });
    slide.addText(p.title, {
      x: x + 0.2, y: y + 0.2, w: 5.6, h: 0.5,
      fontSize: 20, bold: true, color: colors.white,
    });
    slide.addText(p.desc, {
      x: x + 0.2, y: y + 0.8, w: 5.6, h: 0.6,
      fontSize: 13, color: colors.slate400,
    });
  });

  // Bottom banner
  slide.addShape('rect', {
    x: 0.5, y: 5.7, w: 12.33, h: 1.3,
    fill: { color: colors.cyan, transparency: 85 },
    line: { color: colors.cyan, width: 2 },
  });
  slide.addText('Not a Scanner. A Security Operating System.', {
    x: 0.5, y: 5.85, w: 12.33, h: 0.5,
    fontSize: 24, bold: true, color: colors.white, align: 'center',
  });
  slide.addText('Unifying threat modeling, static/dynamic analysis, runtime intelligence, and adversarial testing', {
    x: 0.5, y: 6.4, w: 12.33, h: 0.5,
    fontSize: 13, color: colors.slate300, align: 'center',
  });
}

function createSlide4_Architecture(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addText('End-to-End AI-Native SSDLC Architecture', {
    x: 0.5, y: 0.3, w: 12.33, h: 0.6,
    fontSize: 32, bold: true, color: colors.white, align: 'center',
  });

  // 5 Phases
  const phases = [
    { name: 'DESIGN', tool: 'Threagile + STRIDEGPT', color: colors.purple },
    { name: 'BUILD', tool: 'CodeSecAI (SAST)', color: colors.cyan },
    { name: 'TEST', tool: 'Vue.js + Playwright', color: colors.blue },
    { name: 'RUNTIME', tool: 'DeVAIC (IAST)', color: colors.green },
    { name: 'ADVERSARIAL', tool: 'Red Teaming', color: colors.red },
  ];

  phases.forEach((p, i) => {
    const x = 0.3 + i * 2.6;
    slide.addShape('rect', {
      x: x, y: 1.2, w: 2.4, h: 2,
      fill: { color: p.color, transparency: 80 },
      line: { color: p.color, width: 2 },
    });
    slide.addText(`PHASE ${i + 1}`, {
      x: x, y: 1.3, w: 2.4, h: 0.3,
      fontSize: 9, bold: true, color: colors.white, align: 'center',
    });
    slide.addText(p.name, {
      x: x, y: 1.6, w: 2.4, h: 0.4,
      fontSize: 14, bold: true, color: colors.white, align: 'center',
    });
    slide.addText(p.tool, {
      x: x, y: 2.1, w: 2.4, h: 0.8,
      fontSize: 10, color: colors.slate300, align: 'center',
    });
    if (i < 4) {
      slide.addText('→', {
        x: x + 2.4, y: 1.9, w: 0.2, h: 0.5,
        fontSize: 20, color: colors.cyan,
      });
    }
  });

  // Central Risk Engine
  slide.addShape('rect', {
    x: 0.5, y: 3.5, w: 12.33, h: 1.4,
    fill: { color: colors.amber, transparency: 75 },
    line: { color: colors.amber, width: 3 },
  });
  slide.addText('UNIFIED RISK ENGINE & POLICY GATES', {
    x: 0.5, y: 3.65, w: 12.33, h: 0.4,
    fontSize: 18, bold: true, color: colors.white, align: 'center',
  });
  slide.addText('Risk = Impact × Likelihood × Exposure × AI Autonomy', {
    x: 0.5, y: 4.1, w: 8, h: 0.35,
    fontSize: 14, color: colors.white,
  });

  // Gates
  const gates = [
    { label: 'Block Build', color: colors.red },
    { label: 'Require Approval', color: colors.amber },
    { label: 'Auto-Mitigate', color: colors.green },
  ];
  gates.forEach((g, i) => {
    slide.addShape('roundRect', {
      x: 9 + i * 1.4, y: 4.05, w: 1.2, h: 0.5,
      fill: { color: g.color, transparency: 70 },
    });
    slide.addText(g.label, {
      x: 9 + i * 1.4, y: 4.05, w: 1.2, h: 0.5,
      fontSize: 8, color: colors.white, align: 'center', valign: 'middle',
    });
  });

  // Feedback loop
  slide.addShape('rect', {
    x: 0.5, y: 5.2, w: 12.33, h: 0.9,
    fill: { color: colors.purple, transparency: 80 },
    line: { color: colors.purple, width: 2 },
  });
  slide.addText('CONTINUOUS LEARNING: Runtime incidents → Red team success → False positives → New patterns', {
    x: 0.5, y: 5.35, w: 12.33, h: 0.6,
    fontSize: 13, color: colors.white, align: 'center',
  });

  // Bottom info
  slide.addText('CI/CD: Git → Build → Test → Deploy  |  Compliance: OWASP • NIST AI RMF • ISO 27001 • SOC 2', {
    x: 0.5, y: 6.4, w: 12.33, h: 0.4,
    fontSize: 11, color: colors.slate400, align: 'center',
  });
}

function createSlide5_ThreatModeling(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addText('Threat Modeling Core', {
    x: 0.5, y: 0.4, w: 10, h: 0.7,
    fontSize: 36, bold: true, color: colors.white,
  });
  slide.addText('Threagile + STRIDEGPT — Shift Security Left', {
    x: 0.5, y: 1.0, w: 10, h: 0.4,
    fontSize: 16, color: colors.slate400,
  });

  // Inputs
  slide.addText('Inputs', { x: 0.5, y: 1.6, w: 4, h: 0.4, fontSize: 18, bold: true, color: colors.purple });
  const inputs = ['C4 / Architecture Diagrams', 'Data Flow Definitions', 'Trust Boundaries', 'OpenAPI Specs', 'Prompt Templates', 'AI Agent Workflows', 'Tool Permissions'];
  inputs.forEach((inp, i) => {
    slide.addText('• ' + inp, {
      x: 0.5, y: 2.1 + i * 0.42, w: 4.5, h: 0.4,
      fontSize: 12, color: colors.slate300,
    });
  });

  // Engines
  slide.addText('Threat Engines', { x: 5.2, y: 1.6, w: 4, h: 0.4, fontSize: 18, bold: true, color: colors.purple });

  slide.addShape('rect', {
    x: 5.2, y: 2.1, w: 3.8, h: 1.2,
    fill: { color: colors.purple, transparency: 75 },
    line: { color: colors.purple, width: 2 },
  });
  slide.addText('Threagile', { x: 5.4, y: 2.2, w: 3.4, h: 0.35, fontSize: 14, bold: true, color: colors.white });
  slide.addText('Architecture risk analysis with automated threat identification', {
    x: 5.4, y: 2.55, w: 3.4, h: 0.6, fontSize: 10, color: colors.slate300,
  });

  slide.addShape('rect', {
    x: 5.2, y: 3.5, w: 3.8, h: 1.2,
    fill: { color: colors.blue, transparency: 75 },
    line: { color: colors.blue, width: 2 },
  });
  slide.addText('STRIDEGPT', { x: 5.4, y: 3.6, w: 3.4, h: 0.35, fontSize: 14, bold: true, color: colors.white });
  slide.addText('LLM-powered threat reasoning for AI-specific attacks', {
    x: 5.4, y: 3.95, w: 3.4, h: 0.6, fontSize: 10, color: colors.slate300,
  });

  // Outputs
  slide.addText('Outputs', { x: 9.3, y: 1.6, w: 3.5, h: 0.4, fontSize: 18, bold: true, color: colors.cyan });
  slide.addShape('rect', {
    x: 9.3, y: 2.1, w: 3.5, h: 3.5,
    fill: { color: colors.bgAlt },
    line: { color: colors.cyan, width: 2 },
  });
  const outputs = [
    { title: 'Threat Graph', desc: 'Visual attack surfaces' },
    { title: 'STRIDE Classification', desc: 'S, T, R, I, D, E categories' },
    { title: 'AI-Specific Threats', desc: 'Prompt injection, jailbreaks' },
    { title: 'Risk-Scored Findings', desc: 'CI/CD-ready reports' },
  ];
  outputs.forEach((o, i) => {
    slide.addText(o.title, { x: 9.5, y: 2.3 + i * 0.8, w: 3.1, h: 0.3, fontSize: 12, bold: true, color: colors.cyan });
    slide.addText(o.desc, { x: 9.5, y: 2.6 + i * 0.8, w: 3.1, h: 0.3, fontSize: 10, color: colors.slate400 });
  });

  // Bottom
  slide.addShape('rect', { x: 0.5, y: 6.2, w: 12.33, h: 0.8, fill: { color: colors.purple, transparency: 85 } });
  slide.addText('Security decisions driven by real threat models, not generic checklists', {
    x: 0.5, y: 6.35, w: 12.33, h: 0.5, fontSize: 14, color: colors.white, align: 'center',
  });
}

function createSlide6_SAST(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addText('SAST — CodeSecAI', {
    x: 0.5, y: 0.4, w: 10, h: 0.7,
    fontSize: 36, bold: true, color: colors.white,
  });
  slide.addText('Static Analysis for Code, AI, and Infrastructure', {
    x: 0.5, y: 1.0, w: 10, h: 0.4,
    fontSize: 16, color: colors.slate400,
  });

  // Coverage areas
  const areas = [
    { title: 'Application Source Code', items: ['Injection flaws', 'Auth bypass', 'Crypto issues', 'Data leakage'] },
    { title: 'Prompt Templates', items: ['Prompt injection', 'Context leakage', 'Instruction hijacking'] },
    { title: 'Agent Graphs & Tools', items: ['Over-privileged tools', 'Unsafe autonomy', 'Permission escalation'] },
    { title: 'Infrastructure-as-Code', items: ['Misconfigurations', 'Exposed secrets', 'IAM violations'] },
  ];

  areas.forEach((a, i) => {
    const x = (i % 2) * 4.5 + 0.5;
    const y = Math.floor(i / 2) * 2 + 1.6;
    slide.addShape('rect', { x: x, y: y, w: 4.2, h: 1.7, fill: { color: colors.bgAlt }, line: { color: colors.cyan, width: 1 } });
    slide.addText(a.title, { x: x + 0.15, y: y + 0.1, w: 4, h: 0.35, fontSize: 13, bold: true, color: colors.white });
    a.items.forEach((item, j) => {
      slide.addText('• ' + item, { x: x + 0.15, y: y + 0.5 + j * 0.3, w: 4, h: 0.3, fontSize: 10, color: colors.slate400 });
    });
  });

  // Capabilities
  slide.addText('Key Capabilities', { x: 9.3, y: 1.6, w: 3.5, h: 0.4, fontSize: 16, bold: true, color: colors.white });
  const caps = ['Threat-model-driven rules', 'Cross-file analysis', 'AI-aware detection', 'Semantic understanding', 'CI/CD integration'];
  caps.forEach((c, i) => {
    slide.addText('✓ ' + c, { x: 9.3, y: 2.1 + i * 0.4, w: 3.5, h: 0.35, fontSize: 11, color: colors.cyan });
  });

  // Example findings
  slide.addText('Example Findings', { x: 0.5, y: 5.6, w: 4, h: 0.35, fontSize: 14, bold: true, color: colors.white });

  slide.addShape('rect', { x: 0.5, y: 6, w: 6, h: 1, fill: { color: colors.bgAlt }, line: { color: colors.red, width: 3 } });
  slide.addText('CRITICAL: Prompt Injection in Agent Tool', { x: 0.7, y: 6.1, w: 5.6, h: 0.3, fontSize: 11, bold: true, color: colors.red });
  slide.addText('User input directly concatenated into system prompt', { x: 0.7, y: 6.45, w: 5.6, h: 0.3, fontSize: 10, color: colors.slate400 });

  slide.addShape('rect', { x: 6.8, y: 6, w: 6, h: 1, fill: { color: colors.bgAlt }, line: { color: colors.amber, width: 3 } });
  slide.addText('HIGH: Over-Privileged Agent Tool', { x: 7, y: 6.1, w: 5.6, h: 0.3, fontSize: 11, bold: true, color: colors.amber });
  slide.addText('Agent has write access to production database', { x: 7, y: 6.45, w: 5.6, h: 0.3, fontSize: 10, color: colors.slate400 });
}

function createSlide7_DAST(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addText('DAST — Vue.js + Playwright', {
    x: 0.5, y: 0.4, w: 10, h: 0.7,
    fontSize: 36, bold: true, color: colors.white,
  });
  slide.addText('Dynamic Application Security Testing with Real Attacks', {
    x: 0.5, y: 1.0, w: 10, h: 0.4,
    fontSize: 16, color: colors.slate400,
  });

  // Testing Capabilities
  slide.addText('Testing Capabilities', { x: 0.5, y: 1.6, w: 6, h: 0.4, fontSize: 18, bold: true, color: colors.blue });
  const caps = [
    { title: 'Full UI Workflow Testing', desc: 'End-to-end user journey simulation' },
    { title: 'Business Logic Abuse', desc: 'Logic flaws, race conditions, bypasses' },
    { title: 'API Fuzzing', desc: 'Intelligent mutation to discover edge cases' },
    { title: 'Auth & Authorization Bypass', desc: 'Privilege escalation validation' },
  ];
  caps.forEach((c, i) => {
    slide.addShape('rect', { x: 0.5, y: 2.1 + i * 0.9, w: 6, h: 0.75, fill: { color: colors.bgAlt }, line: { color: colors.blue, width: 1 } });
    slide.addText(c.title, { x: 0.7, y: 2.15 + i * 0.9, w: 5.6, h: 0.3, fontSize: 12, bold: true, color: colors.white });
    slide.addText(c.desc, { x: 0.7, y: 2.45 + i * 0.9, w: 5.6, h: 0.3, fontSize: 10, color: colors.slate400 });
  });

  // AI Attack Scenarios
  slide.addText('AI-Specific Attack Scenarios', { x: 6.8, y: 1.6, w: 6, h: 0.4, fontSize: 18, bold: true, color: colors.blue });
  const scenarios = [
    { title: 'Prompt Injection via UI', sev: 'Critical' },
    { title: 'Tool Invocation Manipulation', sev: 'High' },
    { title: 'Context Window Overflow', sev: 'High' },
    { title: 'Multi-Turn Jailbreaks', sev: 'Critical' },
  ];
  scenarios.forEach((s, i) => {
    slide.addShape('rect', { x: 6.8, y: 2.1 + i * 0.9, w: 6, h: 0.75, fill: { color: colors.bgAlt }, line: { color: colors.blue, width: 1 } });
    slide.addText(s.title, { x: 7, y: 2.2 + i * 0.9, w: 4, h: 0.3, fontSize: 12, bold: true, color: colors.white });
    slide.addText(s.sev, {
      x: 11.3, y: 2.25 + i * 0.9, w: 1.2, h: 0.25,
      fontSize: 9, color: s.sev === 'Critical' ? colors.red : colors.amber,
      fill: { color: s.sev === 'Critical' ? colors.red : colors.amber, transparency: 80 }, align: 'center',
    });
  });

  // Bottom
  slide.addShape('rect', { x: 0.5, y: 5.8, w: 12.33, h: 1.2, fill: { color: colors.blue, transparency: 80 }, line: { color: colors.blue, width: 2 } });
  slide.addText('Threat-Driven Test Generation', { x: 0.7, y: 5.95, w: 12, h: 0.4, fontSize: 18, bold: true, color: colors.white });
  slide.addText('DAST scenarios auto-generated from STRIDEGPT threat outputs — every test validates a real threat', {
    x: 0.7, y: 6.4, w: 12, h: 0.4, fontSize: 12, color: colors.slate300,
  });
}

function createSlide8_IAST(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addText('IAST — DeVAIC', {
    x: 0.5, y: 0.4, w: 10, h: 0.7,
    fontSize: 36, bold: true, color: colors.white,
  });
  slide.addText('Runtime Intelligence & Instrumentation', {
    x: 0.5, y: 1.0, w: 10, h: 0.4,
    fontSize: 16, color: colors.slate400,
  });

  // Instrumentation Points
  slide.addText('Instrumentation Points', { x: 0.5, y: 1.6, w: 6, h: 0.4, fontSize: 18, bold: true, color: colors.green });
  const points = ['Prompt → Model → Tool Flows', 'Agent Decision Paths', 'Memory Access & Mutation', 'Sensitive Data Propagation'];
  points.forEach((p, i) => {
    slide.addText('• ' + p, { x: 0.5, y: 2.1 + i * 0.45, w: 6, h: 0.4, fontSize: 13, color: colors.slate300 });
  });

  // Runtime Detection
  slide.addText('Runtime Detection', { x: 6.8, y: 1.6, w: 6, h: 0.4, fontSize: 18, bold: true, color: colors.green });
  const detections = [
    { title: 'Runtime Exploitability', sev: 'Critical' },
    { title: 'Data Leakage', sev: 'Critical' },
    { title: 'Cross-Agent Contamination', sev: 'High' },
    { title: 'Unsafe Autonomous Actions', sev: 'Critical' },
    { title: 'Prompt Injection Success', sev: 'Critical' },
    { title: 'Guardrail Bypass', sev: 'High' },
  ];
  detections.forEach((d, i) => {
    slide.addShape('rect', { x: 6.8, y: 2.05 + i * 0.55, w: 6, h: 0.45, fill: { color: colors.bgAlt }, line: { color: colors.green, width: 2, dashType: 'solid' } });
    slide.addText(d.title, { x: 7, y: 2.1 + i * 0.55, w: 4, h: 0.35, fontSize: 11, bold: true, color: colors.white });
    slide.addText(d.sev, { x: 11.5, y: 2.15 + i * 0.55, w: 1, h: 0.25, fontSize: 9, color: d.sev === 'Critical' ? colors.red : colors.amber });
  });

  // Response
  slide.addText('Real-Time Response', { x: 0.5, y: 4.2, w: 6, h: 0.4, fontSize: 16, bold: true, color: colors.green });
  const responses = [
    { action: 'Block', desc: 'Halt dangerous operations', color: colors.red },
    { action: 'Alert', desc: 'Notify security teams', color: colors.amber },
    { action: 'Log', desc: 'Capture evidence', color: colors.green },
  ];
  responses.forEach((r, i) => {
    slide.addShape('roundRect', { x: 0.5 + i * 2.1, y: 4.7, w: 0.9, h: 0.4, fill: { color: r.color, transparency: 70 } });
    slide.addText(r.action, { x: 0.5 + i * 2.1, y: 4.7, w: 0.9, h: 0.4, fontSize: 11, bold: true, color: colors.white, align: 'center', valign: 'middle' });
    slide.addText(r.desc, { x: 1.5 + i * 2.1, y: 4.75, w: 1.5, h: 0.3, fontSize: 9, color: colors.slate400 });
  });

  // Bottom
  slide.addShape('rect', { x: 0.5, y: 5.5, w: 12.33, h: 0.8, fill: { color: colors.green, transparency: 85 } });
  slide.addText('See what static analysis misses — validate exploitability in real production conditions', {
    x: 0.5, y: 5.65, w: 12.33, h: 0.5, fontSize: 14, color: colors.white, align: 'center',
  });
}

function createSlide9_RedTeaming(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addText('AI Red Teaming', {
    x: 0.5, y: 0.4, w: 10, h: 0.7,
    fontSize: 36, bold: true, color: colors.white,
  });
  slide.addText('Adversarial Validation & Continuous Attack Simulation', {
    x: 0.5, y: 1.0, w: 10, h: 0.4,
    fontSize: 16, color: colors.slate400,
  });

  // Banner
  slide.addShape('rect', { x: 0.5, y: 1.6, w: 12.33, h: 0.9, fill: { color: colors.red, transparency: 75 }, line: { color: colors.red, width: 2 } });
  slide.addText('Adversarial Attack Layer — Continuous red team probing for weaknesses', {
    x: 0.5, y: 1.75, w: 12.33, h: 0.6, fontSize: 16, bold: true, color: colors.white, align: 'center',
  });

  // Tools
  const tools = [
    { name: 'Promptfoo', desc: 'Prompt regression testing, jailbreak validation', color: colors.red },
    { name: 'Garak', desc: 'Model vulnerability scanner for LLM weaknesses', color: colors.orange },
    { name: 'Giskard', desc: 'Comprehensive AI quality and security validation', color: colors.amber },
  ];
  tools.forEach((t, i) => {
    const x = 0.5 + i * 4.2;
    slide.addShape('rect', { x: x, y: 2.7, w: 4, h: 1.3, fill: { color: colors.bgAlt }, line: { color: t.color, width: 2 } });
    slide.addText(t.name, { x: x + 0.2, y: 2.8, w: 3.6, h: 0.4, fontSize: 16, bold: true, color: colors.white });
    slide.addText(t.desc, { x: x + 0.2, y: 3.25, w: 3.6, h: 0.6, fontSize: 11, color: colors.slate400 });
  });

  // Attack Categories
  slide.addText('Attack Categories', { x: 0.5, y: 4.2, w: 6, h: 0.35, fontSize: 16, bold: true, color: colors.white });
  const cats = [
    { name: 'Prompt Attacks', attacks: 'Direct/indirect injection, context manipulation' },
    { name: 'Model Exploitation', attacks: 'Jailbreaking, model extraction, backdoors' },
    { name: 'Agent Attacks', attacks: 'Tool abuse, permission escalation, memory poisoning' },
    { name: 'Data & Privacy', attacks: 'PII extraction, training data leakage' },
  ];
  cats.forEach((c, i) => {
    const x = (i % 2) * 6.4 + 0.5;
    const y = Math.floor(i / 2) * 0.55 + 4.6;
    slide.addText(c.name + ':', { x: x, y: y, w: 2, h: 0.3, fontSize: 11, bold: true, color: colors.red });
    slide.addText(c.attacks, { x: x + 2, y: y, w: 4.2, h: 0.3, fontSize: 10, color: colors.slate400 });
  });

  // Metrics
  const metrics = [
    { value: '24/7', label: 'Continuous testing' },
    { value: '1000+', label: 'Attack scenarios' },
    { value: '<60s', label: 'Detection time' },
    { value: '100%', label: 'Coverage' },
  ];
  metrics.forEach((m, i) => {
    slide.addText(m.value, { x: 0.5 + i * 3.2, y: 6.0, w: 3, h: 0.5, fontSize: 24, bold: true, color: colors.red, align: 'center' });
    slide.addText(m.label, { x: 0.5 + i * 3.2, y: 6.5, w: 3, h: 0.3, fontSize: 10, color: colors.slate400, align: 'center' });
  });
}

function createSlide10_RiskEngine(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addText('Unified Risk Engine', {
    x: 0.5, y: 0.4, w: 10, h: 0.7,
    fontSize: 36, bold: true, color: colors.white,
  });
  slide.addText('Business-Driven Security Decisions', {
    x: 0.5, y: 1.0, w: 10, h: 0.4,
    fontSize: 16, color: colors.slate400,
  });

  // Formula
  slide.addShape('rect', { x: 0.5, y: 1.5, w: 12.33, h: 1.1, fill: { color: colors.amber, transparency: 75 }, line: { color: colors.amber, width: 3 } });
  slide.addText('Risk = Impact × Likelihood × Exposure × AI Autonomy', {
    x: 0.5, y: 1.75, w: 12.33, h: 0.6, fontSize: 28, bold: true, color: colors.amber, align: 'center',
  });

  // Factors
  const factors = [
    { name: 'Impact', desc: 'Business & data impact', color: colors.red, metrics: ['Data sensitivity', 'System criticality', 'Compliance'] },
    { name: 'Likelihood', desc: 'Exploitation probability', color: colors.amber, metrics: ['Attack complexity', 'Exploit availability', 'Auth required'] },
    { name: 'Exposure', desc: 'Attack surface', color: colors.blue, metrics: ['Internet-facing', 'User access', 'API exposure'] },
    { name: 'AI Autonomy', desc: 'Autonomous decisions', color: colors.purple, metrics: ['Tool permissions', 'Human-in-loop', 'Action scope'] },
  ];
  factors.forEach((f, i) => {
    const x = 0.5 + i * 3.2;
    slide.addShape('rect', { x: x, y: 2.8, w: 3, h: 1.7, fill: { color: colors.bgAlt }, line: { color: f.color, width: 1 } });
    slide.addText(f.name, { x: x + 0.1, y: 2.9, w: 2.8, h: 0.35, fontSize: 14, bold: true, color: colors.white });
    slide.addText(f.desc, { x: x + 0.1, y: 3.25, w: 2.8, h: 0.3, fontSize: 10, color: colors.slate400 });
    f.metrics.forEach((m, j) => {
      slide.addText('• ' + m, { x: x + 0.1, y: 3.6 + j * 0.28, w: 2.8, h: 0.25, fontSize: 9, color: colors.slate500 });
    });
  });

  // Policy Gates
  slide.addText('Automated Policy Gates', { x: 0.5, y: 4.7, w: 6, h: 0.35, fontSize: 16, bold: true, color: colors.white });
  const gates = [
    { name: 'Block Build', trigger: 'Risk > 9.0', color: colors.red },
    { name: 'Require Approval', trigger: 'Risk 7.0-9.0', color: colors.amber },
    { name: 'Auto-Mitigate', trigger: 'Risk 4.0-7.0', color: colors.blue },
    { name: 'Accept Risk', trigger: 'Risk < 4.0', color: colors.green },
  ];
  gates.forEach((g, i) => {
    const x = 0.5 + i * 3.2;
    slide.addShape('rect', { x: x, y: 5.1, w: 3, h: 0.9, fill: { color: g.color, transparency: 75 }, line: { color: g.color, width: 1 } });
    slide.addText(g.name, { x: x, y: 5.2, w: 3, h: 0.35, fontSize: 12, bold: true, color: colors.white, align: 'center' });
    slide.addText(g.trigger, { x: x, y: 5.55, w: 3, h: 0.3, fontSize: 10, color: colors.slate300, align: 'center' });
  });

  slide.addText('Example: Critical prompt injection + high autonomy = Risk 9.2 = BLOCKED', {
    x: 0.5, y: 6.3, w: 12.33, h: 0.4, fontSize: 12, color: colors.red, align: 'center',
  });
}

function createSlide11_ContinuousLearning(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addText('Continuous Learning Loop', {
    x: 0.5, y: 0.4, w: 12.33, h: 0.7,
    fontSize: 36, bold: true, color: colors.purple, align: 'center',
  });
  slide.addText('Self-improving security that learns from every incident, attack, and false positive', {
    x: 1, y: 1.0, w: 11.33, h: 0.4,
    fontSize: 15, color: colors.slate400, align: 'center',
  });

  // Feedback sources
  const sources = [
    { title: 'Runtime Incidents', items: ['Successful attacks', 'Blocked attempts', 'Anomalies'], color: colors.green },
    { title: 'Red Team Success', items: ['New jailbreaks', 'Bypass techniques', 'Attack patterns'], color: colors.red },
    { title: 'False Positives', items: ['Developer feedback', 'Suppression patterns', 'Noise reduction'], color: colors.amber },
    { title: 'Threat Intel', items: ['CVE updates', 'OWASP advisories', 'Zero-days'], color: colors.blue },
  ];
  sources.forEach((s, i) => {
    const x = 0.5 + i * 3.2;
    slide.addShape('rect', { x: x, y: 1.6, w: 3, h: 1.5, fill: { color: colors.bgAlt }, line: { color: s.color, width: 1 } });
    slide.addText(s.title, { x: x + 0.1, y: 1.7, w: 2.8, h: 0.3, fontSize: 11, bold: true, color: colors.white });
    s.items.forEach((item, j) => {
      slide.addText('• ' + item, { x: x + 0.1, y: 2.05 + j * 0.32, w: 2.8, h: 0.3, fontSize: 9, color: colors.slate400 });
    });
  });

  // Learning Engine
  slide.addShape('ellipse', { x: 5.4, y: 3.3, w: 2.5, h: 1, fill: { color: colors.purple, transparency: 50 }, line: { color: colors.purple, width: 2 } });
  slide.addText('Learning\nEngine', { x: 5.4, y: 3.5, w: 2.5, h: 0.7, fontSize: 14, bold: true, color: colors.white, align: 'center' });

  // What gets updated
  slide.addText('What Gets Updated Automatically', { x: 0.5, y: 4.5, w: 12.33, h: 0.35, fontSize: 16, bold: true, color: colors.white, align: 'center' });
  const updates = [
    { name: 'STRIDEGPT Reasoning', color: colors.purple },
    { name: 'CodeSecAI Rules', color: colors.cyan },
    { name: 'DeVAIC Detection', color: colors.green },
    { name: 'Agent Guardrails', color: colors.blue },
  ];
  updates.forEach((u, i) => {
    slide.addShape('roundRect', { x: 0.5 + i * 3.2, y: 4.95, w: 3, h: 0.45, fill: { color: colors.bgAlt }, line: { color: u.color, width: 1 } });
    slide.addText(u.name, { x: 0.5 + i * 3.2, y: 4.95, w: 3, h: 0.45, fontSize: 11, bold: true, color: u.color, align: 'center', valign: 'middle' });
  });

  // Metrics
  const metrics = [
    { value: '-67%', label: 'False positive rate', color: colors.purple },
    { value: '+42%', label: 'New threat detection', color: colors.cyan },
    { value: '89%', label: 'Auto-remediation', color: colors.green },
    { value: '3hrs', label: 'Time to protection', color: colors.amber },
  ];
  metrics.forEach((m, i) => {
    slide.addText(m.value, { x: 0.5 + i * 3.2, y: 5.7, w: 3, h: 0.5, fontSize: 26, bold: true, color: m.color, align: 'center' });
    slide.addText(m.label, { x: 0.5 + i * 3.2, y: 6.2, w: 3, h: 0.3, fontSize: 10, color: colors.slate400, align: 'center' });
  });
}

function createSlide12_Governance(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addText('Governance & Compliance', {
    x: 0.5, y: 0.4, w: 10, h: 0.7,
    fontSize: 36, bold: true, color: colors.white,
  });
  slide.addText('Audit-Ready by Design', {
    x: 0.5, y: 1.0, w: 10, h: 0.4,
    fontSize: 16, color: colors.slate400,
  });

  // Frameworks
  const frameworks = [
    { name: 'OWASP ASVS', version: 'v4.0.3', coverage: '94%' },
    { name: 'OWASP LLM Top 10', version: 'v1.1', coverage: '100%' },
    { name: 'NIST AI RMF', version: 'v1.0', coverage: '87%' },
    { name: 'ISO 27001', version: '2022', coverage: '91%' },
    { name: 'SOC 2 Type II', version: 'Trust Services', coverage: '96%' },
    { name: 'PCI DSS', version: 'v4.0', coverage: '89%' },
  ];
  frameworks.forEach((f, i) => {
    const x = (i % 3) * 4.2 + 0.5;
    const y = Math.floor(i / 3) * 1.2 + 1.5;
    slide.addShape('rect', { x: x, y: y, w: 4, h: 1, fill: { color: colors.bgAlt }, line: { color: colors.amber, width: 1 } });
    slide.addText(f.name, { x: x + 0.15, y: y + 0.1, w: 2.5, h: 0.35, fontSize: 12, bold: true, color: colors.white });
    slide.addText(f.coverage, { x: x + 2.8, y: y + 0.1, w: 1, h: 0.35, fontSize: 18, bold: true, color: colors.amber, align: 'right' });
    slide.addText(f.version, { x: x + 0.15, y: y + 0.5, w: 3.7, h: 0.3, fontSize: 10, color: colors.slate500 });
  });

  // Policy & Audit
  slide.addShape('rect', { x: 0.5, y: 4.0, w: 6, h: 1.4, fill: { color: colors.blue, transparency: 85 }, line: { color: colors.blue, width: 1 } });
  slide.addText('Policy as Code', { x: 0.7, y: 4.1, w: 5.6, h: 0.35, fontSize: 14, bold: true, color: colors.white });
  slide.addText('• Version-controlled policies in Git\n• Automated enforcement at every stage\n• Tracked exception management', {
    x: 0.7, y: 4.5, w: 5.6, h: 0.8, fontSize: 10, color: colors.slate300,
  });

  slide.addShape('rect', { x: 6.8, y: 4.0, w: 6, h: 1.4, fill: { color: colors.purple, transparency: 85 }, line: { color: colors.purple, width: 1 } });
  slide.addText('Audit Trails', { x: 7, y: 4.1, w: 5.6, h: 0.35, fontSize: 14, bold: true, color: colors.white });
  slide.addText('• Complete evidence chain logged\n• One-click compliance reports\n• Full traceability commit to deploy', {
    x: 7, y: 4.5, w: 5.6, h: 0.8, fontSize: 10, color: colors.slate300,
  });

  // Dashboard metrics
  const dash = [
    { value: '98.7%', label: 'Security Score', color: colors.green },
    { value: '12', label: 'Critical Issues', color: colors.blue },
    { value: '4.2hrs', label: 'Mean Time to Fix', color: colors.purple },
    { value: '100%', label: 'Compliance Rate', color: colors.amber },
  ];
  dash.forEach((d, i) => {
    slide.addShape('rect', { x: 0.5 + i * 3.2, y: 5.6, w: 3, h: 1.1, fill: { color: d.color, transparency: 85 }, line: { color: d.color, width: 1 } });
    slide.addText(d.value, { x: 0.5 + i * 3.2, y: 5.7, w: 3, h: 0.5, fontSize: 22, bold: true, color: d.color, align: 'center' });
    slide.addText(d.label, { x: 0.5 + i * 3.2, y: 6.2, w: 3, h: 0.3, fontSize: 10, color: colors.slate400, align: 'center' });
  });
}

function createSlide13_ValueProposition(pptx: PptxGenJS) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addText('Value Proposition', {
    x: 0.5, y: 0.3, w: 12.33, h: 0.6,
    fontSize: 36, bold: true, color: colors.white, align: 'center',
  });
  slide.addText('Secure AI at Scale — From Development to Production', {
    x: 0.5, y: 0.85, w: 12.33, h: 0.4,
    fontSize: 15, color: colors.slate400, align: 'center',
  });

  // Key benefits
  const benefits = [
    { value: '73%', title: 'Cost Reduction', desc: 'Lower remediation costs', color: colors.green },
    { value: '5x', title: 'Time to Market', desc: 'Faster secure deployments', color: colors.blue },
    { value: '91%', title: 'Risk Reduction', desc: 'Fewer critical vulnerabilities', color: colors.purple },
  ];
  benefits.forEach((b, i) => {
    const x = 0.5 + i * 4.2;
    slide.addShape('rect', { x: x, y: 1.4, w: 4, h: 1.4, fill: { color: b.color, transparency: 75 }, line: { color: b.color, width: 2 } });
    slide.addText(b.value, { x: x, y: 1.5, w: 4, h: 0.7, fontSize: 36, bold: true, color: b.color, align: 'center' });
    slide.addText(b.title, { x: x, y: 2.15, w: 4, h: 0.3, fontSize: 14, bold: true, color: colors.white, align: 'center' });
    slide.addText(b.desc, { x: x, y: 2.45, w: 4, h: 0.3, fontSize: 11, color: colors.slate400, align: 'center' });
  });

  // ROI
  slide.addShape('rect', { x: 0.5, y: 3.0, w: 12.33, h: 0.9, fill: { color: colors.bgAlt }, line: { color: colors.slate500, width: 1 } });
  slide.addText('Typical Enterprise ROI (500+ Developers)', { x: 0.5, y: 3.1, w: 12.33, h: 0.3, fontSize: 13, bold: true, color: colors.white, align: 'center' });
  const roi = [
    { value: '$2.3M', label: 'Before', color: colors.red },
    { value: '$680K', label: 'Platform Cost', color: colors.amber },
    { value: '$1.6M', label: 'Annual Savings', color: colors.green },
    { value: '5.2 mo', label: 'Payback', color: colors.cyan },
  ];
  roi.forEach((r, i) => {
    slide.addText(r.value, { x: 0.8 + i * 3.1, y: 3.45, w: 2.8, h: 0.3, fontSize: 16, bold: true, color: r.color, align: 'center' });
    slide.addText(r.label, { x: 0.8 + i * 3.1, y: 3.7, w: 2.8, h: 0.2, fontSize: 8, color: colors.slate400, align: 'center' });
  });

  // Comparison
  slide.addText('What Makes This Different', { x: 0.5, y: 4.1, w: 12.33, h: 0.35, fontSize: 15, bold: true, color: colors.white, align: 'center' });

  slide.addShape('rect', { x: 0.5, y: 4.5, w: 6, h: 1.4, fill: { color: colors.bgAlt }, line: { color: colors.red, width: 2 } });
  slide.addText('Traditional SSDLC Tools', { x: 0.7, y: 4.6, w: 5.6, h: 0.3, fontSize: 12, bold: true, color: colors.red });
  slide.addText('• Point solutions in silos\n• Generic rules, high false positives\n• Blind to AI-specific threats\n• Manual processes, reactive', {
    x: 0.7, y: 4.9, w: 5.6, h: 0.95, fontSize: 10, color: colors.slate400,
  });

  slide.addShape('rect', { x: 6.8, y: 4.5, w: 6, h: 1.4, fill: { color: colors.bgAlt }, line: { color: colors.green, width: 2 } });
  slide.addText('AI-Native Security Platform', { x: 7, y: 4.6, w: 5.6, h: 0.3, fontSize: 12, bold: true, color: colors.green });
  slide.addText('• Unified platform, shared intelligence\n• Threat-driven, context-aware\n• Purpose-built for LLMs & agents\n• Automated, continuously learning', {
    x: 7, y: 4.9, w: 5.6, h: 0.95, fontSize: 10, color: colors.slate400,
  });

  // CTA
  slide.addShape('rect', { x: 0.5, y: 6.1, w: 12.33, h: 1, fill: { color: colors.cyan, transparency: 75 }, line: { color: colors.cyan, width: 2 } });
  slide.addText('Not a Scanner. A Security Operating System.', { x: 0.5, y: 6.2, w: 12.33, h: 0.45, fontSize: 22, bold: true, color: colors.white, align: 'center' });
  slide.addText('AI-Native  •  Threat-Driven  •  Continuously Learning', { x: 0.5, y: 6.65, w: 12.33, h: 0.35, fontSize: 13, color: colors.cyan, align: 'center' });
}
