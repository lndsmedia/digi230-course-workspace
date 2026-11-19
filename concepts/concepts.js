(()=>{
'use strict';
/* Three authored, non-interactive UI studies. Every layout uses this exact dataset. */
const content = {
  topic: 'Creative ownership & student voice',
  brief: 'One passage. One image. One question.',
  notes: [
    {id:'01',kind:'Working idea',title:'First thought',body:'Creative ownership means I decide what the work is trying to say—even when AI helps me arrange the pieces.',time:'9:18 AM'},
    {id:'02',kind:'Open question',title:'A question worth asking',body:'How can critique challenge an idea without flattening the student’s voice?',time:'9:25 AM'},
    {id:'03',kind:'Connection',title:'Make the process visible',body:'The process record could make collaboration visible without turning into surveillance.',time:'9:32 AM'}
  ],
  messages: [
    {author:'Maya',initial:'M',time:'9:41 AM',body:'Let’s compare the two readings by how they define evidence. I pulled this passage as a starting point.',source:true},
    {author:'You',initial:'Y',time:'9:44 AM',body:'Does a visual example count as evidence, or does it only support the interpretation? I’m keeping that question open for now.'},
    {author:'Jordan',initial:'J',time:'9:46 AM',body:'Let’s each bring one passage and one image. Then we can put them side by side in the workspace and see what connects.'}
  ],
  sources: [
    {id:'DS-01',title:'Iteration as inquiry',type:'Reading',quote:'Iteration is a way to learn what a form can communicate, not simply a path toward polish.'},
    {id:'DS-02',title:'Studio participation guide',type:'Guide',quote:'Bring work-in-progress to critique and name the question you want peers to consider.'}
  ],
  history: ['First thought recorded','A question took shape','Connected the process to the idea']
};
const profiles={
  nia:{name:'Nia Brooks',first:'Nia',initial:'N',number:'01',mode:'Reading first',palette:'Paper + Mint'},
  leo:{name:'Leo Park',first:'Leo',initial:'L',number:'02',mode:'Connections first',palette:'Blue + Pink + Cyan'},
  sam:{name:'Sam Rivera',first:'Sam',initial:'S',number:'03',mode:'Action first',palette:'Ink + Yellow + Orange'}
};
const persona=document.body.dataset.profile,p=profiles[persona];
const paths={
  home:'<path d="m3 10 9-7 9 7v10H3zM9 20v-7h6v7"/>',
  chat:'<path d="M21 11a8 8 0 0 1-8 8H5l-3 3V11a9 9 0 0 1 19 0Z"/>',
  notes:'<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  book:'<path d="M4 3h7v18H4zM14 3h6v18h-6zM7 7h1M17 7h1"/>',
  history:'<path d="M3 4v6h6M3 10a9 9 0 1 1 1 8M12 7v6l4 2"/>',
  grid:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
  search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  plus:'<path d="M12 4v16M4 12h16"/>',
  arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
  down:'<path d="m6 9 6 6 6-6"/>',
  lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4"/>',
  speaker:'<path d="M3 9h4l5-5v16l-5-5H3zM16 8a6 6 0 0 1 0 8M19 5a10 10 0 0 1 0 14"/>',
  pin:'<path d="M9 3h6l-1 7 4 4H6l4-4-1-7ZM12 14v8"/>',
  link:'<path d="m9 15 6-6M7 14l-2 2a3 3 0 0 0 4 4l4-4M11 8l4-4a3 3 0 0 1 4 4l-3 3"/>',
  attach:'<path d="m9 16 7-7a3 3 0 0 0-4-4l-8 8a5 5 0 0 0 7 7L21 10"/>',
  settings:'<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="10" cy="18" r="2"/>',
  check:'<path d="m4 12 5 5L20 6"/>',
  expand:'<path d="M14 3h7v7M3 14v7h7M21 3l-7 7M3 21l7-7"/>'
};
const icon=n=>`<svg aria-hidden="true" viewBox="0 0 24 24" class="icon">${paths[n]||paths.notes}</svg>`;
const brand=()=>`<div class="brand"><span class="brand-mark">C<small>↗</small></span><strong>COURSE<br>WORKSPACE</strong></div>`;
const person=()=>`<div class="person"><span class="person-initial">${p.initial}</span><div><strong>${p.name}</strong><small>Student workspace</small></div>${icon('down')}</div>`;
const tab=(name,ic,active=false)=>`<div class="nav-item ${active?'active':''}">${icon(ic)}<span>${name}</span>${active?'<i></i>':''}</div>`;
const side=()=>`<aside class="sidebar">${brand()}<div class="course"><span class="mono">DS</span><div><strong>Design Studio</strong><small>DSGN 210 · Fall studio</small></div>${icon('down')}</div><div class="nav-label">Your course</div>${tab('Overview','home')}${tab('Thinking space','notes',true)}${tab('Project group','chat')}${tab('Materials','book')}${tab('Process record','history')}<div class="nav-label more-label">Conversations</div><div class="quiet-item"># &nbsp; studio-general <b>2</b></div><div class="quiet-item"># &nbsp; materials-and-process</div><div class="quiet-item">${icon('chat')} Prof. Avery</div><div class="sidebar-bottom"><div class="preference-link">${icon('settings')} My preferences</div>${person()}</div></aside>`;
const rail=()=>`<aside class="icon-rail"><span class="brand-mark">C<small>↗</small></span>${[['home','Home'],['grid','Board'],['chat','Chat'],['book','Sources'],['history','Process']].map(([ic,label])=>`<div class="rail-item ${ic==='grid'?'active':''}">${icon(ic)}<span>${label}</span></div>`).join('')}<div class="rail-spacer"></div>${icon('settings')}<span class="person-initial">L</span></aside>`;
const top=()=>`<header class="topbar"><div>Design Studio <span class="breadcrumb-arrow">/</span> <strong>My workspace</strong></div><span class="top-search">${icon('search')} Search your course <kbd>⌘ K</kbd></span><span class="top-course">DSGN 210</span><span class="top-user">${p.first}<span class="person-initial">${p.initial}</span></span></header>`;
const caption=()=>`<footer class="concept-caption"><div><b>${p.number}</b><strong>${p.name.toUpperCase()}</strong><span>/</span><span>${p.mode}</span></div><div><span class="caption-dot"></span>${p.palette}<span class="caption-divider"></span><strong>STATIC UI CONCEPT · DIGI 230</strong></div></footer>`;
const title=(heading='Thinking space',sub=content.topic)=>`<div class="title-row"><div><div class="eyebrow">[ YOUR PERSONAL WORKSPACE ]</div><h1>${heading}<span class="heading-dot">.</span></h1><p>${sub}</p></div><span class="mode-chip">${icon(persona==='nia'?'speaker':persona==='leo'?'grid':'settings')}${p.mode}</span></div>`;
const note=(n,extra='')=>`<article class="note note-${n.id} ${extra}" data-content="${n.id}"><div class="note-kicker"><span class="number">${n.id}</span><span>${n.kind}</span><span class="dots">···</span></div><h3>${n.title}</h3><p>${n.body}</p><div class="note-meta"><span>${icon('lock')}Only you</span><time>${n.time}</time></div></article>`;
const messages=()=>content.messages.map(m=>`<article class="message"><span class="avatar ${m.author==='You'?'you':''}">${m.initial}</span><div><div class="message-meta"><strong>${m.author}</strong><time>${m.time}</time></div><p>${m.body}</p>${m.source?`<div class="attachment">${icon('notes')} Iteration as inquiry <span>DS-01</span></div>`:''}<div class="message-actions">Reply <span>·</span> Save to notes</div></div></article>`).join('');
const composer=()=>`<div class="composer"><span>Message the group…</span><div>${icon('attach')}<span class="send">Send ${icon('arrow')}</span></div></div>`;
const discussion=()=>`<section class="discussion"><header class="section-head"><div><span class="eyebrow">CONVERSATION</span><h2>Project group</h2></div><span class="member-stack"><i>M</i><i>Y</i><i>J</i></span></header><div class="thread-label">Today <span>3 members</span></div><div class="messages">${messages()}</div>${composer()}</section>`;
const sources=()=>`<section class="sources"><div class="section-head"><h2>Course materials</h2><span class="small-link">View all ${icon('arrow')}</span></div><div class="source-list">${content.sources.map(s=>`<article class="source"><div class="source-heading"><span class="source-symbol">${icon('book')}</span><div><span class="source-id">${s.id} / ${s.type}</span><h3>${s.title}</h3></div><span class="approved">${icon('check')} Approved</span></div><p>${s.quote}</p></article>`).join('')}</div></section>`;
const history=()=>`<section class="history"><h2>${icon('history')} Your process</h2><div class="history-items">${content.history.map((h,i)=>`<div><span class="history-dot"></span><p>${h}</p><time>${content.notes[i].time}</time></div>`).join('')}</div></section>`;
const brief=()=>`<div class="brief">${icon('pin')}<div><span class="eyebrow">FOR OUR NEXT DISCUSSION</span><strong>${content.brief}</strong></div>${icon('arrow')}</div>`;
function nia(){return `<div class="app-shell">${side()}<main>${top()}<div class="main-content">${title()}<div class="reading-toolbar"><span><b>Aa</b> Large text</span><span>Comfortable spacing</span><span class="read-aloud">${icon('speaker')} Read aloud</span><span class="toolbar-end">${icon('lock')} Private notes</span></div><div class="reading-grid"><section class="reading-notes"><div class="section-head"><h2>Your notes <span>03</span></h2><span class="small-link">${icon('plus')} Add note</span></div>${note(content.notes[0],'featured')}<div class="secondary-notes">${note(content.notes[1])}${note(content.notes[2])}</div>${history()}</section><aside class="reading-chat">${brief()}${discussion()}</aside></div>${sources()}</div></main></div>${caption()}`}
function leo(){return `<div class="app-shell">${rail()}<main>${top()}<div class="main-content">${title('Make the connections')}<div class="visual-toolbar"><div><span class="selected">${icon('grid')} Idea board</span><span>${icon('notes')} Notebook</span><span>${icon('history')} Process</span></div><span class="toolbar-end">${icon('lock')} Private until shared</span><span class="add-note">${icon('plus')} Add note</span></div><div class="visual-grid"><section class="visual-left">${brief()}<div class="idea-board"><div class="board-label"><span>03 NOTES / ONE LINE OF THOUGHT</span><span>${icon('expand')} 100%</span></div><svg class="connections" viewBox="0 0 950 480" preserveAspectRatio="none" aria-hidden="true"><defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" fill="#4f63ff"/></marker></defs><path d="M435 240C505 240 475 120 545 120"/><path d="M435 260C515 260 475 355 545 355"/></svg><span class="connection-label asks">questions</span><span class="connection-label develops">develops</span>${note(content.notes[0],'node idea-node')}${note(content.notes[1],'node question-node')}${note(content.notes[2],'node connection-node')}<div class="board-legend"><span><i class="pink"></i>Idea</span><span><i class="cyan"></i>Question</span><span><i class="blue"></i>Connection</span></div></div>${sources()}${history()}</section>${discussion()}</div></div></main></div>${caption()}`}
function sam(){return `<div class="app-shell"><header class="command-header">${brand()}<nav><span>Overview</span><span class="active">Conversation + workspace</span><span>Materials</span><span>Process record</span></nav><div class="command-search">${icon('search')}<kbd>⌘ K</kbd></div>${person()}</header><main class="command-main"><div class="command-heading"><div><div class="eyebrow">[ DESIGN STUDIO / DSGN 210 ]</div><h1>YOUR NEXT MOVE<span>.</span></h1><p>${content.topic}</p></div><span class="mode-chip">${icon('settings')} Compact / Focus view</span></div><section class="next-action"><div class="next-intro"><span class="eyebrow">FOR OUR NEXT DISCUSSION</span><h2>${content.brief}</h2></div><div class="next-checks">${[['01','Choose a passage'],['02','Select an image'],['03','Bring a question']].map(([n,t])=>`<div><span class="check-box"></span><strong>${t}</strong><small>${n}</small></div>`).join('')}</div></section><div class="command-grid"><div class="command-left">${discussion()}${sources()}</div><div class="command-right"><section class="compact-notes"><div class="section-head"><div><span class="eyebrow">WORKSPACE / 03 NOTES</span><h2>Thinking space</h2></div><span class="add-note">${icon('plus')} Add note</span></div><div class="compact-tabs"><span class="selected">List view</span><span>Board</span><span class="toolbar-end">${icon('lock')} Only you</span></div>${content.notes.map(n=>note(n,'compact-note')).join('')}</section>${history()}<div class="privacy-line">${icon('lock')} Your notes stay private until you choose to share.</div></div></div></main></div>${caption()}`}
document.getElementById('concept').innerHTML=({nia,leo,sam})[persona]();

})();
