// Authored examples for a class prototype. No model calls or generated responses.
let aiSelection = null;
const aiExamples = {
  summary: {
    icon: 'chat', title: 'Summarize a discussion', short: 'Catch up, then keep going.',
    context: 'Project group · 3 sample messages', heading: 'The conversation, at a glance.',
    lead: 'Your group is exploring what counts as evidence in creative work.',
    sections: [
      ['The direction', 'Compare how the two readings define evidence. Maya shared DS-01 as a starting point.'],
      ['Still open', 'Does a visual example count as evidence, or does it support an interpretation?'],
      ['Next together', 'Each person brings one passage and one image to compare in the workspace.']
    ], refs: ['discussion'], noteTitle: 'Project group · discussion recap', kind: 'idea'
  },
  compare: {
    icon: 'book', title: 'Compare two sources', short: 'Find the overlap and the difference.',
    context: 'Design Studio · 2 sample course sources', heading: 'Two readings. One connection.',
    lead: 'Both excerpts frame unfinished work as a starting point for learning.',
    sections: [
      ['DS-01 · Iteration as inquiry', 'Focuses on what you discover by changing a form. Iteration is a way to learn, beyond polishing an outcome.'],
      ['DS-02 · Studio participation guide', 'Focuses on what you discover with peers. Bring work in progress and a specific question to critique.'],
      ['A question to carry forward', 'How could a question from critique shape your next iteration?']
    ], refs: ['DS-01', 'DS-02'], noteTitle: 'Iteration + critique', kind: 'connection'
  },
  connections: {
    icon: 'link', title: 'Connect your notes', short: 'See a thread across your ideas.',
    context: 'Thinking space · 3 original sample notes', heading: 'A thread worth following.',
    lead: 'A possible connection: the student stays in charge of the work.',
    sections: [
      ['01 · Creative ownership', 'You decide what the work is trying to say, even when AI helps arrange the pieces.'],
      ['02 · Student voice', 'Critique can challenge an idea while leaving room for your own intention.'],
      ['03 · Visible process', 'A process record can show your choices and collaboration without becoming surveillance.']
    ], refs: ['notes'], noteTitle: 'Keeping the student in charge', kind: 'connection'
  }
};
const aiReferences = {
  discussion: { title: 'Project group', label: 'Original sample conversation', entries: [
    ['Maya · 9:41 AM', 'Let’s compare the two readings by how they define evidence. I pulled this passage as a starting point.'],
    ['You · 9:44 AM', 'Does a visual example count as evidence, or does it only support the interpretation? I’m keeping that question open for now.'],
    ['Jordan · 9:46 AM', 'Let’s each bring one passage and one image. Then we can put them side by side in the workspace and see what connects.']
  ]},
  'DS-01': {title: 'Iteration as inquiry', label: 'DS-01 · Original sample reading', entries: [['Excerpt', 'Iteration is a way to learn what a form can communicate, not simply a path toward polish.']]},
  'DS-02': {title: 'Studio participation guide', label: 'DS-02 · Original sample guide', entries: [['Excerpt', 'Bring work-in-progress to critique and name the question you want peers to consider.']]},
  notes: {title: 'Thinking space', label: 'Original sample notes', entries: [
    ['First thought', 'Creative ownership means I decide what the work is trying to say—even when AI helps me arrange the pieces.'],
    ['A question worth asking', 'How can critique challenge an idea without flattening the student’s voice?'],
    ['Make the process visible', 'The process record could make collaboration visible without turning into surveillance.']
  ]}
};
function aiDemoNotice(){return `<div class="ai-demo-notice"><span>DEMO</span><p>Prepared examples from Design Studio. These don’t analyze your edits or new messages.</p></div>`}
function aiToolCards(){return `<div class="ai-tools">${Object.entries(aiExamples).map(([key,tool],index)=>`<button class="ai-tool ${aiSelection===key?'selected':''}" aria-pressed="${aiSelection===key}" onclick="selectAIExample('${key}')"><span class="ai-tool-icon">${I(tool.icon)}</span><span class="ai-tool-copy"><small>0${index+1}</small><strong>${tool.title}</strong><span>${tool.short}</span></span>${I('arrow')}</button>`).join('')}</div>`}
function aiUnavailable(){return `<div class="ai-intro"><span class="ai-symbol">${I('sparkles')}</span><h2>Try Course AI.</h2><p>The prepared examples use the Design Studio sample conversation, readings, and notes.</p><button class="button primary" onclick="openAIDemoCourse()">Open Design Studio demo ${I('arrow')}</button></div>`}
function aiResult(){const ex=aiExamples[aiSelection];if(!ex)return '';return `<article class="ai-result"><div class="ai-result-meta">${I('sparkles')} <span>COURSE AI / PREPARED EXAMPLE</span></div><p class="ai-context">${ex.context}</p><h2 id="ai-result-title" tabindex="-1">${ex.heading}</h2><p class="ai-lead">${ex.lead}</p><div class="ai-result-sections">${ex.sections.map(([heading,body])=>`<section><h3>${heading}</h3><p>${body}</p></section>`).join('')}</div><div class="ai-citations"><span>CHECK THE CONTEXT</span><div>${ex.refs.map(ref=>`<button onclick="showAIReference('${ref}')">${I(ref==='discussion'?'chat':ref==='notes'?'file':'book')} ${ref==='discussion'?'3 sample messages':ref==='notes'?'3 sample notes':ref} ${I('arrow')}</button>`).join('')}</div></div><div class="ai-decision"><p><strong>You make the call.</strong> Review and edit before adding this to your notes.</p><button class="button primary" onclick="reviewAIExample('${aiSelection}')">${I('plus')} Review & keep as note</button><button class="text-button" onclick="selectAIExample(null)">Dismiss example</button></div></article>`}
function aiPanelBody(){if(S.course!=='design')return aiUnavailable();return `${aiDemoNotice()}${aiSelection?`<button class="text-button ai-back" onclick="selectAIExample(null)">← All AI tools</button>${aiResult()}`:`<div class="ai-intro"><span class="ai-symbol">${I('sparkles')}</span><h2 id="ai-tools-title" tabindex="-1">A little help.<br>More room to think.</h2><p>Catch up on a conversation, compare readings, or find a connection.</p></div>${aiToolCards()}<p class="ai-human-note">Your ideas lead. You choose what to keep.</p>`}`}
function aiPage(){return `<div class="page ai-page"><header class="page-heading"><div><div class="eyebrow">Built into your workspace</div><h1>Course AI<span style="color:var(--accent)">.</span></h1><p>A little support for the work you’re already doing.</p></div><button class="button" onclick="navigate('chat','project-group')">${I('chat')} Back to conversation</button></header>${S.course!=='design'?aiUnavailable():`${aiDemoNotice()}${aiToolCards()}${aiSelection?aiResult():`<div class="ai-empty"><span class="ai-symbol">${I('sparkles')}</span><div><h2>Start with what you need.</h2><p>Choose a tool above to explore an example. Check its sources, make it your own, and decide whether it belongs in your notes.</p></div><span class="ai-empty-caption">AI ASSISTS.<br><strong>YOU CREATE.</strong></span></div>`}`}</div>`}
function openCourseAI(tool=null){stashDraft();aiSelection=Object.hasOwn(aiExamples,tool)?tool:null;if(S.view==='chat'){S.panel=true;S.panelTab='ai';S.mobileTab='workspace';save();render(true)}else{navigate('ai')}focusAIContent()}
function selectAIExample(key){if(key!==null&&!Object.hasOwn(aiExamples,key))return;stashDraft();aiSelection=key;render(true);focusAIContent()}
function focusAIContent(){const heading=$('ai-result-title')||$('ai-tools-title');if(heading){heading.focus({preventScroll:true});heading.closest('.workspace-scroll')?.scrollTo(0,0);if(S.view==='ai'&&aiSelection)heading.closest('.ai-result')?.scrollIntoView({block:'start'})}}
function openAIDemoCourse(){changeCourse('design');aiSelection=null;navigate('ai')}
function showAIReference(key){const ref=aiReferences[key];if(!ref)return;openModal(ref.title,`<div class="ai-reference"><div class="eyebrow">${ref.label}</div><p class="ai-reference-note">This is the original fictional content used for the prepared example. It does not reflect later edits in your workspace.</p>${ref.entries.map(([heading,body])=>`<section><h3>${heading}</h3><p>${body}</p></section>`).join('')}</div><div class="modal-actions"><button class="button" onclick="closeModal()">Back to example</button></div>`)}
function reviewAIExample(key){const ex=aiExamples[key];if(!ex||S.course!=='design')return;editNote('',ex.kind,{title:ex.noteTitle,body:[ex.lead,...ex.sections.map(([heading,body])=>`${heading}\n${body}`)].join('\n\n'),aiExample:key})}
