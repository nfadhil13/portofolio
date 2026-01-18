import { ExternalLink } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

interface AppLink {
  name: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
}

interface ProjectCardProps {
  name: string;
  description: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  apps?: AppLink[];
  isPrivate?: boolean;
  contributions: string[];
}

export function ProjectCard({
  name,
  description,
  playStoreUrl,
  appStoreUrl,
  apps,
  isPrivate,
  contributions,
}: ProjectCardProps) {
  // Use apps array if provided, otherwise fall back to single playStoreUrl/appStoreUrl
  const hasMultipleApps = apps && apps.length > 0;

  return (
    <Card className="p-6 border-2 border-black bg-white hover:shadow-lg transition-shadow">
      <div className="space-y-4">
        {/* App Name */}
        <div>
          <h3 className="text-2xl font-bold text-black">{name}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          {isPrivate ? (
            <span className="text-sm text-gray-500 italic">Private / NDA</span>
          ) : hasMultipleApps ? (
            <div className="space-y-2">
              {apps.map((app, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-gray-700">{app.name}</span>
                  <div className="flex flex-wrap gap-3">
                    {app.playStoreUrl && (
                      <a
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-black underline hover:text-gray-600 flex items-center gap-1"
                      >
                        Play Store
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {app.appStoreUrl && (
                      <a
                        href={app.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-black underline hover:text-gray-600 flex items-center gap-1"
                      >
                        App Store
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-3">
              {playStoreUrl && (
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-black underline hover:text-gray-600 flex items-center gap-1"
                >
                  Play Store
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {appStoreUrl && (
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-black underline hover:text-gray-600 flex items-center gap-1"
                >
                  App Store
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Contributions */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Contributions:</h4>
          <ul className="space-y-1">
            {contributions.map((contribution, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="mr-2 text-black">•</span>
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
