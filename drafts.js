(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.PCTDrafts=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 const categories=['air','washer','oow'];
 const clone=x=>JSON.parse(JSON.stringify(x));
 function empty(){return {lines:[],discount:'0',discountType:'amount',taxMode:'exclusive',vatRate:'7',reference:''};}
 function restore(saved,previous){
  const result={schemaVersion:1,selectedCategory:'air',quotes:Object.fromEntries(categories.map(c=>[c,empty()])),legacy:null};
  if(saved?.schemaVersion===1&&saved.quotes){
   categories.forEach(c=>{const q=saved.quotes[c];if(q&&Array.isArray(q.lines)&&q.lines.every(l=>l.category===c))result.quotes[c]=clone(q);});
   if(categories.includes(saved.selectedCategory))result.selectedCategory=saved.selectedCategory;
   if(saved.legacy&&Array.isArray(saved.legacy.lines))result.legacy=clone(saved.legacy);
  }else if(previous&&Array.isArray(previous.lines)&&previous.lines.length){
   const types=[...new Set(previous.lines.map(l=>l.category))];
   if(types.length===1&&categories.includes(types[0])){result.quotes[types[0]]=clone(previous);result.selectedCategory=types[0];}
   else result.legacy=clone(previous);
  }
  categories.forEach(c=>{if(!['exclusive','inclusive'].includes(result.quotes[c].taxMode))result.quotes[c].taxMode='exclusive';});
  return result;
 }
 function addLine(quotes,category,line){if(!categories.includes(category)||line.category!==category)throw new Error('Category mismatch');quotes[category].lines.push(clone(line));}
 return {categories,empty,restore,addLine};
});
