"use client";

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Clock, Award, FileCheck, Globe } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: Clock,
      title: t('about.advantage1'),
      description: t('about.advantage1.desc'),
    },
    {
      icon: Users,
      title: t('about.advantage2'),
      description: t('about.advantage2.desc'),
    },
    {
      icon: Shield,
      title: t('about.advantage3'),
      description: t('about.advantage3.desc'),
    },
    {
      icon: Award,
      title: t('about.advantage4'),
      description: t('about.advantage4.desc'),
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
              {t('about.title')}
            </h1>
            <p className="text-xl text-blue-100">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* License Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <FileCheck className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-2xl">{t('about.license')}</CardTitle>
                </div>
                <Badge className="w-fit bg-green-100 text-green-800 hover:bg-green-100">
                  {t('about.license.official')}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700">
                  {t('about.licenseText')}
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{t('about.license.number')}:</p>
                      <p className="font-semibold text-gray-800">№12345-2020-UZ</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{t('about.license.issued')}:</p>
                      <p className="font-semibold text-gray-800">01.01.2020</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{t('about.license.issuer')}:</p>
                      <p className="font-semibold text-gray-800">{t('about.license.issuerName')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{t('about.license.validity')}:</p>
                      <p className="font-semibold text-gray-800">{t('about.license.unlimited')}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('about.advantages.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{advantage.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Globe className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>{t('about.legal')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {t('about.legalText')}
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-600">
                      <strong>ИНН:</strong> 311027133
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>ОКЭД:</strong> 78100
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>{t('contact.address')}:</strong> {t('contact.address')}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>{t('about.security')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-gray-700">{t('about.security.contracts')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-gray-700">{t('about.security.insurance')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-gray-700">{t('about.security.payment')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-gray-700">{t('about.security.legal')}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('mission.title')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('mission.text')}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}