#!/bin/bash

# Render Build Script - Fixed for correct directory structure
echo "🚀 Starting Render build process..."

# Navigate to project directory
cd project

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run type checking
echo "🔍 Running type check..."
npm run typecheck

# Run linting
echo "🧹 Running linter..."
npm run lint

# Build the application
echo "🏗️ Building application..."
npm run build

# Verify build output
if [ -d "dist" ]; then
    echo "✅ Build successful! Files in dist/:"
    ls -la dist/
else
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

echo "🎉 Build completed successfully!"
