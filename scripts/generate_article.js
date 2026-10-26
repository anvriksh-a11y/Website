const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
if (args.length < 1) {
    console.error('Usage: node generate_article.js "Your Article Title"');
    process.exit(1);
}

const title = args[0];
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const fileName = `${slug}.md`;
const date = new Date().toISOString().split('T')[0];

const mdContent = `# ${title}

Write your SEO-optimized introduction here. Remember to answer the user's main query within the first two sentences to win featured snippets.

## H2 Heading for Subtopic

- Use bullet points
- Short paragraphs
- Clear structure

## FAQ

### Question 1?
Answer 1.

---
## SEO Meta Title
${title} | ANVRiksh
`;

// Ensure public directory exists
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, fileName), mdContent);

const articleTsxPath = path.join(__dirname, '..', 'src', 'pages', 'Article.tsx');
let articleTsxContent = fs.readFileSync(articleTsxPath, 'utf8');

const newEntry = `
    '${slug}': {
        file: '/${fileName}',
        title: '${title.replace(/'/g, "\\'")}',
        metaTitle: '${title.replace(/'/g, "\\'")} | ANVRiksh',
        metaDescription: 'Add a compelling meta description here (120-160 chars)',
        author: 'ANVRiksh Tech Solutions LLP',
        publishedDate: '${date}',
        image: '/article-cover.png'
    },`;

articleTsxContent = articleTsxContent.replace(
    /const articles: Record<string, \{[^}]+\}> = \{/,
    `$&${newEntry}`
);

fs.writeFileSync(articleTsxPath, articleTsxContent);

console.log(`✅ Article scaffolded: public/${fileName}`);
console.log(`✅ Route injected into src/pages/Article.tsx`);
console.log(`⚠️ Don't forget to edit the metaDescription in Article.tsx and write your content in the markdown file!`);
