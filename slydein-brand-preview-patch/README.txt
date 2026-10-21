SLYDEIN BRAND PREVIEW PATCH

Copy these folders/files into the ROOT of your SlydeIn project and allow them to replace matching files.

Included:
- app/layout.tsx
- public/slydein-og-preview.png
- public/slydein-icon-master.png
- public/icon-light-32x32.png
- public/icon-dark-32x32.png
- public/apple-icon.png
- public/favicon.ico

Then run:
  git add .
  git commit -m "Update SlydeIn social preview and favicon"
  git push origin main

If Vercel does not auto-deploy:
  npx vercel --prod

WhatsApp can cache previews. Test with:
  https://slyde-in-one.vercel.app/?v=4
