Add-Type -AssemblyName System.Drawing
$imgPath = 'C:\Users\Nihat\.gemini\antigravity-ide\brain\2ff964e6-8845-45ab-bc06-809772f17c83\cevsen_app_icon_1790715647170.jpg'
$src = [System.Drawing.Image]::FromFile($imgPath)

$map = @{
    'mdpi' = 48
    'hdpi' = 72
    'xhdpi' = 96
    'xxhdpi' = 144
    'xxxhdpi' = 192
}

foreach ($entry in $map.GetEnumerator()) {
    $folderName = $entry.Key
    $dim = $entry.Value
    
    $bmp = New-Object System.Drawing.Bitmap $dim, $dim
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($src, 0, 0, $dim, $dim)

    $targetDir = "android/app/src/main/res/mipmap-$folderName"
    if (!(Test-Path $targetDir)) {
        New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
    }

    $bmp.Save("$targetDir/ic_launcher.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Save("$targetDir/ic_launcher_round.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Save("$targetDir/ic_launcher_foreground.png", [System.Drawing.Imaging.ImageFormat]::Png)

    $g.Dispose()
    $bmp.Dispose()
}

$src.Dispose()
Write-Output "ALL_ICONS_GENERATED_SUCCESSFULLY"
