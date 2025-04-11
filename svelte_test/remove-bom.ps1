# Script to remove BOM characters from files
# This will help fix the build errors

$fileList = @(
    "src\App.svelte",
    "src\main.js",
    "src\routes\BetaAI.svelte",
    "src\routes\ClientList.svelte",
    "src\routes\DocumentImport.svelte",
    "src\routes\Help.svelte",
    "src\routes\Home.svelte",
    "src\routes\Integrations.svelte", 
    "src\routes\Onboard.svelte",
    "src\routes\Settings.svelte",
    "src\components\Navbar.svelte",
    "src\components\Sidebar.svelte"
)

foreach ($file in $fileList) {
    Write-Host "Processing $file..."
    
    # Read the file content as a byte array
    $content = [System.IO.File]::ReadAllBytes("$PSScriptRoot\$file")
    
    # Check if the file has a BOM (0xEF,0xBB,0xBF for UTF-8)
    if ($content.Length -ge 3 -and $content[0] -eq 0xEF -and $content[1] -eq 0xBB -and $content[2] -eq 0xBF) {
        Write-Host "BOM found in $file - removing..."
        
        # Remove the BOM
        $newContent = $content[3..$content.Length]
        
        # Write the content back without the BOM
        [System.IO.File]::WriteAllBytes("$PSScriptRoot\$file", $newContent)
        
        Write-Host "BOM removed from $file" -ForegroundColor Green
    }
    elseif ($content.Length -ge 2 -and $content[0] -eq 0xFF -and $content[1] -eq 0xFE) {
        Write-Host "UTF-16 LE BOM found in $file - converting to UTF-8 without BOM..."
        
        # Read as UTF-16 and write as UTF-8 without BOM
        $text = [System.IO.File]::ReadAllText("$PSScriptRoot\$file", [System.Text.Encoding]::Unicode)
        [System.IO.File]::WriteAllText("$PSScriptRoot\$file", $text, [System.Text.Encoding]::UTF8)
        
        Write-Host "Converted $file to UTF-8 without BOM" -ForegroundColor Green
    }
    else {
        Write-Host "No BOM found in $file" -ForegroundColor Gray
    }
}

Write-Host "All files processed!" -ForegroundColor Green