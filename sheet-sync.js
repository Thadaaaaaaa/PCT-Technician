(function(root){'use strict';
 function config(){return root.PCT_SHEET_CONFIG||{};}
 function url(record){const endpoint=config().endpoint;if(!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(endpoint||''))throw Error('notConfigured');const bytes=new TextEncoder().encode(JSON.stringify(record));let text='';for(const n of bytes)text+=String.fromCharCode(n);const encoded=btoa(text).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');if(encoded.length>160000)throw Error('tooLarge');return endpoint+'#pct='+encoded;}
 function open(record){const target=url(record);if(root.PCTNative?.openUrl)root.PCTNative.openUrl(target);else{const a=document.createElement('a');a.href=target;a.target='_blank';a.rel='noopener noreferrer';document.body.append(a);a.click();a.remove();}return true;}
 const api={config,url,open};if(typeof module==='object'&&module.exports)module.exports=api;else root.PCTSheetSync=api;
})(typeof globalThis!=='undefined'?globalThis:this);
