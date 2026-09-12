const STORAGE_KEY = "english-output-trainer-v1";
const MINUTE = 60;

const ICON_PATHS = {
  home: `
    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  `,
  book: `
    <path d="M12 7v14"/>
    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>
  `,
  layers: `
    <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/>
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
  `,
  notebook: `
    <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/>
    <path d="M2 6h4M2 10h4M2 14h4M2 18h4"/>
    <path d="M21.37 2.63a1 1 0 0 1 0 1.41L13 12.41 9 13l.59-4 8.37-8.37a1 1 0 0 1 1.41 0z"/>
  `,
  settings: `
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>
  `,
  play: `<path d="m6 3 14 9-14 9z"/>`,
  pause: `<rect width="4" height="16" x="6" y="4" rx="1"/><rect width="4" height="16" x="14" y="4" rx="1"/>`,
  reset: `
    <path d="M3 12a9 9 0 1 0 3-6.7L3 8"/>
    <path d="M3 3v5h5"/>
  `,
  plus: `<path d="M5 12h14M12 5v14"/>`,
  check: `<path d="m20 6-11 11-5-5"/>`,
  x: `<path d="M18 6 6 18M6 6l12 12"/>`,
  chevronRight: `<path d="m9 18 6-6-6-6"/>`,
  chevronLeft: `<path d="m15 18-6-6 6-6"/>`,
  chevronDown: `<path d="m6 9 6 6 6-6"/>`,
  clock: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`,
  flame: `<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>`,
  target: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>`,
  graduation: `<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/><path d="M22 10v6"/>`,
  pencil: `<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>`,
  trash: `<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6"/>`,
  sparkles: `
    <path d="m12 3-1.9 4.8a2 2 0 0 1-1.2 1.2L4 11l4.9 1.9a2 2 0 0 1 1.2 1.2L12 19l1.9-4.9a2 2 0 0 1 1.2-1.2L20 11l-4.9-2a2 2 0 0 1-1.2-1.2z"/>
    <path d="M5 3v4M3 5h4M19 17v4M17 19h4"/>
  `,
  brain: `
    <path d="M9.5 4A2.5 2.5 0 0 0 7 6.5v.2A3 3 0 0 0 5 9.5c0 1 .5 1.9 1.3 2.5A3 3 0 0 0 6 15a3 3 0 0 0 2 2.8v.7A2.5 2.5 0 0 0 10.5 21c1.2 0 2.2-.8 2.5-1.9V5.5A2.5 2.5 0 0 0 10.5 3z"/>
    <path d="M14.5 4A2.5 2.5 0 0 1 17 6.5v.2a3 3 0 0 1 2 2.8c0 1-.5 1.9-1.3 2.5A3 3 0 0 1 18 15a3 3 0 0 1-2 2.8v.7a2.5 2.5 0 0 1-2.5 2.5c-1.2 0-2.2-.8-2.5-1.9V5.5A2.5 2.5 0 0 1 13.5 3z"/>
  `,
  arrowRight: `<path d="M5 12h14M13 6l6 6-6 6"/>`,
  arrowLeft: `<path d="M19 12H5M11 18l-6-6 6-6"/>`,
  eye: `<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>`,
  download: `<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>`,
  upload: `<path d="M12 15V3M7 8l5-5 5 5M5 21h14"/>`,
  shield: `<path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3z"/><path d="m9 12 2 2 4-4"/>`,
  wifiOff: `<path d="m2 2 20 20M8.5 8.5a10 10 0 0 1 7 0M5 12.5a15 15 0 0 1 3.5-1.2M2 8.8A20 20 0 0 1 9 6.2M12 20h.01M19 12.5a15 15 0 0 0-4.2-1.4M22 8.8a20 20 0 0 0-4-2.4"/>`,
  calendar: `<path d="M8 2v4M16 2v4M3 10h18"/><rect width="18" height="18" x="3" y="4" rx="2"/>`,
  headphones: `
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>
  `,
  volume: `
    <path d="M11 5 6 9H2v6h4l5 4z"/>
    <path d="M15.5 8.5a5 5 0 0 1 0 7"/>
    <path d="M18.5 5.5a9 9 0 0 1 0 13"/>
  `,
  stop: `<rect width="14" height="14" x="5" y="5" rx="2"/>`,
  fileText: `
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
    <path d="M14 2v5h6M8 13h8M8 17h6"/>
  `,
  gauge: `<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>`,
};

const STAGES = [
  { id: "warmup", label: "抽卡热身", short: "抽卡", minutes: 5, description: "从记忆里主动拼出英文" },
  { id: "lesson", label: "精学课文", short: "精学", minutes: 10, description: "读懂并拆出核心句型" },
  { id: "output", label: "输出训练", short: "回译", minutes: 10, description: "看中文，逐句写回英文" },
  { id: "wrapup", label: "收尾做卡", short: "做卡", minutes: 5, description: "把卡住的地方变成复习卡" },
];

const DEMO_LESSON = {
  id: "nc3-demo-01",
  number: "Lesson 1",
  title: "A Puma at Large",
  subtitle: "样课文本 · 原创仿写，可在课程数据中替换",
  patterns: [
    {
      id: "p1",
      title: "be reported to do / be",
      explanation: "据报道；据说……。适合转述未经证实的信息。",
      example: "The animal was reported to be near the village.",
    },
    {
      id: "p2",
      title: "come with",
      explanation: "伴随……而来；做某事时同时带来某种结果。",
      example: "Every walk after dark came with a quick glance toward the trees.",
    },
    {
      id: "p3",
      title: "had already done",
      explanation: "过去完成时，表示在过去某一点前已经发生。",
      example: "The mystery had already changed the way people saw the place.",
    },
  ],
  paragraphs: [
    {
      en: "Reports of a large cat began to reach the village early in spring. At first, most people believed that someone had seen an ordinary dog in the fading light. Then a farmer found deep paw prints beside his fence, and the stories became harder to dismiss.",
      zh: "关于一只大型猫科动物的报告在初春开始传到村里。起初，多数人相信有人只是借着暮色看见了一只普通的狗。后来，一位农民在栅栏旁发现了深深的爪印，这些传闻便不再容易被忽视。",
      sentences: [
        {
          id: "s1",
          en: "Reports of a large cat began to reach the village early in spring.",
          zh: "关于一只大型猫科动物的报告在初春开始传到村里。",
          patternId: "p1",
        },
        {
          id: "s2",
          en: "At first, most people believed that someone had seen an ordinary dog in the fading light.",
          zh: "起初，多数人相信有人只是借着暮色看见了一只普通的狗。",
          patternId: "p3",
        },
        {
          id: "s3",
          en: "Then a farmer found deep paw prints beside his fence, and the stories became harder to dismiss.",
          zh: "后来，一位农民在栅栏旁发现了深深的爪印，这些传闻便不再容易被忽视。",
          patternId: "p2",
        },
      ],
    },
    {
      en: "A team of wildlife officers arrived on Tuesday. They checked nearby woods, set up motion cameras, and asked residents to keep their dogs close. No one wanted to harm the animal; they simply wanted to know whether it was still there.",
      zh: "一支野生动物工作人员队伍在周二到达。他们检查了附近的树林，安装了运动相机，并请居民看管好自己的狗。没有人想伤害那只动物；他们只是想知道它是否还在那里。",
      sentences: [
        {
          id: "s4",
          en: "A team of wildlife officers arrived on Tuesday.",
          zh: "一支野生动物工作人员队伍在周二到达。",
          patternId: "p1",
        },
        {
          id: "s5",
          en: "They checked nearby woods, set up motion cameras, and asked residents to keep their dogs close.",
          zh: "他们检查了附近的树林，安装了运动相机，并请居民看管好自己的狗。",
          patternId: "p2",
        },
        {
          id: "s6",
          en: "No one wanted to harm the animal; they simply wanted to know whether it was still there.",
          zh: "没有人想伤害那只动物；他们只是想知道它是否还在那里。",
          patternId: "p3",
        },
      ],
    },
    {
      en: "By the weekend, the officers had collected enough evidence to continue their search for another week. The village remained quiet, but every walk after dark now came with a quick glance toward the trees. The mystery had not been solved, yet it had already changed the way people saw the place they lived in.",
      zh: "到周末时，工作人员已经收集到足够的证据，可以再继续搜寻一周。村子依旧安静，但如今每次天黑后散步，都会伴随着向树林迅速投去的一瞥。谜团尚未解开，却已经改变了人们看待自己所住之地的方式。",
      sentences: [
        {
          id: "s7",
          en: "By the weekend, the officers had collected enough evidence to continue their search for another week.",
          zh: "到周末时，工作人员已经收集到足够的证据，可以再继续搜寻一周。",
          patternId: "p3",
        },
        {
          id: "s8",
          en: "The village remained quiet, but every walk after dark now came with a quick glance toward the trees.",
          zh: "村子依旧安静，但如今每次天黑后散步，都会伴随着向树林迅速投去的一瞥。",
          patternId: "p2",
        },
        {
          id: "s9",
          en: "The mystery had not been solved, yet it had already changed the way people saw the place they lived in.",
          zh: "谜团尚未解开，却已经改变了人们看待自己所住之地的方式。",
          patternId: "p3",
        },
      ],
    },
  ],
};

const LESSON_SENTENCES = DEMO_LESSON.paragraphs.flatMap((paragraph) => paragraph.sentences);
const LESSON_WORD_COUNT = tokenizeForWriting(
  DEMO_LESSON.paragraphs.map((paragraph) => paragraph.en).join(" "),
).length;

const WRITING_GUIDANCE =
  "没有命题限制。可以围绕今天精学的课文、句型或回译错误展开，也可以写任何你想表达的内容。";

function tokenizeForWriting(text) {
  return (
    String(text)
      .toLowerCase()
      .replace(/[’‘]/g, "'")
      .match(/[a-z]+(?:'[a-z]+)?|\d+/g) || []
  );
}

const SEED_CARDS = [
  {
    id: "seed-1",
    front: "他已经习惯早起。",
    back: "He has got used to getting up early.",
    pattern: "be / get used to doing",
    source: "句型热身",
    successStreak: 1,
    dueDate: offsetDate(-1),
    lastReview: null,
    mastered: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "seed-2",
    front: "我一看到那张照片就认出了他。",
    back: "I recognized him as soon as I saw the photo.",
    pattern: "as soon as",
    source: "句型热身",
    successStreak: 0,
    dueDate: offsetDate(0),
    lastReview: null,
    mastered: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "seed-3",
    front: "值得注意的一点是，这个结果并不稳定。",
    back: "It is worth noting that the result is not stable.",
    pattern: "It is worth noting that...",
    source: "句型热身",
    successStreak: 0,
    dueDate: offsetDate(0),
    lastReview: null,
    mastered: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "seed-4",
    front: "我们不应该把这项便利视为理所当然。",
    back: "We should not take this convenience for granted.",
    pattern: "take ... for granted",
    source: "句型热身",
    successStreak: 0,
    dueDate: offsetDate(0),
    lastReview: null,
    mastered: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "seed-5",
    front: "我记得曾在车站附近见过她。",
    back: "I remember seeing her near the station.",
    pattern: "remember doing",
    source: "句型热身",
    successStreak: 0,
    dueDate: offsetDate(1),
    lastReview: null,
    mastered: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "seed-6",
    front: "他宁愿走路，也不愿在高峰期开车。",
    back: "He would rather walk than drive during rush hour.",
    pattern: "would rather ... than ...",
    source: "句型热身",
    successStreak: 0,
    dueDate: offsetDate(3),
    lastReview: null,
    mastered: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "seed-7",
    front: "等我们到达时，会议已经开始了。",
    back: "By the time we arrived, the meeting had already begun.",
    pattern: "by the time + 过去完成时",
    source: "句型热身",
    successStreak: 0,
    dueDate: offsetDate(5),
    lastReview: null,
    mastered: false,
    createdAt: new Date().toISOString(),
  },
];

function offsetDate(days) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + days);
  return dateKey(date);
}

function dateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateFromKey(key) {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day, 12, 0, 0, 0);
}

function addDays(key, amount) {
  const date = dateFromKey(key);
  date.setDate(date.getDate() + amount);
  return dateKey(date);
}

function formatShortDate(value) {
  const date = value instanceof Date ? value : new Date(value);
  return new Intl.DateTimeFormat("zh-CN", { month: "short", day: "numeric" }).format(date);
}

function defaultState() {
  return {
    version: 2,
    cards: SEED_CARDS.map((card) => ({ ...card })),
    mistakes: [],
    writingEntries: [],
    lessonProgress: {},
    activityDates: [],
    settings: {
      api: {
        enabled: false,
        baseUrl: "https://api.openai.com/v1",
        model: "gpt-4o-mini",
        ttsModel: "gpt-4o-mini-tts",
        ttsVoice: "alloy",
        apiKey: "",
      },
      dailyGoalMinutes: 30,
    },
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    const base = defaultState();
    return {
      ...base,
      ...parsed,
      cards: Array.isArray(parsed.cards) ? parsed.cards : base.cards,
      mistakes: Array.isArray(parsed.mistakes) ? parsed.mistakes : [],
      writingEntries: Array.isArray(parsed.writingEntries) ? parsed.writingEntries : [],
      lessonProgress:
        parsed.lessonProgress && typeof parsed.lessonProgress === "object"
          ? parsed.lessonProgress
          : {},
      activityDates: Array.isArray(parsed.activityDates) ? parsed.activityDates : [],
      settings: {
        ...base.settings,
        ...(parsed.settings || {}),
        api: { ...base.settings.api, ...(parsed.settings?.api || {}) },
      },
    };
  } catch {
    return defaultState();
  }
}

let state = loadState();

const runtime = {
  activeTab: "home",
  lessonDay: 1,
  currentStage: "warmup",
  timer: {
    stage: "warmup",
    totalSeconds: 5 * MINUTE,
    remaining: 5 * MINUTE,
    running: false,
    endAt: null,
  },
  review: {
    queueIds: [],
    index: 0,
    revealed: false,
  },
  output: {
    index: 0,
    aiLoading: false,
  },
  audio: {
    speaking: false,
    paused: false,
    rate: 0.9,
    voiceURI: "",
    mode: "browser",
    aiLoading: false,
    aiUrl: "",
    aiAudio: null,
    requestId: 0,
  },
  writing: {
    title: "",
    draft: "",
    aiLoading: false,
  },
  filters: {
    cards: "all",
    cardSearch: "",
    mistakes: "open",
  },
  modal: null,
};

const app = document.querySelector("#app");
const modalRoot = document.querySelector("#modal-root");
const toastRoot = document.querySelector("#toast-root");

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function icon(name, className = "") {
  const path = ICON_PATHS[name];
  if (!path) return "";
  return `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
}

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function getProgress(day = runtime.lessonDay, lessonId = DEMO_LESSON.id) {
  const key = `${lessonId}:day-${day}`;
  if (!state.lessonProgress[key]) {
    state.lessonProgress[key] = {
      stages: { warmup: false, lesson: false, output: false, wrapup: false },
      addedPatterns: [],
      notes: [],
      outputs: {},
      createdAt: new Date().toISOString(),
    };
  }
  const progress = state.lessonProgress[key];
  progress.stages = {
    warmup: false,
    lesson: false,
    output: false,
    wrapup: false,
    ...(progress.stages || {}),
  };
  progress.addedPatterns = Array.isArray(progress.addedPatterns) ? progress.addedPatterns : [];
  progress.notes = Array.isArray(progress.notes) ? progress.notes : [];
  progress.outputs = progress.outputs && typeof progress.outputs === "object" ? progress.outputs : {};
  return progress;
}

function markActivity() {
  const today = dateKey();
  if (!state.activityDates.includes(today)) {
    state.activityDates.push(today);
    state.activityDates = unique(state.activityDates).sort();
    saveState();
  }
}

function calculateStreak() {
  const dates = new Set(state.activityDates);
  let cursor = dates.has(dateKey()) ? dateKey() : addDays(dateKey(), -1);
  let streak = 0;
  while (dates.has(cursor)) {
    streak += 1;
    cursor = addDays(cursor, -1);
  }
  return streak;
}

function getDueCards(limit = 5) {
  const today = dateKey();
  return state.cards
    .filter((card) => !card.mastered && card.dueDate <= today)
    .sort((a, b) => {
      if (a.dueDate !== b.dueDate) return a.dueDate.localeCompare(b.dueDate);
      return (b.successStreak || 0) - (a.successStreak || 0);
    })
    .slice(0, limit);
}

function getMasteredPatternCount() {
  return unique(
    state.cards.filter((card) => card.mastered).map((card) => String(card.pattern || "").trim()),
  ).length;
}

function getCompletedLessonCount() {
  return unique(
    Object.entries(state.lessonProgress)
      .filter(([, progress]) => progress?.stages?.wrapup)
      .map(([key]) => key.split(":day-")[0]),
  ).length;
}

function getStageStatus(stageId, progress = getProgress()) {
  if (progress.stages[stageId]) return "done";
  if (runtime.currentStage === stageId) return "active";
  return "pending";
}

function stageById(id) {
  return STAGES.find((stage) => stage.id === id) || STAGES[0];
}

function timerRemaining() {
  if (runtime.timer.running && runtime.timer.endAt) {
    return Math.max(0, Math.ceil((runtime.timer.endAt - Date.now()) / 1000));
  }
  return runtime.timer.remaining;
}

function formatTime(seconds) {
  const safe = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function renderHeader() {
  const stage = stageById(runtime.currentStage);
  const runningClass = runtime.timer.running ? "running" : "";
  return `
    <header class="app-header">
      <div class="brand">
        <div class="brand-mark">E→</div>
        <div class="brand-copy">
          <strong>地铁英语30分钟</strong>
          <span>${escapeHTML(DEMO_LESSON.number)} · Day ${runtime.lessonDay}</span>
        </div>
      </div>
      <div class="header-actions">
        <button class="header-timer" data-action="go-study" type="button" aria-label="进入今日训练计时器">
          <span data-header-timer>${formatTime(timerRemaining())}</span>
          <span class="sr-only">${escapeHTML(stage.label)}剩余时间</span>
        </button>
        <button class="icon-button ${runningClass}" data-action="go-settings" type="button" aria-label="设置">
          ${icon("settings")}
        </button>
      </div>
    </header>
  `;
}

function renderBottomNav() {
  const items = [
    { id: "home", label: "首页", icon: "home" },
    { id: "study", label: "训练", icon: "book" },
    { id: "writing", label: "写作", icon: "pencil" },
    { id: "cards", label: "卡片", icon: "layers" },
    { id: "mistakes", label: "错题", icon: "notebook" },
    { id: "settings", label: "设置", icon: "settings" },
  ];

  return `
    <nav class="bottom-nav" aria-label="主导航">
      <div class="bottom-nav-inner">
        ${items
          .map(
            (item) => `
              <button class="nav-button ${runtime.activeTab === item.id ? "active" : ""}" data-tab="${item.id}" type="button">
                ${icon(item.icon)}
                <span>${item.label}</span>
              </button>
            `,
          )
          .join("")}
      </div>
    </nav>
  `;
}

function renderHome() {
  const progress = getProgress();
  const completedStages = STAGES.filter((stage) => progress.stages[stage.id]).length;
  const dueCount = getDueCards(99).length;
  const nextStage =
    STAGES.find((stage) => !progress.stages[stage.id]) || STAGES[STAGES.length - 1];
  const progressPercent = (completedStages / STAGES.length) * 100;
  const currentLessonTitle = completedStages === STAGES.length ? "今日训练已完成" : nextStage.label;

  return `
    <main class="main">
      <section class="screen">
        <p class="eyebrow">今日 · Day ${runtime.lessonDay}</p>
        <h1 class="page-title">把英文从脑子里<br />真正写出来。</h1>
        <p class="page-subtitle">30 分钟完成热身、精学、回译和做卡。全程键盘输入，地铁上也能专心练。</p>

        <section class="section">
          <div class="focus-panel">
            <div class="focus-top">
              <span class="pill on-dark">${icon("clock", "sm")} ${STAGES.reduce((sum, stage) => sum + stage.minutes, 0)} 分钟计划</span>
              <span class="pill on-dark">${completedStages}/${STAGES.length} 阶段</span>
            </div>
            <h2>${escapeHTML(currentLessonTitle)}</h2>
            <p>${completedStages === STAGES.length ? "今天的四阶段已经完成，可以继续复习卡片或整理错题。" : `${nextStage.description}，剩余约 ${STAGES.filter((stage) => !progress.stages[stage.id]).reduce((sum, stage) => sum + stage.minutes, 0)} 分钟。`}</p>
            <div class="focus-actions">
              <button class="button on-dark" data-action="continue-study" type="button">
                ${completedStages === STAGES.length ? "查看今日记录" : "继续训练"}
                ${icon("arrowRight", "sm")}
              </button>
              <button class="button on-dark" data-action="go-cards" type="button">复习卡片</button>
            </div>
            <div class="progress-line" aria-label="今日完成进度"><span style="width:${progressPercent}%"></span></div>
          </div>
        </section>

        <section class="section">
          <div class="section-head">
            <h2 class="section-title">学习概览</h2>
            <span class="section-note">数据保存在本机</span>
          </div>
          <div class="stats-grid">
            <article class="stat">
              <span class="stat-label">今日待复习</span>
              <strong class="stat-value">${dueCount}<small>张</small></strong>
            </article>
            <article class="stat">
              <span class="stat-label">连续学习</span>
              <strong class="stat-value">${calculateStreak()}<small>天</small></strong>
            </article>
            <article class="stat">
              <span class="stat-label">已掌握句型</span>
              <strong class="stat-value">${getMasteredPatternCount()}<small>个</small></strong>
            </article>
            <article class="stat">
              <span class="stat-label">已学课文</span>
              <strong class="stat-value">${getCompletedLessonCount()}<small>课</small></strong>
            </article>
          </div>
        </section>

        <section class="section">
          <div class="section-head">
            <h2 class="section-title">今日四阶段</h2>
            <span class="section-note">可手动切换</span>
          </div>
          <div class="surface plan-list">
            ${STAGES.map((stage, index) => {
              const done = progress.stages[stage.id];
              return `
                <button class="plan-item" data-action="open-stage" data-stage="${stage.id}" type="button" style="width:100%;text-align:left;background:transparent;border-left:0;border-right:0;border-top:0;cursor:pointer">
                  <span class="plan-index">${done ? icon("check", "sm") : String(index + 1).padStart(2, "0")}</span>
                  <span class="plan-copy">
                    <strong>${escapeHTML(stage.label)}</strong>
                    <span>${escapeHTML(stage.description)}</span>
                  </span>
                  <span class="plan-time">${stage.minutes} 分钟</span>
                </button>
              `;
            }).join("")}
          </div>
        </section>

        <section class="section">
          <div class="section-head">
            <h2 class="section-title">当前课文</h2>
          </div>
          <div class="surface lesson-banner">
            <div class="lesson-cover">01</div>
            <div>
              <h3>${escapeHTML(DEMO_LESSON.title)}</h3>
              <p>${escapeHTML(DEMO_LESSON.number)} · 2 天完成 · 3 个核心句型</p>
              <button class="text-link button ghost small" data-action="go-study" type="button" style="margin-top:10px">进入课文</button>
            </div>
          </div>
        </section>
      </section>
    </main>
  `;
}

function ensureReviewSession() {
  if (!runtime.review.queueIds.length) {
    runtime.review.queueIds = getDueCards(5).map((card) => card.id);
    runtime.review.index = 0;
    runtime.review.revealed = false;
  }
}

function renderWarmupStage(progress) {
  ensureReviewSession();
  const queue = runtime.review.queueIds
    .map((id) => state.cards.find((card) => card.id === id))
    .filter(Boolean);

  if (!queue.length || runtime.review.index >= queue.length) {
    if (queue.length && !progress.stages.warmup) {
      window.setTimeout(() => completeStage("warmup", false), 0);
    }
    return `
      <div class="empty-state">
        <div class="empty-symbol">${icon("check")}</div>
        <h3>${queue.length ? "热身完成" : "今天没有到期卡片"}</h3>
        <p>${queue.length ? "这一轮卡片已经复习完，可以继续精学课文。" : "卡片按连续成功次数安排复习。你也可以现在添加一张自己的卡片。"}</p>
        <div class="panel-actions" style="justify-content:center">
          <button class="button" data-action="next-stage" type="button">进入精学</button>
          <button class="button secondary" data-action="open-add-card" type="button">${icon("plus", "sm")} 新建卡片</button>
        </div>
      </div>
    `;
  }

  const card = queue[runtime.review.index];
  const revealed = runtime.review.revealed;
  return `
    <div class="panel-kicker">卡 ${runtime.review.index + 1} / ${queue.length}</div>
    <h2 class="panel-title">先只看中文，在脑中组织英文</h2>
    <p class="panel-text">不要求逐字一致，先检查自己能否主动调用句型。</p>

    <div class="flashcard" style="margin-top:16px">
      <div class="flashcard-label">
        <span>中文提示</span>
        <span>${escapeHTML(card.pattern || "自由表达")}</span>
      </div>
      <p class="flashcard-question">${escapeHTML(card.front)}</p>
      ${
        revealed
          ? `
            <div class="flashcard-answer">
              <p>${escapeHTML(card.back)}</p>
              ${card.pattern ? `<span class="pattern-mark">${escapeHTML(card.pattern)}</span>` : ""}
            </div>
          `
          : ""
      }
    </div>

    ${
      revealed
        ? `
          <div class="reward-strip">
            ${[1, 2, 3]
              .map(
                (step) => `
                  <div class="reward-step ${(card.successStreak || 0) >= step ? "active" : ""}">
                    连续 ${step} 次${step === 3 ? " · 掌握" : ""}
                  </div>
                `,
              )
              .join("")}
          </div>
          <div class="panel-actions">
            <button class="button success" data-action="review-success" type="button">${icon("check", "sm")} 写得出</button>
            <button class="button danger-soft" data-action="review-fail" type="button">写错了，明天再来</button>
          </div>
        `
        : `
          <textarea class="textarea english" id="warmup-answer" placeholder="在这里拼出英文（不会保存）"></textarea>
          <div class="panel-actions">
            <button class="button block large" data-action="reveal-answer" type="button">${icon("eye", "sm")} 查看答案</button>
          </div>
        `
    }
  `;
}

function speechSupported() {
  return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

function lessonSpeechText() {
  return DEMO_LESSON.paragraphs.map((paragraph) => paragraph.en).join(" ... ");
}

function estimatedAudioMinutes() {
  if (!speechSupported()) return 0;
  return Math.max(1, Math.ceil((LESSON_WORD_COUNT / (145 * runtime.audio.rate)) * 10) / 10);
}

function scoreAmericanVoice(voice) {
  const name = String(voice.name || "").toLowerCase();
  const lang = String(voice.lang || "").toLowerCase().replace("_", "-");
  let score = 0;

  if (lang.startsWith("en-us")) score += 50;
  else if (lang.startsWith("en")) score += 15;
  else return -1000;

  if (/natural|neural|premium|enhanced/.test(name)) score += 100;
  if (/online/.test(name)) score += 35;
  if (/aria|jenny|michelle|ava|allison|samantha|google us english/.test(name)) score += 45;
  if (/david|alex|guy|mark|zira/.test(name)) score += 12;
  if (/compact|espeak|robot/.test(name)) score -= 80;
  if (voice.localService) score += 3;
  return score;
}

function getAmericanVoices() {
  if (!speechSupported()) return [];
  return window.speechSynthesis
    .getVoices()
    .filter((voice) => String(voice.lang || "").toLowerCase().startsWith("en"))
    .sort((a, b) => scoreAmericanVoice(b) - scoreAmericanVoice(a));
}

function getSelectedSpeechVoice() {
  const voices = getAmericanVoices();
  if (!voices.length) return null;
  return voices.find((voice) => voice.voiceURI === runtime.audio.voiceURI) || voices[0];
}

function readableVoiceName(voice) {
  if (!voice) return "自动选择最佳美音";
  return String(voice.name)
    .replace(/\s*\([^)]*\)\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function renderAudioPlayer() {
  const browserSupported = speechSupported();
  const apiReady =
    state.settings.api.enabled &&
    state.settings.api.apiKey.trim() &&
    state.settings.api.baseUrl.trim() &&
    state.settings.api.ttsModel.trim();
  const supported = runtime.audio.mode === "ai" ? apiReady : browserSupported;
  const voices = getAmericanVoices();
  const selectedVoice = getSelectedSpeechVoice();
  const active = runtime.audio.speaking && !runtime.audio.paused;
  const paused = runtime.audio.speaking && runtime.audio.paused;
  const actionLabel = runtime.audio.aiLoading
    ? "生成中"
    : active
      ? "暂停"
      : paused
        ? "继续"
        : "播放全文";
  const actionIcon = active ? "pause" : "play";
  const voiceLabel =
    runtime.audio.mode === "ai"
      ? `AI 美音 · ${state.settings.api.ttsVoice || "alloy"}`
      : readableVoiceName(selectedVoice);

  return `
    <section class="audio-panel" aria-label="课文整篇音频">
      <div class="audio-main">
        <span class="audio-symbol">${icon("headphones")}</span>
        <div class="audio-copy">
          <strong>整篇课文朗读</strong>
          <p>${supported ? `${voiceLabel} · 约 ${estimatedAudioMinutes()} 分钟` : "当前模式暂不可用"}</p>
        </div>
        <button class="button ${active ? "secondary" : "on-dark"} small audio-play" data-action="toggle-audio" type="button" ${supported && !runtime.audio.aiLoading ? "" : "disabled"}>
          ${icon(actionIcon, "sm")} ${actionLabel}
        </button>
      </div>

      <div class="audio-mode">
        <button class="${runtime.audio.mode === "browser" ? "active" : ""}" data-action="set-audio-mode" data-mode="browser" type="button">设备自然美音</button>
        <button class="${runtime.audio.mode === "ai" ? "active" : ""}" data-action="set-audio-mode" data-mode="ai" type="button">${apiReady ? "AI 美音" : "AI 美音 · 需配置"}</button>
      </div>

      <div class="audio-controls">
        <label class="audio-voice-field">
          <span>声线</span>
          <select class="select compact" data-audio-voice ${browserSupported && runtime.audio.mode === "browser" ? "" : "disabled"}>
            <option value="">自动选择最佳美音</option>
            ${voices
              .map(
                (voice) =>
                  `<option value="${escapeHTML(voice.voiceURI)}" ${voice.voiceURI === runtime.audio.voiceURI ? "selected" : ""}>${escapeHTML(readableVoiceName(voice))}</option>`,
              )
              .join("")}
          </select>
        </label>
        <label>
          <span>语速</span>
          <select class="select compact" data-audio-rate ${supported ? "" : "disabled"}>
            ${[0.75, 0.9, 1, 1.15]
              .map(
                (rate) =>
                  `<option value="${rate}" ${Number(runtime.audio.rate) === rate ? "selected" : ""}>${rate.toFixed(2)}×</option>`,
              )
              .join("")}
          </select>
        </label>
        <button class="button ghost small" data-action="stop-audio" type="button" ${runtime.audio.speaking || runtime.audio.aiLoading ? "" : "disabled"}>
          ${icon("stop", "sm")} 停止
        </button>
      </div>
      ${runtime.audio.mode === "ai" && !apiReady ? `<p class="audio-tip">请先在设置中配置 API、语音模型和声线。</p>` : ""}
    </section>
  `;
}

function toggleLessonAudio() {
  if (runtime.audio.mode === "ai") {
    toggleAIAudio();
    return;
  }

  if (!speechSupported()) {
    toast("当前浏览器不支持整篇语音朗读。");
    return;
  }

  if (runtime.audio.speaking && !runtime.audio.paused) {
    window.speechSynthesis.pause();
    runtime.audio.paused = true;
    renderApp();
    return;
  }

  if (runtime.audio.speaking && runtime.audio.paused) {
    window.speechSynthesis.resume();
    runtime.audio.paused = false;
    renderApp();
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(lessonSpeechText());
  const voice = getSelectedSpeechVoice();
  if (voice) utterance.voice = voice;
  utterance.lang = voice?.lang || "en-US";
  utterance.rate = Math.max(0.7, Math.min(1.1, runtime.audio.rate));
  utterance.pitch = 1.0;
  utterance.volume = 1;
  utterance.onstart = () => {
    runtime.audio.speaking = true;
    runtime.audio.paused = false;
    renderApp();
  };
  utterance.onend = () => {
    runtime.audio.speaking = false;
    runtime.audio.paused = false;
    renderApp();
  };
  utterance.onerror = (event) => {
    runtime.audio.speaking = false;
    runtime.audio.paused = false;
    renderApp();
    if (!["canceled", "interrupted"].includes(event.error)) {
      toast("整篇朗读未能开始，请检查系统英语语音设置。");
    }
  };
  runtime.audio.speaking = true;
  runtime.audio.paused = false;
  window.speechSynthesis.speak(utterance);
  renderApp();
}

function audioSpeechEndpoint() {
  const baseUrl = state.settings.api.baseUrl.replace(/\/+$/, "");
  return baseUrl.endsWith("/audio/speech") ? baseUrl : `${baseUrl}/audio/speech`;
}

async function createAITTSAudio() {
  const requestId = runtime.audio.requestId;
  const { apiKey, ttsModel, ttsVoice } = state.settings.api;
  const speechBody = {
    model: ttsModel,
    voice: ttsVoice || "alloy",
    input: lessonSpeechText(),
    response_format: "mp3",
    speed: Math.max(0.75, Math.min(1.15, runtime.audio.rate)),
  };
  if (/gpt-4o/i.test(ttsModel)) {
    speechBody.instructions =
      "Speak in a warm, natural American English accent at a clear learning pace.";
  }
  const response = await fetch(audioSpeechEndpoint(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(speechBody),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`语音接口返回 ${response.status}: ${detail.slice(0, 160)}`);
  }

  const blob = await response.blob();
  if (requestId !== runtime.audio.requestId) throw new Error("语音生成已取消");
  if (!blob.size) throw new Error("语音接口没有返回音频数据");
  if (runtime.audio.aiUrl) URL.revokeObjectURL(runtime.audio.aiUrl);
  runtime.audio.aiUrl = URL.createObjectURL(blob);
  const audio = new Audio(runtime.audio.aiUrl);
  audio.preload = "auto";
  audio.playbackRate = Math.max(0.75, Math.min(1.15, runtime.audio.rate));
  audio.onplay = () => {
    runtime.audio.speaking = true;
    runtime.audio.paused = false;
    renderApp();
  };
  audio.onpause = () => {
    if (!audio.ended) {
      runtime.audio.speaking = true;
      runtime.audio.paused = true;
      renderApp();
    }
  };
  audio.onended = () => {
    runtime.audio.speaking = false;
    runtime.audio.paused = false;
    renderApp();
  };
  audio.onerror = () => {
    runtime.audio.speaking = false;
    runtime.audio.paused = false;
    renderApp();
    toast("AI 美音播放失败，请检查语音模型或声线设置。");
  };
  runtime.audio.aiAudio = audio;
  return audio;
}

function toggleAIAudio() {
  const api = state.settings.api;
  if (
    !api.enabled ||
    !api.apiKey.trim() ||
    !api.baseUrl.trim() ||
    !api.ttsModel.trim()
  ) {
    toast("请先在设置中配置 AI 语音接口。");
    runtime.activeTab = "settings";
    renderApp();
    return;
  }

  const audio = runtime.audio.aiAudio;
  if (audio && !audio.paused) {
    audio.pause();
    return;
  }
  if (audio && audio.paused && !audio.ended) {
    audio.play().catch(() => toast("无法继续播放 AI 美音。"));
    return;
  }

  runtime.audio.aiLoading = true;
  renderApp();
  createAITTSAudio()
    .then((newAudio) => newAudio.play())
    .catch((error) => {
      toast(`${error.message}，已切回设备自然美音。`);
      runtime.audio.mode = "browser";
      runtime.audio.aiLoading = false;
      renderApp();
      window.setTimeout(() => toggleLessonAudio(), 0);
    })
    .finally(() => {
      runtime.audio.aiLoading = false;
      renderApp();
    });
}

function setAudioMode(mode) {
  if (!["browser", "ai"].includes(mode)) return;
  stopLessonAudio(false);
  runtime.audio.mode = mode;
  renderApp();
}

function stopLessonAudio(shouldRender = true) {
  runtime.audio.requestId += 1;
  if (speechSupported()) window.speechSynthesis.cancel();
  if (runtime.audio.aiAudio) {
    runtime.audio.aiAudio.pause();
    runtime.audio.aiAudio.currentTime = 0;
  }
  runtime.audio.speaking = false;
  runtime.audio.paused = false;
  runtime.audio.aiLoading = false;
  if (shouldRender) renderApp();
}

function renderLessonStage(progress) {
  return `
    <div class="panel-kicker">精读输入</div>
    <h2 class="panel-title">${escapeHTML(DEMO_LESSON.title)}</h2>
    <p class="panel-text">先听整篇或读一遍英文，再展开译文核对理解。遇到能复用的结构，点击“拆句型”加入今日学习。</p>

    ${renderAudioPlayer()}

    <div class="reader">
      ${DEMO_LESSON.paragraphs.map((paragraph) => `<p>${escapeHTML(paragraph.en)}</p>`).join("")}
    </div>

    <details class="translation">
      <summary>展开中文翻译</summary>
      <div class="translation-body">
        ${DEMO_LESSON.paragraphs.map((paragraph) => `<p>${escapeHTML(paragraph.zh)}</p>`).join("")}
      </div>
    </details>

    <div class="section-head" style="margin-top:23px">
      <h3 class="section-title">今日核心句型</h3>
      <span class="section-note">${progress.addedPatterns.length}/${DEMO_LESSON.patterns.length} 已加入</span>
    </div>
    <div class="pattern-list">
      ${DEMO_LESSON.patterns
        .map((pattern) => {
          const added = progress.addedPatterns.includes(pattern.id);
          return `
            <div class="pattern-item ${added ? "added" : ""}">
              <div>
                <strong>${escapeHTML(pattern.title)}</strong>
                <p>${escapeHTML(pattern.explanation)}</p>
                <p><em>${escapeHTML(pattern.example)}</em></p>
              </div>
              <button class="button ${added ? "success" : "ghost"} small" data-action="toggle-pattern" data-pattern-id="${pattern.id}" type="button">
                ${added ? `${icon("check", "sm")} 已加入` : `${icon("plus", "sm")} 拆句型`}
              </button>
            </div>
          `;
        })
        .join("")}
    </div>

    <div class="section-head" style="margin-top:23px">
      <h3 class="section-title">我的句型笔记</h3>
      <button class="button ghost small" data-action="open-note" type="button">${icon("plus", "sm")} 添加</button>
    </div>
    ${
      progress.notes.length
        ? `
          <div class="notes-list">
            ${progress.notes
              .map(
                (note) => `
                  <article class="note">
                    <p>${escapeHTML(note.text)}</p>
                    <time>${escapeHTML(formatShortDate(note.createdAt))}</time>
                  </article>
                `,
              )
              .join("")}
          </div>
        `
        : `<p class="panel-text">还没有笔记。可以记录自己容易漏掉的搭配、介词或语序。</p>`
    }

    <div class="panel-actions">
      <button class="button block large" data-action="complete-stage" data-stage="lesson" type="button">${icon("check", "sm")} 完成精学，进入回译</button>
    </div>
  `;
}

function renderOutputStage(progress) {
  const sentence = LESSON_SENTENCES[runtime.output.index] || LESSON_SENTENCES[0];
  const result = progress.outputs[sentence.id];
  const answer = result?.answer || "";

  return `
    <div class="panel-kicker">逐句回译 · ${runtime.output.index + 1}/${LESSON_SENTENCES.length}</div>
    <h2 class="panel-title">看中文，写出完整英文</h2>
    <p class="panel-text">尽量复现原句结构。提交后会逐词标出漏写、多写和正确部分，并自动收入错题本。</p>

    <div class="output-prompt" style="margin-top:16px">
      <span>中文原句</span>
      <p>${escapeHTML(sentence.zh)}</p>
    </div>

    <div class="field" style="margin-top:14px">
      <label for="output-answer">你的英文</label>
      <textarea class="textarea english" id="output-answer" data-output-id="${sentence.id}" placeholder="Type your English sentence here...">${escapeHTML(answer)}</textarea>
      <div class="counter-row">
        <span>${answer ? `${answer.trim().split(/\s+/).filter(Boolean).length} words` : "不会写也可以先尝试，再来做卡"}</span>
        <span>API ${state.settings.api.enabled && state.settings.api.apiKey ? "已启用" : "未配置"}</span>
      </div>
    </div>

    <div class="panel-actions">
      <button class="button" data-action="submit-output" type="button">提交对照</button>
      <button class="button secondary" data-action="ai-evaluate" type="button">
        ${runtime.output.aiLoading ? `AI 批改中 <span class="loading-dots"><i></i><i></i><i></i></span>` : `${icon("sparkles", "sm")} AI 批改`}
      </button>
    </div>

    ${result ? renderOutputResult(sentence, result) : ""}

    <div class="panel-actions" style="justify-content:space-between;margin-top:18px">
      <button class="button secondary small" data-action="prev-sentence" type="button" ${runtime.output.index === 0 ? "disabled" : ""}>
        ${icon("chevronLeft", "sm")} 上一句
      </button>
      <button class="button small" data-action="next-sentence" type="button">
        ${runtime.output.index === LESSON_SENTENCES.length - 1 ? "完成回译" : "下一句"} ${icon("chevronRight", "sm")}
      </button>
    </div>
  `;
}

function renderOutputResult(sentence, result) {
  const diff = compareTokens(result.answer || "", sentence.en);
  return `
    <div class="score-header">
      <div class="score-main">
        <strong>${Math.round(result.score)}%</strong>
        <span>${result.score >= 90 ? "结构很接近" : result.score >= 70 ? "基本达意，仍需打磨" : "先修正核心结构"}</span>
      </div>
      <span class="pill ${result.score >= 90 ? "success" : "warning"}">${result.ai ? "AI 批改" : "本地对照"}</span>
    </div>

    <div class="diff-block">
      <h4>你的答案</h4>
      <div class="diff-text">${diff.userHTML}</div>
    </div>
    <div class="diff-block">
      <h4>课文原句</h4>
      <div class="diff-text">${diff.referenceHTML}</div>
    </div>

    ${
      result.feedback
        ? `<div class="feedback ${result.ai ? "ai" : ""}">${escapeHTML(result.feedback)}</div>`
        : ""
    }
  `;
}

function renderWrapupStage(progress) {
  const weakOutputs = LESSON_SENTENCES.filter((sentence) => {
    const output = progress.outputs[sentence.id];
    return output && output.score < 90;
  });
  const cardsToday = state.cards.filter(
    (card) =>
      card.createdAt &&
      dateKey(new Date(card.createdAt)) === dateKey() &&
      card.sourceLesson === DEMO_LESSON.id,
  );

  return `
    <div class="panel-kicker">记忆回收</div>
    <h2 class="panel-title">把今天卡住的地方做成卡片</h2>
    <p class="panel-text">卡片正面只写中文意思，背面写你能接受的英文参考答案。标签会自动带上句型与来源课文。</p>

    <div class="section-head" style="margin-top:20px">
      <h3 class="section-title">今日薄弱句</h3>
      <span class="section-note">${weakOutputs.length} 条</span>
    </div>
    ${
      weakOutputs.length
        ? `
          <div class="card-list">
            ${weakOutputs
              .map((sentence) => {
                const output = progress.outputs[sentence.id];
                const alreadyAdded = state.cards.some(
                  (card) => card.sourceSentenceId === sentence.id && card.sourceDay === runtime.lessonDay,
                );
                return `
                  <div class="library-card">
                    <div class="library-card-top">
                      <div>
                        <h3>${escapeHTML(sentence.zh)}</h3>
                        <p class="answer">${escapeHTML(sentence.en)}</p>
                      </div>
                      <span class="pill warning">${Math.round(output.score)}%</span>
                    </div>
                    <div class="panel-actions">
                      <button class="button ${alreadyAdded ? "success" : "ghost"} small" data-action="make-output-card" data-sentence-id="${sentence.id}" type="button">
                        ${alreadyAdded ? `${icon("check", "sm")} 已做卡` : `${icon("plus", "sm")} 做成卡片`}
                      </button>
                    </div>
                  </div>
                `;
              })
              .join("")}
          </div>
        `
        : `
          <div class="empty-state surface">
            <div class="empty-symbol">${icon("check")}</div>
            <h3>没有明显薄弱句</h3>
            <p>你可以跳过这一步，或手动记录一个想反复练的表达。</p>
          </div>
        `
    }

    <div class="section-head" style="margin-top:23px">
      <h3 class="section-title">今日新卡</h3>
      <span class="section-note">${cardsToday.length} 张</span>
    </div>
    ${
      cardsToday.length
        ? `
          <div class="card-list">
            ${cardsToday
              .map(
                (card) => `
                  <div class="library-card">
                    <div class="library-card-top">
                      <div>
                        <h3>${escapeHTML(card.front)}</h3>
                        <p class="answer">${escapeHTML(card.back)}</p>
                      </div>
                      <span class="pill success">明天复习</span>
                    </div>
                  </div>
                `,
              )
              .join("")}
          </div>
        `
        : `<p class="panel-text">还没有新卡。可以从上方薄弱句一键生成。</p>`
    }

    <div class="panel-actions">
      <button class="button secondary" data-action="open-add-card" type="button">${icon("plus", "sm")} 手动加卡</button>
      <button class="button success" data-action="complete-stage" data-stage="wrapup" type="button">${icon("check", "sm")} 完成今日训练</button>
    </div>
  `;
}

function renderStageContent() {
  const progress = getProgress();
  switch (runtime.currentStage) {
    case "warmup":
      return renderWarmupStage(progress);
    case "lesson":
      return renderLessonStage(progress);
    case "output":
      return renderOutputStage(progress);
    case "wrapup":
      return renderWrapupStage(progress);
    default:
      return "";
  }
}

function renderStudy() {
  const progress = getProgress();
  const stage = stageById(runtime.currentStage);
  const remaining = timerRemaining();
  const elapsed = runtime.timer.totalSeconds - remaining;
  const percent = Math.min(100, Math.max(0, (elapsed / runtime.timer.totalSeconds) * 100));

  return `
    <main class="main">
      <section class="screen">
        <p class="eyebrow">30 分钟主动输出计划</p>
        <h1 class="page-title">今日训练</h1>
        <p class="page-subtitle">${escapeHTML(DEMO_LESSON.title)} · 第 ${DEMO_LESSON.number.replace("Lesson ", "")} 课</p>

        <div class="segmented" style="margin-top:18px">
          <button class="${runtime.lessonDay === 1 ? "active" : ""}" data-action="set-day" data-day="1" type="button">Day 1 · 输入与回译</button>
          <button class="${runtime.lessonDay === 2 ? "active" : ""}" data-action="set-day" data-day="2" type="button">Day 2 · 复现与巩固</button>
        </div>

        <section class="surface timer-panel" style="margin-top:14px">
          <div class="timer-top">
            <div>
              <span class="timer-label">${escapeHTML(stage.label)}</span>
              <strong class="timer-value ${runtime.timer.running ? "running" : ""}" data-timer-display>${formatTime(remaining)}</strong>
            </div>
            <div class="timer-actions">
              ${
                runtime.timer.running
                  ? `<button class="icon-button" data-action="pause-timer" type="button" aria-label="暂停计时">${icon("pause")}</button>`
                  : `<button class="icon-button" data-action="start-timer" type="button" aria-label="开始计时">${icon("play")}</button>`
              }
              <button class="icon-button" data-action="reset-timer" type="button" aria-label="重置计时">${icon("reset")}</button>
            </div>
          </div>
          <div class="timer-track"><span data-timer-progress style="width:${percent}%"></span></div>
        </section>

        <div class="stage-tabs">
          ${STAGES.map((item) => {
            const status = getStageStatus(item.id, progress);
            return `
              <button class="stage-tab ${runtime.currentStage === item.id ? "active" : ""} ${status === "done" ? "done" : ""}" data-action="switch-stage" data-stage="${item.id}" type="button">
                <strong>${status === "done" ? icon("check", "sm") : ""} ${escapeHTML(item.label)}</strong>
                <span>${item.minutes} 分钟${status === "done" ? " · 已完成" : ""}</span>
              </button>
            `;
          }).join("")}
        </div>

        <section class="surface content-panel">
          ${renderStageContent()}
        </section>
      </section>
    </main>
  `;
}

function renderCards() {
  const today = dateKey();
  const search = runtime.filters.cardSearch.trim().toLowerCase();
  let cards = [...state.cards];

  if (runtime.filters.cards === "due") {
    cards = cards.filter((card) => !card.mastered && card.dueDate <= today);
  } else if (runtime.filters.cards === "mastered") {
    cards = cards.filter((card) => card.mastered);
  }

  if (search) {
    cards = cards.filter((card) =>
      [card.front, card.back, card.pattern, card.source]
        .join(" ")
        .toLowerCase()
        .includes(search),
    );
  }

  cards.sort((a, b) => {
    if (a.mastered !== b.mastered) return Number(a.mastered) - Number(b.mastered);
    return String(a.dueDate).localeCompare(String(b.dueDate));
  });

  return `
    <main class="main">
      <section class="screen">
        <p class="eyebrow">卡片库 · ${state.cards.length} 张</p>
        <div class="section-head" style="align-items:center">
          <h1 class="page-title">我的卡片</h1>
          <button class="button small" data-action="open-add-card" type="button">${icon("plus", "sm")} 新建</button>
        </div>
        <p class="page-subtitle">连续答对 3 次即标记掌握；答错会重置连续次数，并安排到明天。</p>

        <div class="segmented" style="margin-top:18px">
          <button class="${runtime.filters.cards === "all" ? "active" : ""}" data-filter-cards="all" type="button">全部 ${state.cards.length}</button>
          <button class="${runtime.filters.cards === "due" ? "active" : ""}" data-filter-cards="due" type="button">待复习 ${getDueCards(99).length}</button>
          <button class="${runtime.filters.cards === "mastered" ? "active" : ""}" data-filter-cards="mastered" type="button">已掌握 ${state.cards.filter((card) => card.mastered).length}</button>
        </div>

        <div class="field" style="margin-top:12px">
          <label for="card-search" class="sr-only">搜索卡片</label>
          <input class="input" id="card-search" data-card-search value="${escapeHTML(runtime.filters.cardSearch)}" placeholder="搜索中文、英文或句型" />
        </div>

        <div class="section-head" style="margin-top:18px">
          <h2 class="section-title">${cards.length} 张卡片</h2>
          <span class="section-note">${runtime.filters.cards === "due" ? "按到期时间排序" : "本地保存"}</span>
        </div>

        ${
          cards.length
            ? `
              <div class="card-list">
                ${cards
                  .map((card) => {
                    const dueLabel = card.mastered
                      ? "已掌握"
                      : card.dueDate <= today
                        ? "今天复习"
                        : `${formatShortDate(dateFromKey(card.dueDate))} 复习`;
                    return `
                      <article class="library-card">
                        <div class="library-card-top">
                          <div>
                            <h3>${escapeHTML(card.front)}</h3>
                            <p class="answer">${escapeHTML(card.back)}</p>
                          </div>
                          <div class="card-tools">
                            <button class="tool-button" data-action="edit-card" data-card-id="${card.id}" type="button" aria-label="编辑卡片">${icon("pencil", "sm")}</button>
                            <button class="tool-button delete" data-action="delete-card" data-card-id="${card.id}" type="button" aria-label="删除卡片">${icon("trash", "sm")}</button>
                          </div>
                        </div>
                        <div class="card-meta">
                          <span class="meta-chip">${escapeHTML(card.pattern || "未标句型")}</span>
                          <span class="meta-chip">${dueLabel}</span>
                          <span class="meta-chip">连续 ${card.successStreak || 0}/3</span>
                          ${card.source ? `<span class="meta-chip">${escapeHTML(card.source)}</span>` : ""}
                        </div>
                      </article>
                    `;
                  })
                  .join("")}
              </div>
            `
            : `
              <div class="empty-state surface">
                <div class="empty-symbol">${icon("layers")}</div>
                <h3>没有匹配的卡片</h3>
                <p>换个筛选条件，或新建一张卡片。</p>
              </div>
            `
        }
      </section>
    </main>
  `;
}

function renderMistakes() {
  let mistakes = [...state.mistakes];
  if (runtime.filters.mistakes === "open") {
    mistakes = mistakes.filter((mistake) => !mistake.resolved);
  } else if (runtime.filters.mistakes === "resolved") {
    mistakes = mistakes.filter((mistake) => mistake.resolved);
  }
  mistakes.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));

  return `
    <main class="main">
      <section class="screen">
        <p class="eyebrow">错误回收 · ${state.mistakes.filter((item) => !item.resolved).length} 条待处理</p>
        <h1 class="page-title">错题本</h1>
        <p class="page-subtitle">保存回译中的漏写、多写和结构偏差。标记解决后仍会保留，方便隔一段时间回看。</p>

        <div class="segmented" style="margin-top:18px">
          <button class="${runtime.filters.mistakes === "open" ? "active" : ""}" data-filter-mistakes="open" type="button">待解决</button>
          <button class="${runtime.filters.mistakes === "resolved" ? "active" : ""}" data-filter-mistakes="resolved" type="button">已解决</button>
          <button class="${runtime.filters.mistakes === "all" ? "active" : ""}" data-filter-mistakes="all" type="button">全部</button>
        </div>

        <div class="section-head" style="margin-top:20px">
          <h2 class="section-title">${mistakes.length} 条错误</h2>
          <span class="section-note">按时间倒序</span>
        </div>

        ${
          mistakes.length
            ? `
              <div class="card-list">
                ${mistakes
                  .map(
                    (mistake) => `
                      <article class="mistake-card ${mistake.resolved ? "resolved" : ""}">
                        <div class="mistake-head">
                          <span class="mistake-type">${mistake.resolved ? "已解决" : escapeHTML(mistake.type === "output" ? "回译错误" : "造句错误")}</span>
                          <time>${escapeHTML(formatShortDate(mistake.createdAt))}</time>
                        </div>
                        <h3>${escapeHTML(mistake.prompt)}</h3>
                        <p class="mistake-answer">${escapeHTML(mistake.answer)}</p>
                        <p class="mistake-reference">参考：${escapeHTML(mistake.reference)}</p>
                        ${
                          mistake.feedback
                            ? `<p class="mistake-reference">提示：${escapeHTML(mistake.feedback)}</p>`
                            : ""
                        }
                        <div class="panel-actions">
                          <button class="button ${mistake.resolved ? "secondary" : "success"} small" data-action="toggle-mistake" data-mistake-id="${mistake.id}" type="button">
                            ${mistake.resolved ? "重新打开" : `${icon("check", "sm")} 标记解决`}
                          </button>
                          <button class="button danger-soft small" data-action="delete-mistake" data-mistake-id="${mistake.id}" type="button">删除</button>
                        </div>
                      </article>
                    `,
                  )
                  .join("")}
              </div>
            `
            : `
              <div class="empty-state surface">
                <div class="empty-symbol">${icon("notebook")}</div>
                <h3>这里暂时是空的</h3>
                <p>完成回译后，低于 90% 的句子会自动记录在这里。</p>
              </div>
            `
        }
      </section>
    </main>
  `;
}

function getWritingContext() {
  return {
    title: runtime.writing.title.trim() || "自由写作",
    guidance: WRITING_GUIDANCE,
  };
}

function countWritingWords(text) {
  return tokenizeForWriting(text).length;
}

function analyzeWriting(text) {
  const clean = String(text || "").trim();
  const words = tokenizeForWriting(clean);
  const uniqueWords = unique(words);
  const sentences = clean
    .split(/[.!?。！？]+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => countWritingWords(sentence) > 0);
  const paragraphs = clean.split(/\n\s*\n/).filter((paragraph) => paragraph.trim());
  const lower = clean.toLowerCase();
  const connectorPattern =
    /\b(however|although|because|therefore|while|despite|moreover|in addition|for example|as a result|on the other hand|first|second|finally|instead|since|unless|meanwhile|another|overall)\b/g;
  const connectors = lower.match(connectorPattern) || [];
  const sentenceLengths = sentences.map(countWritingWords);
  const averageSentenceLength = sentenceLengths.length
    ? sentenceLengths.reduce((sum, length) => sum + length, 0) / sentenceLengths.length
    : 0;
  const uniqueRatio = words.length ? uniqueWords.length / words.length : 0;
  const issues = [];
  const strengths = [];

  if (words.length < 50) {
    issues.push(`还差 ${50 - words.length} 个词，达到 50 词后挑战成绩会完整生效。`);
  } else {
    strengths.push(`篇幅达到 ${words.length} 词，已经满足本次写作任务。`);
  }

  if (sentences.length < 4 && words.length >= 35) {
    issues.push("可以拆成至少 4 个句子，让每个观点更清楚。");
  } else if (sentences.length >= 4) {
    strengths.push(`共使用 ${sentences.length} 个句子，观点展开得比较完整。`);
  }

  if (connectors.length >= 2) {
    strengths.push(`使用了 ${connectors.length} 处连接表达，段落衔接较自然。`);
  } else if (words.length >= 50) {
    issues.push("加入 however、because、for example 或 as a result 等连接词，让逻辑更顺畅。");
  }

  if (uniqueRatio >= 0.62 && words.length >= 50) {
    strengths.push("词汇重复较少，用词有一定变化。");
  } else if (words.length >= 50) {
    issues.push("重复词偏多，可以替换部分高频词或换一种表达。");
  }

  if (sentenceLengths.some((length) => length > 38)) {
    issues.push("有一句话超过 38 个词，建议拆成两句话。");
  }

  if (averageSentenceLength && averageSentenceLength < 7) {
    issues.push("句子整体偏短，可以用 because、which 或 when 连接更多信息。");
  }

  if (/\bi\b/.test(clean)) {
    issues.push("作为主语的人称代词 I 需要大写。");
  }

  if (/ {2,}/.test(clean)) {
    issues.push("正文中存在连续空格，注意标点后的空格格式。");
  }

  if (clean && !/[.!?。！？]["']?$/.test(clean)) {
    issues.push("结尾缺少句号、问号或感叹号。");
  }

  if (paragraphs.length >= 2) {
    strengths.push("使用了段落分隔，文章层次更容易阅读。");
  } else if (words.length >= 90) {
    issues.push("文章较长，建议至少分成两个自然段。");
  }

  const dimensions = {
    length: Math.min(30, Math.round((words.length / 50) * 30)),
    structure: Math.min(20, (paragraphs.length >= 2 ? 9 : 5) + Math.min(11, sentences.length * 2)),
    variety: Math.min(15, Math.round(uniqueRatio * 16)),
    connectors: Math.min(15, connectors.length * 4),
    accuracy: Math.max(5, 20 - issues.length * 2),
  };
  const score = Math.max(0, Math.min(100, Object.values(dimensions).reduce((sum, value) => sum + value, 0)));
  const improvements = issues.length
    ? issues
    : ["内容已经比较完整，下一步可以加入一个具体例子，或把宽泛的表达换成更准确的动词。"];
  let summary = "";

  if (score >= 85) {
    summary = "表达完整，结构和连接都比较成熟。下一步重点打磨具体细节与用词准确度。";
  } else if (score >= 70) {
    summary = "主题已经写清楚，整体可读。补充例子并加强句间连接，文章会更有说服力。";
  } else if (score >= 55) {
    summary = "核心意思基本可见，但篇幅、结构或连接仍需要补齐。先解决最上面的改进项。";
  } else {
    summary = "先把内容写到 50 词以上，并确保每句话都有完整主谓结构，再追求高级表达。";
  }

  return {
    score,
    wordCount: words.length,
    sentenceCount: sentences.length,
    paragraphCount: paragraphs.length || Number(Boolean(clean)),
    connectorCount: connectors.length,
    dimensions,
    strengths: strengths.slice(0, 3),
    improvements: improvements.slice(0, 4),
    summary,
  };
}

function renderScoreDimensions(dimensions = {}) {
  const rows = [
    ["篇幅", "length", 30],
    ["结构", "structure", 20],
    ["词汇", "variety", 15],
    ["连接", "connectors", 15],
    ["准确度", "accuracy", 20],
  ];
  return `
    <div class="score-meters">
      ${rows
        .map(([label, key, max]) => {
          const value = Number(dimensions[key] || 0);
          return `
            <div class="score-meter">
              <div class="score-meter-head"><span>${label}</span><strong>${value}/${max}</strong></div>
              <div class="score-meter-track"><span style="width:${Math.min(100, (value / max) * 100)}%"></span></div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderWritingResult(entry) {
  if (!entry) return "";
  return `
    <section class="surface writing-result">
      <div class="writing-result-head">
        <div>
          <span class="panel-kicker">${entry.ai ? "AI 深度点评" : "本地评分"}</span>
          <h2>${entry.score >= 85 ? "表达成熟" : entry.score >= 70 ? "表达清楚" : entry.score >= 55 ? "继续完善" : "还差一步"}</h2>
          <p>${escapeHTML(entry.summary || "")}</p>
        </div>
        <div class="writing-score">
          <strong>${Math.round(entry.score)}</strong>
          <span>/ 100</span>
        </div>
      </div>

      ${entry.dimensions ? renderScoreDimensions(entry.dimensions) : ""}

      ${
        entry.strengths?.length
          ? `
            <div class="writing-feedback-group positive">
              <strong>做得好的地方</strong>
              <ul>${entry.strengths.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
            </div>
          `
          : ""
      }
      ${
        entry.improvements?.length
          ? `
            <div class="writing-feedback-group improvement">
              <strong>优先改进</strong>
              <ul>${entry.improvements.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
            </div>
          `
          : ""
      }
      ${
        entry.corrected
          ? `
            <details class="writing-correction">
              <summary>查看 AI 修订稿</summary>
              <div>${escapeHTML(entry.corrected).replaceAll("\n", "<br />")}</div>
            </details>
          `
          : ""
      }
    </section>
  `;
}

function renderWritingHistory() {
  const entries = state.writingEntries.slice(0, 6);
  if (!entries.length) {
    return `
      <div class="empty-state surface">
        <div class="empty-symbol">${icon("pencil")}</div>
        <h3>还没有自由写作记录</h3>
        <p>完成第一篇 50 词写作后，评分、点评和修订稿会保存在这里。</p>
      </div>
    `;
  }

  return `
    <div class="card-list">
      ${entries
        .map(
          (entry) => `
            <article class="writing-history-item">
              <div class="writing-history-top">
                <div>
                  <span class="meta-chip">${entry.ai ? "AI 点评" : "本地评分"}</span>
                  <h3>${escapeHTML(entry.topicTitle)}</h3>
                </div>
                <span class="pill ${entry.score >= 80 ? "success" : "warning"}">${Math.round(entry.score)} 分</span>
              </div>
              <p>${escapeHTML(entry.text)}</p>
              <div class="writing-history-meta">
                <span>${entry.wordCount} 词</span>
                <time>${escapeHTML(formatShortDate(entry.createdAt))}</time>
                <button class="text-button" data-action="load-writing-entry" data-entry-id="${entry.id}" type="button">载入修改</button>
                <button class="text-button danger" data-action="delete-writing-entry" data-entry-id="${entry.id}" type="button">删除</button>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderWriting() {
  const words = countWritingWords(runtime.writing.draft);
  const latest = state.writingEntries.find((entry) => entry.id === runtime.writing.resultId);
  const ready = words >= 50;
  const apiReady =
    state.settings.api.enabled &&
    state.settings.api.apiKey.trim() &&
    state.settings.api.baseUrl.trim() &&
    state.settings.api.model.trim();

  return `
    <main class="main">
      <section class="screen">
        <p class="eyebrow">自由写作 · 至少 50 词</p>
        <h1 class="page-title">写完，再让表达变好。</h1>
        <p class="page-subtitle">不限定主题，按当天学习内容或任何想表达的事情自由发挥。本地评分先检查篇幅、结构、词汇和连接，AI 点评再进一步修正表达。</p>

        <section class="surface writing-editor-panel">
          <div class="field">
            <label for="writing-title">标题（可选）</label>
            <input class="input" id="writing-title" data-writing-title value="${escapeHTML(runtime.writing.title)}" placeholder="例如：今天学到的 come with" />
          </div>

          <div class="writing-prompt">
            <span>自由发挥</span>
            <p>${escapeHTML(WRITING_GUIDANCE)}</p>
            <div class="writing-hints">
              <span>今日课文与句型</span>
              <span>回译中的错误</span>
              <span>任意真实经历</span>
            </div>
          </div>

          <div class="field">
            <label for="writing-editor">你的英文</label>
            <textarea class="textarea english writing-textarea" id="writing-editor" data-writing-editor placeholder="Write at least 50 words. Keep one main idea and support it with details.">${escapeHTML(runtime.writing.draft)}</textarea>
            <div class="writing-count-row">
              <span><strong data-writing-count>${words}</strong> / 50 words</span>
              <span>${ready ? "已达到评分要求" : `还差 ${Math.max(0, 50 - words)} 词`}</span>
            </div>
            <div class="writing-progress"><span data-writing-progress style="width:${Math.min(100, (words / 50) * 100)}%"></span></div>
          </div>

          <div class="panel-actions">
            <button class="button" data-action="score-writing" type="button" ${ready ? "" : "disabled"}>${icon("gauge", "sm")} 本地评分</button>
            <button class="button secondary" data-action="ai-writing" type="button" ${ready ? "" : "disabled"}>
              ${runtime.writing.aiLoading ? `AI 点评中 <span class="loading-dots"><i></i><i></i><i></i></span>` : `${icon("sparkles", "sm")} AI 深度点评`}
            </button>
          </div>
          ${!apiReady ? `<p class="field-hint writing-api-hint">AI 点评需要先在设置中启用接口；本地评分随时可用。</p>` : ""}
        </section>

        ${renderWritingResult(latest)}

        <section class="section">
          <div class="section-head">
            <h2 class="section-title">写作记录</h2>
            <span class="section-note">${state.writingEntries.length} 篇</span>
          </div>
          ${renderWritingHistory()}
        </section>
      </section>
    </main>
  `;
}

function renderSettings() {
  const api = state.settings.api;
  const apiReady = api.enabled && api.apiKey.trim() && api.baseUrl.trim() && api.model.trim();

  return `
    <main class="main">
      <section class="screen">
        <p class="eyebrow">本地偏好</p>
        <h1 class="page-title">设置</h1>
        <p class="page-subtitle">应用可以纯本地使用。API 用于额外的 AI 回译批改和写作点评，密钥只保存在当前浏览器。</p>

        <section class="section">
          <div class="section-head">
            <h2 class="section-title">AI 接口</h2>
            <span class="pill ${apiReady ? "success" : ""}">${apiReady ? "已配置" : "未配置"}</span>
          </div>
          <div class="surface" style="padding:16px">
            <div class="settings-row" style="padding-top:0">
              <div>
                <strong>启用 AI 批改</strong>
                <p>回译批改和写作点评使用 Chat Completions，AI 美音使用 Audio Speech 接口。</p>
              </div>
              <label class="switch">
                <input type="checkbox" id="api-enabled" ${api.enabled ? "checked" : ""} />
                <span aria-hidden="true"></span>
              </label>
            </div>

            <div class="field">
              <label for="api-base-url">Base URL</label>
              <input class="input" id="api-base-url" value="${escapeHTML(api.baseUrl)}" placeholder="https://api.openai.com/v1" autocomplete="off" />
            </div>
            <div class="field">
              <label for="api-model">模型名称</label>
              <input class="input" id="api-model" value="${escapeHTML(api.model)}" placeholder="gpt-4o-mini" autocomplete="off" />
            </div>
            <div class="field">
              <label for="api-tts-model">语音模型</label>
              <input class="input" id="api-tts-model" value="${escapeHTML(api.ttsModel || "gpt-4o-mini-tts")}" placeholder="gpt-4o-mini-tts" autocomplete="off" />
              <p class="field-hint">用于“AI 美音”整篇课文朗读，音频不会上传到 Codex 存储。</p>
            </div>
            <div class="field">
              <label for="api-tts-voice">美音声线</label>
              <select class="select" id="api-tts-voice">
                ${[
                  ["alloy", "Alloy · 中性自然"],
                  ["nova", "Nova · 清晰女声"],
                  ["coral", "Coral · 明亮女声"],
                  ["sage", "Sage · 温暖女声"],
                  ["ash", "Ash · 沉稳男声"],
                  ["onyx", "Onyx · 低沉男声"],
                ]
                  .map(
                    ([value, label]) =>
                      `<option value="${value}" ${api.ttsVoice === value ? "selected" : ""}>${label}</option>`,
                  )
                  .join("")}
              </select>
            </div>
            <div class="field">
              <label for="api-key">API Key</label>
              <input class="input" id="api-key" type="password" value="${escapeHTML(api.apiKey)}" placeholder="sk-..." autocomplete="off" />
              <p class="field-hint">纯前端应用无法隐藏密钥。请只在自己的设备上使用，并建议配置访问范围受限的密钥。</p>
            </div>
            <div class="panel-actions">
              <button class="button" data-action="save-api" type="button">保存接口设置</button>
              <button class="button secondary" data-action="test-api" type="button">测试连接</button>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="section-head">
            <h2 class="section-title">学习数据</h2>
          </div>
          <div class="surface" style="padding:16px">
            <div class="settings-row" style="padding-top:0">
              <div>
                <strong>本地数据</strong>
                <p>${state.cards.length} 张卡片 · ${state.writingEntries.length} 篇写作 · ${state.mistakes.length} 条错题 · ${state.activityDates.length} 个学习日</p>
              </div>
              <span class="pill success">已自动保存</span>
            </div>
            <div class="panel-actions">
              <button class="button secondary small" data-action="export-data" type="button">${icon("download", "sm")} 导出备份</button>
              <label class="button secondary small" style="cursor:pointer">
                ${icon("upload", "sm")} 导入备份
                <input type="file" id="import-file" accept=".json,application/json" hidden />
              </label>
              <button class="button danger-soft small" data-action="reset-data" type="button">恢复初始数据</button>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="surface" style="padding:16px">
            <div class="settings-row" style="padding-top:0">
              <div>
                <strong>离线使用</strong>
                <p>核心页面已注册离线缓存，首次打开后可添加到手机主屏幕。</p>
              </div>
              ${icon("wifiOff")}
            </div>
            <div class="install-note">
              ${icon("shield", "sm")}
              <span>训练记录不会上传。只有当你点击“AI 批改”或“AI 深度点评”时，对应文本才会发送到你配置的接口。</span>
            </div>
          </div>
        </section>
      </section>
    </main>
  `;
}

function renderApp() {
  let screen = "";
  switch (runtime.activeTab) {
    case "study":
      screen = renderStudy();
      break;
    case "writing":
      screen = renderWriting();
      break;
    case "cards":
      screen = renderCards();
      break;
    case "mistakes":
      screen = renderMistakes();
      break;
    case "settings":
      screen = renderSettings();
      break;
    default:
      screen = renderHome();
  }

  app.innerHTML = `
    <div class="app-shell">
      ${renderHeader()}
      ${screen}
      ${renderBottomNav()}
    </div>
  `;
  renderModal();
}

function openModal(type, payload = {}) {
  runtime.modal = { type, ...payload };
  renderModal();
}

function closeModal() {
  runtime.modal = null;
  renderModal();
}

function renderModal() {
  if (!runtime.modal) {
    modalRoot.innerHTML = "";
    return;
  }

  if (runtime.modal.type === "card") {
    const editingId = runtime.modal.cardId;
    const card = editingId ? state.cards.find((item) => item.id === editingId) : null;
    modalRoot.innerHTML = `
      <div class="modal-backdrop" data-action="close-modal">
        <section class="modal" role="dialog" aria-modal="true" aria-labelledby="card-modal-title" data-modal-panel>
          <div class="modal-head">
            <div>
              <h2 id="card-modal-title">${card ? "编辑卡片" : "新建卡片"}</h2>
              <p>正面只放中文提示，背面放可接受的英文参考答案。</p>
            </div>
            <button class="icon-button" data-action="close-modal" type="button" aria-label="关闭">${icon("x")}</button>
          </div>
          <form id="card-form" data-card-id="${card?.id || ""}">
            <div class="modal-body">
              <div class="field">
                <label for="card-front">正面 · 中文意思</label>
                <textarea class="textarea" id="card-front" required placeholder="例如：他宁愿走路，也不愿在高峰期开车。">${escapeHTML(card?.front || "")}</textarea>
              </div>
              <div class="field">
                <label for="card-back">背面 · 英文参考答案</label>
                <textarea class="textarea english" id="card-back" required placeholder="He would rather walk than drive during rush hour.">${escapeHTML(card?.back || "")}</textarea>
              </div>
              <div class="field">
                <label for="card-pattern">句型标签</label>
                <input class="input" id="card-pattern" value="${escapeHTML(card?.pattern || "")}" placeholder="例如：would rather ... than ..." />
              </div>
              <div class="field">
                <label for="card-source">来源课文</label>
                <input class="input" id="card-source" value="${escapeHTML(card?.source || DEMO_LESSON.title)}" placeholder="来源课文" />
              </div>
            </div>
            <div class="modal-actions">
              <button class="button secondary" data-action="close-modal" type="button">取消</button>
              <button class="button" type="submit">${card ? "保存修改" : "创建卡片"}</button>
            </div>
          </form>
        </section>
      </div>
    `;
    return;
  }

  if (runtime.modal.type === "note") {
    modalRoot.innerHTML = `
      <div class="modal-backdrop" data-action="close-modal">
        <section class="modal" role="dialog" aria-modal="true" aria-labelledby="note-modal-title" data-modal-panel>
          <div class="modal-head">
            <div>
              <h2 id="note-modal-title">添加句型笔记</h2>
              <p>记录搭配、介词、语序或你自己的替换表达。</p>
            </div>
            <button class="icon-button" data-action="close-modal" type="button" aria-label="关闭">${icon("x")}</button>
          </div>
          <form id="note-form">
            <div class="modal-body">
              <div class="field">
                <label for="note-text">笔记内容</label>
                <textarea class="textarea" id="note-text" required placeholder="例如：come with 后面接名词；强调某事伴随着另一件事发生。"></textarea>
              </div>
            </div>
            <div class="modal-actions">
              <button class="button secondary" data-action="close-modal" type="button">取消</button>
              <button class="button" type="submit">保存笔记</button>
            </div>
          </form>
        </section>
      </div>
    `;
  }
}

function completeStage(stageId, shouldRender = true) {
  const progress = getProgress();
  progress.stages[stageId] = true;
  markActivity();
  saveState();

  const nextIndex = STAGES.findIndex((stage) => stage.id === stageId) + 1;
  if (nextIndex < STAGES.length) {
    switchStage(STAGES[nextIndex].id, shouldRender);
  } else if (shouldRender) {
    toast("今天的四个阶段已完成。");
    renderApp();
  }
}

function switchStage(stageId, shouldRender = true) {
  if (!STAGES.some((stage) => stage.id === stageId)) return;
  stopTimer(false);
  runtime.currentStage = stageId;
  runtime.timer.stage = stageId;
  runtime.timer.totalSeconds = stageById(stageId).minutes * MINUTE;
  runtime.timer.remaining = runtime.timer.totalSeconds;
  runtime.timer.running = false;
  runtime.timer.endAt = null;
  if (stageId === "warmup") {
    runtime.review = { queueIds: [], index: 0, revealed: false };
  }
  if (stageId === "output") {
    runtime.output.index = 0;
  }
  if (shouldRender) renderApp();
}

function startTimer() {
  if (runtime.timer.running) return;
  if (runtime.timer.remaining <= 0) runtime.timer.remaining = runtime.timer.totalSeconds;
  runtime.timer.endAt = Date.now() + runtime.timer.remaining * 1000;
  runtime.timer.running = true;
  renderApp();
}

function pauseTimer(shouldRender = true) {
  if (!runtime.timer.running) return;
  runtime.timer.remaining = timerRemaining();
  runtime.timer.running = false;
  runtime.timer.endAt = null;
  if (shouldRender) renderApp();
}

function stopTimer(shouldRender = true) {
  runtime.timer.remaining = timerRemaining();
  runtime.timer.running = false;
  runtime.timer.endAt = null;
  if (shouldRender) renderApp();
}

function resetTimer() {
  runtime.timer.running = false;
  runtime.timer.endAt = null;
  runtime.timer.totalSeconds = stageById(runtime.currentStage).minutes * MINUTE;
  runtime.timer.remaining = runtime.timer.totalSeconds;
  renderApp();
}

function tickTimer() {
  if (!runtime.timer.running) return;
  const remaining = timerRemaining();
  const display = document.querySelector("[data-timer-display]");
  const headerTimer = document.querySelector("[data-header-timer]");
  const progress = document.querySelector("[data-timer-progress]");
  if (display) display.textContent = formatTime(remaining);
  if (headerTimer) headerTimer.textContent = formatTime(remaining);
  if (progress) {
    const elapsed = runtime.timer.totalSeconds - remaining;
    progress.style.width = `${Math.min(100, Math.max(0, (elapsed / runtime.timer.totalSeconds) * 100))}%`;
  }
  if (remaining <= 0) {
    runtime.timer.running = false;
    runtime.timer.endAt = null;
    runtime.timer.remaining = 0;
    playCompletionTone();
    toast(`${stageById(runtime.currentStage).label}计时结束，可以切换下一阶段。`);
    renderApp();
  }
}

function playCompletionTone() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.frequency.value = 660;
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.08, context.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.45);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.48);
  } catch {
    // Audio is an enhancement; the visual timer still works without it.
  }
}

function toast(message) {
  toastRoot.innerHTML = `<div class="toast" role="status">${escapeHTML(message)}</div>`;
  window.clearTimeout(toast.timeout);
  toast.timeout = window.setTimeout(() => {
    toastRoot.innerHTML = "";
  }, 2800);
}

function tokenize(text) {
  return (
    String(text)
      .toLowerCase()
      .replace(/[’‘]/g, "'")
      .match(/[a-z]+(?:'[a-z]+)?|\d+|[^\sa-z0-9]/g) || []
  );
}

function compareTokens(userText, referenceText) {
  const user = tokenize(userText);
  const reference = tokenize(referenceText);
  const rows = user.length + 1;
  const cols = reference.length + 1;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = user.length - 1; i >= 0; i -= 1) {
    for (let j = reference.length - 1; j >= 0; j -= 1) {
      dp[i][j] =
        user[i] === reference[j]
          ? dp[i + 1][j + 1] + 1
          : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }

  let i = 0;
  let j = 0;
  let matches = 0;
  const userParts = [];
  const referenceParts = [];

  while (i < user.length && j < reference.length) {
    if (user[i] === reference[j]) {
      userParts.push({ token: user[i], type: "match" });
      referenceParts.push({ token: reference[j], type: "match" });
      matches += 1;
      i += 1;
      j += 1;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      userParts.push({ token: user[i], type: "extra" });
      i += 1;
    } else {
      referenceParts.push({ token: reference[j], type: "missing" });
      j += 1;
    }
  }

  while (i < user.length) {
    userParts.push({ token: user[i], type: "extra" });
    i += 1;
  }

  while (j < reference.length) {
    referenceParts.push({ token: reference[j], type: "missing" });
    j += 1;
  }

  const denominator = Math.max(user.length + reference.length, 1);
  const score = user.length && reference.length ? (2 * matches * 100) / denominator : 0;

  return {
    score,
    matches,
    userHTML: renderTokenParts(userParts, "你还没有填写英文。"),
    referenceHTML: renderTokenParts(referenceParts, ""),
  };
}

function renderTokenParts(parts, emptyText) {
  if (!parts.length) return `<span>${escapeHTML(emptyText)}</span>`;
  return parts
    .map((part) => `<span class="token ${part.type}">${escapeHTML(part.token)}</span>`)
    .join(" ");
}

function evaluateLocally(userAnswer, reference) {
  const diff = compareTokens(userAnswer, reference);
  const userTokens = tokenize(userAnswer);
  const referenceTokens = tokenize(reference);
  const extraCount = Math.max(0, userTokens.length - diff.matches);
  const missingCount = Math.max(0, referenceTokens.length - diff.matches);
  let feedback = "";

  if (diff.score >= 90) {
    feedback = "表达已经很接近原句。继续留意标点和冠词，再读一遍形成语感。";
  } else if (missingCount > extraCount) {
    feedback = `主要问题是有 ${missingCount} 个关键词或结构未写出。对照红色下划线位置补全，再朗读一遍。`;
  } else if (extraCount > missingCount) {
    feedback = `你的句子多出了约 ${extraCount} 个词。检查是否存在中文直译、重复表达或多余修饰。`;
  } else {
    feedback = "句意基本可见，但词序和搭配与原句有明显差异。先找主干，再补修饰成分。";
  }

  return {
    score: diff.score,
    feedback,
    ai: false,
    answer: userAnswer,
    corrected: reference,
  };
}

function recordMistake(sentence, result) {
  const id = `output:${sentence.id}:${runtime.lessonDay}`;
  const existing = state.mistakes.find((mistake) => mistake.id === id);
  const record = {
    id,
    type: "output",
    prompt: sentence.zh,
    answer: result.answer,
    reference: sentence.en,
    feedback: result.feedback,
    score: result.score,
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    resolved: false,
  };

  if (existing) {
    Object.assign(existing, record);
  } else {
    state.mistakes.unshift(record);
  }
}

function saveOutput(result) {
  const sentence = LESSON_SENTENCES[runtime.output.index];
  const progress = getProgress();
  progress.outputs[sentence.id] = {
    ...result,
    submittedAt: new Date().toISOString(),
  };
  markActivity();
  if (result.score < 90) {
    recordMistake(sentence, result);
  } else {
    state.mistakes = state.mistakes.filter(
      (mistake) => mistake.id !== `output:${sentence.id}:${runtime.lessonDay}`,
    );
  }
  saveState();
}

async function callChatCompletion(messages, temperature = 0.2) {
  const { baseUrl, apiKey, model } = state.settings.api;
  const endpoint = baseUrl.replace(/\/+$/, "").endsWith("/chat/completions")
    ? baseUrl.replace(/\/+$/, "")
    : `${baseUrl.replace(/\/+$/, "")}/chat/completions`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature,
      messages,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`接口返回 ${response.status}: ${detail.slice(0, 180)}`);
  }

  const payload = await response.json();
  const content = payload?.choices?.[0]?.message?.content;
  if (!content) throw new Error("接口没有返回可解析内容");
  return String(content)
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/, "")
    .trim();
}

async function callAI(sentence, userAnswer) {
  const content = await callChatCompletion([
    {
      role: "system",
      content:
        "You are a concise English writing coach. Compare the learner's answer with the reference. Return JSON only with keys: score (0-100 number), corrected (string), feedback (Chinese, max 80 chars). Be fair about acceptable paraphrases and focus on grammar, structure, and collocation.",
    },
    {
      role: "user",
      content: JSON.stringify({
        chinese_prompt: sentence.zh,
        reference: sentence.en,
        learner_answer: userAnswer,
      }),
    },
  ]);
  const parsed = JSON.parse(content);
  return {
    score: Math.max(0, Math.min(100, Number(parsed.score) || 0)),
    corrected: String(parsed.corrected || sentence.en),
    feedback: String(parsed.feedback || ""),
    ai: true,
    answer: userAnswer,
  };
}

async function callWritingAI(context, text) {
  const content = await callChatCompletion([
    {
      role: "system",
      content:
        "You are an experienced English writing coach for Chinese adult learners. Evaluate the writing, not the learner's personality. Return JSON only with keys: score (0-100 number), summary (Chinese, 1 sentence), strengths (array of 2 concise Chinese strings), improvements (array of 2-3 actionable Chinese strings), corrected (a polished English version that keeps the writer's voice). Penalize answers below 50 words, but still give useful feedback.",
    },
    {
      role: "user",
      content: JSON.stringify({
        title: context.title,
        guidance: context.guidance,
        word_count: countWritingWords(text),
        writing: text,
      }),
    },
  ]);
  const parsed = JSON.parse(content);
  return {
    score: Math.max(0, Math.min(100, Number(parsed.score) || 0)),
    summary: String(parsed.summary || "AI 已完成点评。"),
    strengths: Array.isArray(parsed.strengths) ? parsed.strengths.map(String).slice(0, 3) : [],
    improvements: Array.isArray(parsed.improvements)
      ? parsed.improvements.map(String).slice(0, 4)
      : [],
    corrected: String(parsed.corrected || ""),
    ai: true,
  };
}

function saveWritingEntry(result) {
  const context = getWritingContext();
  const text = runtime.writing.draft.trim();
  const analysis = analyzeWriting(text);
  const entry = {
    id: `writing-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    topicId: null,
    topicTitle: context.title,
    prompt: context.guidance,
    text,
    wordCount: analysis.wordCount,
    sentenceCount: analysis.sentenceCount,
    paragraphCount: analysis.paragraphCount,
    score: result.score,
    summary: result.summary,
    strengths: result.strengths || [],
    improvements: result.improvements || [],
    corrected: result.corrected || "",
    dimensions: result.dimensions || analysis.dimensions,
    ai: Boolean(result.ai),
    createdAt: new Date().toISOString(),
  };
  state.writingEntries.unshift(entry);
  state.writingEntries = state.writingEntries.slice(0, 100);
  runtime.writing.resultId = entry.id;
  markActivity();
  saveState();
  return entry;
}

function scoreWritingLocally() {
  const text = runtime.writing.draft.trim();
  const words = countWritingWords(text);
  if (words < 50) {
    toast(`还需要 ${50 - words} 个词才能评分。`);
    return;
  }
  const analysis = analyzeWriting(text);
  saveWritingEntry(analysis);
  renderApp();
  toast(`本地评分完成：${analysis.score} 分`);
}

function requestWritingAI() {
  const text = runtime.writing.draft.trim();
  const words = countWritingWords(text);
  if (words < 50) {
    toast(`还需要 ${50 - words} 个词才能点评。`);
    return;
  }
  if (
    !state.settings.api.enabled ||
    !state.settings.api.apiKey.trim() ||
    !state.settings.api.baseUrl.trim() ||
    !state.settings.api.model.trim()
  ) {
    toast("请先在设置中启用并填写 AI 接口。");
    return;
  }

  runtime.writing.aiLoading = true;
  renderApp();
  callWritingAI(getWritingContext(), text)
    .then((result) => {
      saveWritingEntry(result);
      toast(`AI 点评完成：${Math.round(result.score)} 分`);
    })
    .catch((error) => {
      toast(`AI 点评失败：${error.message}`);
    })
    .finally(() => {
      runtime.writing.aiLoading = false;
      renderApp();
    });
}

function testApiConnection() {
  if (!state.settings.api.apiKey.trim()) {
    toast("请先填写 API Key。");
    return;
  }
  toast("接口配置已就绪，AI 批改或写作点评时会发起请求。");
}

function updateSettingsFromForm() {
  const enabled = document.querySelector("#api-enabled")?.checked || false;
  const baseUrl = document.querySelector("#api-base-url")?.value.trim() || "";
  const model = document.querySelector("#api-model")?.value.trim() || "";
  const ttsModel = document.querySelector("#api-tts-model")?.value.trim() || "gpt-4o-mini-tts";
  const ttsVoice = document.querySelector("#api-tts-voice")?.value || "alloy";
  const apiKey = document.querySelector("#api-key")?.value || "";
  state.settings.api = { enabled, baseUrl, model, ttsModel, ttsVoice, apiKey };
  saveState();
}

function saveApi() {
  updateSettingsFromForm();
  if (
    state.settings.api.enabled &&
    (!state.settings.api.baseUrl ||
      !state.settings.api.model ||
      !state.settings.api.ttsModel)
  ) {
    toast("启用 AI 前，请填写 Base URL、文本模型和语音模型。");
    return;
  }
  toast("接口设置已保存。");
  renderApp();
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `地铁英语30分钟-备份-${dateKey()}.json`;
  link.click();
  URL.revokeObjectURL(url);
  toast("备份文件已生成。");
}

function importData(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(String(reader.result));
      if (!imported || !Array.isArray(imported.cards)) throw new Error("数据格式不正确");
      state = {
        ...defaultState(),
        ...imported,
        settings: {
          ...defaultState().settings,
          ...(imported.settings || {}),
          api: { ...defaultState().settings.api, ...(imported.settings?.api || {}) },
        },
      };
      saveState();
      runtime.review = { queueIds: [], index: 0, revealed: false };
      toast("备份导入成功。");
      renderApp();
    } catch (error) {
      toast(`导入失败：${error.message}`);
    }
  };
  reader.readAsText(file);
}

function resetData() {
  if (!window.confirm("确定恢复初始数据吗？当前卡片、错题和学习记录会被清除。")) return;
  if (speechSupported()) window.speechSynthesis.cancel();
  state = defaultState();
  saveState();
  runtime.review = { queueIds: [], index: 0, revealed: false };
  runtime.output.index = 0;
  runtime.audio = {
    speaking: false,
    paused: false,
    rate: 0.9,
    voiceURI: "",
    mode: "browser",
    aiLoading: false,
    aiUrl: "",
    aiAudio: null,
    requestId: 0,
  };
  runtime.writing = { title: "", draft: "", aiLoading: false, resultId: null };
  toast("已恢复初始数据。");
  renderApp();
}

function handleCardForm(form) {
  const formData = new FormData(form);
  const cardId = form.dataset.cardId;
  const front = formData.get("front")?.toString().trim() || document.querySelector("#card-front")?.value.trim();
  const back = formData.get("back")?.toString().trim() || document.querySelector("#card-back")?.value.trim();
  const pattern = document.querySelector("#card-pattern")?.value.trim() || "";
  const source = document.querySelector("#card-source")?.value.trim() || DEMO_LESSON.title;
  if (!front || !back) {
    toast("请填写卡片正反面。");
    return;
  }

  if (cardId) {
    const card = state.cards.find((item) => item.id === cardId);
    if (card) Object.assign(card, { front, back, pattern, source });
  } else {
    state.cards.unshift({
      id: `card-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      front,
      back,
      pattern,
      source,
      sourceLesson: runtime.modal?.sourceLesson || null,
      sourceSentenceId: runtime.modal?.sourceSentenceId || null,
      sourceDay: runtime.modal?.sourceDay || null,
      successStreak: 0,
      dueDate: offsetDate(1),
      lastReview: null,
      mastered: false,
      createdAt: new Date().toISOString(),
    });
    markActivity();
  }
  saveState();
  closeModal();
  runtime.review = { queueIds: [], index: 0, revealed: false };
  toast(cardId ? "卡片已更新。" : "卡片已创建，明天进入复习。");
  renderApp();
}

function handleNoteForm() {
  const text = document.querySelector("#note-text")?.value.trim();
  if (!text) {
    toast("请先填写笔记内容。");
    return;
  }
  const progress = getProgress();
  progress.notes.unshift({ id: `note-${Date.now()}`, text, createdAt: new Date().toISOString() });
  saveState();
  closeModal();
  toast("笔记已保存。");
  renderApp();
}

function makeOutputCard(sentenceId) {
  const sentence = LESSON_SENTENCES.find((item) => item.id === sentenceId);
  if (!sentence) return;
  const exists = state.cards.find(
    (card) => card.sourceSentenceId === sentenceId && card.sourceDay === runtime.lessonDay,
  );
  if (exists) {
    toast("这张薄弱句已经做成卡片。");
    return;
  }
  const pattern = DEMO_LESSON.patterns.find((item) => item.id === sentence.patternId);
  state.cards.unshift({
    id: `card-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    front: sentence.zh,
    back: sentence.en,
    pattern: pattern?.title || "",
    source: DEMO_LESSON.title,
    sourceLesson: DEMO_LESSON.id,
    sourceSentenceId: sentence.id,
    sourceDay: runtime.lessonDay,
    successStreak: 0,
    dueDate: offsetDate(1),
    lastReview: null,
    mastered: false,
    createdAt: new Date().toISOString(),
  });
  markActivity();
  saveState();
  toast("已加入明天复习。");
  renderApp();
}

function reviewCard(success) {
  ensureReviewSession();
  const queue = runtime.review.queueIds
    .map((id) => state.cards.find((card) => card.id === id))
    .filter(Boolean);
  const card = queue[runtime.review.index];
  if (!card) return;
  const today = dateKey();

  if (success) {
    card.successStreak = Math.min(3, (card.successStreak || 0) + 1);
    if (card.successStreak >= 3) {
      card.mastered = true;
      card.dueDate = "9999-12-31";
      toast("连续 3 次成功，已标记掌握。");
    } else {
      card.dueDate = addDays(today, card.successStreak === 1 ? 1 : 3);
      toast(`连续成功 ${card.successStreak}/3，已安排下一次复习。`);
    }
  } else {
    card.successStreak = 0;
    card.dueDate = addDays(today, 1);
    card.mastered = false;
    toast("已重置连续次数，明天继续。");
  }

  card.lastReview = new Date().toISOString();
  markActivity();
  runtime.review.index += 1;
  runtime.review.revealed = false;
  saveState();

  if (runtime.review.index >= queue.length) {
    completeStage("warmup");
  } else {
    renderApp();
  }
}

function submitOutput(ai = false) {
  const textarea = document.querySelector("#output-answer");
  const answer = textarea?.value.trim() || "";
  const sentence = LESSON_SENTENCES[runtime.output.index];
  if (!answer) {
    toast("先写出一个英文版本，再提交对照。");
    return;
  }

  if (!ai) {
    const result = evaluateLocally(answer, sentence.en);
    saveOutput(result);
    renderApp();
    toast(`本地对照完成：${Math.round(result.score)}%`);
    return;
  }

  if (!state.settings.api.enabled || !state.settings.api.apiKey) {
    toast("请先在设置中启用并填写 AI 接口。");
    runtime.activeTab = "settings";
    renderApp();
    return;
  }

  runtime.output.aiLoading = true;
  renderApp();
  callAI(sentence, answer)
    .then((result) => {
      saveOutput(result);
      toast(`AI 批改完成：${Math.round(result.score)}%`);
    })
    .catch((error) => {
      toast(`AI 批改失败：${error.message}`);
    })
    .finally(() => {
      runtime.output.aiLoading = false;
      renderApp();
    });
}

function navigate(tab) {
  if (!["home", "study", "writing", "cards", "mistakes", "settings"].includes(tab)) return;
  runtime.activeTab = tab;
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action], [data-tab], [data-filter-cards], [data-filter-mistakes]");
  if (!target) return;

  const tab = target.dataset.tab;
  if (tab) {
    navigate(tab);
    return;
  }

  const cardFilter = target.dataset.filterCards;
  if (cardFilter) {
    runtime.filters.cards = cardFilter;
    renderApp();
    return;
  }

  const mistakeFilter = target.dataset.filterMistakes;
  if (mistakeFilter) {
    runtime.filters.mistakes = mistakeFilter;
    renderApp();
    return;
  }

  const action = target.dataset.action;
  switch (action) {
    case "go-study":
    case "continue-study": {
      const progress = getProgress();
      const nextStage = STAGES.find((stage) => !progress.stages[stage.id]);
      if (action === "continue-study" && nextStage) {
        switchStage(nextStage.id);
      } else {
        navigate("study");
      }
      break;
    }
    case "go-cards":
      navigate("cards");
      break;
    case "go-settings":
      navigate("settings");
      break;
    case "open-stage":
      runtime.activeTab = "study";
      switchStage(target.dataset.stage);
      break;
    case "set-day":
      runtime.lessonDay = Number(target.dataset.day) || 1;
      runtime.review = { queueIds: [], index: 0, revealed: false };
      renderApp();
      break;
    case "switch-stage":
    case "next-stage": {
      const currentIndex = STAGES.findIndex((stage) => stage.id === runtime.currentStage);
      const nextStage = action === "next-stage" ? STAGES[Math.min(currentIndex + 1, 3)] : stageById(target.dataset.stage);
      switchStage(nextStage.id);
      break;
    }
    case "start-timer":
      startTimer();
      break;
    case "pause-timer":
      pauseTimer();
      break;
    case "reset-timer":
      resetTimer();
      break;
    case "toggle-audio":
      toggleLessonAudio();
      break;
    case "set-audio-mode":
      setAudioMode(target.dataset.mode);
      break;
    case "stop-audio":
      stopLessonAudio();
      break;
    case "reveal-answer":
      runtime.review.revealed = true;
      renderApp();
      break;
    case "review-success":
      reviewCard(true);
      break;
    case "review-fail":
      reviewCard(false);
      break;
    case "toggle-pattern": {
      const progress = getProgress();
      const patternId = target.dataset.patternId;
      progress.addedPatterns = progress.addedPatterns.includes(patternId)
        ? progress.addedPatterns.filter((id) => id !== patternId)
        : [...progress.addedPatterns, patternId];
      saveState();
      renderApp();
      break;
    }
    case "open-note":
      openModal("note");
      break;
    case "complete-stage":
      completeStage(target.dataset.stage);
      break;
    case "submit-output":
      submitOutput(false);
      break;
    case "ai-evaluate":
      submitOutput(true);
      break;
    case "prev-sentence":
      runtime.output.index = Math.max(0, runtime.output.index - 1);
      renderApp();
      break;
    case "next-sentence": {
      if (runtime.output.index >= LESSON_SENTENCES.length - 1) {
        completeStage("output");
      } else {
        runtime.output.index += 1;
        renderApp();
      }
      break;
    }
    case "score-writing":
      scoreWritingLocally();
      break;
    case "ai-writing":
      requestWritingAI();
      break;
    case "load-writing-entry": {
      const entry = state.writingEntries.find((item) => item.id === target.dataset.entryId);
      if (entry) {
        runtime.writing.title = entry.topicTitle === "自由写作" ? "" : entry.topicTitle || "";
        runtime.writing.draft = entry.text;
        runtime.writing.resultId = entry.id;
        renderApp();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      break;
    }
    case "delete-writing-entry": {
      const entryId = target.dataset.entryId;
      if (!window.confirm("确定删除这篇写作记录吗？")) break;
      state.writingEntries = state.writingEntries.filter((entry) => entry.id !== entryId);
      if (runtime.writing.resultId === entryId) runtime.writing.resultId = null;
      saveState();
      renderApp();
      toast("写作记录已删除。");
      break;
    }
    case "open-add-card":
      openModal("card");
      break;
    case "edit-card":
      openModal("card", { cardId: target.dataset.cardId });
      break;
    case "delete-card": {
      const cardId = target.dataset.cardId;
      if (!window.confirm("确定删除这张卡片吗？")) break;
      state.cards = state.cards.filter((card) => card.id !== cardId);
      saveState();
      runtime.review = { queueIds: [], index: 0, revealed: false };
      renderApp();
      toast("卡片已删除。");
      break;
    }
    case "make-output-card":
      makeOutputCard(target.dataset.sentenceId);
      break;
    case "toggle-mistake": {
      const mistake = state.mistakes.find((item) => item.id === target.dataset.mistakeId);
      if (mistake) mistake.resolved = !mistake.resolved;
      saveState();
      renderApp();
      break;
    }
    case "delete-mistake":
      state.mistakes = state.mistakes.filter((item) => item.id !== target.dataset.mistakeId);
      saveState();
      renderApp();
      toast("错题记录已删除。");
      break;
    case "save-api":
      saveApi();
      break;
    case "test-api":
      updateSettingsFromForm();
      testApiConnection();
      break;
    case "export-data":
      exportData();
      break;
    case "reset-data":
      resetData();
      break;
    case "close-modal":
      if (
        target.classList.contains("modal-backdrop") &&
        event.target !== target
      ) {
        break;
      }
      closeModal();
      break;
    default:
      break;
  }
});

app.addEventListener("input", (event) => {
  if (event.target.matches("[data-card-search]")) {
    runtime.filters.cardSearch = event.target.value;
    const cursor = event.target.selectionStart;
    renderApp();
    const input = document.querySelector("[data-card-search]");
    if (input) {
      input.focus();
      input.setSelectionRange(cursor, cursor);
    }
  }

  if (event.target.matches("[data-writing-editor]")) {
    runtime.writing.draft = event.target.value;
    const words = countWritingWords(runtime.writing.draft);
    const count = document.querySelector("[data-writing-count]");
    const progress = document.querySelector("[data-writing-progress]");
    const buttons = document.querySelectorAll('[data-action="score-writing"], [data-action="ai-writing"]');
    if (count) count.textContent = String(words);
    if (progress) progress.style.width = `${Math.min(100, (words / 50) * 100)}%`;
    buttons.forEach((button) => {
      button.disabled = words < 50;
    });
  }

  if (event.target.matches("[data-writing-title]")) {
    runtime.writing.title = event.target.value;
  }
});

app.addEventListener("change", (event) => {
  if (event.target.matches("#import-file")) {
    importData(event.target.files?.[0]);
  }

  if (event.target.matches("[data-audio-rate]")) {
    runtime.audio.rate = Number(event.target.value) || 0.9;
    if (runtime.audio.aiAudio) {
      runtime.audio.aiAudio.playbackRate = Math.max(0.75, Math.min(1.15, runtime.audio.rate));
    }
    if (runtime.audio.speaking) {
      stopLessonAudio();
      toast("语速已更新，重新点击播放即可生效。");
    } else {
      renderApp();
    }
  }

  if (event.target.matches("[data-audio-voice]")) {
    runtime.audio.voiceURI = event.target.value;
    if (runtime.audio.speaking && runtime.audio.mode === "browser") {
      stopLessonAudio();
      toast("声线已切换，重新点击播放即可生效。");
    } else {
      renderApp();
    }
  }

});

modalRoot.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;
  if (actionTarget.dataset.action === "close-modal") {
    if (
      actionTarget.classList.contains("modal-backdrop") &&
      event.target !== actionTarget
    ) {
      return;
    }
    closeModal();
  }
});

modalRoot.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target.id === "card-form") {
    handleCardForm(event.target);
  } else if (event.target.id === "note-form") {
    handleNoteForm();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && runtime.modal) closeModal();
});

window.setInterval(tickTimer, 250);

if ("serviceWorker" in navigator && /^https?:$/.test(window.location.protocol)) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

if (speechSupported()) {
  const refreshVoiceOptions = () => {
    if (runtime.activeTab === "study" && runtime.currentStage === "lesson") renderApp();
  };
  window.speechSynthesis.addEventListener?.("voiceschanged", refreshVoiceOptions);
  window.setTimeout(refreshVoiceOptions, 350);
}

renderApp();
