let model; let queue=Promise.resolve();
self.onmessage=({data:m})=>{queue=queue.catch(()=>{}).then(async()=>{try{
 if(!model){const {KokoroTTS}=await import('https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/dist/kokoro.web.js'); model=await KokoroTTS.from_pretrained('onnx-community/Kokoro-82M-v1.0-ONNX',{dtype:'q8',device:'wasm',progress_callback:p=>self.postMessage({id:m.id,progress:p.progress,phase:p.status})});}
 const audio=await model.generate(m.text,{voice:m.voice}); const blob=audio.toBlob(); self.postMessage({id:m.id,blob});
 }catch(e){self.postMessage({id:m.id,error:String(e.message||e)});}});};
