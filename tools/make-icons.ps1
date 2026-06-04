# wiiInfo PWA 아이콘 생성 (System.Drawing, 2026-06-04)
Add-Type -AssemblyName System.Drawing

$dir = Join-Path $PSScriptRoot '..\icons'
New-Item -ItemType Directory -Force $dir | Out-Null

foreach ($size in 192, 512) {
    $bmp = [System.Drawing.Bitmap]::new($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    $g.Clear([System.Drawing.ColorTranslator]::FromHtml('#00a7a5'))

    $fmt = [System.Drawing.StringFormat]::new()
    $fmt.Alignment = [System.Drawing.StringAlignment]::Center
    $fmt.LineAlignment = [System.Drawing.StringAlignment]::Center

    $mainSize = [single]($size * 0.30)
    $font = [System.Drawing.Font]::new('Segoe UI', $mainSize, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
    $rect = [System.Drawing.RectangleF]::new(0, 0, $size, [single]($size * 0.72))
    $g.DrawString('Wii', $font, [System.Drawing.Brushes]::White, $rect, $fmt)

    $subSize = [single]($size * 0.12)
    $font2 = [System.Drawing.Font]::new('Segoe UI', $subSize, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
    $rect2 = [System.Drawing.RectangleF]::new(0, [single]($size * 0.60), $size, [single]($size * 0.3))
    $g.DrawString('info', $font2, [System.Drawing.Brushes]::White, $rect2, $fmt)

    $g.Dispose()
    $out = Join-Path $dir "icon-$size.png"
    $bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Output "생성: $out"
}
