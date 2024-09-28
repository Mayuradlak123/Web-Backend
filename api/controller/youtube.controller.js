const { exec } = require('youtube-dl-exec');
const path = require('path');
const ytdl = require('ytdl-core');

const getVideoUrlController = async (request, response) => {
  try {
    // YouTube link - extract from request or pass as a parameter
    console.log(request.body)
    const youtubeLink = request.body.youtubeLink; // Assuming the link is in the request body

    // Get video info
    const info = await ytdl.getInfo(youtubeLink);

    // Get the direct video URL
    const formats = ytdl.filterFormats(info.formats, 'videoandaudio');
    const directUrl = formats[0].url;

    // Respond with the direct video URL
    response.status(200).json({ directUrl });
  } catch (error) {
    console.error('Error extracting video URL:', error);
    response.status(500).json({ error });
  }
};
module.exports = { getVideoUrlController };
