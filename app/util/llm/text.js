import { summarizeText } from './summarize.js';

const testText = `
人工智能(AI)正在深刻改变我们的生活方式。从智能手机助手到自动驾驶汽车，
从医疗诊断到金融分析，AI技术几乎渗透到了现代社会的每个角落。它不仅提高了
生产效率，也带来了前所未有的便利。然而，AI的发展也伴随着诸多挑战，比如
隐私安全、就业影响等问题需要我们认真思考和解决。展望未来，如何让AI更好
地服务于人类社会的发展，将是我们面临的重要课题。
`;

async function testSummarize() {
  try {
    console.log('原始文本：\n', testText);
    console.log('\n正在生成摘要...\n');
    
    const summary = await summarizeText(testText);
    console.log('摘要结果：\n', summary);
  } catch (error) {
    console.error('测试过程中发生错误：', error);
  }
}

// 运行测试
testSummarize(); 