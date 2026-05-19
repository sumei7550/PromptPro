var d=Object.defineProperty;var p=(o,e,t)=>e in o?d(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var s=(o,e,t)=>p(o,typeof e!="symbol"?e+"":e,t);import"./constants-BGnRCI-w.js";class a{matches(e){return this.urlPattern.test(e)}queryWithFallback(e){for(const t of e){const n=document.querySelector(t);if(n)return n}return null}async simulateInput(e,t){var n;if(e.focus(),document.execCommand("selectAll",!1),document.execCommand("delete",!1),document.execCommand("insertText",!1,t),((n=e.textContent)==null?void 0:n.trim())!==t.trim()){e.innerHTML="";const r=document.createElement("p");r.textContent=t,e.appendChild(r),e.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertText",data:t}))}}setTextareaValue(e,t){var r;const n=(r=Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value"))==null?void 0:r.set;n==null||n.call(e,t),e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0}))}}class h extends a{constructor(){super(...arguments);s(this,"name","chatgpt");s(this,"urlPattern",/chatgpt\.com/);s(this,"inputSelectors",["#prompt-textarea",'div[contenteditable="true"][data-placeholder]','.ProseMirror[contenteditable="true"]']);s(this,"sendSelectors",['button[data-testid="send-button"]','button[aria-label="Send prompt"]','form button[type="submit"]'])}getInputElement(){return this.queryWithFallback(this.inputSelectors)}getInputContent(){const t=this.getInputElement();return t&&(t.innerText||t.textContent)||""}async setInputContent(t){const n=this.getInputElement();n&&await this.simulateInput(n,t)}triggerSend(){const t=this.queryWithFallback(this.sendSelectors);t&&!t.disabled&&t.click()}getFloatingButtonAnchor(){const t=this.getInputElement();return(t==null?void 0:t.closest("form"))||(t==null?void 0:t.parentElement)||null}}class b extends a{constructor(){super(...arguments);s(this,"name","claude");s(this,"urlPattern",/claude\.ai/);s(this,"inputSelectors",['div.ProseMirror[contenteditable="true"]','fieldset div[contenteditable="true"]','div[contenteditable="true"][translate="no"]']);s(this,"sendSelectors",['button[aria-label="Send message"]','button[aria-label="Send Message"]',"fieldset button:last-of-type"])}getInputElement(){return this.queryWithFallback(this.inputSelectors)}getInputContent(){const t=this.getInputElement();return t&&(t.innerText||t.textContent)||""}async setInputContent(t){const n=this.getInputElement();n&&await this.simulateInput(n,t)}triggerSend(){const t=this.queryWithFallback(this.sendSelectors);t&&!t.disabled&&t.click()}getFloatingButtonAnchor(){const t=this.getInputElement();return(t==null?void 0:t.closest("fieldset"))||(t==null?void 0:t.parentElement)||null}}class m extends a{constructor(){super(...arguments);s(this,"name","gemini");s(this,"urlPattern",/gemini\.google\.com/);s(this,"inputSelectors",['rich-textarea div[contenteditable="true"]','.ql-editor[contenteditable="true"]','div[contenteditable="true"][aria-label]']);s(this,"sendSelectors",["button.send-button",'button[aria-label="Send message"]','button[mattooltip="Send"]'])}getInputElement(){const t=document.querySelector("rich-textarea");if(t!=null&&t.shadowRoot){const n=t.shadowRoot.querySelector('div[contenteditable="true"]');if(n)return n}return this.queryWithFallback(this.inputSelectors)}getInputContent(){const t=this.getInputElement();return t&&(t.innerText||t.textContent)||""}async setInputContent(t){const n=this.getInputElement();n&&await this.simulateInput(n,t)}triggerSend(){const t=this.queryWithFallback(this.sendSelectors);t&&!t.disabled&&t.click()}getFloatingButtonAnchor(){const t=document.querySelector("rich-textarea");return(t==null?void 0:t.parentElement)||null}}class g extends a{constructor(){super(...arguments);s(this,"name","deepseek");s(this,"urlPattern",/chat\.deepseek\.com/);s(this,"inputSelectors",["textarea#chat-input","textarea[placeholder]","textarea"]);s(this,"sendSelectors",['button[aria-label="Send"]','div[role="button"][aria-label]',"button:has(svg)"])}getInputElement(){return this.queryWithFallback(this.inputSelectors)}getInputContent(){const t=this.getInputElement();return t&&(t.value||t.textContent)||""}async setInputContent(t){const n=this.getInputElement();n&&this.setTextareaValue(n,t)}triggerSend(){const t=this.queryWithFallback(this.sendSelectors);if(t)t.click();else{const n=this.getInputElement();n==null||n.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",code:"Enter",bubbles:!0}))}}getFloatingButtonAnchor(){const t=this.getInputElement();return(t==null?void 0:t.parentElement)||null}}class f extends a{constructor(){super(...arguments);s(this,"name","doubao");s(this,"urlPattern",/www\.doubao\.com/);s(this,"inputSelectors",['textarea[data-testid="chat-input"]',"textarea",'div[contenteditable="true"]']);s(this,"sendSelectors",['button[data-testid="send-button"]','button[aria-label="发送"]','button:has(svg[data-icon="send"])'])}getInputElement(){return this.queryWithFallback(this.inputSelectors)}getInputContent(){const t=this.getInputElement();return t?t instanceof HTMLTextAreaElement?t.value:t.innerText||t.textContent||"":""}async setInputContent(t){const n=this.getInputElement();n&&(n instanceof HTMLTextAreaElement?this.setTextareaValue(n,t):await this.simulateInput(n,t))}triggerSend(){const t=this.queryWithFallback(this.sendSelectors);t&&t.click()}getFloatingButtonAnchor(){const t=this.getInputElement();return(t==null?void 0:t.closest("form"))||(t==null?void 0:t.parentElement)||null}}const y=[new h,new b,new m,new g,new f];function x(){const o=window.location.href;return y.find(e=>e.matches(o))||null}const E=`
  :host {
    all: initial;
    position: absolute;
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
  @keyframes pp-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
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
`,l='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>',C='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>',v='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';class I{constructor(e){s(this,"host");s(this,"shadow");s(this,"button");s(this,"onClickCallback",null);s(this,"observer",null);this.platform=e,this.host=document.createElement("div"),this.host.id="promptpro-floating-btn",this.shadow=this.host.attachShadow({mode:"closed"});const t=document.createElement("style");t.textContent=E;const n=document.createElement("div");n.className="pp-container",this.button=document.createElement("button"),this.button.className="pp-btn",this.button.innerHTML=l,this.button.addEventListener("click",()=>{var i;return(i=this.onClickCallback)==null?void 0:i.call(this)});const r=document.createElement("div");r.className="pp-tooltip",r.textContent="PromptPro 优化",n.appendChild(this.button),n.appendChild(r),this.shadow.appendChild(t),this.shadow.appendChild(n)}mount(){this.tryMount(),this.observer=new MutationObserver(()=>this.tryMount()),this.observer.observe(document.body,{childList:!0,subtree:!0})}tryMount(){if(document.getElementById("promptpro-floating-btn"))return;const e=this.platform.getFloatingButtonAnchor();if(!e)return;getComputedStyle(e).position==="static"&&(e.style.position="relative"),this.host.style.position="absolute",this.host.style.top="8px",this.host.style.right="8px",this.host.style.zIndex="2147483647",e.appendChild(this.host)}onClick(e){this.onClickCallback=e}setState(e){switch(this.button.className="pp-btn",e){case"loading":this.button.classList.add("loading"),this.button.innerHTML=C;break;case"success":this.button.classList.add("success"),this.button.innerHTML=v,setTimeout(()=>this.setState("idle"),2e3);break;case"error":this.button.classList.add("error"),this.button.innerHTML="!",setTimeout(()=>this.setState("idle"),2e3);break;default:this.button.innerHTML=l}}destroy(){var e;(e=this.observer)==null||e.disconnect(),this.host.remove()}}function c(o){const e=o.trim();if(!e)return e;const t=[];return/^(你是|作为|扮演|act as|you are|imagine)/i.test(e)||t.push("你是一位专业的助手，擅长以下任务。"),t.push(""),t.push("## 任务"),t.push(e),/(格式|format|输出|output|markdown|json|列表|表格)/i.test(e)||(t.push(""),t.push("## 输出要求"),t.push("- 结构清晰，分点阐述"),t.push("- 语言简洁专业"),t.push("- 如有必要，使用示例说明")),t.join(`
`)}function u(){const o=x();if(!o)return;const e=new I(o);e.mount(),e.onClick(async()=>{const t=o.getInputContent().trim();if(t){e.setState("loading");try{const n=await chrome.runtime.sendMessage({type:"OPTIMIZE_PROMPT",payload:{text:t,platform:o.name}});if(n!=null&&n.success&&n.text)await o.setInputContent(n.text),e.setState("success");else{const r=c(t);await o.setInputContent(r),e.setState("success")}}catch{const n=c(t);await o.setInputContent(n),e.setState("success")}}}),chrome.runtime.onMessage.addListener(t=>{t.type==="INSERT_TEMPLATE"&&o.setInputContent(t.payload.text)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u):u();
