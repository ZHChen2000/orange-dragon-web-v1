"use client";

import React from 'react';
import BackToHomeButton from '@/components/BackToHomeButton';

export default function CampusRecruitmentPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-6">校园招聘</h1>
        <p className="text-xl text-gray-700 mb-4">🏃‍♂️🏃‍♀️ 前端工程师菜菜龙 和 后端工程师小狼 正在马不停蹄地制作中...</p>
        <p className="text-gray-600">请稍后再来看看吧！</p>
      </div>
      <BackToHomeButton />
    </main>
  );
} 