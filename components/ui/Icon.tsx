import {
  MagnifyingGlassIcon,
  CogIcon,
  RocketLaunchIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline"

export interface IconProps {
  name: string
  className?: string
  "aria-hidden"?: boolean
}

const iconMap = {
  search: MagnifyingGlassIcon,
  cog: CogIcon,
  rocket: RocketLaunchIcon,
  // Fallback icon for missing mappings
  default: QuestionMarkCircleIcon,
}

export function Icon({ name, className = "w-6 h-6", ...props }: IconProps) {
  const IconComponent = iconMap[name as keyof typeof iconMap] || iconMap.default
  
  return <IconComponent className={className} {...props} />
}