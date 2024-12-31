export default async function handler(req, res) {
  try {
    // Handle CORS preflight request (for browser compatibility)
    if (req.method === "OPTIONS") {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      res.status(204).end();
      return;
    }

    // The fixed m3u8 URL
    const m3u8Url = "https://prod-fastly-ap-northeast-1.video.pscp.tv/Transcoding/v1/hls/NQ7GK1onr4lkNkEPIOTOqX9R1CPrBUFNMoBLv-2tD8l7kpNr-LSR21jFcwEaY0nxPWRzOxA46voCuVGarAGgJw/non_transcode/ap-northeast-1/periscope-replay-direct-prod-ap-northeast-1-public/master_dynamic_delta.m3u8?type=live";

    // Set CORS headers for cross-origin access
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Cache-Control", "public, max-age=10");

    // Redirect to the m3u8 URL (302 Redirect)
    res.redirect(302, m3u8Url);
  } catch (error) {
    console.error("Error in M3U8 handler:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}
