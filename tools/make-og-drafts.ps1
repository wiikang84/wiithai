# wiiInfo OG image draft generator
# Creates 1200x630 PNG candidates without replacing icons/og-image.png.
Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = 'Stop'

$W = 1200
$H = 630
$OutDir = Join-Path $PSScriptRoot '..\icons'

$C = @{
  Terracotta = '#e8602c'
  Cream      = '#fbf7f2'
  Dark       = '#1c1714'
  Brown      = '#2b2017'
  Muted      = '#7a5c47'
  Gold       = '#f2b36d'
  Green      = '#4f8a5f'
  Blue       = '#487f95'
  Rose       = '#f5c3a8'
  Paper      = '#fffaf4'
}

function Get-FontName {
  param([string[]]$Names)
  $installed = [System.Drawing.Text.InstalledFontCollection]::new()
  $set = @{}
  foreach ($family in $installed.Families) {
    $set[$family.Name] = $true
  }
  foreach ($name in $Names) {
    if ($set.ContainsKey($name)) {
      return $name
    }
  }
  return 'Segoe UI'
}

$FontMain = Get-FontName @('Pretendard', 'Noto Sans KR', 'Malgun Gothic', 'Segoe UI')
$FontLatin = Get-FontName @('Pretendard', 'Inter', 'Segoe UI', 'Arial')
$FontKorean = Get-FontName @('Pretendard', 'Noto Sans KR', 'Malgun Gothic', 'Segoe UI')
$FontThai = Get-FontName @('Leelawadee UI', 'Tahoma', 'Segoe UI')
$FontChinese = Get-FontName @('Microsoft YaHei UI', 'Microsoft YaHei', 'SimHei', 'Segoe UI')
$FontJapanese = Get-FontName @('Yu Gothic UI', 'Yu Gothic', 'Meiryo', 'MS Gothic', 'Segoe UI')

function New-Font {
  param(
    [single]$Size,
    [System.Drawing.FontStyle]$Style = [System.Drawing.FontStyle]::Regular,
    [string]$Name = $FontMain
  )
  return [System.Drawing.Font]::new($Name, $Size, $Style, [System.Drawing.GraphicsUnit]::Pixel)
}

function Get-Color {
  param(
    [string]$Hex,
    [int]$Alpha = 255
  )
  $base = [System.Drawing.ColorTranslator]::FromHtml($Hex)
  if ($Alpha -eq 255) {
    return $base
  }
  return [System.Drawing.Color]::FromArgb($Alpha, $base.R, $base.G, $base.B)
}

function New-Brush {
  param(
    [string]$Hex,
    [int]$Alpha = 255
  )
  return [System.Drawing.SolidBrush]::new((Get-Color $Hex $Alpha))
}

function New-Pen {
  param(
    [string]$Hex,
    [single]$Width = 1,
    [int]$Alpha = 255
  )
  $pen = [System.Drawing.Pen]::new((Get-Color $Hex $Alpha), $Width)
  $pen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $pen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round
  return $pen
}

function New-RoundedRectPath {
  param(
    [single]$X,
    [single]$Y,
    [single]$Width,
    [single]$Height,
    [single]$Radius
  )
  $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
  $d = $Radius * 2
  if ($Radius -le 0) {
    $path.AddRectangle([System.Drawing.RectangleF]::new($X, $Y, $Width, $Height))
    return $path
  }
  $path.AddArc($X, $Y, $d, $d, 180, 90)
  $path.AddArc($X + $Width - $d, $Y, $d, $d, 270, 90)
  $path.AddArc($X + $Width - $d, $Y + $Height - $d, $d, $d, 0, 90)
  $path.AddArc($X, $Y + $Height - $d, $d, $d, 90, 90)
  $path.CloseFigure()
  return $path
}

function Fill-RoundedRect {
  param(
    [System.Drawing.Graphics]$G,
    [single]$X,
    [single]$Y,
    [single]$Width,
    [single]$Height,
    [single]$Radius,
    [string]$Fill,
    [int]$Alpha = 255,
    [string]$Stroke = $null,
    [single]$StrokeWidth = 1,
    [int]$StrokeAlpha = 255
  )
  $path = New-RoundedRectPath $X $Y $Width $Height $Radius
  $brush = New-Brush $Fill $Alpha
  $G.FillPath($brush, $path)
  $brush.Dispose()
  if ($Stroke) {
    $pen = New-Pen $Stroke $StrokeWidth $StrokeAlpha
    $G.DrawPath($pen, $path)
    $pen.Dispose()
  }
  $path.Dispose()
}

function Draw-Text {
  param(
    [System.Drawing.Graphics]$G,
    [string]$Text,
    [single]$X,
    [single]$Y,
    [single]$Width,
    [single]$Height,
    [single]$Size,
    [string]$Fill,
    [System.Drawing.FontStyle]$Style = [System.Drawing.FontStyle]::Regular,
    [string]$Align = 'Near',
    [string]$VAlign = 'Near',
    [string]$FontName = $FontMain,
    [int]$Alpha = 255,
    [bool]$NoWrap = $false
  )
  $fmt = [System.Drawing.StringFormat]::new()
  $fmt.Alignment = [System.Drawing.StringAlignment]::$Align
  $fmt.LineAlignment = [System.Drawing.StringAlignment]::$VAlign
  $fmt.Trimming = [System.Drawing.StringTrimming]::None
  $flags = [System.Drawing.StringFormatFlags]::NoClip
  if ($NoWrap) {
    $flags = $flags -bor [System.Drawing.StringFormatFlags]::NoWrap
  }
  $fmt.FormatFlags = $flags
  $font = New-Font $Size $Style $FontName
  $brush = New-Brush $Fill $Alpha
  $rect = [System.Drawing.RectangleF]::new($X, $Y, $Width, $Height)
  $G.DrawString($Text, $font, $brush, $rect, $fmt)
  $brush.Dispose()
  $font.Dispose()
  $fmt.Dispose()
}

function New-Canvas {
  param([string]$Background)
  $bmp = [System.Drawing.Bitmap]::new($W, $H)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
  $g.Clear((Get-Color $Background))
  return @{ Bitmap = $bmp; Graphics = $g }
}

function Save-Canvas {
  param(
    $Canvas,
    [string]$FileName
  )
  $path = Join-Path $OutDir $FileName
  $Canvas.Graphics.Dispose()
  $Canvas.Bitmap.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $Canvas.Bitmap.Dispose()
  Write-Output "generated: $path"
}

function Draw-AppMark {
  param(
    [System.Drawing.Graphics]$G,
    [single]$X,
    [single]$Y,
    [single]$Size,
    [string]$Fill,
    [string]$TextFill
  )
  Fill-RoundedRect $G $X $Y $Size $Size 30 $Fill 255
  Draw-Text $G 'w' ($X + 2) ($Y + ($Size * 0.12)) $Size ($Size * 0.72) ($Size * 0.54) $TextFill ([System.Drawing.FontStyle]::Bold) 'Center' 'Center' $FontLatin
  $dotBrush = New-Brush $TextFill
  $G.FillEllipse($dotBrush, ($X + $Size * 0.55), ($Y + $Size * 0.24), ($Size * 0.09), ($Size * 0.09))
  $G.FillEllipse($dotBrush, ($X + $Size * 0.68), ($Y + $Size * 0.24), ($Size * 0.09), ($Size * 0.09))
  $dotBrush.Dispose()
}

function Draw-Pin {
  param(
    [System.Drawing.Graphics]$G,
    [single]$Cx,
    [single]$Cy,
    [single]$Size,
    [string]$Fill,
    [string]$Inner = '#fbf7f2'
  )
  $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
  $r = $Size / 2
  $path.AddEllipse($Cx - $r, $Cy - $r, $Size, $Size)
  $points = [System.Drawing.PointF[]]@(
    [System.Drawing.PointF]::new($Cx - ($Size * 0.22), $Cy + ($Size * 0.28)),
    [System.Drawing.PointF]::new($Cx + ($Size * 0.22), $Cy + ($Size * 0.28)),
    [System.Drawing.PointF]::new($Cx, $Cy + ($Size * 0.84))
  )
  $path.AddPolygon($points)
  $brush = New-Brush $Fill
  $G.FillPath($brush, $path)
  $brush.Dispose()
  $innerBrush = New-Brush $Inner
  $G.FillEllipse($innerBrush, $Cx - ($Size * 0.15), $Cy - ($Size * 0.15), $Size * 0.30, $Size * 0.30)
  $innerBrush.Dispose()
  $path.Dispose()
}

function Draw-Storefront {
  param(
    [System.Drawing.Graphics]$G,
    [single]$X,
    [single]$Y,
    [single]$Scale = 1,
    [string]$Stroke = '#2b2017'
  )
  $w = 280 * $Scale
  $h = 190 * $Scale
  Fill-RoundedRect $G $X ($Y + 44 * $Scale) $w ($h - 44 * $Scale) (18 * $Scale) $C.Paper 255 $Stroke (4 * $Scale) 210
  Fill-RoundedRect $G ($X + 22 * $Scale) ($Y + 88 * $Scale) (74 * $Scale) (92 * $Scale) (10 * $Scale) '#f5c3a8' 255 $Stroke (3 * $Scale) 210
  Fill-RoundedRect $G ($X + 116 * $Scale) ($Y + 92 * $Scale) (132 * $Scale) (54 * $Scale) (10 * $Scale) '#fff1e5' 255 $Stroke (3 * $Scale) 210

  $awning = [System.Drawing.PointF[]]@(
    [System.Drawing.PointF]::new($X + 12 * $Scale, $Y + 44 * $Scale),
    [System.Drawing.PointF]::new($X + 268 * $Scale, $Y + 44 * $Scale),
    [System.Drawing.PointF]::new($X + 250 * $Scale, $Y + 82 * $Scale),
    [System.Drawing.PointF]::new($X + 30 * $Scale, $Y + 82 * $Scale)
  )
  $brush = New-Brush $C.Terracotta
  $G.FillPolygon($brush, $awning)
  $brush.Dispose()
  $stripeBrush = New-Brush $C.Cream
  for ($i = 0; $i -lt 5; $i++) {
    $sx = $X + (36 + 44 * $i) * $Scale
    $G.FillRectangle($stripeBrush, $sx, ($Y + 45 * $Scale), (22 * $Scale), (34 * $Scale))
  }
  $stripeBrush.Dispose()

  $pen = New-Pen $Stroke (4 * $Scale) 210
  $G.DrawLine($pen, $X + 22 * $Scale, $Y + 82 * $Scale, $X + 258 * $Scale, $Y + 82 * $Scale)
  $G.DrawLine($pen, $X + 182 * $Scale, $Y + 92 * $Scale, $X + 182 * $Scale, $Y + 146 * $Scale)
  $pen.Dispose()
}

function Draw-Bowl {
  param(
    [System.Drawing.Graphics]$G,
    [single]$X,
    [single]$Y,
    [single]$Scale = 1
  )
  $darkPen = New-Pen $C.Dark (5 * $Scale) 220
  $soupBrush = New-Brush '#f2b36d'
  $bowlBrush = New-Brush $C.Cream
  $G.FillEllipse($soupBrush, $X, $Y, 230 * $Scale, 78 * $Scale)
  $G.DrawEllipse($darkPen, $X, $Y, 230 * $Scale, 78 * $Scale)
  $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
  $path.AddArc($X + 18 * $Scale, $Y + 20 * $Scale, 194 * $Scale, 130 * $Scale, 0, 180)
  $path.AddLine($X + 212 * $Scale, $Y + 85 * $Scale, $X + 18 * $Scale, $Y + 85 * $Scale)
  $path.CloseFigure()
  $G.FillPath($bowlBrush, $path)
  $G.DrawPath($darkPen, $path)
  $red = New-Brush $C.Terracotta
  $green = New-Brush $C.Green
  $G.FillEllipse($red, $X + 52 * $Scale, $Y + 20 * $Scale, 32 * $Scale, 18 * $Scale)
  $G.FillEllipse($green, $X + 114 * $Scale, $Y + 22 * $Scale, 44 * $Scale, 16 * $Scale)
  $red.Dispose(); $green.Dispose()
  $path.Dispose(); $soupBrush.Dispose(); $bowlBrush.Dispose(); $darkPen.Dispose()
}

function Draw-GroceryBag {
  param(
    [System.Drawing.Graphics]$G,
    [single]$X,
    [single]$Y,
    [single]$Scale = 1
  )
  Fill-RoundedRect $G $X ($Y + 48 * $Scale) (166 * $Scale) (180 * $Scale) (20 * $Scale) '#fff4e9' 255 $C.Dark (5 * $Scale) 210
  $pen = New-Pen $C.Dark (5 * $Scale) 210
  $G.DrawArc($pen, $X + 44 * $Scale, $Y + 12 * $Scale, 78 * $Scale, 96 * $Scale, 195, 150)
  $pen.Dispose()
  $milk = [System.Drawing.PointF[]]@(
    [System.Drawing.PointF]::new($X + 28 * $Scale, $Y + 72 * $Scale),
    [System.Drawing.PointF]::new($X + 78 * $Scale, $Y + 52 * $Scale),
    [System.Drawing.PointF]::new($X + 124 * $Scale, $Y + 72 * $Scale),
    [System.Drawing.PointF]::new($X + 124 * $Scale, $Y + 180 * $Scale),
    [System.Drawing.PointF]::new($X + 28 * $Scale, $Y + 180 * $Scale)
  )
  $milkBrush = New-Brush '#f5c3a8'
  $outline = New-Pen $C.Dark (4 * $Scale) 210
  $G.FillPolygon($milkBrush, $milk)
  $G.DrawPolygon($outline, $milk)
  $apple = New-Brush $C.Terracotta
  $leaf = New-Brush $C.Green
  $G.FillEllipse($apple, $X + 94 * $Scale, $Y + 122 * $Scale, 42 * $Scale, 42 * $Scale)
  $G.FillEllipse($leaf, $X + 121 * $Scale, $Y + 107 * $Scale, 24 * $Scale, 15 * $Scale)
  $milkBrush.Dispose(); $outline.Dispose(); $apple.Dispose(); $leaf.Dispose()
}

function Draw-MapLines {
  param(
    [System.Drawing.Graphics]$G,
    [string]$Stroke,
    [int]$Alpha = 80
  )
  $pen = New-Pen $Stroke 4 $Alpha
  $G.DrawLine($pen, 620, 40, 560, 205)
  $G.DrawLine($pen, 560, 205, 640, 368)
  $G.DrawLine($pen, 640, 368, 586, 590)
  $G.DrawLine($pen, 730, 10, 742, 180)
  $G.DrawLine($pen, 742, 180, 870, 295)
  $G.DrawLine($pen, 870, 295, 900, 615)
  $G.DrawLine($pen, 980, 22, 940, 194)
  $G.DrawLine($pen, 940, 194, 1088, 360)
  $G.DrawLine($pen, 1088, 360, 1135, 602)
  $G.DrawLine($pen, 520, 472, 760, 438)
  $G.DrawLine($pen, 760, 438, 1110, 498)
  $G.DrawLine($pen, 600, 110, 1128, 96)
  $G.DrawLine($pen, 540, 298, 1110, 228)
  $pen.Dispose()
}

function Draw-Draft1 {
  $canvas = New-Canvas $C.Terracotta
  $g = $canvas.Graphics

  $gridPen = New-Pen $C.Cream 3 44
  for ($x = -120; $x -lt 1300; $x += 150) {
    $g.DrawLine($gridPen, $x, 0, $x + 390, $H)
  }
  for ($y = -260; $y -lt 720; $y += 150) {
    $g.DrawLine($gridPen, 0, $y, $W, $y + 210)
  }
  $gridPen.Dispose()

  Draw-Pin $g 1038 118 86 $C.Cream $C.Terracotta
  Draw-AppMark $g 78 70 76 $C.Cream $C.Terracotta
  Draw-Text $g 'wiiInfo' 166 72 250 72 42 $C.Cream ([System.Drawing.FontStyle]::Bold) 'Near' 'Center' $FontLatin

  Draw-Text $g "Your neighborhood,`nin your language" 74 178 980 228 86 $C.Cream ([System.Drawing.FontStyle]::Bold) 'Near' 'Near' $FontLatin
  Draw-Text $g 'Find local food & shops — made for foreigners in Korea' 80 442 890 82 32 $C.Cream ([System.Drawing.FontStyle]::Regular) 'Near' 'Center' $FontLatin 236 $true

  Fill-RoundedRect $g 80 532 386 54 27 $C.Cream 235
  Draw-Text $g 'Restaurants · Marts · Shops' 108 533 330 54 23 $C.Terracotta ([System.Drawing.FontStyle]::Bold) 'Center' 'Center' $FontLatin 255 $true
  Draw-Text $g 'wiiinfo.web.app' 836 530 280 54 28 $C.Cream ([System.Drawing.FontStyle]::Bold) 'Far' 'Center' $FontLatin 230

  Save-Canvas $canvas 'og-image-1.png'
}

function Draw-Draft2 {
  $canvas = New-Canvas $C.Cream
  $g = $canvas.Graphics

  Fill-RoundedRect $g 72 64 1056 502 42 '#fffaf4' 255 $C.Terracotta 4 120
  Draw-AppMark $g 92 84 66 $C.Terracotta $C.Cream
  Draw-Text $g 'wiiInfo' 174 90 216 54 34 $C.Brown ([System.Drawing.FontStyle]::Bold) 'Near' 'Center' $FontLatin
  Draw-Text $g 'local food & shops in your language' 690 92 390 50 24 $C.Muted ([System.Drawing.FontStyle]::Regular) 'Far' 'Center' $FontLatin

  Draw-Text $g 'Welcome' 96 158 455 106 86 $C.Brown ([System.Drawing.FontStyle]::Bold) 'Near' 'Center' $FontLatin
  Draw-Text $g '환영해요' 590 158 410 102 70 $C.Terracotta ([System.Drawing.FontStyle]::Bold) 'Near' 'Center' $FontKorean

  $items = @(
    @{ T = 'ยินดีต้อนรับ'; F = $FontThai; C = $C.Brown },
    @{ T = 'Chào mừng'; F = $FontLatin; C = $C.Brown },
    @{ T = '欢迎'; F = $FontChinese; C = $C.Terracotta },
    @{ T = 'ようこそ'; F = $FontJapanese; C = $C.Brown },
    @{ T = 'Bienvenido'; F = $FontLatin; C = $C.Brown }
  )
  $positions = @(
    @{ X = 96; Y = 292; W = 315 },
    @{ X = 438; Y = 292; W = 300 },
    @{ X = 766; Y = 292; W = 258 },
    @{ X = 96; Y = 402; W = 300 },
    @{ X = 432; Y = 402; W = 342 }
  )
  for ($i = 0; $i -lt $items.Count; $i++) {
    $p = $positions[$i]
    $item = $items[$i]
    Fill-RoundedRect $g $p.X $p.Y $p.W 72 24 '#fff1e5' 255 $C.Terracotta 3 72
    Draw-Text $g $item.T ($p.X + 22) ($p.Y + 8) ($p.W - 44) 54 35 $item.C ([System.Drawing.FontStyle]::Bold) 'Center' 'Center' $item.F
  }

  Draw-Pin $g 934 448 96 $C.Terracotta $C.Cream
  Draw-Text $g 'Find your neighborhood spot' 96 510 560 42 28 $C.Muted ([System.Drawing.FontStyle]::Regular) 'Near' 'Center' $FontLatin

  Save-Canvas $canvas 'og-image-2.png'
}

function Draw-Draft3 {
  $canvas = New-Canvas $C.Cream
  $g = $canvas.Graphics

  Draw-MapLines $g $C.Terracotta 82
  Draw-Pin $g 815 172 92 $C.Terracotta $C.Cream
  Draw-Pin $g 1038 384 72 $C.Green $C.Cream
  Draw-Pin $g 664 448 66 $C.Blue $C.Cream

  Draw-AppMark $g 74 68 64 $C.Terracotta $C.Cream
  Draw-Text $g 'wiiInfo' 152 74 220 50 34 $C.Brown ([System.Drawing.FontStyle]::Bold) 'Near' 'Center' $FontLatin

  Draw-Text $g "Find local`nfood & shops" 78 164 560 208 70 $C.Brown ([System.Drawing.FontStyle]::Bold) 'Near' 'Near' $FontLatin
  Draw-Text $g 'Your neighborhood, in your language' 82 384 600 58 30 $C.Terracotta ([System.Drawing.FontStyle]::Bold) 'Near' 'Center' $FontLatin 255 $true

  Fill-RoundedRect $g 744 360 360 154 22 '#fffaf4' 250 $C.Brown 4 180
  Draw-Storefront $g 796 204 0.86 $C.Brown
  Draw-Text $g 'Nearby now' 780 378 260 32 23 $C.Muted ([System.Drawing.FontStyle]::Regular) 'Near' 'Center' $FontLatin 255 $true
  Draw-Text $g 'Kimbap House' 780 410 286 44 34 $C.Brown ([System.Drawing.FontStyle]::Bold) 'Near' 'Center' $FontLatin 255 $true
  Fill-RoundedRect $g 780 464 102 34 17 '#fff1e5' 255 $C.Terracotta 2 80
  Draw-Text $g 'Food' 804 466 54 28 20 $C.Terracotta ([System.Drawing.FontStyle]::Bold) 'Center' 'Center' $FontLatin 255 $true
  Fill-RoundedRect $g 896 464 96 34 17 '#eef6f0' 255 $C.Green 2 80
  Draw-Text $g 'Mart' 918 466 52 28 20 $C.Green ([System.Drawing.FontStyle]::Bold) 'Center' 'Center' $FontLatin 255 $true

  Draw-Text $g 'wiiinfo.web.app' 82 522 340 48 28 $C.Muted ([System.Drawing.FontStyle]::Bold) 'Near' 'Center' $FontLatin

  Save-Canvas $canvas 'og-image-3.png'
}

function Draw-Draft4 {
  $canvas = New-Canvas $C.Dark
  $g = $canvas.Graphics

  $accent = New-Brush $C.Terracotta 36
  $g.FillEllipse($accent, 720, -180, 520, 520)
  $g.FillEllipse($accent, 830, 310, 440, 440)
  $accent.Dispose()

  Draw-AppMark $g 76 70 70 $C.Terracotta $C.Cream
  Draw-Text $g 'wiiInfo' 164 76 220 54 36 $C.Cream ([System.Drawing.FontStyle]::Bold) 'Near' 'Center' $FontLatin

  Draw-Text $g "당신의 동네를,`n당신의 언어로" 78 174 570 176 70 $C.Cream ([System.Drawing.FontStyle]::Bold) 'Near' 'Near' $FontKorean
  Draw-Text $g 'Find local food & shops — made for foreigners in Korea' 82 380 560 82 31 $C.Cream ([System.Drawing.FontStyle]::Regular) 'Near' 'Near' $FontLatin 225
  Draw-Text $g 'Welcome · 환영해요 · Chào mừng' 82 518 560 44 27 '#f5c3a8' ([System.Drawing.FontStyle]::Bold) 'Near' 'Center' $FontMain

  Draw-Bowl $g 760 98 1.25
  Draw-GroceryBag $g 842 286 1.18

  Fill-RoundedRect $g 670 412 196 116 24 '#fffaf4' 255 $C.Cream 3 70
  Draw-Text $g 'LOCAL' 700 430 136 32 23 $C.Terracotta ([System.Drawing.FontStyle]::Bold) 'Center' 'Center' $FontLatin
  Draw-Text $g "Food`nMart" 704 458 132 54 25 $C.Brown ([System.Drawing.FontStyle]::Bold) 'Center' 'Center' $FontLatin

  Save-Canvas $canvas 'og-image-4.png'
}

function Draw-Draft5 {
  $canvas = New-Canvas $C.Cream
  $g = $canvas.Graphics

  $pen = New-Pen $C.Terracotta 5 90
  $g.DrawLine($pen, 72, 556, 1128, 556)
  $g.DrawLine($pen, 966, 74, 1128, 74)
  $pen.Dispose()

  Draw-AppMark $g 84 94 116 $C.Terracotta $C.Cream
  Draw-Text $g 'wiiInfo' 226 92 610 132 106 $C.Brown ([System.Drawing.FontStyle]::Bold) 'Near' 'Center' $FontLatin
  Draw-Text $g 'Your neighborhood, in your language' 92 276 900 70 44 $C.Brown ([System.Drawing.FontStyle]::Bold) 'Near' 'Center' $FontLatin 255 $true
  Draw-Text $g 'Local restaurants, marts and shops for foreigners in Korea' 96 368 790 72 28 $C.Muted ([System.Drawing.FontStyle]::Regular) 'Near' 'Center' $FontLatin 255 $true

  $langs = '한국어 · ไทย · 日本語 · English · 中文 · Tiếng Việt · Español'
  Draw-Text $g $langs 96 492 860 50 25 $C.Terracotta ([System.Drawing.FontStyle]::Bold) 'Near' 'Center' $FontMain 255 $true

  Draw-Storefront $g 885 216 0.78 $C.Brown
  Draw-Pin $g 1004 190 66 $C.Terracotta $C.Cream

  Save-Canvas $canvas 'og-image-5.png'
}

Draw-Draft1
Draw-Draft2
Draw-Draft3
Draw-Draft4
Draw-Draft5
