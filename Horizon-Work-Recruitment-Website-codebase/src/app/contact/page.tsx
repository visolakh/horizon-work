"use client";

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      const response = await fetch('/.netlify/functions/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.name,
          phone: formData.phone,
          destination_country: formData.country,
          comment: formData.message
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
      setFormData({ name: '', phone: '', country: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      details: [
        '+998 94 077 91 24',
      ],
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Mail,
      title: t('contact.email'),
      details: [
        'gorizonwork@gmail.com',
      ],
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      details: [
        t('contact.address.value'),
      ],
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      details: [
        t('contact.hours.weekday'),
        t('contact.hours.weekend'),
      ],
      color: 'bg-orange-100 text-orange-600',
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
              {t('contact.title')}
            </h1>
            <p className="text-xl text-blue-100">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center mb-3`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm break-words">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {t('contact.form.title')}
              </h2>
              
              {isSubmitted ? (
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="py-12 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">✓</span>
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      {t('contact.form.success')}
                    </h3>
                    <p className="text-green-700">
                      {t('contact.form.success.text')}
                    </p>
                  </CardContent>
                </Card>
              ) : isError ? (
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="py-12 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">✕</span>
                    </div>
                    <h3 className="text-xl font-semibold text-red-800 mb-2">
                      {t('contact.form.error')}
                    </h3>
                    <p className="text-red-700">
                      {t('contact.form.error.text')}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">{t('contact.form.name')}</Label>
                        <Input 
                          id="name" 
                          required 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Иван Иванов" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          required 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+998 94 077 91 24" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="country">{t('contact.form.country')}</Label>
                        <Select 
                          required
                          value={formData.country}
                          onValueChange={(value) => setFormData({...formData, country: value})}
                        >
                          <SelectTrigger id="country">
                            <SelectValue placeholder={t('jobs.all')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="poland">{t('jobs.poland')}</SelectItem>
                            <SelectItem value="korea">{t('jobs.korea')}</SelectItem>
                            <SelectItem value="japan">{t('jobs.japan')}</SelectItem>
                            <SelectItem value="croatia">{t('jobs.croatia')}</SelectItem>
                            <SelectItem value="russia">{t('jobs.russia')}</SelectItem>
                            <SelectItem value="israel">{t('jobs.israel')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="message">{t('contact.form.message')}</Label>
                        <Textarea 
                          id="message" 
                          rows={5} 
                          required 
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="Напишите ваше сообщение..."
                        />
                      </div>
                      <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                        <Send className="w-4 h-4" />
                        {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Наше местоположение
              </h2>
              <Card className="overflow-hidden h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.7537481374647!2d69.27532631542757!3d41.31151627927122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Интеграция с Mehnat.uz</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  HORIZON WORK интегрирован с государственным порталом Mehnat.uz для обеспечения 
                  максимальной прозрачности и легальности процесса трудоустройства.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Преимущества интеграции:</strong>
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Официальная регистрация всех трудовых контрактов</li>
                    <li>• Защита прав работников на государственном уровне</li>
                    <li>• Доступ к базе проверенных работодателей</li>
                    <li>• Гарантированная легальность трудоустройства</li>
                  </ul>
                </div>
                <a 
                  href="https://mehnat.uz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="outline">
                    Перейти на Mehnat.uz →
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}