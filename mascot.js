/* Original vector technician mascot; CSS animation stays fully offline. */
function serviceMascot(message,compact=false){
 const wrap=document.createElement('div');wrap.className='service-mascot'+(compact?' compact':'');
 const art=document.createElement('div');art.className='mascot-art';art.setAttribute('aria-hidden','true');
 art.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 210" fill="none">
 <ellipse cx="100" cy="195" rx="57" ry="9" fill="#082536" opacity=".12"/>
 <g class="mascot-spark"><path d="m165 28 3 8 8 3-8 3-3 8-3-8-8-3 8-3Z" fill="#F6BD69"/><circle cx="33" cy="83" r="4" fill="#82C5B5"/><path d="m35 37 2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" fill="#F6BD69"/></g>
 <g class="mascot-body">
 <path d="M64 157v26c0 8 19 8 19 0v-18m33-8v26c0 8 19 8 19 0v-28" fill="#204558" stroke="#18374B" stroke-width="3.5"/>
 <path d="M60 182h24v9H55c-2-5 0-8 5-9Zm56 0h20c8 0 11 4 10 9h-30Z" fill="#FFF9EF" stroke="#18374B" stroke-width="3"/>
 <path d="M66 111c-17 6-23 22-21 43l18 2 7-24m59-19 12 20 14-10" stroke="#18374B" stroke-width="3.5" fill="#F5A579" stroke-linecap="round"/>
 <path d="M69 111h60l11 53c-18 13-54 13-74 0Z" fill="#F8FAF7" stroke="#18374B" stroke-width="3.5"/>
 <path d="M78 114v22h43v-22m-52 27h63l4 22c-22 14-44 12-68 0Z" fill="#3F7B7B" stroke="#18374B" stroke-width="3.5"/>
 <rect x="88" y="144" width="25" height="17" rx="5" fill="#FAFCF6"/><path d="m95 152 4 4 8-8" stroke="#3F7B7B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
 <g class="mascot-wave"><path d="m132 121 15 10c12 5 22-5 26-20l-14-8-13 12" fill="#F5A579" stroke="#18374B" stroke-width="3.5" stroke-linejoin="round"/><path d="M157 104c-7-6-8-10-5-12 2-2 5 0 8 3l-2-16c0-5 6-5 7-1l2 12 2-17c1-5 7-4 7 1l-1 16 5-12c2-4 7-2 6 3l-5 18c-2 12-10 17-18 11Z" fill="#FFE1C8" stroke="#18374B" stroke-width="3" stroke-linejoin="round"/></g>
 <rect x="53" y="49" width="94" height="74" rx="34" fill="#FFE5CE" stroke="#18374B" stroke-width="3.5"/>
 <ellipse cx="71" cy="95" rx="9" ry="5" fill="#F3ACA3"/><ellipse cx="129" cy="95" rx="9" ry="5" fill="#F3ACA3"/>
 <g class="mascot-eyes" fill="#18374B"><ellipse cx="80" cy="84" rx="4" ry="6"/><ellipse cx="120" cy="84" rx="4" ry="6"/></g>
 <path d="M90 99q10 12 20 0" stroke="#18374B" stroke-width="3.5" stroke-linecap="round"/>
 <path d="M54 59c1-28 16-43 46-43s45 15 46 43" fill="#F47A35" stroke="#18374B" stroke-width="3.5"/>
 <rect x="47" y="53" width="106" height="13" rx="6.5" fill="#F9A267" stroke="#18374B" stroke-width="3.5"/>
 <path d="M95 20v28m10-28v28" stroke="#FFE5BF" stroke-width="5" stroke-linecap="round"/>
 <circle cx="100" cy="52" r="10" fill="#FFF9EF" stroke="#18374B" stroke-width="2.5"/><path d="m96 52 3 3 5-6" stroke="#3F7B7B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
 </g></svg>`;
 wrap.append(art);if(message){const text=document.createElement('p');text.className='mascot-message';text.textContent=message;wrap.append(text);}return wrap;
}
