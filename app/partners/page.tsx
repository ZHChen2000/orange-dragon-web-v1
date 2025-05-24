"use client";

import React from 'react';
import Link from 'next/link';
export default function PartnersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-6">公司合作伙伴</h1>
        <p className="text-xl text-gray-700 mb-4">🤝🏗️ 前端工程师菜菜龙 和 后端工程师小狼 正在与潜在伙伴深入交流，并制作页面中...</p>
        <p className="text-gray-600">敬请期待我们的合作伙伴列表！</p>
      </div>
      {/* Return to Home Button */}
      <div className="mt-12">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          返回首页
        </Link> 
      </div>
    </main>
  );
} 