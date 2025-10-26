# Render Deployment Checklist

## Pre-Deployment Checklist

### ✅ Code Preparation
- [ ] All files committed to GitHub
- [ ] Build passes locally (`npm run build`)
- [ ] No TypeScript errors (`npm run typecheck`)
- [ ] No linting errors (`npm run lint`)
- [ ] Environment variables documented

### ✅ Render Configuration
- [ ] `render.yaml` file present
- [ ] Build command configured
- [ ] Publish directory set to `dist`
- [ ] SPA routing configured

### ✅ Environment Variables
- [ ] Supabase URL configured
- [ ] Supabase anon key configured
- [ ] NODE_ENV set to production

## Deployment Steps

### 1. GitHub Repository
- [ ] Repository is public or Render has access
- [ ] Main branch contains latest code
- [ ] All deployment files are committed

### 2. Render Dashboard
- [ ] Create new Static Site
- [ ] Connect GitHub repository
- [ ] Set root directory to `project`
- [ ] Configure build settings
- [ ] Set environment variables
- [ ] Deploy

### 3. Post-Deployment
- [ ] Test application functionality
- [ ] Verify Supabase connection
- [ ] Check routing works correctly
- [ ] Test on mobile devices
- [ ] Set up custom domain (optional)

## Troubleshooting

### Build Issues
- Check Node.js version (18+ required)
- Verify all dependencies are in package.json
- Check build logs for specific errors

### Runtime Issues
- Verify environment variables are set correctly
- Check Supabase project is active
- Test API endpoints manually

### Performance
- Enable CDN in Render settings
- Optimize images and assets
- Monitor build size

## Support Resources
- [Render Documentation](https://render.com/docs)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
- [Supabase Documentation](https://supabase.com/docs)
