$oldUrl = 'https://tickets.slydein.com'
$newUrl = 'https://egotickets.com/events/slyde-in-houseparty-7da4146a'

$extensions = @('*.tsx','*.ts','*.jsx','*.js')
$files = Get-ChildItem -Path . -Recurse -File -Include $extensions | Where-Object {
    $_.FullName -notmatch '\\node_modules\\' -and
    $_.FullName -notmatch '\\.next\\' -and
    $_.FullName -notmatch '\\.git\\'
}

$updated = 0
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    if ($content -like "*$oldUrl*") {
        $newContent = $content.Replace($oldUrl, $newUrl)
        Set-Content -Path $file.FullName -Value $newContent -NoNewline
        Write-Host "Updated: $($file.FullName)"
        $updated++
    }
}

Write-Host ""
Write-Host "Done. Updated $updated file(s)."
Write-Host "All Get Tickets links that used $oldUrl now point to:"
Write-Host $newUrl
