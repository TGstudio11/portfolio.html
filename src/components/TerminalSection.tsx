import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

interface OutputLine {
  id: string;
  type: 'input' | 'output' | 'success' | 'error' | 'mint' | 'terra';
  text: string;
}

export const TerminalSection: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<OutputLine[]>([
    { id: '1', type: 'mint', text: '========================================================================' },
    { id: '2', type: 'mint', text: '✦ KINGDOM OF SCIENCE // ADVANCED AI & MACHINE LEARNING TERMINAL v10.0 ✦' },
    { id: '3', type: 'output', text: 'OPERATOR: Tulika Gupta | AFFILIATION: Newton School of Technology (NST)' },
    { id: '4', type: 'output', text: 'LOGIC ENGINE: 10,000,000,000% OPERATIONAL | STATUS: READY' },
    { id: '5', type: 'mint', text: 'Type "help" to view available laboratory commands, or click quick buttons below.' },
    { id: '6', type: 'mint', text: '========================================================================' },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isTraining, setIsTraining] = useState<boolean>(false);
  const terminalBottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    // Add input to history
    const inputEntry: OutputLine = {
      id: Date.now().toString(),
      type: 'input',
      text: `tulika@kos-ai-lab:~$ ${rawCmd}`,
    };

    setCommandHistory(prev => [...prev, rawCmd]);
    setHistoryIndex(-1);

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let responses: OutputLine[] = [];

    switch (cmd) {
      case 'help':
        responses = [
          { id: Math.random().toString(), type: 'mint', text: 'AVAILABLE SCIENTIFIC COMMANDS:' },
          { id: Math.random().toString(), type: 'output', text: '  status     - Show Tulika\'s student profile, NST telemetry & lab metrics' },
          { id: Math.random().toString(), type: 'output', text: '  craft      - Inspect active AI invention blueprints & recipes' },
          { id: Math.random().toString(), type: 'output', text: '  train      - Execute live simulated neural network backpropagation' },
          { id: Math.random().toString(), type: 'output', text: '  depetrify  - Synthesize Miracle Fluid (HNO3 + C2H5OH) for revival' },
          { id: Math.random().toString(), type: 'output', text: '  senku      - Transmit radio signal to Chief Scientist Senku Ishigami' },
          { id: Math.random().toString(), type: 'output', text: '  ryusui     - Connect to Chief Navigator Ryusui Nanami' },
          { id: Math.random().toString(), type: 'output', text: '  gen        - Consult Chief Mentalist Gen Asagiri' },
          { id: Math.random().toString(), type: 'output', text: '  clear      - Clear the terminal console display' },
        ];
        break;

      case 'status':
        responses = [
          { id: Math.random().toString(), type: 'terra', text: '[ TELEMETRY REPORT: NST AI LAB SPECIMEN 001 ]' },
          { id: Math.random().toString(), type: 'output', text: '  NAME:          Tulika Gupta' },
          { id: Math.random().toString(), type: 'output', text: '  ACADEMICS:     1st-Year B.Tech Computer Science & AI/ML' },
          { id: Math.random().toString(), type: 'output', text: '  INSTITUTE:     Newton School of Technology (NST)' },
          { id: Math.random().toString(), type: 'mint', text: '  LOGIC CORE:    10,000,000,000% Calibrated' },
          { id: Math.random().toString(), type: 'output', text: '  FOCUS AREAS:   Deep Learning, Computer Vision, Physics-Informed Neural Networks' },
          { id: Math.random().toString(), type: 'output', text: '  CURRENT LAB:   Exploring non-linear kinematics & OCR feature extraction' },
        ];
        break;

      case 'craft':
        responses = [
          { id: Math.random().toString(), type: 'mint', text: '[ ACTIVE CRAFTING BLUEPRINTS IN THE CRUCIBLE ]' },
          { id: Math.random().toString(), type: 'output', text: '  1. Manganese Battery Cell Predictor  [Ingredients: Python, Scikit-learn, Electrochemistry data]' },
          { id: Math.random().toString(), type: 'output', text: '  2. Neural Glyph Decipherer           [Ingredients: PyTorch, OpenCV, CNN Attention Mask]' },
          { id: Math.random().toString(), type: 'output', text: '  3. Kinematics & Trajectory Solver    [Ingredients: C++20, PINNs, Runge-Kutta numerical solver]' },
          { id: Math.random().toString(), type: 'output', text: '  4. YojanaMitra / SchemeAI            [Ingredients: Next.js, NLP Vector Search, Civic Data]' },
        ];
        break;

      case 'depetrify':
        try {
          confetti({
            particleCount: 60,
            spread: 80,
            origin: { y: 0.7 },
            colors: ['#97D8C4', '#529993', '#F4E9D8', '#E76F51'],
          });
        } catch {}
        responses = [
          { id: Math.random().toString(), type: 'mint', text: '🧪 Synthesizing Nitric Acid (HNO3) from bat guano + alcohol distillation (C2H5OH)...' },
          { id: Math.random().toString(), type: 'output', text: 'Pouring Miracle Fluid onto petrified stone layers...' },
          { id: Math.random().toString(), type: 'terra', text: 'CRACK! PSHHHHH! The petrification fractures and sloughs away!' },
          { id: Math.random().toString(), type: 'mint', text: '✦ DE-PETRIFICATION 10 BILLION PERCENT SUCCESSFUL! ✦' },
        ];
        break;

      case 'train':
        runSimulatedTraining();
        setHistory(prev => [...prev, inputEntry]);
        setInputVal('');
        return;

      case 'senku':
        responses = [
          { id: Math.random().toString(), type: 'mint', text: '📡 RADIO FREQUENCY 10.00 GHz [SENKU ISHIGAMI]:' },
          { id: Math.random().toString(), type: 'output', text: '“Heh, so you\'re running neural networks at Newton School of Technology? Ten billion percent exhilarating! Never guess when you can calculate. Train those weights until your loss hits zero, Tulika!”' },
        ];
        break;

      case 'ryusui':
        responses = [
          { id: Math.random().toString(), type: 'terra', text: '📡 RADIO FREQUENCY 10.00 GHz [RYUSUI NANAMI]:' },
          { id: Math.random().toString(), type: 'output', text: '“HAHA! Desire is the greatest engine of human progress! I desire every compute cluster, every dataset, and every paper on arXiv! Keep conquering new horizons, Tulika!”' },
        ];
        break;

      case 'gen':
        responses = [
          { id: Math.random().toString(), type: 'output', text: '📡 RADIO FREQUENCY 10.00 GHz [GEN ASAGIRI]:' },
          { id: Math.random().toString(), type: 'output', text: '“Well now, hello there darling~ AI is brilliant, but don\'t forget to make your interfaces delightfully tempting to human psychology. And take a sip of iced cola while you code~”' },
        ];
        break;

      default:
        responses = [
          { id: Math.random().toString(), type: 'error', text: `Command not recognized: "${rawCmd}". Type "help" for a list of lab commands.` },
        ];
        break;
    }

    setHistory(prev => [...prev, inputEntry, ...responses]);
    setInputVal('');
  };

  const runSimulatedTraining = () => {
    if (isTraining) return;
    setIsTraining(true);

    const steps = [
      { text: 'Initializing Tensor Core pipeline on device: CUDA_0 (NST-LAB-CLUSTER)...', type: 'mint' },
      { text: 'Compiling model: [DeepResNet + Attention Head] (Params: 14.8M)...', type: 'output' },
      { text: 'Epoch 1/5 [======>....................] - Loss: 1.4821 - Acc: 68.4%', type: 'output' },
      { text: 'Epoch 2/5 [=============>.............] - Loss: 0.8124 - Acc: 84.1%', type: 'output' },
      { text: 'Epoch 3/5 [====================>......] - Loss: 0.3150 - Acc: 93.7%', type: 'output' },
      { text: 'Epoch 4/5 [=========================>.] - Loss: 0.0892 - Acc: 98.2%', type: 'output' },
      { text: 'Epoch 5/5 [===========================] - Loss: 0.0031 - Acc: 99.8%', type: 'mint' },
      { text: '✦ Model weights converged! Validation Loss: 0.0014 (10 Billion % Optimal) ✦', type: 'terra' },
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setHistory(prev => [
          ...prev,
          {
            id: Date.now().toString() + idx,
            type: step.type as OutputLine['type'],
            text: step.text,
          },
        ]);
        if (idx === steps.length - 1) {
          setIsTraining(false);
          try {
            confetti({
              particleCount: 40,
              spread: 60,
              origin: { y: 0.7 },
              colors: ['#97D8C4', '#529993'],
            });
          } catch {}
        }
      }, (idx + 1) * 350);
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      if (commandHistory.length > 0) {
        const newIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIdx);
        setInputVal(commandHistory[newIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex !== -1) {
        const newIdx = historyIndex + 1;
        if (newIdx >= commandHistory.length) {
          setHistoryIndex(-1);
          setInputVal('');
        } else {
          setHistoryIndex(newIdx);
          setInputVal(commandHistory[newIdx] || '');
        }
      }
    }
  };

  return (
    <div className="rounded-2xl bg-kos-navy-dark border border-kos-clay-dark/70 shadow-lab-card overflow-hidden">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-kos-navy-deep border-b border-kos-clay-dark/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-kos-terra" />
          <div className="w-3 h-3 rounded-full bg-kos-linen" />
          <div className="w-3 h-3 rounded-full bg-kos-mint" />
          <span className="ml-2 font-mono text-xs text-kos-linen font-semibold flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-kos-mint" />
            <span>KOS-AI-TERMINAL // NST-LAB</span>
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-kos-mint">
          <span className="w-2 h-2 rounded-full bg-kos-mint animate-pulse" />
          <span>CONNECTED: 10,000,000,000%</span>
        </div>
      </div>

      {/* Quick Command Action Bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-kos-navy-surface border-b border-kos-clay-dark/40 overflow-x-auto text-xs font-mono">
        <span className="text-kos-linen-muted uppercase text-[10px] whitespace-nowrap">Quick Run:</span>
        {['status', 'craft', 'train', 'depetrify', 'senku', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 rounded bg-kos-navy-dark hover:bg-kos-mint hover:text-kos-navy-dark text-kos-mint border border-kos-mint/30 transition-all whitespace-nowrap"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 sm:p-5 h-72 sm:h-80 overflow-y-auto font-mono text-xs leading-relaxed space-y-1.5 select-text">
        {history.map((line) => (
          <div
            key={line.id}
            className={`${
              line.type === 'input'
                ? 'text-kos-parchment font-semibold'
                : line.type === 'mint'
                ? 'text-kos-mint font-medium'
                : line.type === 'terra'
                ? 'text-kos-terra font-semibold'
                : line.type === 'error'
                ? 'text-red-400'
                : 'text-kos-linen'
            }`}
          >
            {line.text}
          </div>
        ))}
        <div ref={terminalBottomRef} />
      </div>

      {/* Terminal Prompt Input */}
      <div className="flex items-center px-4 py-2.5 bg-kos-navy-deep border-t border-kos-clay-dark/50 gap-2">
        <span className="font-mono text-xs text-kos-mint whitespace-nowrap">
          tulika@kos-ai-lab:~$
        </span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Type a command (e.g. "status", "craft", "train", "help")...'
          className="w-full bg-transparent text-xs font-mono text-kos-parchment placeholder-kos-linen-muted/40 focus:outline-none"
        />
        <button
          onClick={() => handleCommand(inputVal)}
          disabled={!inputVal.trim()}
          className="p-1.5 rounded bg-kos-mint/20 hover:bg-kos-mint text-kos-mint hover:text-kos-navy-dark transition-colors disabled:opacity-30"
          title="Run command"
        >
          <Play className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
