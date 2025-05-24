"use client";

import React from 'react';

export default function FinancialReportsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-6">公司财报</h1>
        <p className="text-xl text-gray-700 mb-4">🐶加班中... 财务总监旺财 正在努力整理财报数据，请稍后查阅！</p>
        <p className="text-gray-600">财报即将发布，敬请期待！</p>
      </div>
      {/* Return to Home Button */}
      <div className="mt-12">
        <a href="/"
          className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition font-semibold shadow-md"
        >
          返回首页
        </a>
      </div>
    </main>
  );
} 