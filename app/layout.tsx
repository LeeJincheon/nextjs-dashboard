import '@/app/ui/global.css' // 전역 css 적용
import { inter } from './ui/fonts' // 폰트 적용

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
