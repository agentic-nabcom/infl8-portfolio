#!/bin/bash
echo "🔧 Installing dependencies..."

# Try npm install with longer timeout
npm install nodemailer --no-audit --no-fund --timeout=300000

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
    echo "🚀 Running SMTP test..."
    node test-smtp-simple.mjs
else
    echo "❌ Failed to install dependencies"
    echo "💡 Try running manually: npm install"
fi
