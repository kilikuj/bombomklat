import fs from 'fs';

const handler = async (m, { conn, text }) => {
  if (!text) {
    m.reply('*Example*: .setsource linknya su');
    return;
  }

  const configFile = './config.js';
  let configData = fs.readFileSync(configFile, 'utf8');

  const newValue = `global.thumbnail = "${text}"`;

  configData = configData.replace(/global\.thumbnail\s*=\s*".*"/, newValue);

  fs.writeFileSync(configFile, configData, 'utf8');

  m.reply('Successfully changed the sourceUrl');
};

handler.help = ['setsource'];
handler.tags = ['owner'];
handler.owner = true;
handler.command = /^setsource$/i;

export default handler;