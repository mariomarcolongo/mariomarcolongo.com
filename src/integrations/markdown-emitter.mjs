import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import TurndownService from 'turndown';

/**
 * Custom Astro Integration: Build-Time Markdown Emitter
 * Hooks into `astro:build:done` to traverse generated HTML routes in `dist/`
 * and output raw `.md` files mirroring the exact routing structure with clean YAML frontmatter.
 */
export default function markdownEmitter() {
  return {
    name: 'markdown-for-agents-emitter',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const distDir = fileURLToPath(dir);
        console.log(`[markdown-emitter] Traversing ${distDir} to generate Markdown replicas...`);

        const turndownService = new TurndownService({
          headingStyle: 'atx',
          codeBlockStyle: 'fenced',
          bulletListMarker: '-'
        });

        // Strip navigation, footers, scripts, and styles during conversion
        turndownService.remove(['script', 'style', 'nav', 'footer']);

        // Helper to recursively find all HTML files in dist/
        function findHtmlFiles(currentDir, fileList = []) {
          if (!fs.existsSync(currentDir)) return fileList;
          const items = fs.readdirSync(currentDir, { withFileTypes: true });
          for (const item of items) {
            const fullPath = path.join(currentDir, item.name);
            if (item.isDirectory()) {
              findHtmlFiles(fullPath, fileList);
            } else if (item.isFile() && item.name.endsWith('.html')) {
              fileList.push(fullPath);
            }
          }
          return fileList;
        }

        const htmlFiles = findHtmlFiles(distDir);

        for (const htmlPath of htmlFiles) {
          const relPath = path.relative(distDir, htmlPath);
          const mdPath = htmlPath.replace(/\.html$/, '.md');

          const htmlContent = fs.readFileSync(htmlPath, 'utf8');

          // Extract Title
          const titleMatch = htmlContent.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
          const title = titleMatch
            ? titleMatch[1].replace(/\s+/g, ' ').trim()
            : path.basename(htmlPath, '.html');

          // Extract Description
          const descMatch = htmlContent.match(/<meta[^>]*(?:name|property)=["'](?:description|og:description)["'][^>]*content=["']([^"']*)["']/i) ||
                            htmlContent.match(/<meta[^>]*content=["']([^"']*)["'][^>]*(?:name|property)=["'](?:description|og:description)["']/i);
          const description = descMatch ? descMatch[1].replace(/\s+/g, ' ').trim() : '';

          // Construct YAML frontmatter
          const frontmatter = `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(description)}\n---\n\n`;

          let bodyContent = '';

          // If no pre-curated dossier was loaded, cleanly convert the HTML body using Turndown
          if (!bodyContent) {
            let cleanedHtml = htmlContent.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || htmlContent;
            // Strip out head, script, style, nav, footer, toolbar, scroll progress, and print-hide elements
            cleanedHtml = cleanedHtml.replace(/<head[\s\S]*?<\/head>/gi, '');
            cleanedHtml = cleanedHtml.replace(/<script[\s\S]*?<\/script>/gi, '');
            cleanedHtml = cleanedHtml.replace(/<style[\s\S]*?<\/style>/gi, '');
            cleanedHtml = cleanedHtml.replace(/<nav[\s\S]*?<\/nav>/gi, '');
            cleanedHtml = cleanedHtml.replace(/<footer[\s\S]*?<\/footer>/gi, '');
            cleanedHtml = cleanedHtml.replace(/<div[^>]*id="scrollProgress"[^>]*>[\s\S]*?<\/div>/gi, '');
            cleanedHtml = cleanedHtml.replace(/<div[^>]*class="[^"]*(?:toolbar|print-hide|nav-container)[^"]*"[\s\S]*?<\/div>/gi, '');
            cleanedHtml = cleanedHtml.replace(/<[^>]*aria-hidden="true"[^>]*>[\s\S]*?<\/[^>]+>/gi, '');

            bodyContent = turndownService.turndown(cleanedHtml).trim() + '\n';
          }

          const finalMarkdown = frontmatter + bodyContent;
          fs.writeFileSync(mdPath, finalMarkdown, 'utf8');
          console.log(`✓ Generated Markdown replica: ${relPath} -> ${path.relative(distDir, mdPath)} (${finalMarkdown.length} bytes)`);
        }
      }
    }
  };
}
