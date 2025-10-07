"use client";

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, DollarSign, Clock, Briefcase } from 'lucide-react';

export default function JobsPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>('all');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobs = [
    {
      id: 1,
      country: 'poland',
      flag: '🇵🇱',
      title: t('jobs.job1.title'),
      company: t('jobs.job1.company'),
      location: t('jobs.job1.location'),
      salary: '$1,200 - $1,500',
      duration: t('jobs.duration.12months'),
      type: t('jobs.type.fulltime'),
      description: t('jobs.job1.desc'),
    },
    {
      id: 2,
      country: 'poland',
      flag: '🇵🇱',
      title: t('jobs.job2.title'),
      company: t('jobs.job2.company'),
      location: t('jobs.job2.location'),
      salary: '$1,100 - $1,400',
      duration: t('jobs.duration.24months'),
      type: t('jobs.type.fulltime'),
      description: t('jobs.job2.desc'),
    },
    {
      id: 3,
      country: 'poland',
      flag: '🇵🇱',
      title: t('jobs.job3.title'),
      company: t('jobs.job3.company'),
      location: t('jobs.job3.location'),
      salary: '$1,300 - $1,700',
      duration: t('jobs.duration.18months'),
      type: t('jobs.type.fulltime'),
      description: t('jobs.job3.desc'),
    },
    {
      id: 4,
      country: 'korea',
      flag: '🇰🇷',
      title: t('jobs.job4.title'),
      company: t('jobs.job4.company'),
      location: t('jobs.job4.location'),
      salary: '$2,000 - $2,500',
      duration: t('jobs.duration.36months'),
      type: t('jobs.type.fulltime'),
      description: t('jobs.job4.desc'),
    },
    {
      id: 5,
      country: 'korea',
      flag: '🇰🇷',
      title: t('jobs.job5.title'),
      company: t('jobs.job5.company'),
      location: t('jobs.job5.location'),
      salary: '$1,800 - $2,200',
      duration: t('jobs.duration.24months'),
      type: t('jobs.type.fulltime'),
      description: t('jobs.job5.desc'),
    },
    {
      id: 6,
      country: 'korea',
      flag: '🇰🇷',
      title: t('jobs.job6.title'),
      company: t('jobs.job6.company'),
      location: t('jobs.job6.location'),
      salary: '$1,500 - $1,800',
      duration: t('jobs.duration.12months'),
      type: t('jobs.type.fulltime'),
      description: t('jobs.job6.desc'),
    },
    {
      id: 7,
      country: 'japan',
      flag: '🇯🇵',
      title: t('jobs.job7.title'),
      company: t('jobs.job7.company'),
      location: t('jobs.job7.location'),
      salary: '$2,200 - $2,800',
      duration: t('jobs.duration.24months'),
      type: t('jobs.type.fulltime'),
      description: t('jobs.job7.desc'),
    },
    {
      id: 8,
      country: 'japan',
      flag: '🇯🇵',
      title: t('jobs.job8.title'),
      company: t('jobs.job8.company'),
      location: t('jobs.job8.location'),
      salary: '$2,000 - $2,600',
      duration: t('jobs.duration.36months'),
      type: t('jobs.type.fulltime'),
      description: t('jobs.job8.desc'),
    },
    {
      id: 9,
      country: 'japan',
      flag: '🇯🇵',
      title: t('jobs.job9.title'),
      company: t('jobs.job9.company'),
      location: t('jobs.job9.location'),
      salary: '$2,500 - $3,000',
      duration: t('jobs.duration.36months'),
      type: t('jobs.type.fulltime'),
      description: t('jobs.job9.desc'),
    },
    {
      id: 10,
      country: 'croatia',
      flag: '🇭🇷',
      title: t('jobs.job10.title'),
      company: t('jobs.job10.company'),
      location: t('jobs.job10.location'),
      salary: '$1,000 - $1,300',
      duration: t('jobs.duration.12months'),
      type: t('jobs.type.fulltime'),
      description: t('jobs.job10.desc'),
    },
    {
      id: 11,
      country: 'croatia',
      flag: '🇭🇷',
      title: t('jobs.job11.title'),
      company: t('jobs.job11.company'),
      location: t('jobs.job11.location'),
      salary: '$1,100 - $1,400',
      duration: t('jobs.duration.18months'),
      type: t('jobs.type.fulltime'),
      description: t('jobs.job11.desc'),
    },
    {
      id: 12,
      country: 'croatia',
      flag: '🇭🇷',
      title: t('jobs.job12.title'),
      company: t('jobs.job12.company'),
      location: t('jobs.job12.location'),
      salary: '$900 - $1,200',
      duration: t('jobs.duration.12months'),
      type: t('jobs.type.fulltime'),
      description: t('jobs.job12.desc'),
    },
    {
      id: 13,
      country: 'russia',
      flag: '🇷🇺',
      title: t('jobs.job13.title'),
      company: t('jobs.job13.company'),
      location: t('jobs.job13.location'),
      salary: '$1,500 - $2,000',
      duration: t('jobs.duration.24months'),
      type: t('jobs.type.fulltime'),
      description: t('jobs.job13.desc'),
    },
    {
      id: 14,
      country: 'russia',
      flag: '🇷🇺',
      title: t('jobs.job14.title'),
      company: t('jobs.job14.company'),
      location: t('jobs.job14.location'),
      salary: '$1,400 - $1,800',
      duration: t('jobs.duration.24months'),
      type: t('jobs.type.fulltime'),
      description: t('jobs.job14.desc'),
    },
    {
      id: 15,
      country: 'russia',
      flag: '🇷🇺',
      title: t('jobs.job15.title'),
      company: t('jobs.job15.company'),
      location: t('jobs.job15.location'),
      salary: '$1,300 - $1,700',
      duration: t('jobs.duration.18months'),
      type: t('jobs.type.fulltime'),
      description: t('jobs.job15.desc'),
    },
    {
      id: 16,
      country: 'israel',
      flag: '🇮🇱',
      title: t('jobs.job16.title'),
      company: t('jobs.job16.company'),
      location: t('jobs.job16.location'),
      salary: '$1,800 - $2,200',
      duration: t('jobs.duration.24months'),
      type: t('jobs.type.fulltime'),
      description: t('jobs.job16.desc'),
    },
    {
      id: 17,
      country: 'israel',
      flag: '🇮🇱',
      title: t('jobs.job17.title'),
      company: t('jobs.job17.company'),
      location: t('jobs.job17.location'),
      salary: '$2,000 - $2,500',
      duration: t('jobs.duration.36months'),
      type: t('jobs.type.fulltime'),
      description: t('jobs.job17.desc'),
    },
    {
      id: 18,
      country: 'israel',
      flag: '🇮🇱',
      title: t('jobs.job18.title'),
      company: t('jobs.job18.company'),
      location: t('jobs.job18.location'),
      salary: '$1,600 - $2,000',
      duration: t('jobs.duration.18months'),
      type: t('jobs.type.fulltime'),
      description: t('jobs.job18.desc'),
    },
  ];

  const filteredJobs = filter === 'all' ? jobs : jobs.filter(job => job.country === filter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-i18n="jobs.title">
              {t('jobs.title')}
            </h1>
            <p className="text-xl text-blue-100" data-i18n="jobs.subtitle">
              {t('jobs.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              data-i18n="jobs.all"
            >
              {t('jobs.all')}
            </Button>
            <Button
              variant={filter === 'poland' ? 'default' : 'outline'}
              onClick={() => setFilter('poland')}
              data-i18n="jobs.poland"
            >
              🇵🇱 {t('jobs.poland')}
            </Button>
            <Button
              variant={filter === 'korea' ? 'default' : 'outline'}
              onClick={() => setFilter('korea')}
              data-i18n="jobs.korea"
            >
              🇰🇷 {t('jobs.korea')}
            </Button>
            <Button
              variant={filter === 'japan' ? 'default' : 'outline'}
              onClick={() => setFilter('japan')}
              data-i18n="jobs.japan"
            >
              🇯🇵 {t('jobs.japan')}
            </Button>
            <Button
              variant={filter === 'croatia' ? 'default' : 'outline'}
              onClick={() => setFilter('croatia')}
              data-i18n="jobs.croatia"
            >
              🇭🇷 {t('jobs.croatia')}
            </Button>
            <Button
              variant={filter === 'russia' ? 'default' : 'outline'}
              onClick={() => setFilter('russia')}
              data-i18n="jobs.russia"
            >
              🇷🇺 {t('jobs.russia')}
            </Button>
            <Button
              variant={filter === 'israel' ? 'default' : 'outline'}
              onClick={() => setFilter('israel')}
              data-i18n="jobs.israel"
            >
              🇮🇱 {t('jobs.israel')}
            </Button>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-4xl">{job.flag}</span>
                      <Badge>{job.type}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <p className="text-gray-600">{job.company}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">{job.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="w-4 h-4" />
                      <span data-i18n="jobs.salary">{t('jobs.salary')}: {job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span data-i18n="jobs.duration">{t('jobs.duration')}: {job.duration}</span>
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full" data-i18n="jobs.apply">
                        {t('jobs.apply')}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle data-i18n="application.title">{t('application.title')}</DialogTitle>
                        <DialogDescription>
                          {job.title} - {job.company}
                        </DialogDescription>
                      </DialogHeader>
                      
                      {isSubmitted ? (
                        <div className="py-8 text-center">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">✓</span>
                          </div>
                          <p className="text-lg font-semibold text-green-600" data-i18n="application.success">
                            {t('application.success')}
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <Label htmlFor="name" data-i18n="application.name">{t('application.name')}</Label>
                            <Input id="name" required />
                          </div>
                          <div>
                            <Label htmlFor="phone" data-i18n="application.phone">{t('application.phone')}</Label>
                            <Input id="phone" type="tel" required />
                          </div>
                          <div>
                            <Label htmlFor="email" data-i18n="application.email">{t('application.email')}</Label>
                            <Input id="email" type="email" required />
                          </div>
                          <div>
                            <Label htmlFor="age" data-i18n="application.age">{t('application.age')}</Label>
                            <Input id="age" type="number" required />
                          </div>
                          <div>
                            <Label htmlFor="experience" data-i18n="application.experience">{t('application.experience')}</Label>
                            <Textarea id="experience" rows={3} />
                          </div>
                          <Button type="submit" className="w-full" data-i18n="application.submit">
                            {t('application.submit')}
                          </Button>
                        </form>
                      )}
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}