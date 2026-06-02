var x=Object.defineProperty;var v=(s,n,t)=>n in s?x(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t;var i=(s,n,t)=>v(s,typeof n!="symbol"?n+"":n,t);import{g as E,i as b}from"./storage-BLSQ23hI.js";class p{getFloatingButtonPlacement(){return{position:"top-right-inside",offsetX:8,offsetY:8}}matches(n){return this.urlPattern.test(n)}queryWithFallback(n){for(const t of n){const e=document.querySelector(t);if(e)return e}return null}async simulateInput(n,t){var e;if(n.focus(),document.execCommand("selectAll",!1),document.execCommand("delete",!1),document.execCommand("insertText",!1,t),((e=n.textContent)==null?void 0:e.trim())!==t.trim()){n.innerHTML="";const o=document.createElement("p");o.textContent=t,n.appendChild(o),n.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertText",data:t}))}}setTextareaValue(n,t){var o;const e=(o=Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value"))==null?void 0:o.set;e==null||e.call(n,t),n.dispatchEvent(new Event("input",{bubbles:!0})),n.dispatchEvent(new Event("change",{bubbles:!0}))}}class C extends p{constructor(){super(...arguments);i(this,"name","chatgpt");i(this,"urlPattern",/chatgpt\.com/);i(this,"inputSelectors",["#prompt-textarea",'div[contenteditable="true"][data-placeholder]','.ProseMirror[contenteditable="true"]']);i(this,"sendSelectors",['button[data-testid="send-button"]','button[aria-label="Send prompt"]','form button[type="submit"]'])}getInputElement(){return this.queryWithFallback(this.inputSelectors)}getInputContent(){const t=this.getInputElement();return t&&(t.innerText||t.textContent)||""}async setInputContent(t){const e=this.getInputElement();e&&await this.simulateInput(e,t)}triggerSend(){const t=this.queryWithFallback(this.sendSelectors);t&&!t.disabled&&t.click()}getFloatingButtonAnchor(){const t=this.getInputElement();return(t==null?void 0:t.closest("form"))||(t==null?void 0:t.parentElement)||null}getFloatingButtonPlacement(){return{position:"top-right-outside",offsetX:8,offsetY:6}}}class I extends p{constructor(){super(...arguments);i(this,"name","claude");i(this,"urlPattern",/claude\.ai/);i(this,"inputSelectors",['div.ProseMirror[contenteditable="true"]','fieldset div[contenteditable="true"]','div[contenteditable="true"][translate="no"]']);i(this,"sendSelectors",['button[aria-label="Send message"]','button[aria-label="Send Message"]',"fieldset button:last-of-type"])}getInputElement(){return this.queryWithFallback(this.inputSelectors)}getInputContent(){const t=this.getInputElement();return t&&(t.innerText||t.textContent)||""}async setInputContent(t){var o;const e=this.getInputElement();e&&(e.focus(),document.execCommand("selectAll",!1),document.execCommand("delete",!1),document.execCommand("insertText",!1,t),((o=e.textContent)==null?void 0:o.trim())!==t.trim()&&(e.innerHTML=t.split(`
`).map(r=>`<p>${r||"<br>"}</p>`).join(""),e.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertText",data:t}))))}triggerSend(){const t=this.queryWithFallback(this.sendSelectors);t&&!t.disabled&&t.click()}getFloatingButtonAnchor(){const t=this.getInputElement();return(t==null?void 0:t.closest("fieldset"))||(t==null?void 0:t.parentElement)||null}}class S extends p{constructor(){super(...arguments);i(this,"name","gemini");i(this,"urlPattern",/gemini\.google\.com/);i(this,"inputSelectors",['rich-textarea div[contenteditable="true"]','.ql-editor[contenteditable="true"]','div[contenteditable="true"][aria-label]']);i(this,"sendSelectors",["button.send-button",'button[aria-label="Send message"]','button[mattooltip="Send"]'])}getInputElement(){const t=document.querySelector("rich-textarea");if(t!=null&&t.shadowRoot){const e=t.shadowRoot.querySelector('div[contenteditable="true"]');if(e)return e}return this.queryWithFallback(this.inputSelectors)}getInputContent(){const t=this.getInputElement();return t&&(t.innerText||t.textContent)||""}async setInputContent(t){const e=this.getInputElement();e&&await this.simulateInput(e,t)}triggerSend(){const t=this.queryWithFallback(this.sendSelectors);t&&!t.disabled&&t.click()}getFloatingButtonAnchor(){const t=document.querySelector("rich-textarea");if(!t)return null;const e=document.querySelector('button.send-button, button[aria-label="Send message"], button[mattooltip="Send"]');if(e){let o=e;for(;o&&!o.contains(t);)o=o.parentElement;if(o)return o}return t.parentElement||null}getFloatingButtonPlacement(){return{position:"top-right-outside",offsetX:2,offsetY:6}}}class T extends p{constructor(){super(...arguments);i(this,"name","deepseek");i(this,"urlPattern",/chat\.deepseek\.com/);i(this,"inputSelectors",["textarea#chat-input","textarea[placeholder]","textarea"]);i(this,"sendSelectors",['button[aria-label="Send"]','div[role="button"][aria-label]',"button:has(svg)"])}getInputElement(){return this.queryWithFallback(this.inputSelectors)}getInputContent(){const t=this.getInputElement();return t&&(t.value||t.textContent)||""}async setInputContent(t){const e=this.getInputElement();e&&this.setTextareaValue(e,t)}triggerSend(){const t=this.queryWithFallback(this.sendSelectors);if(t)t.click();else{const e=this.getInputElement();e==null||e.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",code:"Enter",bubbles:!0}))}}getFloatingButtonAnchor(){const t=this.getInputElement();return(t==null?void 0:t.parentElement)||null}getFloatingButtonPlacement(){return{position:"top-right-outside",offsetX:8,offsetY:6}}}class L extends p{constructor(){super(...arguments);i(this,"name","doubao");i(this,"urlPattern",/www\.doubao\.com/);i(this,"inputSelectors",['textarea[data-testid="chat-input"]',"textarea",'div[contenteditable="true"]']);i(this,"sendSelectors",['button[data-testid="send-button"]','button[aria-label="发送"]','button:has(svg[data-icon="send"])'])}getInputElement(){return this.queryWithFallback(this.inputSelectors)}getInputContent(){const t=this.getInputElement();return t?t instanceof HTMLTextAreaElement?t.value:t.innerText||t.textContent||"":""}async setInputContent(t){const e=this.getInputElement();e&&(e instanceof HTMLTextAreaElement?this.setTextareaValue(e,t):await this.simulateInput(e,t))}triggerSend(){const t=this.queryWithFallback(this.sendSelectors);t&&t.click()}getFloatingButtonAnchor(){const t=this.getInputElement();return(t==null?void 0:t.closest("form"))||(t==null?void 0:t.parentElement)||null}}const M=[new C,new I,new S,new T,new L];function P(){const s=window.location.href;return M.find(n=>n.matches(s))||null}const q=`
  :host {
    all: initial;
    position: fixed;
    z-index: 2147483647;
  }
  .pp-container {
    position: relative;
  }
  .pp-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
    transition: all 0.2s ease;
    font-size: 16px;
  }
  .pp-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.6);
  }
  .pp-btn:active {
    transform: scale(0.95);
  }
  .pp-btn.loading {
    pointer-events: none;
    animation: pp-spin 1s linear infinite;
  }
  .pp-btn.success {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  }
  .pp-btn.error {
    background: linear-gradient(135deg, #f5576c 0%, #ff6b6b 100%);
  }
  .pp-btn.pulse {
    animation: pp-pulse 2s ease-in-out infinite;
  }
  @keyframes pp-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes pp-pulse {
    0%, 100% { box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4); }
    50% { box-shadow: 0 0 0 8px rgba(102, 126, 234, 0.15), 0 2px 8px rgba(102, 126, 234, 0.4); }
  }
  .pp-tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: #1a1a2e;
    color: white;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;
  }
  .pp-btn:hover + .pp-tooltip {
    opacity: 1;
  }
  .pp-guide {
    position: absolute;
    bottom: calc(100% + 12px);
    right: -8px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 10px 14px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    width: 180px;
    animation: pp-guide-in 0.3s ease;
  }
  .pp-guide::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 20px;
    border: 6px solid transparent;
    border-top-color: white;
  }
  .pp-guide-text {
    font-size: 12px;
    color: #374151;
    line-height: 1.5;
    margin: 0 0 8px;
  }
  .pp-guide-dismiss {
    display: block;
    width: 100%;
    padding: 4px 0;
    border: none;
    border-radius: 6px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-size: 12px;
    cursor: pointer;
  }
  .pp-guide-dismiss:hover {
    opacity: 0.9;
  }
  @keyframes pp-guide-in {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,y='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7L12 12L4 17"/><line x1="13" y1="12" x2="20" y2="12" stroke-width="2" opacity="0.7"/><path d="M18 3l.6 1.4L20 5l-1.4.6L18 7l-.6-1.4L16 5l1.4-.6Z" fill="#FDE68A" stroke="#F59E0B" stroke-width="1"/></svg>',F='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>',B='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',f="promptpro_guide_shown";class A{constructor(n){i(this,"host");i(this,"shadow");i(this,"button");i(this,"container");i(this,"onClickCallback",null);i(this,"observer",null);i(this,"updatePosition",()=>{if(this.host.parentElement!==document.body)return;const n=this.platform.getFloatingButtonAnchor();if(!n)return;const t=n.getBoundingClientRect(),e=this.platform.getFloatingButtonPlacement(),o=36,r=e.offsetX??8,a=e.offsetY??(e.position==="top-right-outside"?6:8),l=t.right-o-r,c=e.position==="top-right-outside"?t.top-o-a:t.top+a;this.host.style.left=`${l}px`,this.host.style.top=`${c}px`});this.platform=n,this.host=document.createElement("div"),this.host.id="promptpro-floating-btn",this.shadow=this.host.attachShadow({mode:"closed"});const t=document.createElement("style");t.textContent=q,this.container=document.createElement("div"),this.container.className="pp-container",this.button=document.createElement("button"),this.button.className="pp-btn",this.button.innerHTML=y,this.button.addEventListener("click",()=>{var o;this.dismissGuide(),(o=this.onClickCallback)==null||o.call(this)});const e=document.createElement("div");e.className="pp-tooltip",e.textContent="PromptPro 优化",this.container.appendChild(this.button),this.container.appendChild(e),this.shadow.appendChild(t),this.shadow.appendChild(this.container)}mount(){this.tryMount(),this.observer=new MutationObserver(()=>this.tryMount()),this.observer.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("scroll",this.updatePosition,!0),window.addEventListener("resize",this.updatePosition)}tryMount(){if(!this.platform.getFloatingButtonAnchor()){this.host.style.display="none";return}this.host.parentElement!==document.body&&(document.body.appendChild(this.host),this.host.style.position="fixed",this.host.style.zIndex="2147483647",this.showGuideIfNeeded()),this.host.style.display="",this.updatePosition()}async showGuideIfNeeded(){if((await chrome.storage.local.get(f))[f])return;this.button.classList.add("pulse");const t=document.createElement("div");t.className="pp-guide";const e=document.createElement("p");e.className="pp-guide-text",e.textContent="输入提示词后，点击此按钮一键优化，让 AI 更好地理解你的意图";const o=document.createElement("button");o.className="pp-guide-dismiss",o.textContent="知道了",o.addEventListener("click",()=>this.dismissGuide()),t.appendChild(e),t.appendChild(o),this.container.appendChild(t)}dismissGuide(){const n=this.container.querySelector(".pp-guide");n&&n.remove(),this.button.classList.remove("pulse"),chrome.storage.local.set({[f]:!0})}onClick(n){this.onClickCallback=n}setState(n){switch(this.button.className="pp-btn",n){case"loading":this.button.classList.add("loading"),this.button.innerHTML=F;break;case"success":this.button.classList.add("success"),this.button.innerHTML=B,setTimeout(()=>this.setState("idle"),2e3);break;case"error":this.button.classList.add("error"),this.button.innerHTML="!",setTimeout(()=>this.setState("idle"),2e3);break;default:this.button.innerHTML=y}}destroy(){var n;(n=this.observer)==null||n.disconnect(),window.removeEventListener("scroll",this.updatePosition,!0),window.removeEventListener("resize",this.updatePosition),this.host.remove()}}const h={content:{keywords:["文案","公众号","小红书","博客","标题","推文","种草","带货","笔记","爆款","涨粉","写一篇","稿件","帖子","文章","内容","脚本","短视频","封面","排版","朋友圈","微博","抖音"],weight:3,skeleton:{opening:"请帮我创作一篇适合{platform}风格的内容。",body:"主题：{userInput}",requirements:["标题有吸引力","自然口语化","分段清晰","适合移动端阅读"]}},coding:{keywords:["代码","函数","算法","bug","debug","报错","error","接口","api","数据库","sql","前端","后端","脚本","程序","开发","实现","重构","部署","编程","变量","循环","递归","python","javascript","java","css","html","服务器","框架"],weight:3,skeleton:{opening:"请帮我解决以下编程问题：",body:"问题：{userInput}",requirements:["解释思路","提供代码","添加注释"]}},work:{keywords:["周报","日报","月报","汇报","述职","方案","策划","计划","总结","会议","纪要","邮件","通知","需求","prd","绩效","okr","kpi","简历","面试","离职","入职","晋升","答辩","领导","同事","甲方","项目","排期"],weight:2,skeleton:{opening:"请帮我撰写一份专业的职场文档。",body:"内容：{userInput}",requirements:["结构清晰、逻辑严密","语言专业简洁","重点突出、数据说话","符合职场沟通规范"]}},learning:{keywords:["学习","解释","什么是","怎么理解","原理","概念","教程","入门","进阶","知识","考试","复习","课程","论文","理论","公式","定理","证明","区别","对比","为什么"],weight:2,skeleton:{opening:"请用简单易懂的方式解释：",body:"{userInput}",requirements:["分步骤","举例","避免复杂术语"]}},life:{keywords:["减肥","健身","食谱","穿搭","护肤","养生","睡眠","心理","情感","恋爱","育儿","家居","收纳","宠物","做饭","菜谱","减脂","增肌","美白","祛痘","瑜伽","跑步","早餐","晚餐"],weight:2,skeleton:{opening:"请给我一些实用的建议。",body:"话题：{userInput}",requirements:["实用可操作","贴近日常生活","语言亲切自然","给出具体步骤或方案"]}},travel:{keywords:["旅游","旅行","攻略","行程","景点","酒店","机票","签证","自驾","出行","度假","民宿","路线","打卡","美食推荐","必去","几天","预算"],weight:2,skeleton:{opening:"请帮我规划一次旅行。",body:"需求：{userInput}",requirements:["行程安排合理","包含交通和住宿建议","标注预算参考","提醒注意事项"]}},finance:{keywords:["理财","投资","基金","股票","保险","税务","预算","记账","存钱","贷款","房贷","信用卡","收益","资产","利率","通胀","定投","年化","风险"],weight:2,skeleton:{opening:"请帮我分析以下财务问题。",body:"问题：{userInput}",requirements:["逻辑清晰","考虑风险因素","给出可操作的建议","说明注意事项和前提假设"]}},general:{keywords:[],weight:0,skeleton:{opening:"请帮我完成以下事情。",body:"{userInput}",requirements:["条理清晰","内容具体","实用可操作"]}}},$=[{keywords:["小红书","种草","拔草","姐妹们","绝绝子"],value:"小红书"},{keywords:["公众号","推文","关注","在看"],value:"微信公众号"},{keywords:["抖音","短视频","拍摄","剪辑"],value:"抖音"},{keywords:["知乎","回答","如何评价"],value:"知乎"},{keywords:["博客","blog","技术文章"],value:"个人博客"},{keywords:["朋友圈"],value:"朋友圈"},{keywords:["微博","热搜"],value:"微博"},{keywords:["b站","bilibili","弹幕"],value:"B站"}],z=[{keywords:["正式","商务","严肃","官方"],value:"正式专业"},{keywords:["轻松","有趣","搞笑","幽默","段子"],value:"轻松幽默"},{keywords:["真诚","走心","感动","温暖"],value:"真诚走心"},{keywords:["种草","安利","推荐","好用","必买"],value:"种草推荐"},{keywords:["犀利","吐槽","锐评"],value:"犀利点评"}],O=[{keywords:["小白","入门","新手","零基础","初学"],value:"零基础新手"},{keywords:["专业","资深","进阶","高级","深入"],value:"有经验的专业人士"},{keywords:["学生","考试","复习","大学","考研"],value:"学生"},{keywords:["宝妈","育儿","孩子","家长"],value:"家长"},{keywords:["职场","打工","上班","同事","领导"],value:"职场人士"}],H=[{keywords:["列表","清单","步骤","流程","分步"],value:"分步列表"},{keywords:["表格","对比","比较","优缺点"],value:"表格对比"},{keywords:["简短","一句话","简洁","概括"],value:"简短精炼"},{keywords:["详细","完整","全面","深入"],value:"详细展开"}],N=[{keywords:["文案","减肥","穿搭","护肤","美白","祛痘"],value:"小红书"},{keywords:["debug","bug","报错","error","代码"],value:"技术社区"},{keywords:["周报","汇报","述职","绩效"],value:"职场"}];function R(s,n=null){if(n&&h[n])return n;const t=s.toLowerCase();let e="general",o=0;for(const[r,a]of Object.entries(h)){if(r==="general")continue;let l=0;for(const c of a.keywords)t.includes(c.toLowerCase())&&(l+=a.weight);l>o&&(o=l,e=r)}return e}function W(s){const n=s.toLowerCase(),t=o=>{for(const r of o)if(r.keywords.some(a=>n.includes(a)))return r.value;return null};return{platform:t($)||t(N),tone:t(z),audience:t(O),outputStyle:t(H)}}function j(s,n,t){const e=h[n]||h.general,o=W(s),r={userInput:s,category:n,mode:t,context:o,skeleton:e.skeleton,role:null,constraints:[],structure:[]};return t==="light"?(o.platform&&r.constraints.push(`适合${o.platform}风格`),o.tone&&r.constraints.push(`语言${o.tone}`),r):t==="smart"?(r.structure=[...e.skeleton.requirements],o.platform&&r.constraints.push(`适合${o.platform}风格`),o.tone&&r.constraints.push(`${o.tone}的语气`),o.audience&&r.constraints.push(`面向${o.audience}`),o.outputStyle&&r.constraints.push(`以${o.outputStyle}形式呈现`),r):(t==="pro"&&(r.role=_(n),r.structure=[...e.skeleton.requirements],o.platform&&r.constraints.push(`针对${o.platform}平台深度优化`),o.tone&&r.constraints.push(`整体语气：${o.tone}`),o.audience&&r.constraints.push(`目标受众：${o.audience}`),o.outputStyle&&r.constraints.push(`输出格式偏好：${o.outputStyle}`),r.constraints.push("内容有深度且专业"),r.constraints.push("避免泛泛而谈")),r)}function Y(s){const{mode:n}=s;return n==="light"?D(s):n==="smart"?K(s):n==="pro"?U(s):s.userInput}function w(s){return G(s,"smart")}function G(s,n="smart"){if(!s||!s.trim())return s||"";const t=s.trim(),e=R(t),o=j(t,e,n);return Y(o)}function _(s){const n={content:"资深内容创作者与新媒体运营专家",coding:"拥有十年经验的全栈高级工程师",work:"500强企业资深管理顾问",learning:"善于深入浅出的资深教育者",life:"专业生活方式顾问",travel:"走过50个国家的资深旅行规划师",finance:"持证理财规划师",general:"该领域的资深专家"};return n[s]||n.general}function X(s){if(s.startsWith("请"))return s;if(s.startsWith("帮我"))return"请"+s;const n=["写","做","改","翻译","分析","解释","生成","设计","规划","推荐","列出","总结","对比","评价","优化"];for(const t of n)if(s.startsWith(t))return"请帮我"+s;return"请帮我"+s}function m(s,n,t){let e=s;return e=e.replace("{userInput}",n),t?(e=e.replace("{platform}",t),e=e.replace("[platform]",t)):(e=e.replace("适合{platform}风格的",""),e=e.replace("适合[platform]风格的",""),e=e.replace("{platform}","目标平台"),e=e.replace("[platform]","目标平台")),e}function D(s){const{userInput:n,context:t,category:e}=s,o=[];o.push(X(n));const a={content:"语言自然真实",coding:"请解释清楚思路",work:"语言专业简洁",learning:"请讲得通俗易懂",life:"建议要实用可操作",travel:"信息尽量具体实用",finance:"请考虑风险因素",general:null}[e];a&&o.push(a),t.platform&&t.platform!=="技术社区"&&t.platform!=="职场"&&o.push(`适合${t.platform}风格`),t.tone&&o.push(`语气${t.tone}`);const c={content:"不要太像广告",coding:null,work:"避免空话套话",learning:"不要堆砌术语",life:"不要太笼统",travel:null,finance:"不要只讲理论",general:null}[e];return c&&o.push(c),o.join(`，
`)+"。"}function K(s){const{userInput:n,context:t,skeleton:e,constraints:o,structure:r}=s,a=[],l=m(e.opening,n,t.platform);a.push(l),a.push("");const c=m(e.body,n,t.platform);if(a.push(c),a.push(""),r.length>0){a.push("希望你能做到：");for(const u of r)a.push(`- ${u}`)}const d=o.filter(u=>!r.some(g=>g.includes(u)||u.includes(g)));if(d.length>0){a.push(""),a.push("另外：");for(const u of d)a.push(`- ${u}`)}return a.join(`
`)}function U(s){const{userInput:n,context:t,skeleton:e,constraints:o,structure:r,role:a}=s,l=[];l.push(`请你以${a}的身份来回答我的问题。`),l.push("");const c=m(e.opening,n,t.platform);l.push(c),l.push("");const d=m(e.body,n,t.platform);if(l.push(d),l.push(""),r.length>0){l.push("请在回答中做到以下几点：");for(const u of r)l.push(`- ${u}`)}if(o.length>0){l.push(""),l.push("同时请注意：");for(const u of o)r.includes(u)||l.push(`- ${u}`)}return l.push(""),l.push("请基于你的专业经验，给出有深度、可落地的回答。"),l.join(`
`)}function V(s,n="info"){const t=document.getElementById("promptpro-toast");t&&t.remove();const e=document.createElement("div");e.id="promptpro-toast";const o=n==="error"?"#ef4444":"#667eea";e.style.cssText=`
    position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
    background: ${o}; color: white; padding: 10px 20px;
    border-radius: 8px; font-size: 14px; z-index: 2147483647;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: opacity 0.3s;
  `,e.textContent=s,document.body.appendChild(e),setTimeout(()=>{e.style.opacity="0",setTimeout(()=>e.remove(),300)},3e3)}function k(){const s=P();if(!s)return;const n=new A(s);n.mount(),n.onClick(async()=>{const t=s.getInputContent().trim();if(!t)return;if(await E()<=0){V("今日免费次数已用完","error");return}n.setState("loading");try{const o=await chrome.runtime.sendMessage({type:"OPTIMIZE_PROMPT",payload:{text:t,platform:s.name}});if(o!=null&&o.success&&o.text)await s.setInputContent(o.text),n.setState("success");else{const r=w(t);await s.setInputContent(r),await b(),n.setState("success")}}catch{const o=w(t);await s.setInputContent(o),await b(),n.setState("success")}}),chrome.runtime.onMessage.addListener(t=>{t.type==="INSERT_TEMPLATE"&&s.setInputContent(t.payload.text)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",k):k();
