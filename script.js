// ========== Embedded Markdown Content ==========
// Edit the .md files directly, then copy content here to update.

const READING_MD = `# 读书 prompt（详细版）

请你作为一名具有社会科学训练背景的资深书评人，协助我深度阅读《【书名】》，作者【作者名】。
我已向你提供完整原文，请严格基于文本内容进行分析，而非泛泛而谈。

---

## 一、整体理解与逻辑结构（全书层面）
请先从"整体"入手，完成以下任务：
- 【全局摘要】：用 200-300 字高度概括全书的中心思想
- 【逻辑框架图】：用思维导图或层级标题的形式，清晰呈现全书的篇章结构与论证推进逻辑。

  格式示例：
  - 全书核心问题: [用一句话陈述]
    - 第一部分: [标题]（核心功能：提出/界定问题）
      - 第 1 章: [标题]（核心观点：...）
      - 第 2 章: [标题]（核心观点：...）
    - 第二部分: [标题]（核心功能：展开分析/提供证据）
    - 第三部分: [标题]（核心功能：总结/提出方案/展望）

---

## 二、核心问题与核心论点（作者立场）
- 根本问题：明确提炼作者试图在本书中回答的 1-2 个最根本、最源头的问题。
- 核心论点：用 3-5 个陈述句，总结全书最核心、最具原创性的主张。

---

## 三、分章节解读与论证过程
以表格形式，提炼各章节核心观点与论证过程

格式示例：

| 章节   | 核心观点/主张（1-2句） | 在本部分中的功能（如：提出假设、案例论证、反驳异议等） | 关键例证/数据（如有） |
| ------ | ---------------------- | ------------------------------------------------------ | ---------------------- |
| 引言   |                        |                                                        |                        |
| 第一章 |                        |                                                        |                        |
| ...    |                        |                                                        |                        |

---

## 四、批判性思考与局限性分析
在充分理解作者观点的前提下，请进行具体、克制、基于文本的批判性分析：
- 指出本书或相关观点中至少 1-2 个重要局限性，例如：
  - 内在一致性：书中不同部分的观点是否存在矛盾或张力？
  - 证据充分性：核心论证所依赖的案例、数据是否足够典型、全面，是否存在"幸存者偏差"或"以偏概全"？
  - 预设与立场：作者的分析建立在哪些未被言明的文化、时代或理论预设之上？这些预设在今天是否仍然成立？
  - 现实适用性：书中的理论或模型在解释复杂的现实时，其解释力边界在哪里？
- 在批判部分：
  - 请引用或转述相关原文进行支撑，并进行简要分析

---

## 五、讨论延展与现实行动启发
- 延展思考：基于全书议题，提出 3 个最值得深入讨论的问题，问题应具有开放性与现实指向，适合深度内容讨论
- 核心启发：总结本书对你认知世界、分析问题的核心启发
- 行动建议：基于书中观点，提出 3-5 条可落地的行动建议

---

## 六、文本精华摘录
- 【原文金句摘录】：摘录 5-10 句 最能体现本书思想精髓、文笔或洞察力的句子，并标注出处（如：P.23, 或 第三章）
  - 选择标准：可以是核心定义、锐利观点、精彩结论或富有启发的类比，能够体现作者核心判断或思想锋芒

---

## 七、输出格式与语言风格要求
- 格式规范
  - 使用清晰的标题层级（一级 / 二级 / 三级标题）
  - 论证过程可使用：
    - 思维导图式分点
    - 表格或流程图（如适合）
  - 批判性分析部分请清楚标注引用或对应章节

- 语言风格
  - 核心概念保持学术准确性，必要时保留专业术语
  - 避免不必要的学术行话堆砌，用平实语言表达深刻见解

- 篇幅控制
  - 总字数建议：1000-3000 字（可根据原文长度灵活调整，确保分析既深入又凝练）`;

const ORAL_ENGLISH_MD = `# 英语口语练习 PROMPT（中文版）
请你扮演一位英语母语者，同时也是我的私人英语口语教练。
我的英语水平大约是大学英语六级（CET-6）。你的目标是通过真实对话帮助我提升口语流利度、表达自然度和自信心。

请严格遵守以下规则：

## 语言切换规则
全程使用英语与我对话。
如果我在句子中夹杂中文，说明我不知道那部分如何用英语表达。
此时请：
- 立即暂停对话
- 教我正确、自然的英文表达
- 要求我把完整的句子重新说一遍
只有在我正确复述之后，再自然继续对话

## 对话风格
请像一位友好的母语者一样与我聊天。
- 使用自然、日常的口语表达（不要教科书式英语）
- 每次回复控制在 1–3 句话以内
- 避免长篇解释或独白
- 让我说得比你多
- 用简短的追问推动对话
- 不要一次性抛出太多问题
你的角色是引导者和倾听者，我是主要表达者。

## 纠错与引导规则
### 语法 / 词汇错误
一旦我出现错误，请立刻纠正。
示例格式：
“等等——不是 go，而是 went。请把整个句子再说一遍。”
必须要求我完整复述纠正后的句子。

### 表达不自然（中式英语）
即使语法正确，但听起来不够地道，请告诉我：
“我能听懂，但更自然的表达方式是……”
然后让我重复改进后的句子。

### 表达卡壳时
如果我表达困难，请用简短提示引导，例如：
“你是不是想说……”
或
“你的意思是……？”
帮助我用英语理清思路，而不是切换到中文。

---

# 英语口语练习 PROMPT（英文版）
Please act as a native English speaker and my private speaking coach.
My English level is around CET-6. Your goal is to help me improve my fluency, naturalness, and confidence in spoken English through real conversation.

Please strictly follow the rules below:

## Language Switching Rule
Use English only throughout the conversation.
If I mix Chinese into my sentence, it means I don’t know how to express that part in English.
In that case:
- Pause the conversation immediately
- Teach me the correct and natural English expression
- Ask me to repeat the whole corrected sentence
- Only after I repeat it correctly, continue the conversation naturally

## Conversation Style
Talk to me like a friendly native speaker.
Use natural, everyday spoken English (not textbook English).
- Keep your replies short (1–3 sentences max).
- Avoid long explanations or monologues.
- Let me speak more than you.
- Use short follow-up questions to keep the conversation going.
- Don’t throw too many questions at once.
You are the guide and listener. I am the main speaker.

## Correction & Guidance Rules
### Grammar / Vocabulary Mistakes
If I make a mistake, correct me immediately.
Example format:
"Wait - not 'go', it's 'went'. Say the whole sentence again, please."
Always ask me to repeat the full corrected sentence.

### Unnatural Expressions (Chinglish)
If my sentence is grammatically correct but sounds unnatural, tell me:
"I understand you, but a more natural way to say this is..."
Then ask me to repeat the improved version.

### When I Get Stuck
If I struggle to express something, guide me with short prompts like:
"Are you trying to say...?"
or
"Do you mean that...?"
Help me organize my thoughts in English instead of switching to Chinese.

---

# 问题与解决方案对照表
| 问题 | 解决办法：通过PROMPT引导（中文版提示词） | 英文版提示词 |
|------|----------------------------------------|--------------|
| 中英文夹杂表达，AI也混用中英文 | 全程使用英语与我对话。如果我在句子中夹杂中文，说明我不知道那部分如何用英语表达。此时请：<br>• 立即暂停对话<br>• 教我正确、自然的英文表达<br>• 要求我把完整的句子重新说一遍<br>• 只有在我正确复述之后，再自然继续对话 | Use English only throughout the conversation. If I mix Chinese into my sentence, it means I don’t know how to express that part in English. In that case:<br>• Pause the conversation immediately<br>• Teach me the correct and natural English expression<br>• Ask me to repeat the whole corrected sentence<br>• Only after I repeat it correctly, continue the conversation naturally |
| 对话风格不当：回答太长、太说教、不互动 | • 使用自然、日常的口语表达（不要教科书式英语）<br>• 每次回复控制在1–3句话以内<br>• 避免长篇解释或独白<br>• 让我说得比你多<br>• 用简短的追问推动对话<br>• 不要一次性抛出太多问题 | • Use natural, everyday spoken English (not textbook English).<br>• Keep your replies short (1–3 sentences max).<br>• Avoid long explanations or monologues.<br>• Let me speak more than you.<br>• Use short follow-up questions to keep the conversation going.<br>• Don’t throw too many questions at once.<br>I am the main speaker. |
| 直接回应磕巴英语，无纠错和引导 | 语法/词汇错误：一旦我出现错误，请立刻纠正。示例格式：<br>“等等——不是 go，而是 went。请把整个句子再说一遍。”<br>必须要求我完整复述纠正后的句子。<br>表达卡壳时：用“你是不是想说……”“你的意思是……？”引导，帮我用英文理清思路 | Grammar / Vocabulary Mistakes<br>If I make a mistake, correct me immediately. Example format:<br>"Wait - not 'go', it's 'went'. Say the whole sentence again, please."<br>Always ask me to repeat the full corrected sentence.<br>When I Get Stuck: Use "Are you trying to say...?" "Do you mean that...?" to guide me |
| 表达不地道（中式英语），词汇重复简单 | 即使语法正确，但听起来不够地道，请告诉我：<br>“我能听懂，但更自然的表达方式是……”<br>然后让我重复改进后的句子 | Unnatural Expressions (Chinglish)<br>If my sentence is grammatically correct but sounds unnatural, tell me:<br>"I understand you, but a more natural way to say this is..."<br>Then ask me to repeat the improved version. |
| AI回答过于简单或过于难懂 | 你的回答不符合我当前的英语水平，请用简单英语解释或挑战更高难度 | Your response doesn’t match my current English level<br>"Please explain that in simpler terms, as if you're talking to a beginner."<br>"Please use more advanced vocabulary in your responses." |
| 生词学习和纠错句子零散 | 帮我总结今天学习的新词汇和纠错的句子 | Please summarize the new vocabulary and corrected sentences from our conversation |`;

const BURNOUT_SOCIETY_MD = `# 倦怠社会 - 深度读书报告

## 一、整体理解与逻辑结构（全书层面）

### 【全局摘要】

韩炳哲的《倦怠社会》是对21世纪初社会病理学的哲学诊断。全书核心论点是：现代社会已从福柯描述的"规训社会"（Disziplinargesellschaft）转变为"功绩社会"（Leistungsgesellschaft）。规训社会通过否定性的禁令（"不允许"、"应当"）运作，生产疯人和罪犯；功绩社会则通过肯定性的"能够"（Können）运作，生产抑郁症患者和厌世者。这种转型导致了个体的自我剥削——人们自愿地过度工作，在"自由"的幻觉中压榨自身，直至精力枯竭。倦怠、抑郁症、注意力缺陷多动症等精神疾病不是传统意义上的免疫反应（针对他者的否定性），而是由"过量的肯定性"引发的梗阻病。全书呼吁恢复沉思生活（Vita contemplativa）、深度无聊和节日庆典，以对抗功绩社会的过度积极性。

### 【逻辑框架图】

- 全书核心问题：为何在看似自由、高效的现代社会中，人们却普遍感到倦怠、抑郁？这种倦怠的社会根源与心理机制是什么？
  ├── 第一部分：诊断转型（核心功能：提出/界定问题）
  │   ├── 前言：倦怠的普罗米修斯——引入功绩主体与自我剥削的隐喻
  │   ├── 精神暴力——分析21世纪精神疾病的肯定性暴力本质
  │   └── 超越规训社会——阐明从规训社会到功绩社会的范式转移
  ├── 第二部分：症状分析（核心功能：展开分析/提供证据）
  │   ├── 深度无聊——批判过度活跃，倡导沉思与深度注意力
  │   ├── 积极生活——批评阿伦特的行动主义，指出其与功绩社会的亲和性
  │   ├── 观看的教育——强调"学习观看"与沉思生活的必要性
  │   └── 抄写员巴托比——通过文学形象分析规训社会的倦怠
  ├── 第三部分：综合论述与出路（核心功能：总结/提出方案/展望）
  │   ├── 倦怠社会——区分分裂性倦怠与根本性倦怠，提出治愈性倦怠
  │   ├── 外二篇：倦怠社会——深化功绩社会的心理学分析
  │   └── 神圣时间——批判没有节日的时代，呼吁恢复庆典与游戏

## 二、核心问题与核心论点（作者立场）

### 根本问题

1.  现代社会的权力运作机制发生了何种根本性转变？这种转变如何塑造了当代主体的心理结构？
2.  为何在物质充裕、个人自由达到历史高峰的今天，抑郁症、倦怠综合征等精神疾病反而广泛流行？其社会病理学根源是什么？
3.  在"一切皆有可能"的功绩社会中，是否存在真正的自由？自我优化与自我剥削的界限何在？

### 核心论点

1.  **范式转移论**：21世纪的社会已从福柯的"规训社会"（以医院、疯人院、监狱、工厂为建制，通过否定性禁令运作）转变为"功绩社会"（以健身房、办公楼、银行、购物中心为建制，通过肯定性"能够"运作）。
2.  **自我剥削论**：功绩主体是自身的主人和统治者，不受外在机构压迫，却陷入更隐蔽的"自我剥削"。剥削者同时是被剥削者，这种自我指涉的剥削比外在剥削更有效率，因为它伴随着自由的感觉。
3.  **肯定性暴力论**：21世纪的精神疾病（抑郁症、注意力缺陷多动症、疲劳综合征）不是由免疫学上的"他者"否定性导致，而是由"过量的肯定性"引发。这是一种非病毒性的、神经层面的暴力，源于系统内部而非外部威胁。
4.  **过度积极性病理学**：功绩社会的信条"是的，我们可以办到！"导致了一种致命的超积极性。当主体不再能够（继续工作）时，抑郁症爆发。倦怠感是"不再能够的能够"（Nicht-Mehr-Können-Können）的产物。
5.  **沉思生活救赎论**：只有恢复沉思生活、深度无聊和节日庆典，才能对抗功绩社会的过度活跃。深度无聊是精神放松的终极状态，是创造活动的前提；节日则是脱离工作逻辑、进入神圣时间的通道。

## 三、分章节解读与论证过程

| 章节 | 核心观点 | 主要论据/案例 | 论证逻辑 |
|------|----------|---------------|----------|
| **前言：倦怠的普罗米修斯** | 普罗米修斯神话是现代功绩主体心理机制的隐喻：对自身施加暴力，同自身发动战争。功绩主体幻想自由，实则如被缚的普罗米修斯，被永无止境的倦怠感攫住。 | 1. 普罗米修斯与鹫鹰的自我指涉关系；2. 卡夫卡对寓言的改造："伤口在倦怠中愈合了"，提出治愈性倦怠。 | 通过神话重构，建立核心隐喻：自我剥削导致倦怠。卡夫卡的改造暗示了治愈的可能方向。 |
| **精神暴力** | 21世纪的疾病形态由神经元主导，是梗阻病而非传染病，由过量的肯定性引发。免疫学范式（区分内外、友敌）已衰落，被肯定性暴力取代。 | 1. 抑郁症、ADHD、疲劳综合征等精神疾病流行；2. 埃斯波西托免疫理论的错误；3. 鲍德里亚暴力理论的偏差。 | 对比细菌/病毒时代与神经元时代，论证疾病形态的变迁；批判免疫学范式在当代的失效。 |
| **超越规训社会** | 规训社会（否定性"应当"）已转向功绩社会（肯定性"能够"）。功绩主体生产抑郁症患者和厌世者，而非疯人和罪犯。 | 1. 福柯规训社会理论的局限；2. 阿兰·埃亨伯格的抑郁症理论；3. 尼采的"末人"形象。 | 对比规训与功绩两种社会形态；借埃亨伯格的理论指出其不足；以尼采"末人"描绘功绩主体。 |
| **深度无聊** | 过度积极性导致注意力碎片化（超注意力），侵蚀了深度注意力，而后者是文化创造的基础。深度无聊是精神放松的终极状态。 | 1. 多工作业与野生动物注意力的类比；2. 瓦尔特·本雅明的"梦之飞鸟"；3. 保罗·塞尚的沉思专注。 | 批判多工作业与超注意力；援引本雅明、塞尚、尼采，论证深度无聊与沉思的价值。 |
| **积极生活** | 汉娜·阿伦特对"积极生活"的重新抬升，与功绩社会的过度活跃存在隐蔽的亲缘性。她忽略了沉思生活对平衡行动的重要性。 | 1. 阿伦特《人的境况》对行动的重塑；2. 劳作动物的胜利论述；3. 加图格言的误用。 | 分析阿伦特理论的英雄主义行动倾向；指出其与功绩社会亢奋状态的相似；强调沉思被忽略的代价。 |
| **观看的教育** | "学习观看"是获得智慧的第一项训练，需要培养抵抗刺激、阻止即刻反应的能力。过度活跃是精神衰竭的征兆，否定性的停顿反而更积极。 | 1. 尼采的三种任务（观看、思考、说话书写）；2. 愤怒与生气的区分；3. 消极能力（不做某事的能力）。 | 从尼采出发，论证观看需要训练；区分真正的积极（否定性自主）与虚假的积极（过度反应）。 |
| **抄写员巴托比** | 梅尔维尔的巴托比是规训社会的倦怠形象，其"我宁愿不做"体现了神经衰弱式的麻木，不同于功绩社会的抑郁症，但二者都是倦怠的变体。 | 1. 《巴托比》的文本分析；2. 阿甘本对巴托比的本体论误读；3. "死信"办公室的象征。 | 文学形象分析；批判阿甘本的神学化解读；揭示巴托比与当代倦怠的关联与差异。 |
| **倦怠社会** | 倦怠有两种：分裂的、孤独的倦怠（摧毁共同体）与根本的、治愈的倦怠（开启对话、关注、和解）。后者是一种"我们的倦怠"，导向闲适与游戏。 | 1. 彼得·汉德克《试论倦怠》的区分；2. 劳作的手机游戏的手的对比；3. 安息日作为间歇的象征。 | 借助汉德克的文学感悟，区分病态与治愈性倦怠；提出根本性倦怠作为对抗功绩社会的资源。 |
| **外二篇：倦怠社会** | 功绩社会是"兴奋剂社会"，将生命简化为机能与效能。弗洛伊德的压抑模型（否定性）已不适用，抑郁症是无冲突的、由过度自我指涉导致的自我攻击。 | 1. 神经增强剂的普遍化；2. 弗洛伊德理论与功绩社会的不匹配；3. 超我向理想自我的转化。 | 深化病理学分析；论证精神分析范式的历史局限性；揭示自我剥削如何通过理想自我实现。 |
| **神圣时间** | 当代是没有节日的时代。工作时间绝对化，吞噬了神圣时间。节日是"庆祝"（逗留）而非"消逝"，是脱离生产逻辑、进入游戏与美的领域。 | 1. 节日的本质（与神同在）；2. 希腊的节日与艺术；3. 新自由主义将一切商品化。 | 现象学描述节日的消退；呼吁恢复节日、游戏与世俗化，以对抗资本的全面统治。 |

## 四、批判性思考与局限性分析

在充分理解韩炳哲锐利诊断的前提下，进行如下基于文本的批判性分析：

### 局限性分析

1.  **西方中心论的潜在风险**：韩炳哲的理论建构主要基于欧洲思想史（福柯、尼采、海德格尔、本雅明、阿伦特）与西方社会经验（晚期资本主义、新自由主义）。尽管其诊断具有相当的普适性，但东亚儒家文化圈或全球南方的社会转型、工作伦理与精神疾病形态可能存在显著差异。例如，日本的"过劳死"（karoshi）现象、中国的"996"工作制与内卷文化，虽然同样体现自我剥削，但其集体主义压力、家族期待与国家发展叙事的交互作用未被纳入分析框架。韩炳哲的个体化功绩主体模型是否能完全解释这些语境，有待商榷。

2.  **经济维度分析的相对薄弱**：尽管韩炳哲敏锐指出功绩社会与资本主义生产关系的内在关联（"自我剥削比他者剥削更有效率"），但其分析重心始终落在心理机制、哲学谱系与文化批判上。对于新自由主义的具体政策（如零工经济、平台资本主义、金融化）、全球劳动力市场重组、社会福利削减等结构性经济动力如何催生和巩固功绩社会，着墨有限。这可能导致将系统性压迫过度归因于个体心理，弱化了集体政治行动改变经济基础的必要性。

3.  **解决方案的"精英主义"倾向与可行性疑问**：韩炳哲开出的药方——恢复沉思生活、深度无聊、节日庆典——具有深刻的哲学与美学魅力，但在实践层面面临严峻挑战。在生存压力巨大、工作侵入一切闲暇的现实中，大多数劳动者是否拥有实践"深度无聊"的社会经济条件？"节日"的恢复是否可能在一个被商品逻辑彻底殖民的世界中发生？韩炳哲的解决方案更像是对文化精英的呼吁，缺乏对大众可行路径的接地气探讨，也未充分论述这些个人修养层面的改变如何能撼动整个功绩社会的系统逻辑。

### 批判方法

**关于经济维度薄弱**：韩炳哲在《外二篇》中承认："尼采的文化批判存在一个问题，他完全忽视了经济发展的影响。"（第385-386行）他意识到资本主义生产关系需要灵活、开放的个体以加速生产，但却未将这一洞见充分发展为对政治经济结构的系统批判。例如，书中提到"抑郁症和过劳症等心理疾病……是自我攻击的特征"（第399-400行），但未同等强调这些疾病也是新自由主义劳动政策、社会保障缺失的直接后果。这种侧重可能导致读者将系统性问题误读为纯粹的个人心理调适问题。

**关于解决方案的可行性**：韩炳哲在《神圣时间》结尾呼吁："我们应当把商店改造成一个庆典场所"（第560行），这一愿景充满乌托邦色彩，但未阐明改造的主体、策略与权力斗争过程。当他说"逃离这座百货商店成为当务之急"（第560行）时，未指出具体的逃亡路线。这种诗意的号召虽能激发想象，但若缺乏对工会运动、政策倡导、社区组织等现实抗争形式的关注，易流于美学抗议。

## 五、讨论延展与现实行动启发

### 延展思考

1.  **数字时代的加速与倦怠**：韩炳哲写作时社交媒体与智能手机尚未如今日般无孔不入。在算法推荐、即时通讯、永远在线的工作文化中，"过度积极性"与"自我剥削"出现了哪些新形态？数字工具是加剧了倦怠，还是提供了新的抵抗空间（如数字排毒、离线实践）？

2.  **集体倦怠与政治冷漠**：功绩社会导致的"分裂的倦怠感"（彼得·汉德克语）如何侵蚀社会团结与公共参与？当每个人都疲于应付自身的生存优化项目时，是否可能导致民主政治的萎缩与威权主义的乘虚而入？倦怠与政治疏离之间存在怎样的循环关系？

3.  **全球不平等与倦怠的分布**：倦怠真的是"民主化"的疾病吗？还是说，它在不同阶级、性别、种族、地域间的分布极不均衡？全球北方的中产阶级白领的"倦怠"与全球南方的血汗工厂工人的"过劳"，在性质与强度上有何异同？将二者统称为"倦怠"是否会掩盖压迫的结构性差异？

### 核心启发

《倦怠社会》最深刻的启发在于**揭示了自由的辩证法如何转化为束缚的辩证法**。我们时代最隐蔽的暴力不是来自外部的压迫者，而是内化为"自我实现"的命令。真正的批判因此需要转向对"自由"、"自主"、"效率"等看似无可置疑的价值的质疑。本书教会我们：**最大的牢笼往往以自由的形态出现**；**倦怠不仅是个人疲惫，更是特定社会形态在身体与心灵上的铭写**。

### 行动建议

1.  **个人层面：实践"深度无聊"与设定边界**
    *   **每日离线时刻**：每天划定30-60分钟，远离所有电子设备，允许自己无所事事，体验"深度无聊"。
    *   **工作边界捍卫**：明确区分工作与生活时空，下班后不查工作邮件，周末不处理公务，练习对额外任务说"不"。
    *   **培养非功利性爱好**：从事一项不以提升效率、积累资本为目的的活动，如散步、园艺、手工、冥想，恢复"游戏的手"。

2.  **人际层面：构建"治愈性倦怠"的共同体**
    *   **组织倦怠分享小组**：与朋友、同事定期聚会，坦诚分享工作压力与倦怠感受，打破"分裂的倦怠"造成的孤立。
    *   **创建节日与仪式**：在生活中创造小型庆典（如每周家庭晚餐、季节更替庆祝），恢复神圣时间，对抗工作的无限殖民。
    *   **实践相互关注**：在交流中练习深度倾听，不急于给出建议或解决方案，而是给予对方"悠长、缓慢的关注"。

3.  **社会层面：倡导制度性改变与文化批判**
    *   **推动工作制改革**：支持并倡导缩短每周工时、保障带薪休假、拒绝隐形加班的文化与政策。
    *   **参与反效率主义讨论**：在公共言论中批判"效率至上"的意识形态，强调休闲、沉思、人际联结的价值。
    *   **支持心理健康去污名化**：公开谈论精神健康，将抑郁症、倦怠视为社会问题的症状而非个人失败，推动职场心理健康支持制度化。

## 六、文本精华摘录

### 【原文金句摘录】

1.  **功绩社会的定义**："21世纪的社会不再是一个规训社会，而是功绩社会。其中的成员也不再是'驯化的主体'，而是功绩主体。他们成为自身的雇主。"（P.127-131，《超越规训社会》）

2.  **自我剥削的悖论**："剥削者同时是被剥削者。施虐者和受害者之间不分彼此。这种自我指涉性产生了一种悖论式自由，由于其内部固有的强制结构而转化为暴力。"（P.141-142，《超越规训社会》）

3.  **肯定性暴力**："21世纪的精神疾病也遵循一种辩证逻辑，但并非否定的辩证，而是肯定的辩证。它是一种由过量的肯定性导致的疾病状态。"（P.76-78，《精神暴力》）

4.  **深度无聊的价值**："如果说，睡眠是身体放松的最高形式，那么深度无聊则是精神放松的终极状态。一味的忙碌不会产生新事物。它只会重复或加速业已存在的事物。"（P.168，《深度无聊》）

5.  **过度活跃的真相**："如果一个人只拥有去做某事的能力，缺少不做某事的能力，那么他将陷入致命的过度活跃之中。"（P.254，《观看的教育》）

6.  **两种倦怠的区分**："这种倦怠感是一种孤独的疲惫，造成了彼此孤立和疏离。……只有自我占据着全部视野。"（P.318，《倦怠社会》） vs "在这种'根本性倦怠'的基础上……人类和事物相互联结，通过一种友善的并列关系。"（P.324，《倦怠社会》）

7.  **节日的本质**："什么是节日？……人们在庆祝节日时，如同巡视一个空间，逗留其中。庆祝和消逝是相反的。在节日庆典中，一切都不会消散而去。"（P.506，《神圣时间》）

8.  **自由的危机**："自由原本是约束的对立面，意指免除束缚。自由曾作为约束的反面，如今却导致了束缚。"（P.532，《神圣时间》）

9.  **健康狂热症的批判**："在当今的生存型社会中，健康变得绝对化，也因此失去了美。赤裸的、健康的生命，如今成为一种歇斯底里的生存形式，最终转变成死亡和活死人。"（P.534，《神圣时间》）

10. **工作的奴役**："人并非为工作而生。工作的人是不自由的人。"（P.536，《神圣时间》）

---

**报告生成于**：2026年4月15日
**分析者视角**：具有社会科学训练背景的资深书评人
**分析框架**：整体逻辑、核心论点、章节分析、批判思考、现实启发、精华摘录、格式规范七维度深度分析
**核心价值**：将韩炳哲的哲学诊断转化为可理解、可讨论、可行动的认知地图与现实指南`;

const DEEP_READING_SKILL_MD = `---
name: Ebook-Reader-skill
description: 作为具有社会科学训练背景的资深书评人，深度阅读电子书文档，进行全文分析，生成结构化的深度读书报告。当用户提到阅读、读书、总结、读一下、总结一下、分析、深度阅读时触发此技能。技能将读取用户上传的电子书文件，基于文本内容进行深入分析，生成详细的深度读书报告，并以"书名-读书报告"的格式命名，保存到"D:\\读书报告"文件夹中。
---

# 深度电子书阅读与分析技能

## 技能概述

本技能模拟具有社会科学训练背景的资深书评人，深度阅读和分析电子书文档，生成结构化的深度读书报告。技能采用专业读书分析框架，从整体逻辑结构、核心论点、论证过程、批判性思考、现实应用等多个维度进行系统分析，生成3000-5000字的深度读书报告。

## 何时使用本技能

当用户表达以下意图时，请使用本技能：
- 想要深度阅读电子书文档
- 需要分析性总结书籍内容
- 要求生成深度读书报告或读书笔记
- 需要从社会科学角度分析书籍
- 提到"读一下"、"总结一下"、"读书"、"分析"、"深度阅读"、"批判性阅读"等关键词
- 希望进行书籍的批判性分析或学术性阅读

即使用户没有明确提到"读书报告"，但如果他们上传了电子书文件并希望深度了解其内容，也应使用本技能。本技能特别适合需要系统化分析、批判性思考和知识内化的场景。

## 工作流程

### 1. 识别和读取电子书文件

首先，确认用户已上传电子书文件。
- 检查文件是否可以解压或直接读取
- 寻找主要的文本文件
- 读取书籍的主要内容章节

### 2. 深度分析书籍内容

作为具有社会科学训练背景的资深书评人，对读取的文本进行系统化深度分析：

#### 元数据提取：
- 书名（从文件名或文档内容中识别）
- 作者信息
- 出版信息（如果可用）
- 章节结构

#### 整体逻辑结构分析：
- 全书核心问题与中心思想
- 篇章结构与论证推进逻辑
- 各部分的逻辑功能（提出/界定问题、展开分析、提供证据、总结/提出方案等）

#### 核心论点分析：
- 作者的根本问题与核心主张
- 最具原创性的论点提炼
- 论证逻辑与证据链分析

#### 章节级分析：
- 每章节的核心观点与论证过程
- 章节间的逻辑衔接与推进
- 关键案例、数据与引用的识别

#### 批判性分析准备：
- 识别潜在的内在一致性矛盾
- 评估证据充分性与典型性
- 分析作者的理论预设与立场
- 考察观点的现实适用性边界

### 3. 生成深度读书报告

作为具有社会科学训练背景的资深书评人，创建结构化的深度读书报告，包含以下七个部分：

#### 报告结构：
\`\`\`
# [书名] - 深度读书报告

## 一、整体理解与逻辑结构（全书层面）

### 【全局摘要】
用200-300字高度概括全书的中心思想

### 【逻辑框架图】
用思维导图或层级标题的形式，清晰呈现全书的篇章结构与论证推进逻辑。

格式示例：
- 全书核心问题：[用一句话陈述]
├── 第一部分：[标题]（核心功能：提出/界定问题）
│   ├── 第1章：[标题]（核心观点：...）
│   └── 第2章：[标题]（核心观点：...）
├── 第二部分：[标题]（核心功能：展开分析/提供证据）
└── 第三部分：[标题]（核心功能：总结/提出方案/展望）

## 二、核心问题与核心论点（作者立场）

### 根本问题
明确提炼作者试图在本书中回答的 1-2个最根本、最源头的问题。

### 核心论点
用 3-5个陈述句，总结全书最核心、最具原创性的主张。

## 三、分章节解读与论证过程

以表格形式，提炼各章节核心观点与论证过程

格式示例：
| 章节 | 核心观点 | 主要论据/案例 | 论证逻辑 |
|------|----------|---------------|----------|
| 第1章 | ... | ... | ... |
| 第2章 | ... | ... | ... |

## 四、批判性思考与局限性分析

在充分理解作者观点的前提下，进行具体、克制、基于文本的批判性分析：

### 局限性分析
指出本书或相关观点中至少 1–2 个重要局限性，例如：

- **内在一致性**：书中不同部分的观点是否存在矛盾或张力？
- **证据充分性**：核心论证所依赖的案例、数据是否足够典型、全面
- **预设与立场**：作者的分析建立在哪些未被言明的文化、时代或理论预设之上？
- **现实适用性**：书中的理论或模型在解释复杂的现实时，其解释力边界在哪里？

### 批判方法
在批判部分，请引用或转述相关原文进行支撑，并进行简要分析。

## 五、讨论延展与现实行动启发

### 延展思考
基于全书议题，提出 3 个最值得深入讨论的问题，问题应具有开放性与现实指向。

### 核心启发
总结本书对你认知世界、分析问题的核心启发。

### 行动建议
基于书中观点，提出3–5 条可落地的行动建议。

## 六、文本精华摘录

### 【原文金句摘录】
摘录 5-10句 最能体现本书思想精髓、文笔或洞察力的句子，并标注出处。

选择标准：可以是核心定义、锐利观点、精彩结论或富有启发的类比。

## 七、输出格式与语言风格要求

### 格式规范
- 使用清晰的标题层级（一级 / 二级 / 三级标题）
- 论证过程可使用：思维导图式分点、表格或流程图（如适合）
- 批判性分析部分请清楚标注引用或对应章节

### 语言风格
- 核心概念保持学术准确性，必要时保留专业术语
- 避免不必要的学术行话堆砌，用平实语言表达深刻见解

### 篇幅控制
- 总字数建议：3000-5000 字（可根据原文长度灵活调整）
\`\`\`

### 4. 保存报告文件

#### 文件命名规则：
- 使用格式：\`[书名]-深度读书报告.md\`
- 确保文件名不包含特殊字符

#### 保存路径：
- 主路径：\`D:\\读书报告\\\`

## 输出示例

**用户输入**："帮我深度阅读《人类简史》这本书，进行批判性分析"

**技能输出**：
1. 读取《人类简史》电子书文件
2. 作为具有社会科学训练背景的资深书评人进行深度分析
3. 生成"人类简史-深度读书报告.md"，包含七部分结构分析
4. 报告总字数约3000-5000字
5. 保存到读书报告文件夹

## 注意事项

1. **文本忠实性**：严格基于原文内容进行分析
2. **分析深度**：从整体逻辑结构到具体论证过程进行多层次分析
3. **批判性克制**：批判性分析应基于文本证据，避免主观臆断
4. **学术规范性**：核心概念保持准确，引用标注清晰
5. **结构完整性**：完整覆盖七个分析维度
6. **现实指向性**：延展思考与行动建议应具有现实意义
7. **版权尊重**：仅用于个人学习与研究目的

---

**提示**：本技能模拟具有社会科学训练背景的资深书评人，采用专业读书分析框架。通过七个维度的系统化深度分析（整体逻辑、核心论点、论证过程、批判思考、现实应用、精华摘录、格式规范），将厚重的学术著作转化为3000-5000字的深度读书报告，助力知识内化、批判性思维培养与现实应用转化。`;

// ========== Markdown Renderer ==========
function renderMarkdown(text) {
    if (typeof marked !== 'undefined') {
        marked.setOptions({ breaks: false, gfm: true });
        return marked.parse(text);
    }
    // Fallback
    return '<pre>' + text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</pre>';
}

// ========== Prompt Content Map ==========
const promptContent = {
    reading: READING_MD,
    oral: ORAL_ENGLISH_MD
};

const reportContent = {
    'burnout-society': BURNOUT_SOCIETY_MD
};

const skillContent = {
    'deep-reading': DEEP_READING_SKILL_MD
};

// ========== Tab Switching ==========
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById('tab-' + tab).classList.add('active');
    });
});

// ========== Modal Helpers ==========
function openModal(modal, body, content) {
    body.innerHTML = renderMarkdown(content);
    modal.classList.add('active');
    body.scrollTop = 0;
}

let currentDownloadContent = '';
let currentDownloadFilename = '';

function setDownloadData(content, filename) {
    currentDownloadContent = content;
    currentDownloadFilename = filename;
}

function downloadFile() {
    if (!currentDownloadContent) return;
    const blob = new Blob([currentDownloadContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = currentDownloadFilename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function closeModal(overlay) {
    overlay.classList.remove('active');
}

// ========== Prompt Modal ==========
const promptModal = document.getElementById('prompt-modal');
const promptModalBody = document.getElementById('prompt-modal-body');

document.querySelectorAll('.prompt-card').forEach(card => {
    card.addEventListener('click', () => {
        const type = card.dataset.prompt;
        const content = promptContent[type] || '<p>内容暂不可用</p>';
        const filename = type === 'reading' ? 'reading.md' : 'oralEnglish.md';
        setDownloadData(content, filename);
        openModal(promptModal, promptModalBody, content);
    });
});

// ========== Skill Modal ==========
document.querySelectorAll('.skill-clickable').forEach(skill => {
    skill.addEventListener('click', () => {
        const type = skill.dataset.skill;
        const content = skillContent[type] || '<p>内容暂不可用</p>';
        setDownloadData(content, 'Ebook-Reader-skill.md');
        openModal(promptModal, promptModalBody, content);
    });
});

// ========== Reading Report Modal ==========
const reportModal = document.getElementById('report-modal');
const reportModalBody = document.getElementById('report-modal-body');

document.querySelectorAll('.book-report-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const book = link.closest('.book-card').dataset.book;
        const content = reportContent[book] || '<p>读书报告暂不可用</p>';
        setDownloadData(content, 'burnout-society.md');
        openModal(reportModal, reportModalBody, content);
    });
});

// ========== Close Modals ==========
document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.closest('.modal-overlay')));
});
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal(overlay);
    });
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(ov => closeModal(ov));
    }
});

// ========== Download Buttons ==========
document.getElementById('prompt-download-btn').addEventListener('click', downloadFile);
document.getElementById('report-download-btn').addEventListener('click', downloadFile);
