/* 知识库资料预处理工具: deterministic business rules. MIT License. */
(function(){
'use strict';
const H=typeof module==='object'&&module.exports?require('./common.js'):globalThis.OPC;
const {clone,esc,num,money,lines,choices,required,tableRows,metric,note,safeName,csv,parseCSV,day,today,unique,replaceTokens,documentHTML,crc32,zipBytes}=H;
const process=function process(d){
 const max=num(d.chunk,'分段长度',20);if(max>100000)throw Error('分段长度最多100000字符');const inputs=[...(d._files?.texts||[]).map(f=>({source:f.name,text:f.text}))];if(d.text?.trim())inputs.push({source:d.source||'粘贴资料',text:d.text});if(!inputs.length)throw Error('请导入或粘贴文字');const index=new Map(),chunks=[];
 for(const doc of inputs){const clean=String(doc.text).replace(/\r\n?/g,'\n').split('\n').map(s=>s.trim()).join('\n').replace(/\n{3,}/g,'\n\n').trim();let serial=0;for(const para of clean.split(/\n\s*\n/)){const chars=Array.from(para);for(let at=0;at<chars.length;at+=max){const text=chars.slice(at,at+max).join('');if(!text)continue;serial++;const source=doc.source+'#'+serial;if(index.has(text))chunks[index.get(text)].sources.push(source);else{index.set(text,chunks.length);chunks.push({id:'chunk-'+String(chunks.length+1).padStart(4,'0'),sources:[source],text});}}}}
 if(!chunks.length)throw Error('资料中没有可处理的文字');return {metrics:[metric('输入来源',inputs.length),metric('去重后片段',chunks.length)],columns:['片段ID','来源','字符数','正文'],rows:chunks.map(c=>[c.id,c.sources.join('；'),Array.from(c.text).length,c.text]),files:[{name:'知识片段.jsonl',text:chunks.map(c=>JSON.stringify(c)).join('\n')}]};
};
const api={process};
if(typeof module==='object'&&module.exports)module.exports=api;else globalThis.Core=api;
})();
