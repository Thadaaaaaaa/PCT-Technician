(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.PCTCalculator=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 function decimal(value,scale,label){
  const text=String(value??'').trim();
  if(!new RegExp('^\\d{1,9}(?:\\.\\d{1,'+scale+'})?$').test(text))throw new Error(label||'Invalid number');
  const [whole,fraction='']=text.split('.');return BigInt(whole)*10n**BigInt(scale)+BigInt(fraction.padEnd(scale,'0'));
 }
 function round(n,d){return (n+d/2n)/d;}
 function calculate(q){
  if(!q||!Array.isArray(q.lines))throw new Error('Invalid quote');
  if(q.lines.length>100)throw new Error('Too many lines');
  let subtotal=0n,lineDiscount=0n;
  const lines=q.lines.map((l,i)=>{
   const price=decimal(l.price,2,'price'),quantity=decimal(l.quantity,3,'quantity');
   if(quantity<=0n)throw new Error('quantity');
   const gross=round(price*quantity,1000n),discount=decimal(l.discount||'0',2,'discount');
   if(l.discountType==='percent'&&discount>10000n)throw new Error('discount');
   if(l.discountType!=='percent'&&discount>price)throw new Error('discount');
   const deducted=l.discountType==='percent'?round(gross*discount,10000n):round(discount*quantity,1000n);
   const net=gross-deducted;subtotal+=gross;lineDiscount+=deducted;
   return {id:l.id,gross:Number(gross),discount:Number(deducted),net:Number(net)};
  });
  const afterLines=subtotal-lineDiscount,discount=decimal(q.discount||'0',2,'orderDiscount');
  if(q.discountType==='percent'&&discount>10000n)throw new Error('orderDiscount');
  const orderDiscount=q.discountType==='percent'?round(afterLines*discount,10000n):discount;
  if(orderDiscount>afterLines)throw new Error('orderDiscount');
  const afterDiscount=afterLines-orderDiscount,rate=decimal(q.vatRate??'7',2,'vatRate');
  if(rate>10000n)throw new Error('vatRate');
  if(!['pending','exclusive','inclusive','none'].includes(q.taxMode))throw new Error('taxMode');
  const tax=q.taxMode==='exclusive'?round(afterDiscount*rate,10000n):q.taxMode==='inclusive'?round(afterDiscount*rate,10000n+rate):0n;
  const total=afterDiscount+(q.taxMode==='exclusive'?tax:0n),base=afterDiscount-(q.taxMode==='inclusive'?tax:0n);
  if(total>9000000000000n)throw new Error('amountLimit');
  return {lines,subtotal:Number(subtotal),lineDiscount:Number(lineDiscount),orderDiscount:Number(orderDiscount),afterDiscount:Number(afterDiscount),tax:Number(tax),base:Number(base),total:Number(total),ready:q.lines.length>0&&q.taxMode!=='pending'};
 }
 return {calculate,decimal};
});
