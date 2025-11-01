#!/bin/bash

echo "🎹 Susan Paul Music Academy - Setup Script"
echo "==========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js 18+ first.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js is installed${NC}"

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo -e "${YELLOW}📝 Creating .env.local from .env.example...${NC}"
    cp .env.example .env.local
    echo -e "${GREEN}✅ .env.local created${NC}"
    echo -e "${YELLOW}⚠️  Please edit .env.local and add your Convex URL${NC}"
else
    echo -e "${GREEN}✅ .env.local already exists${NC}"
fi

# Install Convex CLI
echo -e "${YELLOW}🔧 Installing Convex CLI...${NC}"
npm install -g convex

# Instructions for Convex setup
echo ""
echo -e "${YELLOW}📋 Next Steps:${NC}"
echo "1. Run 'npx convex login' to authenticate with Convex"
echo "2. Run 'npx convex init' to initialize Convex in this project"
echo "3. Run 'npx convex deploy' to deploy the schema"
echo "4. Copy the Convex URL to your .env.local file"
echo "5. Run 'npm run dev' in one terminal"
echo "6. Run 'npx convex dev' in another terminal"
echo ""
echo -e "${GREEN}🎉 Setup complete! Happy coding!${NC}"
echo ""
echo "For more information, check the README.md file"
