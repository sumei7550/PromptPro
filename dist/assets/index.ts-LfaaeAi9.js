var g=Object.defineProperty;var f=(i,e,t)=>e in i?g(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var o=(i,e,t)=>f(i,typeof e!="symbol"?e+"":e,t);import{l as d}from"./optimizer-e7QT5hFp.js";import{g as x,i as u}from"./storage-uFEKXZ0D.js";class r{getFloatingButtonPlacement(){return{position:"top-right-inside",offsetX:8,offsetY:8}}matches(e){return this.urlPattern.test(e)}queryWithFallback(e){for(const t of e){const n=document.querySelector(t);if(n)return n}return null}async simulateInput(e,t){var n;if(e.focus(),document.execCommand("selectAll",!1),document.execCommand("delete",!1),document.execCommand("insertText",!1,t),((n=e.textContent)==null?void 0:n.trim())!==t.trim()){e.innerHTML="";const s=document.createElement("p");s.textContent=t,e.appendChild(s),e.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertText",data:t}))}}setTextareaValue(e,t){var s;const n=(s=Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value"))==null?void 0:s.set;n==null||n.call(e,t),e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0}))}}class w extends r{constructor(){super(...arguments);o(this,"name","chatgpt");o(this,"urlPattern",/chatgpt\.com/);o(this,"inputSelectors",["#prompt-textarea",'div[contenteditable="true"][data-placeholder]','.ProseMirror[contenteditable="true"]']);o(this,"sendSelectors",['button[data-testid="send-button"]','button[aria-label="Send prompt"]','form button[type="submit"]'])}getInputElement(){return this.queryWithFallback(this.inputSelectors)}getInputContent(){const t=this.getInputElement();return t&&(t.innerText||t.textContent)||""}async setInputContent(t){const n=this.getInputElement();n&&await this.simulateInput(n,t)}triggerSend(){const t=this.queryWithFallback(this.sendSelectors);t&&!t.disabled&&t.click()}getFloatingButtonAnchor(){const t=this.getInputElement();return(t==null?void 0:t.closest("form"))||(t==null?void 0:t.parentElement)||null}}class y extends r{constructor(){super(...arguments);o(this,"name","claude");o(this,"urlPattern",/claude\.ai/);o(this,"inputSelectors",['div.ProseMirror[contenteditable="true"]','fieldset div[contenteditable="true"]','div[contenteditable="true"][translate="no"]']);o(this,"sendSelectors",['button[aria-label="Send message"]','button[aria-label="Send Message"]',"fieldset button:last-of-type"])}getInputElement(){return this.queryWithFallback(this.inputSelectors)}getInputContent(){const t=this.getInputElement();return t&&(t.innerText||t.textContent)||""}async setInputContent(t){const n=this.getInputElement();n&&await this.simulateInput(n,t)}triggerSend(){const t=this.queryWithFallback(this.sendSelectors);t&&!t.disabled&&t.click()}getFloatingButtonAnchor(){const t=this.getInputElement();return(t==null?void 0:t.closest("fieldset"))||(t==null?void 0:t.parentElement)||null}}class E extends r{constructor(){super(...arguments);o(this,"name","gemini");o(this,"urlPattern",/gemini\.google\.com/);o(this,"inputSelectors",['rich-textarea div[contenteditable="true"]','.ql-editor[contenteditable="true"]','div[contenteditable="true"][aria-label]']);o(this,"sendSelectors",["button.send-button",'button[aria-label="Send message"]','button[mattooltip="Send"]'])}getInputElement(){const t=document.querySelector("rich-textarea");if(t!=null&&t.shadowRoot){const n=t.shadowRoot.querySelector('div[contenteditable="true"]');if(n)return n}return this.queryWithFallback(this.inputSelectors)}getInputContent(){const t=this.getInputElement();return t&&(t.innerText||t.textContent)||""}async setInputContent(t){const n=this.getInputElement();n&&await this.simulateInput(n,t)}triggerSend(){const t=this.queryWithFallback(this.sendSelectors);t&&!t.disabled&&t.click()}getFloatingButtonAnchor(){const t=document.querySelector("rich-textarea");return(t==null?void 0:t.parentElement)||null}getFloatingButtonPlacement(){return{position:"top-right-outside",offsetX:8,offsetY:6}}}class v extends r{constructor(){super(...arguments);o(this,"name","deepseek");o(this,"urlPattern",/chat\.deepseek\.com/);o(this,"inputSelectors",["textarea#chat-input","textarea[placeholder]","textarea"]);o(this,"sendSelectors",['button[aria-label="Send"]','div[role="button"][aria-label]',"button:has(svg)"])}getInputElement(){return this.queryWithFallback(this.inputSelectors)}getInputContent(){const t=this.getInputElement();return t&&(t.value||t.textContent)||""}async setInputContent(t){const n=this.getInputElement();n&&this.setTextareaValue(n,t)}triggerSend(){const t=this.queryWithFallback(this.sendSelectors);if(t)t.click();else{const n=this.getInputElement();n==null||n.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",code:"Enter",bubbles:!0}))}}getFloatingButtonAnchor(){const t=this.getInputElement();return(t==null?void 0:t.parentElement)||null}getFloatingButtonPlacement(){return{position:"top-right-outside",offsetX:8,offsetY:6}}}class k extends r{constructor(){super(...arguments);o(this,"name","doubao");o(this,"urlPattern",/www\.doubao\.com/);o(this,"inputSelectors",['textarea[data-testid="chat-input"]',"textarea",'div[contenteditable="true"]']);o(this,"sendSelectors",['button[data-testid="send-button"]','button[aria-label="发送"]','button:has(svg[data-icon="send"])'])}getInputElement(){return this.queryWithFallback(this.inputSelectors)}getInputContent(){const t=this.getInputElement();return t?t instanceof HTMLTextAreaElement?t.value:t.innerText||t.textContent||"":""}async setInputContent(t){const n=this.getInputElement();n&&(n instanceof HTMLTextAreaElement?this.setTextareaValue(n,t):await this.simulateInput(n,t))}triggerSend(){const t=this.queryWithFallback(this.sendSelectors);t&&t.click()}getFloatingButtonAnchor(){const t=this.getInputElement();return(t==null?void 0:t.closest("form"))||(t==null?void 0:t.parentElement)||null}}const C=[new w,new y,new E,new v,new k];function I(){const i=window.location.href;return C.find(e=>e.matches(i))||null}const S=`
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
`,p='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7L12 12L4 17"/><line x1="13" y1="12" x2="20" y2="12" stroke-width="2" opacity="0.7"/><path d="M18 3l.6 1.4L20 5l-1.4.6L18 7l-.6-1.4L16 5l1.4-.6Z" fill="#FDE68A" stroke="#F59E0B" stroke-width="1"/></svg>',T='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>',M='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',l="promptpro_guide_shown";class L{constructor(e){o(this,"host");o(this,"shadow");o(this,"button");o(this,"container");o(this,"onClickCallback",null);o(this,"observer",null);o(this,"updatePosition",()=>{if(this.host.parentElement!==document.body)return;const e=this.platform.getFloatingButtonAnchor();if(!e)return;const t=e.getBoundingClientRect(),n=this.platform.getFloatingButtonPlacement(),s=36,a=n.offsetX??8,c=n.offsetY??(n.position==="top-right-outside"?6:8),m=t.right-s-a,b=n.position==="top-right-outside"?t.top-s-c:t.top+c;this.host.style.left=`${m}px`,this.host.style.top=`${b}px`});this.platform=e,this.host=document.createElement("div"),this.host.id="promptpro-floating-btn",this.shadow=this.host.attachShadow({mode:"closed"});const t=document.createElement("style");t.textContent=S,this.container=document.createElement("div"),this.container.className="pp-container",this.button=document.createElement("button"),this.button.className="pp-btn",this.button.innerHTML=p,this.button.addEventListener("click",()=>{var s;this.dismissGuide(),(s=this.onClickCallback)==null||s.call(this)});const n=document.createElement("div");n.className="pp-tooltip",n.textContent="PromptPro 优化",this.container.appendChild(this.button),this.container.appendChild(n),this.shadow.appendChild(t),this.shadow.appendChild(this.container)}mount(){this.tryMount(),this.observer=new MutationObserver(()=>this.tryMount()),this.observer.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("scroll",this.updatePosition,!0),window.addEventListener("resize",this.updatePosition)}tryMount(){if(!this.platform.getFloatingButtonAnchor()){this.host.style.display="none";return}this.host.parentElement!==document.body&&(document.body.appendChild(this.host),this.host.style.position="fixed",this.host.style.zIndex="2147483647",this.showGuideIfNeeded()),this.host.style.display="",this.updatePosition()}async showGuideIfNeeded(){if((await chrome.storage.local.get(l))[l])return;this.button.classList.add("pulse");const t=document.createElement("div");t.className="pp-guide";const n=document.createElement("p");n.className="pp-guide-text",n.textContent="输入提示词后，点击此按钮一键优化，让 AI 更好地理解你的意图";const s=document.createElement("button");s.className="pp-guide-dismiss",s.textContent="知道了",s.addEventListener("click",()=>this.dismissGuide()),t.appendChild(n),t.appendChild(s),this.container.appendChild(t)}dismissGuide(){const e=this.container.querySelector(".pp-guide");e&&e.remove(),this.button.classList.remove("pulse"),chrome.storage.local.set({[l]:!0})}onClick(e){this.onClickCallback=e}setState(e){switch(this.button.className="pp-btn",e){case"loading":this.button.classList.add("loading"),this.button.innerHTML=T;break;case"success":this.button.classList.add("success"),this.button.innerHTML=M,setTimeout(()=>this.setState("idle"),2e3);break;case"error":this.button.classList.add("error"),this.button.innerHTML="!",setTimeout(()=>this.setState("idle"),2e3);break;default:this.button.innerHTML=p}}destroy(){var e;(e=this.observer)==null||e.disconnect(),window.removeEventListener("scroll",this.updatePosition,!0),window.removeEventListener("resize",this.updatePosition),this.host.remove()}}function P(i,e="info"){const t=document.getElementById("promptpro-toast");t&&t.remove();const n=document.createElement("div");n.id="promptpro-toast";const s=e==="error"?"#ef4444":"#667eea";n.style.cssText=`
    position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
    background: ${s}; color: white; padding: 10px 20px;
    border-radius: 8px; font-size: 14px; z-index: 2147483647;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: opacity 0.3s;
  `,n.textContent=i,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),300)},3e3)}function h(){const i=I();if(!i)return;const e=new L(i);e.mount(),e.onClick(async()=>{const t=i.getInputContent().trim();if(!t)return;if(await x()<=0){P("今日免费次数已用完","error");return}e.setState("loading");try{const s=await chrome.runtime.sendMessage({type:"OPTIMIZE_PROMPT",payload:{text:t,platform:i.name}});if(s!=null&&s.success&&s.text)await i.setInputContent(s.text),e.setState("success");else{const a=d(t);await i.setInputContent(a),await u(),e.setState("success")}}catch{const s=d(t);await i.setInputContent(s),await u(),e.setState("success")}}),chrome.runtime.onMessage.addListener(t=>{t.type==="INSERT_TEMPLATE"&&i.setInputContent(t.payload.text)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h):h();
