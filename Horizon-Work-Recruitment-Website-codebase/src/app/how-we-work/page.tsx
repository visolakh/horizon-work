"use client";

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, FileText, Plane, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function HowWeWorkPage() {
  const { t } = useLanguage();

  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: t('howWeWork.step1'),
      description: t('howWeWork.step1desc'),
      details: [
        'Бесплатная консультация по телефону или в офисе',
        'Анализ ваших навыков и опыта',
        'Подбор подходящих вакансий',
        'Полная информация о условиях работы',
      ],
      color: 'bg-blue-500',
    },
    {
      number: 2,
      icon: FileText,
      title: t('howWeWork.step2'),
      description: t('howWeWork.step2desc'),
      details: [
        'Сбор необходимых документов',
        'Перевод и нотариальное заверение',
        'Подача документов на рабочую визу',
        'Оформление медицинских справок',
      ],
      color: 'bg-green-500',
    },
    {
      number: 3,
      icon: CheckCircle,
      title: t('howWeWork.step3'),
      description: t('howWeWork.step3desc'),
      details: [
        'Подготовка к собеседованию в посольстве',
        'Сопровождение на собеседовании',
        'Получение рабочей визы',
        'Оформление трудового договора',
      ],
      color: 'bg-orange-500',
    },
    {
      number: 4,
      icon: Plane,
      title: t('howWeWork.step4'),
      description: t('howWeWork.step4desc'),
      details: [
        'Помощь в покупке авиабилетов',
        'Встреча в аэропорту прибытия',
        'Сопровождение до места проживания',
        'Помощь в адаптации на новом месте',
      ],
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('howWeWork.title')}
            </h1>
            <p className="text-xl text-blue-100">
              Простой и понятный процесс трудоустройства за рубежом
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={step.number} className="relative">
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-1/2 top-24 w-0.5 h-full bg-gray-200 -translate-x-1/2 hidden md:block"></div>
                    )}
                    
                    <div className={`flex flex-col md:flex-row gap-8 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Content Card */}
                      <div className="flex-1">
                        <Card className="hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                                {step.number}
                              </div>
                              <CardTitle className="text-2xl">{step.title}</CardTitle>
                            </div>
                            <p className="text-gray-600 text-lg">{step.description}</p>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {step.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-green-600 mt-1">✓</span>
                                  <span className="text-gray-700">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Icon Circle */}
                      <div className="flex-shrink-0">
                        <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      {/* Spacer for layout */}
                      <div className="flex-1 hidden md:block"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Duration */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Сроки оформления
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-blue-600">2-4</CardTitle>
                  <p className="text-gray-600">недели</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">Подготовка документов</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-green-600">4-8</CardTitle>
                  <p className="text-gray-600">недель</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">Получение визы</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-purple-600">1-3</CardTitle>
                  <p className="text-gray-600">месяца</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">Полный цикл до выезда</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Запишитесь на бесплатную консультацию, и мы поможем вам сделать первый шаг к работе за рубежом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                {t('contact.form.title')}
              </Button>
            </Link>
            <Link href="/jobs">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
                {t('jobs.title')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}