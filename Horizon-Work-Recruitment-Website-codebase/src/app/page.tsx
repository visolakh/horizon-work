"use client";

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Globe, Users, Home, Shield } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Shield,
      title: t('services.legal.title'),
      description: t('services.legal.desc'),
    },
    {
      icon: Users,
      title: t('services.support.title'),
      description: t('services.support.desc'),
    },
    {
      icon: CheckCircle,
      title: t('services.verified.title'),
      description: t('services.verified.desc'),
    },
    {
      icon: Home,
      title: t('services.housing.title'),
      description: t('services.housing.desc'),
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" data-i18n="hero.title">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100" data-i18n="hero.subtitle">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/jobs">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8" data-i18n="hero.cta">
                  {t('hero.cta')}
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8" data-i18n="hero.consultation">
                  {t('hero.consultation')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600" data-i18n="about.advantage1">{t('about.advantage1')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2000+</div>
              <div className="text-gray-600" data-i18n="about.advantage2">{t('about.advantage2')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600" data-i18n="about.advantage3">{t('about.advantage3')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600" data-i18n="about.advantage4">{t('about.advantage4')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-i18n="services.title">
              {t('services.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-i18n="services.subtitle">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-i18n="jobs.title">
              {t('jobs.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <span className="text-8xl">🇵🇱</span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl" data-i18n="jobs.poland">{t('jobs.poland')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4" data-i18n="jobs.poland.desc">
                  {t('jobs.poland.desc')}
                </p>
                <Link href="/jobs?country=poland">
                  <Button className="w-full" data-i18n="jobs.apply">
                    {t('jobs.apply')}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center">
                <span className="text-8xl">🇰🇷</span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl" data-i18n="jobs.korea">{t('jobs.korea')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4" data-i18n="jobs.korea.desc">
                  {t('jobs.korea.desc')}
                </p>
                <Link href="/jobs?country=korea">
                  <Button className="w-full" data-i18n="jobs.apply">
                    {t('jobs.apply')}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-600 to-white flex items-center justify-center">
                <span className="text-8xl">🇯🇵</span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl" data-i18n="jobs.japan">{t('jobs.japan')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4" data-i18n="jobs.japan.desc">
                  {t('jobs.japan.desc')}
                </p>
                <Link href="/jobs?country=japan">
                  <Button className="w-full" data-i18n="jobs.apply">
                    {t('jobs.apply')}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-8xl">🇭🇷</span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl" data-i18n="jobs.croatia">{t('jobs.croatia')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4" data-i18n="jobs.croatia.desc">
                  {t('jobs.croatia.desc')}
                </p>
                <Link href="/jobs?country=croatia">
                  <Button className="w-full" data-i18n="jobs.apply">
                    {t('jobs.apply')}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-600 via-white to-red-600 flex items-center justify-center">
                <span className="text-8xl">🇷🇺</span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl" data-i18n="jobs.russia">{t('jobs.russia')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4" data-i18n="jobs.russia.desc">
                  {t('jobs.russia.desc')}
                </p>
                <Link href="/jobs?country=russia">
                  <Button className="w-full" data-i18n="jobs.apply">
                    {t('jobs.apply')}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-8xl">🇮🇱</span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl" data-i18n="jobs.israel">{t('jobs.israel')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4" data-i18n="jobs.israel.desc">
                  {t('jobs.israel.desc')}
                </p>
                <Link href="/jobs?country=israel">
                  <Button className="w-full" data-i18n="jobs.apply">
                    {t('jobs.apply')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Globe className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6" data-i18n="mission.title">
              {t('mission.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed" data-i18n="mission.text">
              {t('mission.text')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-i18n="cta.ready">
            {t('cta.ready')}
          </h2>
          <p className="text-xl mb-8 text-blue-100" data-i18n="cta.consultation">
            {t('cta.consultation')}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8" data-i18n="contact.form.title">
              {t('contact.form.title')}
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}