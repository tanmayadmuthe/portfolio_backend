import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://tanmayadmuthe.com', lastModified: new Date() },
    { url: 'https://tanmayadmuthe.com/about', lastModified: new Date() },
    { url: 'https://tanmayadmuthe.com/experience', lastModified: new Date() },
    { url: 'https://tanmayadmuthe.com/certifications', lastModified: new Date() },
    { url: 'https://tanmayadmuthe.com/projects', lastModified: new Date() },
    { url: 'https://tanmayadmuthe.com/architecture', lastModified: new Date() },
    { url: 'https://tanmayadmuthe.com/blog', lastModified: new Date() },
    { url: 'https://tanmayadmuthe.com/research', lastModified: new Date() },
  ];
}
