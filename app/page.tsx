'use client'

import ProfileCard from '@/components/ProfileCard'
import LocalTimeWidget from '@/components/LocalTimeWidget'
import SocialLinks from '@/components/SocialLinks'
import FavoriteTools from '@/components/FavoriteTools'
import SpotifyNowPlaying from '@/components/SpotifyNowPlaying'
import ProjectsGrid from '@/components/ProjectsGrid'
import ContactCard from '@/components/ContactCard'
import ExperiencePanel from '@/components/ExperiencePanel'
import Goals from '@/components/Goals'
import AchievementsMetrics from '@/components/AchievementsMetrics'
import Certificates from '@/components/Certificates'
import AsciiArtPanel from '@/components/AsciiArtPanel'
import FlowerArtPanel from '@/components/FlowerArtPanel'

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6">
          {/* Mobile Order: ProfileCard, LocalTimeWidget, ExperiencePanel, ProjectsGrid, then rest */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Mobile shows first */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <ProfileCard />
              <LocalTimeWidget />
              {/* Experience and Projects - shown on mobile in left column */}
              <div className="lg:hidden space-y-6">
                <ExperiencePanel />
                <ProjectsGrid />
              </div>
              <SocialLinks />
              {/* ContactCard - only visible on mobile, between SocialLinks and FavoriteTools */}
              <div className="lg:hidden">
                <ContactCard />
              </div>
              <FavoriteTools />
              <div className="hidden lg:block">
                <SpotifyNowPlaying />
              </div>
              <div className="hidden lg:flex flex-1">
                <FlowerArtPanel />
              </div>
            </div>

            {/* Right Column - Mobile shows after left column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Experience and Projects - shown on desktop in right column */}
              <div className="hidden lg:block space-y-6">
                <ExperiencePanel />
                <ProjectsGrid />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ContactCard - only visible on desktop */}
                <div className="hidden lg:block">
                  <ContactCard />
                </div>
                <Goals />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch flex-1">
                <AchievementsMetrics />
                <div className="flex flex-col gap-3">
                  <Certificates />
                  {/* SpotifyNowPlaying - only visible on mobile, between Certificates and AsciiArtPanel */}
                  <div className="lg:hidden space-y-3">
                    <SpotifyNowPlaying />
                    <FlowerArtPanel />
                  </div>
                  <AsciiArtPanel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
