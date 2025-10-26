# Render Deployment Guide

## Quick Deploy to Render

### Option 1: One-Click Deploy
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/Rgopi143/Client-Ecommerse)

### Option 2: Manual Deploy

1. **Go to [Render.com](https://render.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New +"** → **"Static Site"**
4. **Connect Repository**:
   - Repository: `Rgopi143/Client-Ecommerse`
   - Branch: `main`
   - Root Directory: `project`

5. **Configure Build Settings**:
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`

6. **Set Environment Variables**:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   NODE_ENV=production
   ```

7. **Deploy!**

## Render Configuration Files

The following files are already configured for Render:

- `render.yaml` - Render service configuration
- `package.json` - Build scripts
- `env.template` - Environment variables template

## Environment Variables Required

Make sure to set these in your Render dashboard:

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | `https://abc123.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous key | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |
| `NODE_ENV` | Environment | `production` |

## Custom Domain

After deployment:
1. Go to your service settings
2. Add custom domain
3. Update DNS records as instructed

## Troubleshooting

### Build Fails
- Check Node.js version (requires 18+)
- Verify all environment variables are set
- Check build logs in Render dashboard

### App Not Loading
- Ensure SPA routing is configured (already done in render.yaml)
- Check environment variables are correct
- Verify Supabase connection

### Performance Issues
- Enable CDN in Render settings
- Check bundle size in build logs
- Optimize images and assets
