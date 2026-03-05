export default function handler(req, res) {
  const path = req.url.replace(/^\/api\/redirect/, '') || '/';
  const target = `https://tinos-macbook-pro.tailc2bd2c.ts.net${path}`;
  res.writeHead(302, { Location: target });
  res.end();
}
