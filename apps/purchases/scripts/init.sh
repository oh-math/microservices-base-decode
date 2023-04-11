#!/bin/bash
echo "Running startup commands"

npx prisma migrate dev --name init
npm run build
npm run start