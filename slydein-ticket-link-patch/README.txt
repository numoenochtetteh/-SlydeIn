SLYDEIN GET TICKETS URL PATCH

This patch safely replaces ONLY this URL:
https://tickets.slydein.com

with:
https://egotickets.com/events/slyde-in-houseparty-7da4146a

It does NOT replace component files or overwrite your styling.

HOW TO USE (Windows PowerShell):
1. Extract this ZIP.
2. Copy apply-ticket-link.ps1 into the ROOT of your SlydeIn project (same folder as package.json).
3. Open PowerShell in that project folder.
4. Run:
   powershell -ExecutionPolicy Bypass -File .\apply-ticket-link.ps1
5. Start your project and test all Get Tickets buttons.

The script scans .tsx, .ts, .jsx and .js files, excluding node_modules, .next and .git.
