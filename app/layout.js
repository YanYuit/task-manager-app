export const metadata = {
  title: '任务管理器',
  description: '一个简单的任务管理应用',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <head />
      <body>{children}</body>
    </html>
  );
}
