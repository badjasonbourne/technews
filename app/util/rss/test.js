import { fetchRSSFeeds } from './parser.js';
import { writeFile } from 'fs/promises';

async function testRSSFeeds() {
  try {
    console.log('开始获取 RSS 源...');
    const result = await fetchRSSFeeds();
    console.log('获取成功！正在保存到文件...');
    
    // 保存为 JSON 文件，使用当前时间戳作为文件名
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `rss-feeds-${timestamp}.json`;
    
    await writeFile(filename, JSON.stringify(result, null, 2));
    console.log(`数据已保存到文件：${filename}`);
  } catch (error) {
    console.error('测试过程中发生错误：', error);
  }
}

// 执行测试
testRSSFeeds();