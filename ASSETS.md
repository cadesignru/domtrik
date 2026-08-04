# Ассеты, которые нужно выгрузить из Figma

Сетевая политика окружения блокирует `figma.com`, поэтому файлы ассетов скачать автоматически не удалось.
Вёрстка уже ссылается на пути ниже — достаточно положить файлы по этим путям, и страница соберётся целиком.

Файл макета: `M7thwzTzT72ndae6TzcmsS`, фрейм `DOMTRIK | Landing Page` (`node-id=1-506`).
Ссылка на конкретный слой: `https://www.figma.com/design/M7thwzTzT72ndae6TzcmsS/?node-id=<id через дефис>`

## Шрифт

Vela Sans, пять начертаний в формате `woff2`:

| Файл | font-weight |
| --- | --- |
| `assets/fonts/VelaSans-Regular.woff2` | 400 |
| `assets/fonts/VelaSans-Medium.woff2` | 500 |
| `assets/fonts/VelaSans-SemiBold.woff2` | 600 |
| `assets/fonts/VelaSans-Bold.woff2` | 700 |
| `assets/fonts/VelaSans-ExtraBold.woff2` | 800 |

Без этих файлов текст рисуется запасной гарнитурой, и высоты текстовых блоков отличаются от макета
(по замеру — до 52px накопительно на всю страницу). После установки Vela Sans расхождение уходит.

## Иконки (SVG)

| Путь | Node ID | Размер |
| --- | --- | --- |
| `assets/icons/logo-mark.svg` | `1:1140` | 87×47 |
| `assets/icons/logo-word.svg` | `1:1132` | 232×41 |
| `assets/icons/mail.svg` | `1:1150` | 20×16 |
| `assets/icons/phone.svg` | `1:1157` | 18×18 |
| `assets/icons/badge-check.svg` | `1:9` | 12×8 |
| `assets/icons/badge-doc.svg` | `1:1105` | 12×15 |
| `assets/icons/download.svg` | `1:1116` | 18×17 |
| `assets/icons/hero-underline.svg` | `1:1127` | 587×4 |
| `assets/icons/arrow-up-right.svg` | `1:52` | 38×38 |
| `assets/icons/arrow-link-white.svg` | `1:1046` | 41×41 |
| `assets/icons/plus.svg` | `1:86` | 38×38 |
| `assets/icons/play.svg` | `1:95` | 24×20 |
| `assets/icons/quota.svg` | `1:421` | 34×34 |
| `assets/icons/social-vk.svg` | `1:100` | 21×13 |
| `assets/icons/social-ok.svg` | `1:105` | 16×24 |
| `assets/icons/social-rutube.svg` | `1:110` | 18×14 |

## Декоративные окружности (SVG)

| Путь | Node ID | Размер |
| --- | --- | --- |
| `assets/img/hero-ellipse-1.svg` | `1:1096` | 1600×1600 |
| `assets/img/hero-ellipse-2.svg` | `1:1097` | 1200×1200 |
| `assets/img/cta-ellipse.svg` | `1:1185` | 1200×1200 |
| `assets/img/cta-delivery-ellipse-1.svg` | `1:1038` | 1300×1300 |
| `assets/img/cta-delivery-ellipse-2.svg` | `1:1039` | 1300×1300 |
| `assets/img/footer-ellipse-1.svg` | `1:511` | 1600×1600 |
| `assets/img/footer-ellipse-2.svg` | `1:512` | 1200×1200 |

## Карта и видео

| Путь | Node ID | Размер |
| --- | --- | --- |
| `assets/img/map-russia.svg` | `1:581` | 1560×865 |
| `assets/img/map-dots.svg` | `1:671` | 1468×743 |
| `assets/img/about-video-poster.svg` | `1:1073` | 796×493 |

`about-video-poster.svg` в макете — заглушка-перечёркнутый прямоугольник. Если планируется реальное видео,
замените её на постер и подключите плеер к кнопке `.about__play`.

## Фотографии (PNG)

| Путь | Node ID | Размер |
| --- | --- | --- |
| `assets/img/hero-models.png` | `1:1098` | 1532×866 |
| `assets/img/hero-models-soft.png` | `1:1098` (второй слой, opacity 70%) | 1532×866 |
| `assets/img/cta-assortment.png` | `1:1189` | 1632×911 |
| `assets/img/cta-assortment-blend.png` | `1:1188` | 1634×912 |
| `assets/img/cta-assortment-mask.svg` | маска слоя `1:1188` | 2086×2086 |
| `assets/img/max-manager-1.png` | `1:453` | 195×130 |
| `assets/img/max-manager-2.png` | `1:454` | 201×134 |

### Категории («Мы производим»), 506×624

| Путь | Node ID карточки |
| --- | --- |
| `assets/img/product-dresses.png` | `1:1177` |
| `assets/img/product-sundresses.png` | `1:1178` |
| `assets/img/product-tunics.png` | `1:1179` |
| `assets/img/product-homesuits.png` | `1:1180` |
| `assets/img/product-pyjamas.png` | `1:1181` |
| `assets/img/product-trousers.png` | `1:1182` |

### Хиты продаж, 700×400

| Путь | Node ID карточки |
| --- | --- |
| `assets/img/hit-anyuta.png` | `1:1165` |
| `assets/img/hit-olivia-blue.png` | `1:1166` |
| `assets/img/hit-maya.png` | `1:1167` |
| `assets/img/hit-savanna.png` | `1:1168` |
| `assets/img/hit-zarina.png` | `1:1169` |
| `assets/img/hit-agniya.png` | `1:1170` |
| `assets/img/hit-vlada.png` | `1:1171` |
| `assets/img/hit-perfekt.png` | `1:1172` |
| `assets/img/hit-olivia-turq.png` | `1:1173` |

Фотографии выгружайте в `@2x` и сохраняйте под теми же именами — CSS задаёт размеры в px,
поэтому удвоенное разрешение даст резкость на Retina без правок вёрстки.
