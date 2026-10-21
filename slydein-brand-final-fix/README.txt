SLYDEIN FINAL BRANDING FIX

Copy the app and public folders into the ROOT of your SlydeIn project and replace matching files.

This fixes:
1. Browser tab favicon: violet background with gold S.
2. WhatsApp/social preview: exact SlydeIn logo image.
3. app/opengraph-image.tsx override, which was preventing the social preview change.

Then deploy:
  git add .
  git commit -m "Fix SlydeIn favicon and social preview"
  git push origin main

After Vercel finishes deploying:
- Hard refresh: Ctrl + Shift + R
- Or close the tab completely and reopen it.
- Test favicon directly: https://slyde-in-one.vercel.app/slydein-favicon-v2.png
- Test social image directly: https://slyde-in-one.vercel.app/slydein-og-preview-v2.png
- For WhatsApp cache test: https://slyde-in-one.vercel.app/?preview=5
