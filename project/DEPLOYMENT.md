# Deployment Guide

This ecommerce application can be deployed to multiple platforms. Below are the instructions for each platform:

## 🚀 Platform Deployment Options

### 1. Render.com
**Configuration**: `render.yaml` is already configured

**Steps**:
1. Go to [Render.com](https://render.com)
2. Connect your GitHub repository
3. Select "Static Site" as the service type
4. Render will automatically detect the `render.yaml` configuration
5. Set environment variables if needed
6. Deploy!

**Build Command**: `npm run build:render`
**Publish Directory**: `dist`

### 2. Vercel
**Configuration**: `vercel.json` is already configured

**Steps**:
1. Go to [Vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will automatically detect the configuration
4. Deploy!

**Build Command**: `npm run build:vercel`
**Output Directory**: `dist`

### 3. Netlify
**Configuration**: `netlify.toml` is already configured

**Steps**:
1. Go to [Netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Netlify will automatically detect the configuration
4. Deploy!

**Build Command**: `npm run build:netlify`
**Publish Directory**: `dist`

### 4. GitHub Pages
**Steps**:
1. Enable GitHub Pages in repository settings
2. Select source as "GitHub Actions"
3. Use the provided GitHub Actions workflow

### 5. Firebase Hosting
**Steps**:
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize Firebase: `firebase init hosting`
3. Build the project: `npm run build`
4. Deploy: `firebase deploy`

## 🔧 Environment Variables

Make sure to set these environment variables on your hosting platform:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
NODE_ENV=production
```

## 📦 Build Process

The application uses Vite for building:
- **Development**: `npm run dev`
- **Production Build**: `npm run build`
- **Preview**: `npm run preview`

## 🌐 Custom Domain

After deployment, you can add a custom domain in your hosting platform's settings.

## 🔄 Continuous Deployment

All platforms support automatic deployments when you push to the main branch.

## 📱 Performance Optimization

The build process includes:
- Code splitting
- Asset optimization
- Tree shaking
- Minification

## 🛠️ Troubleshooting

### Common Issues:
1. **Build fails**: Check Node.js version (requires 18+)
2. **Environment variables**: Ensure all required env vars are set
3. **Routing issues**: SPA routing is configured for all platforms

### Support:
- Check platform-specific documentation
- Review build logs in your hosting platform's dashboard