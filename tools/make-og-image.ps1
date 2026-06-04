# wiiInfo 공유 미리보기(OG) 이미지 생성 1200x630 (2026-06-04)
Add-Type -AssemblyName System.Drawing

$w = 1200; $h = 630
$out = Join-Path $PSScriptRoot '..\icons\og-image.png'

$bmp = [System.Drawing.Bitmap]::new($w, $h)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# 배경: 티얼 그라데이션
$rect = [System.Drawing.Rectangle]::new(0, 0, $w, $h)
$brush = [System.Drawing.Drawing2D.LinearGradientBrush]::new($rect, [System.Drawing.ColorTranslator]::FromHtml('#00a7a5'), [System.Drawing.ColorTranslator]::FromHtml('#087d7b'), 35)
$g.FillRectangle($brush, $rect)

$fmt = [System.Drawing.StringFormat]::new()
$fmt.Alignment = [System.Drawing.StringAlignment]::Center
$fmt.LineAlignment = [System.Drawing.StringAlignment]::Center

# 메인 타이틀
$font1 = [System.Drawing.Font]::new('Segoe UI', [single]150, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$r1 = [System.Drawing.RectangleF]::new(0, 90, $w, 220)
$g.DrawString('wiiInfo', $font1, [System.Drawing.Brushes]::White, $r1, $fmt)

# 서브타이틀
$font2 = [System.Drawing.Font]::new('Segoe UI', [single]46, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$r2 = [System.Drawing.RectangleF]::new(0, 320, $w, 80)
$g.DrawString('Learn Korean · Korea Life Info · Realty Basics', $font2, [System.Drawing.Brushes]::White, $r2, $fmt)

# 언어 라인
$font3 = [System.Drawing.Font]::new('Segoe UI', [single]40, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$r3 = [System.Drawing.RectangleF]::new(0, 420, $w, 80)
$sub = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(225, 255, 255, 255))
$g.DrawString('한국어 · ไทย · 日本語 · English · 中文 · Tiếng Việt · Español', $font3, $sub, $r3, $fmt)

# 하단 URL
$font4 = [System.Drawing.Font]::new('Segoe UI', [single]34, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$r4 = [System.Drawing.RectangleF]::new(0, 530, $w, 60)
$g.DrawString('wiiinfo.web.app', $font4, $sub, $r4, $fmt)

$g.Dispose()
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output "생성: $out"
