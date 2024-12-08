import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // 从环境变量获取 API key
});

const SYSTEM_PROMPT = `你是一个专业的文本总结助手。`;

async function summarizeText(text) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `请大白话有趣的总结以下文本, 让读者觉得“原来说白了发生了这么个事”。直接输出总结内容，不要输出其他内容：${text}` }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('文本总结出错:', error);
    throw error;
  }
}

export { summarizeText };
