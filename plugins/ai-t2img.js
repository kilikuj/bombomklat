import axios from 'axios';
import fetch from 'node-fetch';

const handler = async (m, { conn, text, command }) => {
  var rose = '';
  var payloads = {
    prompt: text,
    width: 512,
    height: 768,
    steps: 25,
    model_id: "realisian",
    sampler: "DPM   2M",
    seed: null,
    cfg: 7.5,
    image_num: 1,
    negative_prompt: "ugly, ugly eyes, ugly face, deformed eyes, multi body, deformed body, disfigured, deformed, poorly drawn, extra limbs, close up, weird, blurry, watermark, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, picture frame, deformed hands, deformed eyes, multi body, deformed body, disfigured, bad art, deformed, poorly drawn, extra limbs, close up, weird, blurry, watermark, blurry, watermark, low res, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, picture frame, two heads, three heads, out of frame, disfigured, low-res, Deformed, blurry, bad anatomy, poorly drawn face, mutation, extra limb, ugly, poorly drawn hands, missing limb, blurry, floating limbs, disconnected limbs, malformed hands, blur, out of focus, long neck, long body, disgusting, poorly drawn",
    safety_checker: "no",
    enhance_prompt: "yes",
    multi_lingual: "yes",
    clip_skip: 2,
    panorama: "no",
    lora_model: "more_details",
    hiresFix: "no",
    lora_strength: 1,
    embeddings_model: "",
    webhook: null,
  };

  m.reply(wait);

  try {
    const { data } = await axios.request({
      baseURL: "https://api.itsrose.life",
      url: "/image/diffusion/txt2img",
      method: "POST",
      params: {
        apikey: 'Rk-ArssDaebotsu',
      },
      data: payloads,
    }).catch((e) => e?.response);

    const { status, message, result } = data;

    if (!status) {
      m.reply(message);
    } else {
      const { images, metadata, generation_time } = result;
      const second = result.generation_time.toFixed();
      const model = metadata.model_id;
      const schedule = metadata.scheduler;
      const tip = result.tips;
      const w = metadata.W;
      const h = metadata.H;
      const cfg = metadata.guidance_scale;
      const step = metadata.steps;
      const seed = metadata.seed;
      const streng = metadata.clip_skip;

      const medata = `*Generating Time*: ${second} second\n*prompt*: ${text}\n*model_id*: ${model}\n*scheduler*: ${schedule}\n*W*: ${w}\n*H*: ${h}\n*guidance_scale*: ${cfg}\n*steps*: ${step}\n*seed*: ${seed}\n*clip_skip*: ${streng}`;

      await m.reply(medata);

      for (const image of images) {
        await new Promise((resolve) => {
          setTimeout(async () => {
            await conn.sendMessage(m.chat, { image: { url: image } });
            resolve();
          }, generation_time * 1000);
        });
      }
    }
  } catch (error) {
    console.error(error);
    conn.reply(nomorown, "@s.whatsapp.net", "Terjadi kesalahan.", m);
  }
};

handler.command = handler.help = ['txt2img'];
handler.tags = ['internet'];
handler.register = true;
handler.limit = true;

export default handler;