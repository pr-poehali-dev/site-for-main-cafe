import {
  Home,
  Users,
  Play,
  Download,
  ExternalLink,
  Server,
  MessageCircle,
  Send,
  Youtube,
  CircleAlert,
} from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Home,
  Users,
  Play,
  Download,
  ExternalLink,
  Server,
  MessageCircle,
  Send,
  Youtube,
  CircleAlert,
};

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent = iconMap[name] || iconMap[fallback];

  if (!IconComponent) {
    return <div className={`w-${size / 4} h-${size / 4} ${className}`} />;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
